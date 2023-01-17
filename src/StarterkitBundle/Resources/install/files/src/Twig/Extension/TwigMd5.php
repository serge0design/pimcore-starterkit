<?php

namespace App\Twig\Extension;

use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

class TwigMd5 extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('md5', function (string $string, bool $binary = false): string {
                return md5($string, $binary);
            })
        ];
    }
}