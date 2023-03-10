<?php

namespace StarterkitBundle\Tools;

use http\Exception\InvalidArgumentException;
use Pimcore\Event\DataObjectClassDefinitionEvents;
use Pimcore\Extension\Bundle\Installer\SettingsStoreAwareInstaller;
use Pimcore\Bundle\AdminBundle\Security\User\TokenStorageUserResolver;
use Pimcore\Extension\Bundle\Installer\Exception\InstallationException;
use Pimcore\Model\DataObject;
use Pimcore\Model\Document;
use Pimcore\Model\Document\DocType;
use Pimcore\Model\Exception\NotFoundException;
use Pimcore\Model\Property;
use Pimcore\Model\Property\Predefined;
use Pimcore\Model\Translation;
use Pimcore\Model\User;
use Pimcore\Model\WebsiteSetting;
use Pimcore\Tool;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Path;
use Pimcore\Model\Asset\Image\Thumbnail\Config;
use Symfony\Component\Finder\Finder;

class Install extends SettingsStoreAwareInstaller
{

    protected TokenStorageUserResolver $resolver;

    private string $sourceFiles;
    private string $classesFiles;
    private Filesystem $filesystem;

    private array $classes = [
        'CompanyInformation', 'Card', 'FormContact', 'HeroSlide'
    ];

    public function setTokenStorageUserResolver(TokenStorageUserResolver $resolver): void
    {
        $this->resolver = $resolver;
    }

    public function install(): void
    {
        $this->installFiles();
        $this->installDocuments();
        $this->installDocumentTypes();
        $this->installProperties();
        $this->installPredefinedProperties();
        $this->installWebsiteSettings();
        $this->installObjects();
        $this->installClassDefinitions();
        $this->installThumbnails();

        parent::install();
    }

    private function installFiles(): void
    {

        $sourceFiles = dirname(__DIR__) . '/Resources/install/files';
        $sourceFiles = realpath($sourceFiles);

        $projectRoot = PIMCORE_PROJECT_ROOT;
        $defaultSkeletonDir = PIMCORE_PROJECT_ROOT . '/templates/default';
        $defaultSkeletonDir = realpath($defaultSkeletonDir);

        $finder = new Finder();
        $finder->files()->in($defaultSkeletonDir)->contains([
            'Example', 'logo-claim-gray', 'Where can I edit some pages?', '/www.pimcore.com/i'
        ]);

        try {
            foreach ($finder as $file) {
                if (is_file($file)) {
                    $filesystem = new Filesystem();
                    $filesystem->remove($file);
                    $filesystem->mirror($sourceFiles, $projectRoot);
                }
            }
        } catch (IOExceptionInterface $e) {
            echo "An error occurred while creating your directory at " . $e->getPath();
        }
    }

    private function installDocuments(): void
    {
        $folderLayoutParts = Document::getByPath("/layout-parts");
        if (!$folderLayoutParts instanceof Document) {
            $folderLayoutParts = new Document\Folder();
            $folderLayoutParts->setKey("layout-parts")
                ->setPublished(true)
                ->setParentId(1)
                ->setCreationDate(time())
                ->setUserOwner($this->getUserId())
                ->setUserModification($this->getUserId())
                ->save();
        }

        $snippetFooter = Document::getByPath('/layout-parts/footer');
        if (!$snippetFooter instanceof Document) {
            $snippetFooter = new Document\Snippet();
            $snippetFooter->setParent($folderLayoutParts)
                ->setController('App\Controller\SnippetController::footerAction')
                ->setKey('footer')
                ->setPublished('true')
                ->setCreationDate(time())
                ->setUserOwner($this->getUserId())
                ->setUserModification($this->getUserId())
                ->save();
        }

        $homeDocument = Document::getById(1);
        if (!$homeDocument->getProperty("footer")) {
            $homeDocument->setProperty("footer", "document", $snippetFooter, false, true)
                ->save();
        }
    }

    private function installDocumentTypes(): void
    {
        {
            $documentTypes = [
                'footer_snippet' => [
                    'name' => 'Footer Snippet',
                    'controller' => 'App\Controller\SnippetController::footerAction',
                    'type' => 'snippet',
                    'priority' => 0
                ],
                'contact_snippet' => [
                    'name' => 'Contact Snippet',
                    'controller' => 'App\Controller\SnippetController::contactAction',
                    'type' => 'snippet',
                    'priority' => 0
                ],
                'default' => [
                    'name' => 'Example',
                    'controller' => 'App\Controller\ExamplesController::defaultAction',
                    'type' => 'page',
                    'priority' => 0
                ]
            ];

            $skipInstall = false;
            $list = new DocType\Listing();
            foreach ($list->getDocTypes() as $type) {
                $is_installed = in_array($type->getController(), array_column($documentTypes, 'controller'));
                if ($is_installed) {
                    $skipInstall = true;
                    break;
                }
            }
            if ($skipInstall) {
                return;
            }

            foreach ($documentTypes as $id => $doctypeonfig) {
                $docType = DocType::create();
                $docType->setName($doctypeonfig['name'])
                    ->setController($doctypeonfig['controller'])
                    ->setType($doctypeonfig['type'])
                    ->setPriority($doctypeonfig['priority']);

                try {
                    $docType->getDao()->save();
                } catch (\Exception $e) {
                    throw new InstallationException(sprintf('Failed to save document type "$s". Error was "%s', $elementName, $e->getMessage()));
                }
            }

            return;
        }
    }

    private function installProperties(): void
    {
        $properties = [
            'navMainStartNode' => [
                'name' => 'navMainStartNode',
                'type' => 'document',
                'data' => '',
                'inheritable' => true
            ]
        ];

        $homeDocument = Document::getById(1);
        foreach ($properties as $property) {
            if (!$homeDocument->hasProperty($property["name"])) {
                $homeDocument->setProperty(
                    $property["name"],
                    $property["type"],
                    $property["data"],
                    false,
                    $property["inheritable"]
                )->save();
            }
        }
    }

    private function installPredefinedProperties(): void
    {
        $predefinedProperties = [
            'navMainStartNode' => [
                'name' => 'Nav Main Start Node',
                'description' => 'Drop Document here:',
                'type' => 'document',
                'data' => '',
                'config' => '',
                'ctype' => 'document',
                'inheritable' => true
            ],
            'navServiceStartNode' => [
                'name' => 'Nav Service Start Node',
                'description' => 'Drop Document here:',
                'type' => 'document',
                'data' => '',
                'config' => '',
                'ctype' => 'document',
                'inheritable' => true
            ],
            'footer' => [
                'name' => 'Footer',
                'description' => 'Drop Footer Snippet here:',
                'type' => 'snippet',
                'data' => '',
                'config' => '',
                'ctype' => 'document',
                'inheritable' => true
            ],
            'selectPageCssClass' => [
                'name' => 'Select Page Css Class',
                'description' => 'Choose a diffrent design of a document',
                'type' => 'select',
                'data' => '',
                'config' => 'Red, Green, Blue',
                'ctype' => 'document',
                'inheritable' => true
            ],
            'selectMainMenuType' => [
                'name' => 'Select Main Menu Type',
                'description' => 'Menutypes available: Default, Dropdown',
                'type' => 'select',
                'data' => '',
                'config' => 'Default, Dropdown',
                'ctype' => 'document',
                'inheritable' => true
            ],
        ];

        foreach ($predefinedProperties as $key => $propertyConfig) {
            $predefinedProperty = Predefined::getByKey($key);
            if ($predefinedProperty instanceof Predefined) {
                continue;
            }

            $property = new Predefined();
            $property->setKey($key)
                ->setType($propertyConfig['type'])
                ->setName($propertyConfig['name'])
                ->setDescription($propertyConfig['description'] ?? '')
                ->setData($propertyConfig['data'] ?? '')
                ->setConfig($propertyConfig['config'] ?? '')
                ->setCtype($propertyConfig['ctype'])
                ->setInheritable($propertyConfig['inheritable'] ?? false)
                ->save();
        }
        return;
    }

    private function installWebsiteSettings(): void
    {
        $websiteSettings = [
            'favicons' => [
                'type' => 'asset',
                'name' => 'favicons'
            ],
            'websiteLogo' => [
                'type' => 'asset',
                'name' => 'websiteLogo'
            ],
            'websiteTitle' => [
                'type' => 'text',
                'name' => 'websiteTitle'
            ],
            'companyInfornation' => [
                'type' => 'object',
                'name' => 'companyInfornation'
            ],
            'developmentMode' => [
                'type' => 'bool',
                'name' => 'developmentMode'
            ]
        ];

        $skipInstall = false;
        $list = new WebsiteSetting\Listing();
        foreach ($list->getSettings() as $settingItem) {
            $is_installed = in_array($settingItem->getName(), array_column($websiteSettings, 'name'));
            if ($is_installed) {
                $skipInstall = true;
                break;
            }
        }
        if ($skipInstall) {
            return;
        }

        foreach ($websiteSettings as $websiteSettingConfig) {
            $setting = new WebsiteSetting();
            $setting->setType($websiteSettingConfig['type'])
                ->setName($websiteSettingConfig['name'])
                ->setData($websiteSettingConfig['data'] ?? '')
                ->setLanguage($websiteSettingConfig['language'] ?? '');

            try {
                $setting->save();
            } catch (\Exception $e) {
                throw new InstallationException(sprintf('Failed to save entry "$s". Error was "%s', $setting, $e->getMessage()));
            }
        }
    }

    private function installObjects(): void
    {
        $folderCompanyInformation = DataObject::getByPath("/company-information");
        if (!$folderCompanyInformation instanceof DataObject) {
            $folderCompanyInformation = new DataObject\Folder();
            $folderCompanyInformation->setParentId(1)
                ->setCreationDate(time())
                ->setUserOwner($this->getUserId())
                ->setUserModification($this->getUserId())
                ->setKey('company-information')
                ->save();
        }
    }

    private function installClassDefinitions(): void
    {
        foreach ($this->getClasses() as $className => $path) {
            $class = new DataObject\ClassDefinition();

            try {
                $id = $class->getDao()->getIdByName($className);
            } catch (NotFoundException $e) {
                $id = false;
            }
            if ($id !== false) {
                continue;
            }

            $class->setName($className);
            $data = file_get_contents($path);
            DataObject\ClassDefinition\Service::importClassDefinitionFromJson($class, $data);
        }
    }

    private function installThumbnails()
    {
        $mediaQuerys = [3840, 576, 768, 992, 1200, 1400, 1920];
        $thumbs = ["21x9" => 21 / 9, "16x9" => 16 / 9, "4x3" => 4 / 3, "3x2" => 3 / 2, "1x1" => 1];
        $groups = ["cover", "contain"];

        foreach ($groups as $group) {
            $installThumbFiles = [];
            foreach ($thumbs as $key => $divider) {
                foreach ($mediaQuerys as $width) {
                    $installThumbFiles["ratio-" . $key . '-' . $group][] = ["width" => $width, "height" => round($width / $divider)];
                }
            }

            foreach ($installThumbFiles as $name => $thumbData) {
                $first = array_shift($thumbData);

                $data = [
                    "items" => [
                        [
                            "method" => $group,
                            "arguments" => [
                                "width" => $first["width"],
                                "height" => $first["height"],
                                "positioning" => "center",
                                "forceResize" => false,
                            ]
                        ]
                    ],
                    "medias" => []
                ];

                foreach ($thumbData as $key => $mediasItem) {
                    $data["medias"]["(max-width :" . $mediasItem["width"] . "px)"] = [
                        [
                            "method" => $group,
                            "arguments" => [
                                "width" => $mediasItem["width"],
                                "height" => $mediasItem["height"],
                                "positioning" => "center",
                                "forceResize" => false,
                            ]
                        ]
                    ];
                }

                $this->createThumbnails($name, $group, $data);
            }
        }
    }

    protected function createThumbnails(string $name, string $group, array $properties): Config
    {

        try {
            $thumbConfig = new Config();
            /**
             * @var \Pimcore\Model\Asset\Image\Thumbnail\Config\Dao
             */
            $dao = $thumbConfig->getDao();
            $dao->getByName($name);
        } catch (\Exception $e) {
            $thumbConfig = new Config();
            $thumbConfig->setName($name);
            $thumbConfig->setItems($properties['items']);
            $thumbConfig->setDescription($properties['description'] ?? '');
            $thumbConfig->setGroup($properties['group'] ?? $group);
            $thumbConfig->setFormat($properties['format'] ?? 'SOURCE');
            $thumbConfig->setQuality($properties['quality'] ?? 100);
            $thumbConfig->setHighResolution($properties['highResolution'] ?? 0.0);
            $thumbConfig->setMedias($properties['medias']);
            $thumbConfig->setPreserveColor($properties['preserveColor'] ?? false);
            $thumbConfig->setPreserveMetaData($properties['preserveMetaData'] ?? false);
            $thumbConfig->save();
        }
        return $thumbConfig;
    }

    protected function getClasses(): array
    {
        $result = [];
        foreach ($this->classes as $className) {
            $filename = sprintf('class_%s_export.json', $className);
            $path = dirname(__DIR__) . '/Resources/install/classes/' . $filename;
            $path = realpath($path);

            if (false === $path || !is_file($path)) {
                throw new \RuntimeException(
                    sprintf('Class export for class "%s" was expected in "%s" but file does not exist',
                        $className, $path)
                );
            }
            $result[$className] = $path;
        }
        return $result;
    }

    protected function getUserId(): int
    {
        $userId = 0;
        $user = $this->resolver->getUser();
        if ($user instanceof User) {
            $userId = $this->resolver->getUser()->getId();
        }

        return $userId;
    }

}
