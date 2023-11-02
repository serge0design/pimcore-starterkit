<?php
declare(strict_types=1);

namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;

class SnippetController extends FrontendController
{

    /**
     * @param Request $request
     * @return mixed
     */
    public function footerAction(Request $request): mixed
    {
        return $this->renderTemplate("Snippet/footer.html.twig", [
            'companyInformation' => $request->get('companyInformation'),
            'navFooterStartNode' => $request->get('navFooterStartNode')
        ]);
    }
}
