const mix = require("laravel-mix");
const path = require("path");

const autoprefixer = require("autoprefixer");
const cssMqpacker = require("css-mqpacker");
const cpx = require("cpx");

const sourcesPath = path.resolve("src");
const themeName = process.env.THEME_NAME;
let outputPath = `public/wp-content/themes/${themeName}`;

if (process.env.WORDPRESS_DIR) {
  outputPath = `public/${process.env.WORDPRESS_DIR}/wp-content/themes/${themeName}`;
}

if (mix.inProduction()) {
  outputPath = "dist";
}

mix.autoload({
  jquery: ["$", "jQuery"],
});

const copyFiles = `${sourcesPath}/**/*.{html,php,css,png,jpg,gif,svg,ico,woff,woff2,eot,ttf,txt,md,pdf,webm,mp4}`;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  cpx.watch(copyFiles, outputPath);
} else {
  cpx.copy(copyFiles, outputPath);
}

mix
  .setPublicPath(outputPath)
  .sass(`${sourcesPath}/assets/scss/style.scss`, `${outputPath}`)
  .js(`${sourcesPath}/assets/js/main.js`, `${outputPath}/assets/js`)
  .copy(
    `${sourcesPath}/assets/js/plugins/**/*.js`,
    `${outputPath}/assets/js/plugins`,
  );

mix.options({
  cache: true,
  keepalive: true,
  processCssUrls: false,
  postCss: [
    autoprefixer,
    cssMqpacker({
      sort: true,
    }),
  ],
  clearConsole: true,
});

if (mix.inProduction()) {
  mix.options({
    cache: false,
    postCss: [
      require("csswring")({
        removeAllComments: false,
      }),
    ],
  });
}

// エラーの詳細を表示
mix.webpackConfig({
  stats: {
    children: true,
  },
});
