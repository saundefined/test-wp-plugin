<?php

namespace Api\Plugin;

class Application
{
    public function run() {
        $this->registerCallbacks();
    }

    private function registerCallbacks() {
        add_action('init', ['\\Api\\Plugin\\Event', 'script_register']);

        add_action('admin_menu', ['\\Api\\Plugin\\Event', 'create_menu']);

        add_action('rest_api_init', function () {
            register_rest_route('api', 'categories', [
                'methods' => 'GET',
                'callback' => ['\\Api\\Plugin\\Event', 'fetch_categories'],
            ]);

            register_rest_route('api', 'category/(?P<categoryId>\d+)', [
                'methods' => 'GET',
                'callback' => ['\\Api\\Plugin\\Event', 'fetch_products'],
            ]);

            register_rest_route('api', 'sync/(?P<categoryId>\d+)/(?P<productId>\d+)', [
                'methods' => 'GET',
                'callback' => ['\\Api\\Plugin\\Event', 'sync_product'],
            ]);
        });

        add_action('pre_post_update', ['\\Api\\Plugin\\Event', 'check_block_count'], 10, 2);
        add_action('post_updated', ['\\Api\\Plugin\\Event', 'post_meta'], 10, 3);
    }
}