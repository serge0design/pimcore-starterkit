<?php
declare(strict_types=1);

namespace StarterkitBundle\Event;

use Symfony\Component\EventDispatcher\GenericEvent;

class ValidKeyFormatter
{

    public static function onGetValidKey(GenericEvent $event):void
    {
        $getArgumentKey = $event->getArgument("key");
        $toAsciiKey = \Pimcore\Tool\Transliteration::toASCII($getArgumentKey);
        $key = strtolower(preg_replace('/[^a-zA-Z0-9\-\.~_]+/', '-', $toAsciiKey));

        $event->setArgument("key", $key);
    }

    public static function onGetValidPath(GenericEvent $event):void
    {
    }
}
