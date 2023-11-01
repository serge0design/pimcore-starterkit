<?php

use Pimcore\Bundle\SimpleBackendSearchBundle\PimcoreSimpleBackendSearchBundle;
use Pimcore\Bundle\TinymceBundle\PimcoreTinymceBundle;
use Pimcore\Bundle\EcommerceFrameworkBundle\PimcoreEcommerceFrameworkBundle;
use Pimcore\Bundle\PersonalizationBundle\PimcorePersonalizationBundle;
use Pimcore\Bundle\GlossaryBundle\PimcoreGlossaryBundle;
use Pimcore\Bundle\SeoBundle\PimcoreSeoBundle;
use Pimcore\Bundle\CustomReportsBundle\PimcoreCustomReportsBundle;
use Pimcore\Bundle\GoogleMarketingBundle\PimcoreGoogleMarketingBundle;
use Pimcore\Bundle\ApplicationLoggerBundle\PimcoreApplicationLoggerBundle;
use Pimcore\Bundle\WebToPrintBundle\PimcoreWebToPrintBundle;
use Pimcore\Bundle\StaticRoutesBundle\PimcoreStaticRoutesBundle;
use Pimcore\Bundle\NewsletterBundle\PimcoreNewsletterBundle;
use Pimcore\Bundle\WordExportBundle\PimcoreWordExportBundle;
use Pimcore\Bundle\XliffBundle\PimcoreXliffBundle;
use Pimcore\Bundle\FileExplorerBundle\PimcoreFileExplorerBundle;
use Pimcore\Bundle\SystemInfoBundle\PimcoreSystemInfoBundle;

use Symfony\WebpackEncoreBundle\WebpackEncoreBundle;
use Presta\SitemapBundle\PrestaSitemapBundle;

use StarterkitBundle\StarterkitBundle;
use StarterkitAreasBundle\StarterkitAreasBundle;
use CustomEditablesBundle\CustomEditablesBundle;
use CustomTwigBundle\CustomTwigBundle;

return [
    PimcoreSimpleBackendSearchBundle::class => ['all' => true],
    PimcoreTinymceBundle::class => ['all' => true],
    PimcoreEcommerceFrameworkBundle::class => ['all' => true],
    PimcorePersonalizationBundle::class => ['all' => true],
    PimcoreGlossaryBundle::class => ['all' => true],
    PimcoreSeoBundle::class => ['all' => true],
    PimcoreCustomReportsBundle::class => ['all' => true],
    PimcoreGoogleMarketingBundle::class => ['all' => true],
    PimcoreApplicationLoggerBundle::class => ['all' => true],
    PimcoreWebToPrintBundle::class => ['all' => true],
    PimcoreStaticRoutesBundle::class => ['all' => true],
    PimcoreNewsletterBundle::class => ['all' => true],
    PimcoreWordExportBundle::class => ['all' => true],
    PimcoreXliffBundle::class => ['all' => true],
    PimcoreFileExplorerBundle::class => ['all' => true],
    PimcoreSystemInfoBundle::class => ['all' => true],
    WebpackEncoreBundle::class => ['all' => true],
    PrestaSitemapBundle::class => ['all' => true],
    StarterkitBundle::class => ['all' => true],
    CustomEditablesBundle::class => ['all' => true],
    CustomTwigBundle::class => ['all' => true]
];
