$(document).ready(function () {

    $('.mfp-video-wrapper').each(function () {
        $(this).magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',  //mfp-fade
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-title"></div>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    dailymotion: {
                        index: 'dailymotion.com/',
                        id: '/',
                        src: '//www.dailymotion.com/embed/video/%id%?autoplay=1'
                    }
                },
                srcAction: 'iframe_src',
                callbacks: {
                    // I used the updateStatus callback because it runs when you open and when you click prev or next arrows...
                    updateStatus: function (data) {
                        var current_title = function (item) {
                            var markup = '';
                            if (item.el[0].hasAttribute("data-caption")) {
                                markup += item.el.attr("data-caption");
                            }
                            return markup
                        }
                        $('.mfp-title').html(current_title); // change the popup title html

                    }
                }
            }
        });
    });

    $('.mfp-image-wrapper').each(function () {
        $(this).magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',  //mfp-fade
            markup:
                '<div class="mfp-header">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-close"><i class="bi bi-x-lg"></i></div>' +
                '</div>' +
                '<div class="mfp-figure">' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>',
            cursor: 'mfp-zoom-out-cur',
            verticalFit: true,
            gallery: {
                enabled: false
            },
            image: {
                titleSrc: function (item) {
                    var markup = '';
                    if (item.el[0].hasAttribute("data-caption")) {
                        markup += item.el.attr("data-caption");
                    }
                    return markup
                }
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });

    $('.mfp-gallery-wrapper').each(function () {
        $(this).magnificPopup({
            delegate: 'img',
            type: 'image',
            mainClass: 'mfp-with-zoom', //mfp-fade
            cursor: 'mfp-zoom-out-cur',
            image: {
                markup:
                    '<div class="mfp-header">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-close"><i class="bi bi-x-lg"></i></div>' +
                    '</div>' +
                    '<div class="mfp-figure">' +
                    '<div class="mfp-img"></div>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',
                titleSrc: function (item) {
                    var markup = '';
                    if (item.el[0].hasAttribute("data-caption")) {
                        markup += item.el.attr('data-caption');
                    }
                    return markup
                }
            },
            verticalFit: true,
            // removalDelay: 300,
            gallery: {
                enabled: true,
                preload: [1, 3],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="bi bi-chevron-compact-%dir%"></i></button>',
                tPrev: 'Previous (Left)',
                tNext: 'Next (Right)',
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>'

            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });

    $('.mfp-ajax-wrapper').each(function () {
        let title = $("a", this).attr('data-caption');

        $(this).magnificPopup({
            delegate: 'a',
            type: 'ajax',
            modal: true,
            ajax: {
                settings: {cache: false, async: false},
                cursor: 'mfp-ajax-cur',
                tError: '<a href="%url%">The content</a> could not be loaded.',
            },
            callbacks: {
                parseAjax: function (mfpResponse) {
                    mfpResponse.data =
                        '<div class="mfp-header">' +
                        '<div class="mfp-title">' + title +
                        '</div>' +
                        '<div class="mfp-close"><button title="Close (Esc)" type="button" class="mfp-close"><i class="bi bi-x-lg"></i></button></div>' +
                        '</div>' +
                        '<div class="mfp-figure">' +
                        '<div class="mfp-item">' +
                        '<div class="mfp-modal">' + mfpResponse.data + '</div>' +
                        '</div>' +
                        '<div class="mfp-bottom-bar">' +
                        '<div class="mfp-counter"></div>' +
                        '</div>' +
                        '</div>';
                },

                open: function () {
                    $.magnificPopup.instance.close = function () {

                        $('button.mfp-close').on("click", function () {
                            $.magnificPopup.proto.close.call(this);
                        });

                    };
                },
                // ajaxContentAdded: function() {
                // },
                // close: function() {
                // }
            }
        });
    });

    $('.open-mfp-gallery').click(function (e) {
        e.preventDefault();
        var itemsSrc = [];
        $($(this).attr('href')).find('picture').each(function () {
            itemsSrc.push({
                itemContent: $(this),
            });
        });

        let caption = $(this).attr('data-caption') ? $(this).attr('data-caption') : '';
        $(this).magnificPopup({
            items: itemsSrc,
            type: 'inline',
            mainClass: 'mfp-with-zoom', //mfp-fade
            cursor: 'mfp-zoom-out-cur',
            midClick: true,
            closeOnBgClick: false,
            closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><i class="mfp-close bi bi-x-lg"></i></button>',
            inline: {
                markup:
                    '<div class="mfp-header">' +
                    '<div class="mfp-title">' + caption + '</div>' +
                    '<div class="mfp-close"></div>' +
                    '</div>' +
                    '<div class="mfp-figure">' +
                    '<div class="mfp-itemContent"></div>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</div>',
            },
            gallery: {
                enabled: true,
                preload: [1, 3],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="bi bi-chevron-compact-%dir%"></i></button>',
                tPrev: 'Previous (Left)',
                tNext: 'Next (Right)',
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
            }
        });
    });
});