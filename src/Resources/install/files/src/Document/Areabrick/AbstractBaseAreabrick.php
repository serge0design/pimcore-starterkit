<?php
declare(strict_types=1);

namespace App\Document\Areabrick;

use StarterkitAreasBundle\Document\Areabrick\AbstractBaseAreabrick as AbstractAreabrick;

abstract class AbstractBaseAreabrick extends AbstractAreabrick
{
    /**
     * @inheritDoc
     */
    public function getTemplateLocation() : string
    {
        return static::TEMPLATE_LOCATION_GLOBAL;
    }
}
