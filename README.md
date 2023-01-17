# pimcore-starterkit

This Pimcore StarterkitBundle copies some recommended files to setup a pimcore boilerplate template.
This Bundle is mainly created for myself and not tested for any other use.

So just don't use it unless you have first
installed a brand new pimcore sceleton environment.

This Bundle is still a development version and not recommended for any other use.

### Installation

```json
"require": {
"serge0design/pimcore-starterkit": "^1.0"
}
```
or:

- Execute: `composer require serge0design/pimcore-starterkit -w`

- Enable Bundles:

```
php bin/console pimcore:bundle:enable StarterkitBundle
php bin/console pimcore:bundle:enable StarterkitAreasBundle
php bin/console pimcore:bundle:enable CustomEditablesBundle
```

Enable the FormBuilderBundle:
`php bin/console pimcore:bundle:enable FormBuilderBundle`

- Install Bundles:

```
php bin/console pimcore:bundle:install StarterkitBundle
php bin/console pimcore:bundle:install StarterkitAreasBundle
```

Install the FormBuilderBundle:
`php bin/console pimcore:bundle:install FormBuilderBundle`

### Links

https://github.com/symfony/webpack-encore-bundle

### Install the node_modules folder and start encore

- Execute: $ `npm install`