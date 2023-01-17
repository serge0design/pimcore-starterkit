<?php

namespace App\Twig\Extension;

use Endroid\QrCode\RoundBlockSizeMode\RoundBlockSizeModeEnlarge;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelQuartile;
use Endroid\QrCode\Writer\SvgWriter;
use Endroid\QrCode\Color\Color;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\QrCode;

class TwigQrCode extends AbstractExtension
{

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getQrImg', [$this, 'getQrImg'], ['is_safe' => ['html']]),
        ];
    }

    public function getQrData($data)
    {
        $writer = new SvgWriter();
        $qrCode = QrCode::create($data)
            ->setEncoding(new Encoding('UTF-8'))
            ->setErrorCorrectionLevel(new ErrorCorrectionLevelQuartile())
            ->setSize(200)
            ->setMargin(0)
            ->setRoundBlockSizeMode(new RoundBlockSizeModeEnlarge())
            ->setForegroundColor(new Color(29, 29, 27))
            ->setBackgroundColor(new Color(255, 255, 255, 255));

        return $writer->write($qrCode);
    }

    public function getQrImg($qrData)
    {
        $imgSrc = $this->getQrData($qrData)->getDataUri();
        return '<img class="img-fluid img-qr-code" src="' . $imgSrc . '" alt="Scan Me"/>';
    }
}
