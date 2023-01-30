<?php

namespace App\Twig\Extension;

use Twig\TwigFunction;

class TwigStringToLowerFormatter extends TwigStringNormalizer
{

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('getStringToLowerFormatter', function (string $string): string {
                return strtolower($this->getStringNormalizer($string));
            })
        ];
    }

}