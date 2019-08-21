<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'seiken_re1' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'seiken_db' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'thies7De' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=F$MG9xCMYyD5{d0}!@{1KdG0xwVgLP6yiI/#YKvgc4tQL7r0NNQ2: L#kRoeG<W' );
define( 'SECURE_AUTH_KEY',  'j#eA{%bRv#wWIeOOP=tW^5@dkKeYj5Jx+-;<u&cT>GdbI;$9|z!(x18$Bq_n):Rx' );
define( 'LOGGED_IN_KEY',    '_*w(MofdGC$[0J3$0UV`V^wnXe22B|lYk[:Wy9MyM6#bW;>iH5G?wZ6t-A@$XR1k' );
define( 'NONCE_KEY',        'AMIL`; ;lN4x,eZK^w/9o.@?ia=2C`W7U} LIrvZ&*JHlwqf6?*7%N01n>_chMx4' );
define( 'AUTH_SALT',        'TDN@3,lEd4q,& ZQrE%lIGTT{wy76;r,qFH1dAIlw8^yqkOn88A.I*o<u2v6^r!f' );
define( 'SECURE_AUTH_SALT', '=f>^Z5oTeR~:{:o!{nO7>Nm~$E{s1KsEk0Zhy{zHsI}=@owR~6ZSOp!.4y3dUynY' );
define( 'LOGGED_IN_SALT',   'D!34;E/CBNB]zd-uE{R}KccGneC4a^YO0R_4AtC|u1hRt4wG3nSm]C~+3~Hla] 3' );
define( 'NONCE_SALT',       'M5t:|Ej4iZrkSK=]i[pa{NFO$IBXXaU,lL(5V D2fh.hm&7mrLsGvUI}lqI=1*T[' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
