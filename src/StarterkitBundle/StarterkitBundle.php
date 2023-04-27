<?php

namespace StarterkitBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use StarterkitBundle\Tools\Install;


class StarterkitBundle extends AbstractPimcoreBundle
{
    public const PACKAGE_NAME = 'serge0design/starterkit';

    public function getInstaller(): Install
    {
        return $this->container->get(Install::class);
    }

    protected function getComposerPackageName(): string
    {
        return self::PACKAGE_NAME;
    }

    public function getDescription()
    {
        return 'This Pimcore StarterkitBundle copies some recommended files to setup a pimcore boilerplate template.';
    }

    public function getVersion()
    {
        return '1.0.0';
    }
}
