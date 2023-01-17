<?php

namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Pimcore\Model\DataObject\CompanyInformation;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Filesystem\Filesystem;
use App\Twig\Extension\TwigQrCode;

class SnippetController extends FrontendController
{

    /**
     * @param Request $request
     * @return mixed
     */
    public function footerAction(Request $request)
    {
        return $this->renderTemplate("Snippet/footer.html.twig", [
            'companyInformation' => $request->get('companyInformation')
        ]);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function feedbackAction(Request $request)
    {
        return $this->renderTemplate("Snippet/feedback.html.twig", []);
    }

//    /**
//     * @param Request $request
//     * @return mixed
//     */
//    public function contactAction(Request $request)
//    {
//        $companyInformation = \Pimcore\Model\WebsiteSetting::getByName('companyInformation', null, 'de');
//        $info = $companyInformation->getData();
//
//        $filesystem = new Filesystem();
//        $qrCode = new TwigQrCode();
//
//        if ($info instanceof CompanyInformation) {
//            $company = $info->getCompany();
//            $logo = $info->getLogo();
//            $position = '';
//            $fname = $info->getFirstName();
//            $lname = $info->getLastName();
//            $name = $fname . ' ' . $lname;
//            $street = $info->getStreet();
//            $streetnr = $info->getStreetNr();
//            $addMerged = $street . ' ' . $streetnr;
//            $zipCode = $info->getZipCode();
//            $city = $info->getCity();
//            $cityMerged = $zipCode . ' ' . $city;
//            $address = $addMerged . ' <br> ' . $cityMerged;
//            $domain = $info->getDomain();
//            $email = $info->getEmail();
//            $phone = $info->getPhone();
//            $mobile = $info->getMobile();
//            $socialMediaItems = $info->getSocialMedia();
//            $coordinates = $info->getMap();
//
//            $longitude = $coordinates->getLongitude();
//            $latitude = $coordinates->getLatitude();
//
//            $imgPath = PIMCORE_ASSET_DIRECTORY . $logo;
//            $img = file_get_contents($imgPath);
//
//            $vcfContent = 'BEGIN:VCARD' . PHP_EOL;
//            $vcfContent .= 'VERSION:2.1' . PHP_EOL;
//            $vcfContent .= 'N:' . $lname . ';' . $fname . ';' . PHP_EOL;
//            $vcfContent .= 'FN:' . $fname . ' ' . $lname . PHP_EOL;
//            $vcfContent .= 'ORG:' . $company . PHP_EOL;
//            $vcfContent .= 'TITLE:' . $position . PHP_EOL;
//            $vcfContent .= 'TEL;WORK;VOICE:' . $phone . PHP_EOL;
//            $vcfContent .= 'TEL;WORK;VOICE:' . $mobile . PHP_EOL;
//            $vcfContent .= 'ADR;WORK;PREF:;;' . $addMerged . ';' . $city . ';;' . $zipCode . PHP_EOL;
//            $vcfContent .= 'LABEL;WORK;PREF;ENCODING=QUOTED-PRINTABLE:' . $addMerged . ', ' . $cityMerged . PHP_EOL;
//            $vcfContent .= 'URL;WORK;PREF:' . 'https://' . $domain . PHP_EOL;
//            $vcfContent .= 'EMAIL;WORK;PREF;INTERNET:' . $email . PHP_EOL;
//            $vcfContentLogo = trim('PHOTO;ENCODING=b;TYPE=JPEG:' . str_replace(' ', '', base64_encode($img))) . PHP_EOL;
//            $vcfContentFooter = 'END:VCARD';
//
//            $vcfCard = $vcfContent . $vcfContentLogo . $vcfContentFooter;
//            $vcfQrCode = $vcfContent . $vcfContentFooter;
//        }
//
//        if ($this->document->isPublished()) {
//            $itemName = trim(strtolower(str_replace(' ', '-', $company)));
//
//            $filesystem->dumpFile($itemName. ".vcf", $vcfCard);
//            $qrCode->getQrData($vcfQrCode)->saveToFile($itemName . ".svg");
//        }
//
//        return $this->renderTemplate("Snippet/contact.html.twig", [
//            "infos" => $companyInformation,
//            "company" => $company,
//            "name" => $name,
//            "address" => $address,
//            "domain" => $domain,
//            "email" => $email,
//            "phone" => $phone,
//            "mobile" => $mobile,
//            "vcfContent" => $vcfContent,
//            "map" => $coordinates,
//            "vcfQrCode" => $vcfQrCode
//        ]);
//    }
}
