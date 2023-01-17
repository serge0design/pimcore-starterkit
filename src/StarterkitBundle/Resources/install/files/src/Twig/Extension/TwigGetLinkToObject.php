<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigGetLinkToObject extends AbstractExtension
{

    /**
     * {@inheritdoc}
     */

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getLinkToObject',
                function (int $objectId) {
                    $linkToObject = [];
                    $linkToObject[] = '<div class="pimcore_block_options">';
                    $linkToObject[] = '<a class="editObjectLink x-btn pimcore_block_button_options x-unselectable x-btn-default-small x-border-box" href="javascript:parent.pimcore.helpers.openObject(' . $objectId . ',\'object\')">';
                    $linkToObject[] = '<img style="width:3rem;" src="/bundles/pimcoreadmin/img/material-icons/outline-edit-24px.svg" title="Edit Object">';
                    $linkToObject[] = '</a>';
                    $linkToObject[] = '</div>';
                    return join($linkToObject);
                },
                ['is_safe' => ['html']])
        ];
    }

}
