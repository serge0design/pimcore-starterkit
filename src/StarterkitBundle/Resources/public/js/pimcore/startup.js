pimcore.registerNS("pimcore.plugin.StarterkitBundle");

pimcore.plugin.StarterkitBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.StarterkitBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },
});

var StarterkitBundlePlugin = new pimcore.plugin.StarterkitBundle();
