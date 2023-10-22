<?php

namespace StarterkitBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use StarterkitBundle\Tools\Install;

class StarterkitBundle extends AbstractPimcoreBundle
{
    public const PACKAGE_NAME = 'serge0design/starterkit';

    final public function getInstaller(): Install
    {
        return $this->container->get(Install::class);
    }

    final protected function getComposerPackageName(): string
    {
        return self::PACKAGE_NAME;
    }
}
