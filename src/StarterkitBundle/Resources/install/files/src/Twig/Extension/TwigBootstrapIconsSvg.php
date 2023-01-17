<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigBootstrapIconsSvg extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('getBootstrapSvg',
                function (string $biName = 'bootstrap', string $fill = 'currentColor', int $biSize = 1): string {
                    $svgFile = [];
                    $svgFile[] = '<svg class="bi bi-' . $biName . '"';
                    $svgFile[] = 'width="' . $biSize . 'rem" height="' . $biSize . 'rem"';
                    $svgFile[] = 'fill="' . $fill . '">';
                    $svgFile[] = '<use xlink:href="/build/bootstrap-icons.svg#' . $biName . '">';
                    $svgFile[] = '</use></svg>';
                    return join($svgFile);

                },
                ['is_safe' => ['html']])
        ];
    }

}
