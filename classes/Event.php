<?php

namespace Api\Plugin;

use WP_REST_Request;
use WP_REST_Response;

class Event
{
    // добавление пункта меню
    public function create_menu() {
        add_menu_page('Awesome API', 'Awesome API Settings', 'administrator', __FILE__,
            ['\\Api\\Plugin\\Event', 'settings_page'], 'dashicons-wordpress-alt');

        add_action('admin_init', ['\\Api\\Plugin\\Event', 'register_settings']);
    }

    public function settings_page() { ?>
        <div class="wrap">
            <h2>Настройки плагина Awesome API</h2>

            <form method="post" action="options.php">
                <? settings_fields('api-fetch-data'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row">URL вашего API</th>
                        <td>
                            <input type="url" name="api_fetch_data_api_url"
                                   value="<?= get_option('api_fetch_data_api_url'); ?>"/>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Ключ API</th>
                        <td>
                            <input type="text" name="api_fetch_data_api_key"
                                   value="<?= get_option('api_fetch_data_api_key'); ?>"/>
                        </td>
                    </tr>
                </table>

                <p class="submit">
                    <input type="submit" class="button-primary" value="Сохранить изменения"/>
                </p>
            </form>
        </div>
        <?php
    }

    // рендер блока
    public function block_render($attributes) {
        $categoryId = $attributes['categoryId'];
        $productId = $attributes['productId'];

        if (!$categoryId || !$productId) {
            return '';
        }

        $product = new Product();
        $row = $product->get($categoryId, $productId);

        if (!$row->id) {
            return '';
        }

        return '<div class="product">
            <h3>' . htmlspecialchars_decode($row->title) . '</h3>
            <p class="product__description">' . htmlspecialchars_decode($row->description) . '</p>
            <p>Стоимость: ' . $row->price . ' руб.</p>
        </div>';
    }

    // подключение рендеринга, css, js
    public function script_register() {
        wp_register_script(
            'api-fetch-data-js',
            plugins_url('../build/index.js', __FILE__),
            ['wp-element', 'wp-blocks', 'wp-components', 'wp-api']
        );

        wp_register_style(
            'api-fetch-data-css',
            plugins_url('../build/style.css', __FILE__)
        );

        register_block_type('api/fetch-data', [
            'render_callback' => ['\\Api\\Plugin\\Event', 'block_render'],
        ]);

        wp_enqueue_script('api-fetch-data-js');
        wp_enqueue_style('api-fetch-data-css');
    }

    // Пункт меню и страница настроек
    public function register_settings() {
        register_setting('api-fetch-data', 'api_fetch_data_api_url');
        register_setting('api-fetch-data', 'api_fetch_data_api_key');
    }

    // API
    public function fetch_categories(WP_REST_Request $request) {
        $apiUrl = get_option('api_fetch_data_api_url');
        $apiKey = get_option('api_fetch_data_api_key');

        $apiRequest = new FetchApi($apiUrl, $apiKey);
        $data = $apiRequest->getCategories();

        $response = new WP_REST_Response($data);

        if (isset($data['error_code'])) {
            $response->set_status(400);
        }

        return $response;
    }

    public function fetch_products(WP_REST_Request $request) {
        $apiUrl = get_option('api_fetch_data_api_url');
        $apiKey = get_option('api_fetch_data_api_key');

        $categoryId = $request->get_param('categoryId');

        $apiRequest = new FetchApi($apiUrl, $apiKey);
        $data = $apiRequest->getProducts($categoryId);

        $response = new WP_REST_Response($data);

        if (isset($data['error_code'])) {
            $response->set_status(400);
        }

        return $response;
    }

    public function sync_product(WP_REST_Request $request) {
        $apiUrl = get_option('api_fetch_data_api_url');
        $apiKey = get_option('api_fetch_data_api_key');

        $categoryId = $request->get_param('categoryId');
        $productId = $request->get_param('productId');

        $apiRequest = new FetchApi($apiUrl, $apiKey);
        $data = $apiRequest->getProduct($categoryId, $productId);

        $data['categoryId'] = $categoryId;
        $data['productId'] = $productId;

        $product = new Product();
        $rowId = $product->createOrUpdate($data);

        $response = new WP_REST_Response(['rowId' => (int)$rowId]);
        return $response;
    }

    // Хуки на сохранение поста
    public function post_meta($post_ID, $post_after, $post_before) {
        $body = $post_after->post_content;
        $params = [];
        preg_match('/<!-- wp:api\/fetch-data {"categoryId":([0-9]+),"productId":([0-9]+)} \/-->/', $body, $params);

        if (isset($params[1]) && isset($params[2])) {
            $apiUrl = get_option('api_fetch_data_api_url');
            $apiKey = get_option('api_fetch_data_api_key');

            $categoryId = $params[1];
            $productId = $params[2];

            if ($apiUrl && $apiKey && $categoryId && $productId) {
                $product = new Product();
                $row = $product->get($categoryId, $productId);

                if ($row->id) {
                    update_post_meta($post_ID, 'title', htmlspecialchars($row->title));
                    update_post_meta($post_ID, 'description', htmlspecialchars($row->description));
                }
            }
        }
    }

    public function check_block_count($post_ID, $data) {
        $body = $data['post_content'];
        $params = [];
        preg_match_all('/<!-- wp:api\/fetch-data.*\/-->/', $body, $params);

        if (is_array($params[0]) && count($params[0]) > 1) {
            wp_die('На странице может быть только один блок Awesome API');
        }
    }

    // При установке и удалении плагина
    public function plugin_install() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'api_fetch_data';

        $sql = 'CREATE TABLE IF NOT EXISTS ' . $table_name . ' (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            title tinytext NULL,
            description text NULL,
            price DECIMAL(9, 2) NOT NULL,
            category_id mediumint(9) NOT NULL,
            product_id mediumint(9) NOT NULL,
            
            PRIMARY KEY  (id)
        );';

        $wpdb->query($sql);
    }

    public function plugin_uninstall() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'api_fetch_data';

        $sql = 'DROP TABLE IF EXISTS ' . $table_name . ';';

        $wpdb->query($sql);
    }

}