<?php
namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Pimcore\Model\DataObject;
use Pimcore\Tool;
use Symfony\Component\HttpFoundation\Request;

class AbstractBaseAreabrick extends FrontendController
{
    /**
     * @param Request $request
     * @param DataObject $object
     *
     * @return bool
     */
    protected function verifyPreviewRequest(Request $request, DataObject $object): bool
    {
        if (Tool::isElementRequestByAdmin($request, $object)) {
            return true;
        }

        return false;
    }

    /**
     * @param Request $request
     *
     * @return array
     */
    protected function getAllParameters(Request $request): array
    {
        return array_merge($request->request->all(), $request->query->all());
    }
}

//declare(strict_types=1);
//
//namespace App\Document\Areabrick;
//
////use \StarterkitAreasBundle\Document\Areabrick\AbstractBaseAreabrick as AbstractStarterBaseAreabrick;
//
//abstract class AbstractBaseAreabrick extends AbstractStarterBaseAreabrick
//{
//    /**
//     * @inheritDoc
//     */
//    public function getTemplateLocation()
//    {
//        return static::TEMPLATE_LOCATION_GLOBAL;
//    }
//}
