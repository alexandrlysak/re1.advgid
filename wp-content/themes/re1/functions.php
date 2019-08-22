<?php
/**
 * Include CSS
 */
function includeCss()
{
    wp_register_style('jquery-ui-css', get_stylesheet_directory_uri() . '/assets/css/jquery-ui.css', [], '1.9.1', 'screen');
    wp_register_style('jquery-fancybox-css', get_stylesheet_directory_uri() . '/assets/css/jquery.fancybox.css', [], '2.1.3', 'screen');
    wp_register_style('in-css', get_stylesheet_directory_uri() . '/assets/css/in.css', [], '1.0', 'screen');
    wp_register_style('style-css', get_stylesheet_directory_uri() . '/assets/css/style.css', [], '1.0', 'screen');
    wp_register_style('custom-css', get_stylesheet_directory_uri() . '/assets/css/custom.css', [], '1.0', 'screen');

    wp_enqueue_style( 'jquery-ui-css');
    wp_enqueue_style('jquery-fancybox-css');
    wp_enqueue_style( 'in-css');
    wp_enqueue_style('style-css');
    wp_enqueue_style('custom-css');
}
add_action('wp_enqueue_scripts', 'includeCss');

/**
 * include JS
 */
function includeJs()
{
    wp_register_script( 'jquery-js', get_stylesheet_directory_uri() . '/assets/js/jquery.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-ui-min-js', get_stylesheet_directory_uri() . '/assets/js/jquery-ui.min.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-checkbox-js', get_stylesheet_directory_uri() . '/assets/js/jquery.checkbox.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-ui-select-menu-js', get_stylesheet_directory_uri() . '/assets/js/jquery.ui.selectmenu.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-fancybox-js', get_stylesheet_directory_uri() . '/assets/js/jquery.fancybox.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-placeholder-js', get_stylesheet_directory_uri() . '/assets/js/jquery.placeholder.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-maskedinput-js', get_stylesheet_directory_uri() . '/assets/js/jquery.maskedinput.js', [], '1.8.3', TRUE);
    wp_register_script( 'flashdetect-min-js', get_stylesheet_directory_uri() . '/assets/js/flashdetect.min.js', [], '1.8.3', TRUE);
    wp_register_script( 'jquery-scrollTo-min-js', get_stylesheet_directory_uri() . '/assets/js/jquery.scrollTo.min.js"', [], '1.8.3', TRUE);
    wp_register_script( 'main-js', get_stylesheet_directory_uri() . '/assets/js/main.js', [], '1.8.3', TRUE);
    wp_register_script( 'custom-js', get_stylesheet_directory_uri() . '/assets/js/custom.js', [], '1.8.3', TRUE);

    wp_enqueue_script( 'jquery-js');
    wp_enqueue_script( 'jquery-ui-min-js');
    wp_enqueue_script( 'jquery-checkbox-js');
    wp_enqueue_script( 'jquery-ui-select-menu-js');
    wp_enqueue_script( 'jquery-fancybox-js');
    wp_enqueue_script( 'jquery-placeholder-js');
    wp_enqueue_script( 'jquery-maskedinput-js');
    wp_enqueue_script( 'flashdetect-min-js');
    wp_enqueue_script( 'jquery-scrollTo-min-js');
    wp_enqueue_script( 'main-js');
    wp_enqueue_script( 'custom-js');
}
add_action('wp_enqueue_scripts', 'includeJs');

/**
 * Remove type attr for css & js
 * @param $tag
 * @param $handle
 * @return string|string[]|null
 */
function removeTypeAttr($tag, $handle) {
    return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
}
add_filter('style_loader_tag', 'removeTypeAttr', 10, 2);
add_filter('script_loader_tag', 'removeTypeAttr', 10, 2);