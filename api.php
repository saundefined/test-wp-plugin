<?php
/**
 * Plugin Name: Awesome API
 * Plugin URI: https://github.com/saundefined/test-wp-plugin
 * Description: Awesome API plugin
 * Version: 1.0
 * Author: Panteleev Sergey
 * Author URI: https://s-panteleev.ru
 **/

use Api\Plugin\Application;

require_once __DIR__ . '/classes/Application.php';
require_once __DIR__ . '/classes/Event.php';
require_once __DIR__ . '/classes/FetchApi.php';
require_once __DIR__ . '/classes/Product.php';

register_activation_hook(__FILE__, ['\\Api\\Plugin\\Event', 'plugin_install']);
register_deactivation_hook(__FILE__, ['\\Api\\Plugin\\Event', 'plugin_uninstall']);

$app = new Application();
$app->run();