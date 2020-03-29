/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)(".c-post__gallery, .c-post__gallery-gutenberg .wp-block-gallery").slick({
    arrows: false,
    adaptiveHeight: true
  });

  (0, _jquery2.default)(".most_recent_widget").slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind("partial-content-rendered", function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === "_themename_mst_recent_widget") {
        placement.container.find(".most_recent_widget").slick();
      }
    });
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log(987809);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
    if (!(0, _jquery2.default)(e.currentTarget).parents('.sub-menu').length) {
        (0, _jquery2.default)('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    (0, _jquery2.default)(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
    (0, _jquery2.default)(e.currentTarget).removeClass('open');
});

(0, _jquery2.default)('.c-navigation').on('click', '.menu .menu-button', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var menu_button = (0, _jquery2.default)(e.currentTarget);
    var menu_link = menu_button.parent();
    var menu_item = menu_link.parent();
    if (menu_item.hasClass('open')) {
        menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

(0, _jquery2.default)(document).click(function (e) {
    if ((0, _jquery2.default)('.menu-item.open').length) {
        (0, _jquery2.default)('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function (factory) {
    'use strict';

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
            return val >= 0 && val < _.slideCount;
        });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': i + 1 + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ 'tabindex': '0' });
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {

                        if (imageSrcSet) {
                            image.attr('srcset', imageSrcSet);

                            if (imageSizes) {
                                image.attr('sizes', imageSizes);
                            }
                        }

                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                if (imageSrcSet) {
                    image.attr('srcset', imageSrcSet);

                    if (imageSizes) {
                        image.attr('sizes', imageSizes);
                    }
                }

                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches,
            verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').end();

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFjNWVlNDBjYjNkMjQwYTUxYzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsInNsaWNrIiwiYXJyb3dzIiwiYWRhcHRpdmVIZWlnaHQiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRzIiwibGVuZ3RoIiwidHJpZ2dlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwicGFyZW50IiwibWVudV9pdGVtIiwiaGFzQ2xhc3MiLCJhZGQiLCJhdHRyIiwic2libGluZ3MiLCJjbGljayIsImZhY3RvcnkiLCJkZWZpbmUiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImpRdWVyeSIsIiQiLCJTbGljayIsIndpbmRvdyIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiXyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImkiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiaW5pdCIsInByb3RvdHlwZSIsImFjdGl2YXRlQURBIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiY2hpbGRyZW4iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsInBhcnNlSW50IiwiY3JlYXRpb24iLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJpbmRleE9mIiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJ0YWdOYW1lIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJzbGljZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwibCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb24iLCJwb3NpdGlvblByb3BzIiwieCIsInkiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsIm9mZnNldCIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsInZhbHVlIiwiYXJndW1lbnRzIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsd0I7Ozs7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SUFBbEMsQ0FBTjtBQUNKLGdCQUFJLE9BQU9FLEdBQVAsSUFBYyxXQUFsQixFQUErQixPQUFPQSxHQUFQO0FBQ2xDO0FBQ0QsZUFBT3RhLENBQVA7QUFDSCxLQWZEO0FBaUJILENBajdGQyxDQUFELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTFjNWVlNDBjYjNkMjQwYTUxYzUiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJChcIi5jLXBvc3RfX2dhbGxlcnksIC5jLXBvc3RfX2dhbGxlcnktZ3V0ZW5iZXJnIC53cC1ibG9jay1nYWxsZXJ5XCIpLnNsaWNrKHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gIH0pO1xuXG4gICQoXCIubW9zdF9yZWNlbnRfd2lkZ2V0XCIpLnNsaWNrKCk7XG5cbiAgaWYgKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xuICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoXG4gICAgICBcInBhcnRpYWwtY29udGVudC1yZW5kZXJlZFwiLFxuICAgICAgcGxhY2VtZW50ID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMgJiZcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT1cbiAgICAgICAgICAgIFwiX3RoZW1lbmFtZV9tc3RfcmVjZW50X3dpZGdldFwiXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYWNlbWVudC5jb250YWluZXIuZmluZChcIi5tb3N0X3JlY2VudF93aWRnZXRcIikuc2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJjb25zb2xlLmxvZyg5ODc4MDkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICAgaWYoISQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuc3ViLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4nKS5maW5kKCc+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbWVudV9idXR0b24gPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgbGV0IG1lbnVfbGluayA9IG1lbnVfYnV0dG9uLnBhcmVudCgpO1xuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XG4gICAgaWYobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICBtZW51X2l0ZW0uYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICAgIGlmKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiXSwic291cmNlUm9vdCI6IiJ9