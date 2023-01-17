<?php

namespace App\Twig\Extension;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

class TwigUniqid extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('uniqid', function (string $prefix = '', bool $moreEntropy = false) {
                return uniqid($prefix, $moreEntropy);
            })
        ];
    }
}