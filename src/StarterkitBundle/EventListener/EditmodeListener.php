<?php
declare(strict_types=1);

namespace StarterkitBundle\EventListener;

use Pimcore\Event\BundleManager\PathsEvent;
use Pimcore\Event\BundleManagerEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class EditmodeListener implements EventSubscriberInterface
{

    public static function getSubscribedEvents(): array
    {
        return [
            BundleManagerEvents::JS_PATHS => 'onEditObjectsJsPaths',
        ];
    }

    final public function onEditObjectsJsPaths(PathsEvent $event): void
    {
        $event->setPaths(array_merge($event->getPaths(), [
            '/build/ckeditor/config.js'
        ]));
    }
}

