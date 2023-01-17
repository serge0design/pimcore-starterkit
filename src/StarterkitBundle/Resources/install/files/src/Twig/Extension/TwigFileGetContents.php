<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigFileGetContents extends AbstractExtension
{

    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('fileGetContents',
                function (string $file) {
                    $relativPath = "/" . trim($file, '/');
                    $rootPath = PIMCORE_WEB_ROOT . $relativPath;
                    $assetPath = PIMCORE_ASSET_DIRECTORY . $relativPath;

                    if (is_file($rootPath)) {
                        return file_get_contents($rootPath);
                    }
                    if (is_file($assetPath)) {
                        return file_get_contents($assetPath);
                    }
                    
                    return "file not found.";
                },
                ['is_safe' => ['html']])
        ];
    }
}
