const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.jsx", "public/js").react().sourceMaps().version();

mix.alias({
    "@": path.join(__dirname, "resources/js"),
});

mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve("vendor/tightenco/ziggy/dist"),
        },
    },
});
