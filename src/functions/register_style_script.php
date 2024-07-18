<?php

/**
 * CSS, JavaScriptの登録
 *
 **/

// CSSとjavascriptの表示を制御 wp_headとwp_footerに挿入。第5引数がtrueの場合はwp_footerに
if (!is_admin()) {
  add_action('wp_print_styles', 'add_stylesheet');
  add_action('wp_print_scripts', 'add_script');

  // CSSを定義
  function register_style()
  {
    wp_register_style('style', get_stylesheet_uri(), array(), filemtime(get_theme_file_path('./style.css')), 'all');
  }

  // CSSを追加
  function add_stylesheet()
  {
    register_style();
    wp_enqueue_style('style');

    // トップページのみCSSを適用する場合
    if (is_front_page()) {
      // wp_enqueue_style('〇〇');
    }
  }

  // JSを定義
  function register_script()
  {
    wp_register_script('main', get_stylesheet_directory_uri() . '/assets/js/main.js', array(), filemtime(get_theme_file_path('./assets/js/main.js')), true);
    // wp_register_script('yubinbango', get_stylesheet_directory_uri().'/assets/js/plugins/yubinbango.js', array(), '', false);
  }

  // JSを追加
  function add_script()
  {
    // wp_head内のjQuery除去
    // プラグインが動作不良を起こした場合、この記述は削除する
    // wp_deregister_script('jquery');

    // 定義したscriptの追加
    register_script();
    wp_enqueue_script('main');

    /* コンタクトページのみyubinbango.js読み込み
    if(is_page_template('pages/page-contact.php')) {
      wp_enqueue_script('yubinbango');
    }
    */
  }
}
