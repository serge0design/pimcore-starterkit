<?php

namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DevController extends FrontendController
{
    /**
     * @param Request $request
     * @return Response
     */
    public function cheatsheetAction(Request $request): Response
    {
        return $this->render('dev/cheatsheet.html.twig');
    }

    public function materialIconsAction(Request $request): Response
    {
        return $this->render('dev/materialIcons.html.twig');
    }

    public function boostrapIconsAction(Request $request): Response
    {
        return $this->render('dev/bootstrapIcons.html.twig');
    }
}
