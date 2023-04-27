# pimcore-starterkit

This Pimcore StarterkitBundle copies some recommended files to setup a pimcore boilerplate template and downloads the
following Bundles:
"WebpackEncoreBundle", "Dataprivacy Bundle for Pimcore", "Pimcore FormBuilder"
This Bundle is mainly created for my own usage and not tested for any other use.

So just don't use it unless you have first installed a brand new pimcore/skeleton environment.

This Bundle is still a development version and not recommended for any other use.

### Installation

```json
"require": {
  "serge0design/pimcore-starterkit": "^1.0"
}
```

or:

- Execute: `composer require serge0design/pimcore-starterkit`

- Enable Bundles:

```
php bin/console pimcore:bundle:enable StarterkitBundle
php bin/console pimcore:bundle:enable StarterkitAreasBundle
php bin/console pimcore:bundle:enable CustomEditablesBundle
```

Enable the FormBuilderBundle & pringuinDataprivacyBundle:
`php bin/console pimcore:bundle:enable FormBuilderBundle`
`php bin/console pimcore:bundle:enable pringuinDataprivacyBundle`

- Install Bundles:

```
php bin/console pimcore:bundle:install StarterkitBundle
php bin/console pimcore:bundle:install StarterkitAreasBundle
```

Install the FormBuilderBundle:
`php bin/console pimcore:bundle:install FormBuilderBundle`

### Links

https://github.com/symfony/webpack-encore-bundle
https://github.com/pringuin/dataprivacybundle

### Install the node_modules folder and start encore

- Execute: $ `npm install`