const Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('build/')

    .copyFiles([
            {from: './assets/ckeditor/', to: 'ckeditor/[path][name].[ext]'},
            {from: './assets/img', to: 'img/[path][name].[ext]'},
            {from: './node_modules/bootstrap-icons', pattern: /bootstrap-icons\.svg$/, to: '../[path][name].[ext]'}
        ]
    )

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    .configureFilenames({
        js: '[name].js?[contenthash:8]',
        css: '[name].css?[contenthash:8]'
    })

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()
    .autoProvidejQuery();

// build the first configuration
const starterkitBundle = Encore.getWebpackConfig();

// Set a unique name for the config (needed later!)
starterkitBundle.name = 'starterkitBundle';

// // reset Encore to build the second config
// Encore.reset();
// // define the second configuration
// Encore
//     .setOutputPath('bundles/..)
//     .setPublicPath('/bundles/..')
//     .addStyleEntry('admin', './assets/css/admin.scss')
//     .addStyleEntry('editmode', './assets/css/editmode.scss')
//     .enableSingleRuntimeChunk()
//     .enableSassLoader()
//     .enableSourceMaps(!Encore.isProduction())
// ;
// // build the second configuration
// const customeBundle = Encore.getWebpackConfig();
// // Set a unique name for the config (needed later!)
// customBundle.name = 'customBundle';

// export the final configuration as an array of multiple configurations
module.exports = [starterkitBundle]; // add stearterkitBundle ", customBundle"