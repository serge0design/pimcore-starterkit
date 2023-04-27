import Mmenu from "mmenu-js/dist/core/oncanvas/mmenu.oncanvas";

document.addEventListener(
    "DOMContentLoaded", () => {

        new Mmenu("#mmenu", {
            offCanvas: {
                position: "right-front", //right, right-front, bottom, left, left-front, top
            },
            slidingSubmenus: true,
            theme: "light", //light, light-contrast, white, white-contrast, dark, dark-contrast, black, black-contrast
            counters: {
                add: false
            },
            pageScroll: {
                scroll: true,
                update: true,
            },
            scrollBugFix: {
                fix: true
            }

        }, {
            offCanvas: {
                clone: false,
                page: {
                    selector: "#bodyWrapper"
                },
                menu: {
                    insertMethod: "append", //"prepend", "append"
                    insertSelector: "body"
                },
                screenReader: {
                    closeMenu: "Close menu",
                    openMenu: "Open menu"
                },
            }
        });
    }
);
