<?php
declare(strict_types=1);

namespace App\Document\Areabrick;

use \StarterkitAreasBundle\Document\Areabrick\AbstractBaseAreabrick as AbstractStarterBaseAreabrick;

abstract class AbstractBaseAreabrick extends AbstractStarterBaseAreabrick
{
    /**
     * @inheritDoc
     */
    public function getTemplateLocation()
    {
        return static::TEMPLATE_LOCATION_GLOBAL;
    }
}
