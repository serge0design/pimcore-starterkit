pimcore.registerNS("pimcore.plugin.StarterkitBundle");

pimcore.plugin.StarterkitBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.StarterkitBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    // pimcoreReady: function (params, broker) {
    //     alert("StarterkitBundle ready!");
    // }
});

var StarterkitBundlePlugin = new pimcore.plugin.StarterkitBundle();
