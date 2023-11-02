(self["webpackChunkstarterkit"] = self["webpackChunkstarterkit"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_iconmonstr_css_iconmonstr_iconic_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/iconmonstr/css/iconmonstr-iconic-font.css */ "./assets/fonts/iconmonstr/css/iconmonstr-iconic-font.css");
/* harmony import */ var _js_init_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/init-main.js */ "./assets/js/init-main.js");
/* harmony import */ var _js_init_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_init_main_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.scss */ "./assets/css/main.scss");
/* harmony import */ var _js_init_mmenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/init-mmenu.js */ "./assets/js/init-mmenu.js");
/* harmony import */ var mmenu_js_src_mmenu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mmenu-js/src/mmenu.scss */ "./node_modules/mmenu-js/src/mmenu.scss");
/* harmony import */ var slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.scss */ "./node_modules/slick-carousel/slick/slick.scss");
/* harmony import */ var slick_carousel_slick_slick_theme_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.scss */ "./node_modules/slick-carousel/slick/slick-theme.scss");
/* harmony import */ var magnific_popup_dist_magnific_popup_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! magnific-popup/dist/magnific-popup.css */ "./node_modules/magnific-popup/dist/magnific-popup.css");
/* harmony import */ var _js_init_magnific_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/init-magnific.js */ "./assets/js/init-magnific.js");
/* harmony import */ var _js_init_magnific_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_init_magnific_js__WEBPACK_IMPORTED_MODULE_9__);
// assets/app.js

__webpack_require__.g.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'material-icons/iconfont/material-icons.css';

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");


__webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");


__webpack_require__(/*! mburger-webcomponent */ "./node_modules/mburger-webcomponent/dist/mburger/index.js");
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");


__webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");



/***/ }),

/***/ "./assets/js/init-magnific.js":
/*!************************************!*\
  !*** ./assets/js/init-magnific.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
$(document).ready(function () {
  $('.mfp-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-with-zoom',
    //mfp-fade
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '</div>',
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
        updateStatus: function updateStatus(data) {
          var current_title = function current_title(item) {
            var markup = '';
            if (item.el[0].hasAttribute("data-caption")) {
              markup += item.el.attr("data-caption");
            }
            return markup;
          };
          $('.mfp-title').html(current_title); // change the popup title html
        }
      }
    }
  });

  $('.mfp-image').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    //mfp-fade
    markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</div>',
    cursor: 'mfp-zoom-out-cur',
    verticalFit: true,
    gallery: {
      enabled: false
    },
    image: {
      titleSrc: function titleSrc(item) {
        var markup = '';
        if (item.el[0].hasAttribute("data-caption")) {
          markup += item.el.attr("data-caption");
        }
        return markup;
      }
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function opener(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
  $('.mfp-gallery-wrapper').each(function () {
    $(this).magnificPopup({
      delegate: 'a.mfp-item',
      type: 'image',
      mainClass: 'mfp-with-zoom',
      //mfp-fade
      cursor: 'mfp-zoom-out-cur',
      image: {
        titleSrc: function titleSrc(item) {
          var markup = '';
          if (item.el[0].hasAttribute("data-caption")) {
            markup += item.el.attr('data-caption');
          }
          return markup;
        }
      },
      verticalFit: true,
      callbacks: {},
      // removalDelay: 300,
      gallery: {
        enabled: true,
        preload: [1, 3],
        navigateByImgClick: true,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        tPrev: 'Previous (Left)',
        tNext: 'Next (Right)',
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function opener(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });
});

/***/ }),

/***/ "./assets/js/init-main.js":
/*!********************************!*\
  !*** ./assets/js/init-main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).ready(function () {});

/***/ }),

/***/ "./assets/js/init-mmenu.js":
/*!*********************************!*\
  !*** ./assets/js/init-mmenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js_dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js/dist/core/oncanvas/mmenu.oncanvas */ "./node_modules/mmenu-js/dist/core/oncanvas/mmenu.oncanvas.js");

document.addEventListener("DOMContentLoaded", function () {
  new mmenu_js_dist_core_oncanvas_mmenu_oncanvas__WEBPACK_IMPORTED_MODULE_0__["default"]("#mmenu", {
    offCanvas: {
      position: "right-front" //right, right-front, bottom, left, left-front, top
    },

    slidingSubmenus: true,
    theme: "light",
    //light, light-contrast, white, white-contrast, dark, dark-contrast, black, black-contrast
    counters: {
      add: false
    },
    pageScroll: {
      scroll: true,
      update: true
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
        insertMethod: "append",
        //"prepend", "append"
        insertSelector: "body"
      },
      screenReader: {
        closeMenu: "Close menu",
        openMenu: "Open menu"
      }
    }
  });
});

/***/ }),

/***/ "./assets/fonts/iconmonstr/css/iconmonstr-iconic-font.css":
/*!****************************************************************!*\
  !*** ./assets/fonts/iconmonstr/css/iconmonstr-iconic-font.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/main.scss":
/*!******************************!*\
  !*** ./assets/css/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-281ba0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEVBQUU7TUFDcEIsQ0FBQztNQUNEQyxZQUFZLEVBQUU7UUFDVkMsU0FBUyxFQUFFLFlBQVk7UUFDdkJDLFFBQVEsRUFBRTtNQUNkO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQ0o7Ozs7Ozs7Ozs7OztBQ3ZDRDs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlcmtpdC8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlcmtpdC8uL2Fzc2V0cy9qcy9pbml0LW1hZ25pZmljLmpzIiwid2VicGFjazovL3N0YXJ0ZXJraXQvLi9hc3NldHMvanMvaW5pdC1tYWluLmpzIiwid2VicGFjazovL3N0YXJ0ZXJraXQvLi9hc3NldHMvanMvaW5pdC1tbWVudS5qcyIsIndlYnBhY2s6Ly9zdGFydGVya2l0Ly4vYXNzZXRzL2ZvbnRzL2ljb25tb25zdHIvY3NzL2ljb25tb25zdHItaWNvbmljLWZvbnQuY3NzPzFmMjAiLCJ3ZWJwYWNrOi8vc3RhcnRlcmtpdC8uL2Fzc2V0cy9jc3MvbWFpbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9hcHAuanNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmdsb2JhbC4kID0gJDtcblxuLy8gaW1wb3J0ICdib290c3RyYXAtaWNvbnMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzJztcbi8vIGltcG9ydCAnbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzJztcbmltcG9ydCAnLi9mb250cy9pY29ubW9uc3RyL2Nzcy9pY29ubW9uc3RyLWljb25pYy1mb250LmNzcydcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdwb3BwZXIuanMnKTtcblxuaW1wb3J0ICcuL2pzL2luaXQtbWFpbi5qcyc7XG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG5cbnJlcXVpcmUoJ21tZW51LWpzJyk7XG5pbXBvcnQgJy4vanMvaW5pdC1tbWVudS5qcyc7XG5pbXBvcnQgJ21tZW51LWpzL3NyYy9tbWVudS5zY3NzJztcblxucmVxdWlyZSgnbWJ1cmdlci13ZWJjb21wb25lbnQnKTtcblxucmVxdWlyZSgnc2xpY2stY2Fyb3VzZWwnKTtcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suc2Nzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLnNjc3MnO1xuXG5yZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xuaW1wb3J0ICdtYWduaWZpYy1wb3B1cC9kaXN0L21hZ25pZmljLXBvcHVwLmNzcydcbmltcG9ydCAnLi9qcy9pbml0LW1hZ25pZmljLmpzJ1xuXG5cblxuXG5cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICQoJy5tZnAtdmlkZW8nKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC13aXRoLXpvb20nLCAgLy9tZnAtZmFkZVxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAgIG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICAgICAgICAgeW91dHViZToge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiAndj0nLFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2aW1lbzoge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3ZpbWVvLmNvbS8nLFxuICAgICAgICAgICAgICAgICAgICBpZDogJy8nLFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGFpbHltb3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6ICdkYWlseW1vdGlvbi5jb20vJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvLyVpZCU/YXV0b3BsYXk9MSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAvLyBJIHVzZWQgdGhlIHVwZGF0ZVN0YXR1cyBjYWxsYmFjayBiZWNhdXNlIGl0IHJ1bnMgd2hlbiB5b3Ugb3BlbiBhbmQgd2hlbiB5b3UgY2xpY2sgcHJldiBvciBuZXh0IGFycm93cy4uLlxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXR1czogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudF90aXRsZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFya3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5lbFswXS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXAgKz0gaXRlbS5lbC5hdHRyKFwiZGF0YS1jYXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWZwLXRpdGxlJykuaHRtbChjdXJyZW50X3RpdGxlKTsgLy8gY2hhbmdlIHRoZSBwb3B1cCB0aXRsZSBodG1sXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZnAtaW1hZ2UnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLXdpdGgtem9vbScsICAvL21mcC1mYWRlXG4gICAgICAgIG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtaW1nXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgIGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLFxuICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZSxcbiAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXJrdXAgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5lbFswXS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya3VwICs9IGl0ZW0uZWwuYXR0cihcImRhdGEtY2FwdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcblxuICAgICAgICAgICAgb3BlbmVyOiBmdW5jdGlvbiAob3BlbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuZXJFbGVtZW50LmlzKCdpbWcnKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcubWZwLWdhbGxlcnktd3JhcHBlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhLm1mcC1pdGVtJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tJywgLy9tZnAtZmFkZVxuICAgICAgICAgICAgY3Vyc29yOiAnbWZwLXpvb20tb3V0LWN1cicsXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFya3VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVsWzBdLmhhc0F0dHJpYnV0ZShcImRhdGEtY2FwdGlvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya3VwICs9IGl0ZW0uZWwuYXR0cignZGF0YS1jYXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmt1cFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge30sXG4gICAgICAgICAgICAvLyByZW1vdmFsRGVsYXk6IDMwMCxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFsxLCAzXSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIHRQcmV2OiAnUHJldmlvdXMgKExlZnQpJyxcbiAgICAgICAgICAgICAgICB0TmV4dDogJ05leHQgKFJpZ2h0KScsXG4gICAgICAgICAgICAgICAgdENvdW50ZXI6ICc8c3BhbiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+JWN1cnIlIG9mICV0b3RhbCU8L3NwYW4+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICAgICAgICAgIG9wZW5lcjogZnVuY3Rpb24gKG9wZW5lckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoJ2ltZycpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG59KSIsImltcG9ydCBNbWVudSBmcm9tIFwibW1lbnUtanMvZGlzdC9jb3JlL29uY2FudmFzL21tZW51Lm9uY2FudmFzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgICAgICBuZXcgTW1lbnUoXCIjbW1lbnVcIiwge1xuICAgICAgICAgICAgb2ZmQ2FudmFzOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHQtZnJvbnRcIiwgLy9yaWdodCwgcmlnaHQtZnJvbnQsIGJvdHRvbSwgbGVmdCwgbGVmdC1mcm9udCwgdG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGluZ1N1Ym1lbnVzOiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6IFwibGlnaHRcIiwgLy9saWdodCwgbGlnaHQtY29udHJhc3QsIHdoaXRlLCB3aGl0ZS1jb250cmFzdCwgZGFyaywgZGFyay1jb250cmFzdCwgYmxhY2ssIGJsYWNrLWNvbnRyYXN0XG4gICAgICAgICAgICBjb3VudGVyczoge1xuICAgICAgICAgICAgICAgIGFkZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlU2Nyb2xsOiB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxCdWdGaXg6IHtcbiAgICAgICAgICAgICAgICBmaXg6IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvZmZDYW52YXM6IHtcbiAgICAgICAgICAgICAgICBjbG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCIjYm9keVdyYXBwZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRNZXRob2Q6IFwiYXBwZW5kXCIsIC8vXCJwcmVwZW5kXCIsIFwiYXBwZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U2VsZWN0b3I6IFwiYm9keVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JlZW5SZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VNZW51OiBcIkNsb3NlIG1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgb3Blbk1lbnU6IFwiT3BlbiBtZW51XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJnbG9iYWwiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWFpbkNsYXNzIiwiaWZyYW1lIiwibWFya3VwIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJpZCIsInNyYyIsInZpbWVvIiwiZGFpbHltb3Rpb24iLCJzcmNBY3Rpb24iLCJjYWxsYmFja3MiLCJ1cGRhdGVTdGF0dXMiLCJkYXRhIiwiY3VycmVudF90aXRsZSIsIml0ZW0iLCJlbCIsImhhc0F0dHJpYnV0ZSIsImF0dHIiLCJodG1sIiwiY3Vyc29yIiwidmVydGljYWxGaXQiLCJnYWxsZXJ5IiwiZW5hYmxlZCIsImltYWdlIiwidGl0bGVTcmMiLCJ6b29tIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvcGVuZXIiLCJvcGVuZXJFbGVtZW50IiwiaXMiLCJmaW5kIiwiZWFjaCIsImRlbGVnYXRlIiwicHJlbG9hZCIsIm5hdmlnYXRlQnlJbWdDbGljayIsImFycm93TWFya3VwIiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiTW1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQ2FudmFzIiwicG9zaXRpb24iLCJzbGlkaW5nU3VibWVudXMiLCJ0aGVtZSIsImNvdW50ZXJzIiwiYWRkIiwicGFnZVNjcm9sbCIsInNjcm9sbCIsInVwZGF0ZSIsInNjcm9sbEJ1Z0ZpeCIsImZpeCIsImNsb25lIiwicGFnZSIsInNlbGVjdG9yIiwibWVudSIsImluc2VydE1ldGhvZCIsImluc2VydFNlbGVjdG9yIiwic2NyZWVuUmVhZGVyIiwiY2xvc2VNZW51Iiwib3Blbk1lbnUiXSwic291cmNlUm9vdCI6IiJ9