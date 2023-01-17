<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigStringToLowerFormatter extends AbstractExtension
{

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('stringToLowerFormatter', function (string $string): string {
                return strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $string));
            })
        ];
    }

}
