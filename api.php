<?php
/**
 * Plugin Name: Awesome API
 * Plugin URI: https://github.com/saundefined/test-wp-plugin
 * Description: Awesome API plugin
 * Version: 1.0
 * Author: Panteleev Sergey
 * Author URI: https://s-panteleev.ru
 **/

require_once __DIR__ . '/classes/FetchApi.php';
require_once __DIR__ . '/classes/Product.php';

// БЛОК
// Сервер-сайд рендеринг
function api_fetch_data_block_render($attributes) {
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

// Регистрация обработчиков
// подключение рендеринга, css, js
function api_fetch_data_script_register() {
    wp_register_script(
        'api-fetch-data-js',
        plugins_url('build/index.js', __FILE__),
        ['wp-element', 'wp-blocks', 'wp-components', 'wp-api']
    );

    wp_register_style(
        'api-fetch-data-css',
        plugins_url('build/style.css', __FILE__)
    );

    register_block_type('api/fetch-data', [
        'render_callback' => 'api_fetch_data_block_render',
    ]);

    wp_enqueue_script('api-fetch-data-js');
    wp_enqueue_style('api-fetch-data-css');
}

add_action('init', 'api_fetch_data_script_register');

// Пункт меню и страница настроек
function api_fetch_data_register_settings() {
    register_setting('api-fetch-data', 'api_fetch_data_api_url');
    register_setting('api-fetch-data', 'api_fetch_data_api_key');
}

function api_fetch_data_create_menu() {
    add_menu_page('Awesome API', 'Awesome API Settings', 'administrator', __FILE__,
        'api_fetch_data_settings_page', 'dashicons-wordpress-alt');

    add_action('admin_init', 'api_fetch_data_register_settings');
}

function api_fetch_data_settings_page() { ?>
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

add_action('admin_menu', 'api_fetch_data_create_menu');

function api_fetch_data_categories(WP_REST_Request $request) {
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

function api_fetch_data_products(WP_REST_Request $request) {
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

function api_fetch_data_sync_product(WP_REST_Request $request) {
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

add_action('rest_api_init', function () {
    register_rest_route('api', 'categories', [
        'methods' => 'GET',
        'callback' => 'api_fetch_data_categories',
    ]);

    register_rest_route('api', 'category/(?P<categoryId>\d+)', [
        'methods' => 'GET',
        'callback' => 'api_fetch_data_products',
    ]);

    register_rest_route('api', 'sync/(?P<categoryId>\d+)/(?P<productId>\d+)', [
        'methods' => 'GET',
        'callback' => 'api_fetch_data_sync_product',
    ]);
});

// Хуки
function api_fetch_data_post_meta($post_ID, $post_after, $post_before) {
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

add_action('post_updated', 'api_fetch_data_post_meta', 10, 3);

// Установка/удаление плагина
function api_fetch_data_install() {
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

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

function api_fetch_data_uninstall() {
    global $wpdb;

    $table_name = $wpdb->prefix . 'api_fetch_data';

    $sql = 'DROP TABLE IF EXISTS ' . $table_name . ';';

    $wpdb->query($sql);
}

register_activation_hook(__FILE__, 'api_fetch_data_install');
register_deactivation_hook(__FILE__, 'api_fetch_data_uninstall');