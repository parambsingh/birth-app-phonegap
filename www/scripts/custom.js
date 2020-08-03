$(window).on('load', function () {
    $('.menu').css('display', 'block'), $('#preloader').addClass('preloader-hide')
}), $(document).ready(function () {
    'use strict';
    var _0x4561x1, _0x4561x2, _0x4561x3, _0x4561x4, _0x4561x5 = !1;

    function _0x4561x6() {
        var _0x4561x1 = [['none', '', '', ''], ['plum', '#6772A4', '#6772A4', '#3D3949'], ['violet', '#673c58', '#673c58', '#492D3D'], ['magenta3', '#413a65', '#413a65', '#2b2741'], ['red3', '#c62f50', '#6F1025', '#6F1025'], ['green3', '#6eb148', '#2d7335', '#2d7335'], ['pumpkin', '#E96A57', '#C15140', '#C15140'], ['dark3', '#535468', '#535468', '#343341'], ['red1', '#D8334A', '#BF263C', '#9d0f23'], ['red2', '#ED5565', '#DA4453', '#a71222'], ['orange', '#FC6E51', '#E9573F', '#ce3319'], ['yellow1', '#FFCE54', '#F6BB42', '#e6a00f'], ['yellow2', '#E8CE4D', '#E0C341', '#dbb50c'], ['yellow3', '#CCA64F', '#996A22', '#996A22'], ['green1', '#A0D468', '#8CC152', '#5ba30b'], ['green2', '#2ECC71', '#2ABA66', '#0da24b'], ['mint', '#48CFAD', '#37BC9B', '#0fa781'], ['teal', '#A0CECB', '#7DB1B1', '#158383'], ['aqua', '#4FC1E9', '#3BAFDA', '#0a8ab9'], ['sky', '#188FB6', '#0F5F79', '#0F5F79'], ['blue1', '#4FC1E9', '#3BAFDA', '#0b769d'], ['blue2', '#5D9CEC', '#4A89DC', '#1a64c6'], ['magenta1', '#AC92EC', '#967ADC', '#704dc9'], ['magenta2', '#8067B7', '#6A50A7', '#4e3190'], ['pink1', '#EC87C0', '#D770AD', '#c73c8e'], ['pink2', '#fa6a8e', '#fb3365', '#d30e3f'], ['brown1', '#BAA286', '#AA8E69', '#896b43'], ['brown2', '#8E8271', '#7B7163', '#584934'], ['gray1', '#F5F7FA', '#E6E9ED', '#c2c5c9'], ['gray2', '#CCD1D9', '#AAB2BD', '#88919d'], ['dark1', '#656D78', '#434A54', '#242b34'], ['dark2', '#3C3B3D', '#323133', '#1c191f']];
        'scrollRestoration' in history && (history['scrollRestoration'] = 'manual'), $('a').on('click', function () {
            if ('#' === $(this).attr('href')) {
                return !1
            }
        }), $('.menu-hider').length || $('#page').append(''), $.fn.showMenu = function () {
            $(this).addClass('menu-active'), $('#footer-bar').addClass('footer-menu-hidden'), setTimeout(function () {
                $('.menu-hider').addClass('menu-active')
            }, 250)
        }, $.fn.hideMenu = function () {
            $(this).removeClass('menu-active'), $('#footer-bar').removeClass('footer-menu-hidden'), $('.menu-hider').removeClass('menu-active')
        };
        var _0x4561x2 = $('.menu'), _0x4561x3 = ($('body'), $('.nav-fixed'), $('#footer-bar')),
            _0x4561x4 = $('body').find('.menu-hider'), _0x4561x6 = ($('.close-menu'), $('.header')),
            _0x4561x7 = ($('#page'), $('.page-content'), $('.header, .page-content, #footer-bar')),
            _0x4561x8 = $('a[data-menu]');
        _0x4561x2.each(function () {
            var _0x4561x1 = $(this).data('menu-height'), _0x4561x2 = $(this).data('menu-width');
            $(this).data('menu-active');
            $(this).hasClass('menu-box-right') && $(this).css('width', _0x4561x2), $(this).hasClass('menu-box-left') && $(this).css('width', _0x4561x2), $(this).hasClass('menu-box-bottom') && $(this).css('height', _0x4561x1), $(this).hasClass('menu-box-top') && $(this).css('height', _0x4561x1), $(this).hasClass('menu-box-modal') && $(this).css({
                height: _0x4561x1,
                width: _0x4561x2
            })
        }), _0x4561x8.on('click', function () {
            _0x4561x2.removeClass('menu-active'), _0x4561x4.addClass('menu-active');
            var _0x4561x1 = $(this).data('menu'), _0x4561x3 = $('#' + _0x4561x1),
                _0x4561x5 = $('#' + _0x4561x1).data('menu-effect'), _0x4561x6 = _0x4561x3.data('menu-width'),
                _0x4561x8 = _0x4561x3.data('menu-height');
            $('body').addClass('modal-open'), _0x4561x3.hasClass('menu-header-clear') && _0x4561x4.addClass('menu-active-clear'), _0x4561x3.hasClass('menu-box-bottom') && $('#footer-bar').addClass('footer-menu-hidden'), 'menu-parallax' === _0x4561x5 && (_0x4561x3.hasClass('menu-box-bottom') && _0x4561x7.css('transform', 'translateY(' + _0x4561x8 / 5 * -1 + 'px)'), _0x4561x3.hasClass('menu-box-top') && _0x4561x7.css('transform', 'translateY(' + _0x4561x8 / 5 + 'px)'), _0x4561x3.hasClass('menu-box-left') && _0x4561x7.css('transform', 'translateX(' + _0x4561x6 / 5 + 'px)'), _0x4561x3.hasClass('menu-box-right') && _0x4561x7.css('transform', 'translateX(' + _0x4561x6 / 5 * -1 + 'px)')), 'menu-push' === _0x4561x5 && (_0x4561x3.hasClass('menu-box-bottom') && _0x4561x7.css('transform', 'translateY(' + -1 * _0x4561x8 + 'px)'), _0x4561x3.hasClass('menu-box-top') && _0x4561x7.css('transform', 'translateY(' + _0x4561x8 + 'px)'), _0x4561x3.hasClass('menu-box-left') && _0x4561x7.css('transform', 'translateX(' + _0x4561x6 + 'px)'), _0x4561x3.hasClass('menu-box-right') && _0x4561x7.css('transform', 'translateX(' + -1 * _0x4561x6 + 'px)')), 'menu-push-full' === _0x4561x5 && (_0x4561x3.hasClass('menu-box-left') && _0x4561x7.css('transform', 'translateX(100%)'), _0x4561x3.hasClass('menu-box-right') && _0x4561x7.css('transform', 'translateX(-100%)')), _0x4561x3 = _0x4561x3.addClass('menu-active')
        });
        var _0x4561x9 = $('[data-auto-activate]');

        function _0x4561xa(_0x4561x1, _0x4561x2, _0x4561x3) {
            if (_0x4561x3) {
                var _0x4561x4 = new Date;
                _0x4561x4.setTime(_0x4561x4.getTime() + 48 * _0x4561x3 * 60 * 3600 * 1e3);
                var _0x4561x5 = '; expires=' + _0x4561x4.toGMTString()
            } else {
                _0x4561x5 = ''
            }
            ;document['cookie'] = _0x4561x1 + '=' + _0x4561x2 + _0x4561x5 + '; path=/'
        }

        function _0x4561xb(_0x4561x1) {
            for (var _0x4561x2 = _0x4561x1 + '=', _0x4561x3 = document['cookie'].split(';'), _0x4561x4 = 0; _0x4561x4 < _0x4561x3.length; _0x4561x4++) {
                for (var _0x4561x5 = _0x4561x3[_0x4561x4]; ' ' == _0x4561x5.charAt(0);) {
                    _0x4561x5 = _0x4561x5.substring(1, _0x4561x5.length)
                }
                ;
                if (0 == _0x4561x5.indexOf(_0x4561x2)) {
                    return _0x4561x5.substring(_0x4561x2.length, _0x4561x5.length)
                }
            }
            ;
            return null
        }

        function _0x4561xc(_0x4561x1) {
            _0x4561xa(_0x4561x1, '', -1)
        }

        function _0x4561xd() {
            $('body').append(''), setTimeout(function () {
                $('body').find('#transitions-remove').remove()
            }, 10);
        }

        _0x4561x9.length && (_0x4561x9.addClass('menu-active'), _0x4561x4.addClass('menu-active')), $('body').removeClass('modal-open'), $('.menu-hider, .close-menu, .menu-close').on('click', function () {
            return _0x4561x2.removeClass('menu-active'), _0x4561x4.removeClass('menu-active menu-active-clear'), _0x4561x7.css('transform', 'translate(0,0)'), _0x4561x4.css('transform', 'translate(0,0)'), $('#footer-bar').removeClass('footer-menu-hidden'), $('body').removeClass('modal-open'), !1
        });
        var _0x4561xe = $('[data-toggle-theme-switch], [data-toggle-theme], [data-toggle-theme-switch] input, [data-toggle-theme] input');

        function _0x4561xf() {
            $('body').removeClass('theme-light').addClass('theme-dark'), $('#dark-mode-detected').removeClass('disabled'), _0x4561xc('sticky_light_mode'), _0x4561xa('sticky_dark_mode', !0, 1)
        }

        function _0x4561x10() {
            $('body').removeClass('theme-dark').addClass('theme-light'), $('#dark-mode-detected').removeClass('disabled'), _0x4561xc('sticky_dark_mode'), _0x4561xa('sticky_light_mode', !0, 1)
        }

        function _0x4561x11() {
            const _0x4561x1 = window.matchMedia('(prefers-color-scheme: dark)')['matches'],
                _0x4561x2 = window.matchMedia('(prefers-color-scheme: light)')['matches'];
            window.matchMedia('(prefers-color-scheme: no-preference)')['matches'];
            window.matchMedia('(prefers-color-scheme: dark)').addListener((_0x4561x1) => _0x4561x1['matches'] && _0x4561xf()), window.matchMedia('(prefers-color-scheme: light)').addListener((_0x4561x1) => _0x4561x1['matches'] && _0x4561x10()), window.matchMedia('(prefers-color-scheme: no-preference)').addListener((_0x4561x1) => _0x4561x1['matches'] && void($('#manual-mode-detected').removeClass('disabled'))), _0x4561x1 && _0x4561xf(), _0x4561x2 && _0x4561x10()
        }

        $('[data-toggle-theme], [data-toggle-theme-switch]').on('click', function () {
            _0x4561xd(), $('body').toggleClass('theme-light theme-dark'), setTimeout(function () {
                $('body').hasClass('detect-theme') && $('body').removeClass('detect-theme'), $('body').hasClass('theme-light') && (_0x4561xc('sticky_dark_mode'), _0x4561xe.prop('checked', !1), _0x4561xa('sticky_light_mode', !0, 1)), $('body').hasClass('theme-dark') && (_0x4561xc('sticky_light_mode'), _0x4561xe.prop('checked', !0), _0x4561xa('sticky_dark_mode', !0, 1))
            }, 150)
        }), _0x4561xb('sticky_dark_mode') && (_0x4561xe.prop('checked', !0), $('body').removeClass('theme-light').addClass('theme-dark')), _0x4561xb('sticky_light_mode') && (_0x4561xe.prop('checked', !1), $('body').removeClass('theme-dark').addClass('theme-light')), $('body').hasClass('detect-theme') && _0x4561x11(), $('.detect-dark-mode').on('click', function () {
            return $('body').addClass('detect-theme'), _0x4561x11(), !1
        }), $('.disable-auto-dark-mode').on('click', function () {
            return $('body').removeClass('detect-theme'), $(this).remove(), !1
        }), $('.footer-bar-2, .footer-bar-4, .footer-bar-5').length && ($('.footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong').length || $('.footer-bar-2 .active-nav, .footer-bar-4 .active-nav, .footer-bar-5 .active-nav').append('')), $('.back-button, [data-back-button]').on('click', function () {
            window['history'].go(-1)
        });
        var _0x4561x12 = $('.copyright-year, #copyright-year'), _0x4561x13 = (new Date).getFullYear();
        _0x4561x12.html(_0x4561x13);
        var _0x4561x14 = $('.back-to-top, [data-back-to-top], .back-to-top-badge, .back-to-top-icon'),
            _0x4561x15 = $('.back-to-top-badge, .back-to-top-icon');

        function _0x4561x16() {
            _0x4561x15.removeClass('back-to-top-visible')
        }

        _0x4561x14.on('click', function (_0x4561x1) {
            return _0x4561x1.preventDefault(), $('html, body, .page-content').animate({scrollTop: 0}, 350), !1
        });
        var _0x4561x17 = $('.scroll-ad');

        function _0x4561x18() {
            _0x4561x17.removeClass('scroll-ad-visible')
        }

        $(window).on('scroll', function () {
            var _0x4561x1 = document.body.scrollHeight, _0x4561x2 = $(this).scrollTop() <= 150,
                _0x4561x3 = $(this).scrollTop() >= 0,
                _0x4561x4 = ($(this).scrollTop(), $(this).scrollTop() >= _0x4561x1 - ($(window).height() + 300));
            !0 === _0x4561x2 ? (_0x4561x16(), _0x4561x18(), $('.header-auto-show').removeClass('header-active')) : !0 === _0x4561x3 && (_0x4561x15.addClass('back-to-top-visible'), _0x4561x17.addClass('scroll-ad-visible'), $('.header-auto-show').addClass('header-active')), 1 == _0x4561x4 && (_0x4561x16(), _0x4561x18())
        });
        var _0x4561x19, _0x4561x1a = $('.tab-controls');
        _0x4561x1a.length && (_0x4561x19 = $('.tab-controls a'), _0x4561x1a.each(function () {
            var _0x4561x1 = $(this).parent().find('.tab-controls').data('tab-items'),
                _0x4561x2 = ($(this).width(), $(this).find('a[data-tab-active]')),
                _0x4561x3 = $('#' + _0x4561x2.data('tab')), _0x4561x4 = $(this).data('tab-active');
            $(this).find('a[data-tab]').css('width', 100 / _0x4561x1 + '%'), _0x4561x2.addClass(_0x4561x4), _0x4561x2.addClass('color-white'), _0x4561x3.slideDown(0)
        }), _0x4561x19.on('click', function () {
            var _0x4561x1 = $(this).data('tab'), _0x4561x2 = $('#' + _0x4561x1),
                _0x4561x3 = $(this).parent().parent().find('.tab-content'),
                _0x4561x4 = (_0x4561x3 = $(this).parent().parent().parent().find('.tab-content'), $(this).data('tab-order'), $(this).parent().parent().find('.tab-controls').data('tab-active'));
            $(this).parent().find(_0x4561x19).removeClass(_0x4561x4).removeClass('color-white'), $(this).addClass(_0x4561x4).addClass('color-white'), $(this).parent().find('a').removeClass('no-click'), $(this).addClass('no-click'), _0x4561x3.slideUp(250), _0x4561x2.slideDown(250)
        })), $('.text-size-increase').click(function () {
            $('.text-size-changer *').css('font-size', '+=1')
        }), $('.text-size-decrease').click(function () {
            $('.text-size-changer *').css('font-size', '-=1')
        }), $('.text-size-default').click(function () {
            $('.text-size-changer *').css('font-size', '')
        }), $('[data-search]').on('keyup', function () {
            var _0x4561x1 = $(this).val();
            '' != _0x4561x1 ? ($('.search-header a').removeClass('disabled'), $('.search-trending').addClass('disabled'), $('.search-results').removeClass('disabled-search-list'), $('[data-filter-item]').addClass('disabled-search-item'), $('[data-filter-item][data-filter-name*="' + _0x4561x1.toLowerCase() + '"]').removeClass('disabled-search-item')) : ($('.search-header a').removeClass('disabled'), $('.search-trending').removeClass('disabled'), $('.search-results').addClass('disabled-search-list'), $('[data-filter-item]').removeClass('disabled-search-item'));
            var _0x4561x2 = $('.search-no-results');
            $('.search-results').find('.search-result-list.disabled-search-item').length ? _0x4561x2.removeClass('disabled') : _0x4561x2.addClass('disabled')
        }), $('.search-trending a').on('click', function () {
            jQuery.Event('keydown')['which'] = 32, $('.search-trending').addClass('disabled');
            var _0x4561x1 = $(this).find('span').text().toLowerCase();
            return $('.search-header a').removeClass('disabled'), $('.search-header input').val(_0x4561x1), $('.search-results').removeClass('disabled-search-list'), $('[data-filter-item]').addClass('disabled-search-item'), $('[data-filter-item][data-filter-name*="' + _0x4561x1.toLowerCase() + '"]').removeClass('disabled-search-item'), $('.menu-search-trending').addClass('disabled-search-item'), !1
        }), $('.search-header a').on('click', function () {
            return $('.search-trending').removeClass('disabled'), $('.menu-search-trending').removeClass('disabled-search-item'), $('.search-results').addClass('disabled-search-list'), $('.search-header input').val(''), $(this).addClass('disabled'), !1
        }), setTimeout(function () {
            $('.user-slider').owlCarousel({
                loop: !1,
                margin: 20,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !1,
                dots: !1,
                autoplayTimeout: 4e3
            }), $('.single-slider').owlCarousel({
                loop: !0,
                margin: 20,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 4e3
            }), $('.cover-slider').owlCarousel({
                loop: !0,
                margin: 0,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 6e3
            }), $('.double-slider').owlCarousel({
                loop: !0,
                margin: 20,
                nav: !1,
                lazyLoad: !1,
                items: 2,
                autoplay: !0,
                autoplayTimeout: 4e3
            }), $('.task-slider').owlCarousel({
                loop: !0,
                margin: 20,
                nav: !1,
                stagePadding: 50,
                lazyLoad: !0,
                items: 2,
                autoplay: !1,
                autoplayTimeout: 4e3
            }), $('.next-slide, .next-slide-arrow, .next-slide-text, .cover-next').on('click', function () {
                $(this).parent().find('.owl-carousel').trigger('next.owl.carousel')
            }), $('.prev-slide, .prev-slide-arrow, .prev-slide-text, .cover-prev').on('click', function () {
                $(this).parent().find('.owl-carousel').trigger('prev.owl.carousel')
            }), $('.next-slide-user').on('click', function () {
                $(this).closest('.owl-carousel').trigger('next.owl.carousel')
            }), $('.prev-slide-user').on('click', function () {
                $(this).closest('.owl-carousel').trigger('prev.owl.carousel')
            })
        }, 10), setTimeout(function () {
            $('.owl-prev, .owl-next').addClass('bg-highlight')
        });
        var _0x4561x1b = {
            Android: function () {
                return navigator.userAgent.match(/Android/i)
            }, iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            }, Windows: function () {
                return navigator.userAgent.match(/IEMobile/i)
            }, any: function () {
                return _0x4561x1b.Android() || _0x4561x1b.iOS() || _0x4561x1b.Windows()
            }
        };
        _0x4561x1b.any() || ($('body').addClass('is-not-ios'), $('.show-ios, .show-android').addClass('disabled'), $('.show-no-device').removeClass('disabled')), _0x4561x1b.Android() && ($('body').addClass('is-not-ios'), $('head').append(' />'), $('.show-android').removeClass('disabled'), $('.show-ios, .show-no-device, .simulate-android, .simulate-iphones').addClass('disabled')), _0x4561x1b.iOS() && ($('body').addClass('is-ios'), $('.show-ios').removeClass('disabled'), $('.show-android, .show-no-device, .simulate-android, .simulate-iphones').addClass('disabled')), $('[data-toast]').on('click', function () {
            return $('.toast, .snackbar-toast, .notification').toast('hide'), $('#' + $(this).data('toast')).toast('show'), !1
        }), $('[data-dismiss]').on('click', function () {
            var _0x4561x1 = $(this).data('dismiss');
            $('#' + _0x4561x1).toast('hide')
        }), $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        }), $('[data-toggle="collapse"]').length && $('[data-toggle="collapse"]').on('click', function (_0x4561x1) {
            _0x4561x1.preventDefault()
        }), $('.ios-input, .android-input, .classic-input').on('click', function () {
            var _0x4561x1 = $(this).attr('id'), _0x4561x2 = $('[data-switch=' + _0x4561x1 + ']');
            _0x4561x2.length && _0x4561x2.stop().animate({height: 'toggle'}, 250)
        }), $('[data-activate]').on('click', function () {
            var _0x4561x1 = $(this).data('activate');
            $('#' + _0x4561x1).trigger('click')
        }), $('[data-trigger-switch]').on('click', function () {
            var _0x4561x1 = $(this).data('trigger-switch');
            $('#' + _0x4561x1).prop('checked') ? $('#' + _0x4561x1).prop('checked', !1) : $('#' + _0x4561x1).prop('checked', !0)
        });
        var _0x4561x1c, _0x4561x1d, _0x4561x1e, _0x4561x1f, _0x4561x20, _0x4561x21, _0x4561x22 = $('.business-hours');

        function _0x4561x23() {
            if ($('.is-on-homescreen').length) {
                var _0x4561x1 = screen.height;
                $('.page-content, #page').css('min-height', _0x4561x1)
            }
            ;
            if (!$('.is-on-homescreen').length) {
                _0x4561x1 = window['innerHeight'];
                $('.page-content, #page').css('min-height', _0x4561x1)
            }
            ;$('[data-card-height]').each(function () {
                var _0x4561x2 = $(this).data('card-height'), _0x4561x4 = $('.header').height(),
                    _0x4561x5 = $('#footer-bar').height();
                $(this).css('height', _0x4561x2), 'cover' == _0x4561x2 && (_0x4561x6.length && _0x4561x3.length ? ($(this).css('height', _0x4561x1 - _0x4561x4 - _0x4561x5), $('.map-full, .map-full iframe').css('height', _0x4561x1 - _0x4561x4 - _0x4561x5 + 14)) : ($(this).css('height', _0x4561x1), $('.map-full, .map-full iframe').css('height', _0x4561x1)))
            })
        }

        if (_0x4561x22.length && function () {
            if (_0x4561x22.length) {
                var _0x4561x1 = new Date(Date.now()),
                    _0x4561x2 = 'day-' + (new Date).toLocaleDateString('en', {weekday: 'long'}).toLowerCase(),
                    _0x4561x3 = (_0x4561x1.getHours(), _0x4561x1.getMinutes(), $('.' + _0x4561x2)),
                    _0x4561x4 = _0x4561x22.data('closed-message').toString(),
                    _0x4561x5 = _0x4561x22.data('closed-message-under').toString(),
                    _0x4561x6 = _0x4561x22.data('opened-message').toString(),
                    _0x4561x7 = _0x4561x22.data('opened-message-under').toString();
                $('[data-monday]').data('open'), $('[data-monday]').data('close'), $('.business-hours').openingTimes({
                    openingTimes: {
                        Monday: ['08:00', '17:00'],
                        Tuesday: ['08:00', '17:30'],
                        Wednesday: ['08:00', '17:00'],
                        Thursday: ['08:00', '17:00'],
                        Friday: ['09:00', '18:55'],
                        Saturday: ['09:00', '12:00']
                    }, openClass: 'bg-green1-dark is-business-opened', closedClass: 'bg-red2-dark is-business-closed'
                }), _0x4561x22.hasClass('is-business-opened') ? ($('.show-business-opened').removeClass('disabled'), $('.show-business-closed').addClass('disabled'), _0x4561x22.find('h1').html(_0x4561x6), _0x4561x22.find('p').html(_0x4561x7), _0x4561x22.find('#business-hours-mail').remove(), _0x4561x3.addClass('bg-green1-dark')) : ($('.show-business-opened').addClass('disabled'), $('.show-business-closed').removeClass('disabled'), _0x4561x22.find('h1').html(_0x4561x4), _0x4561x22.find('p').html(_0x4561x5), _0x4561x22.find('#business-hours-call').remove(), _0x4561x3.addClass('bg-red2-dark')), _0x4561x3.find('p').addClass('color-white')
            }
        }(), function (_0x4561x1, _0x4561x2, _0x4561x3) {
            if (_0x4561x3 in _0x4561x2 && _0x4561x2[_0x4561x3]) {
                var _0x4561x4, _0x4561x5 = _0x4561x1['location'], _0x4561x6 = /^(a|html)$/i;
                _0x4561x1.addEventListener('click', function (_0x4561x1) {
                    for (_0x4561x4 = _0x4561x1['target']; !_0x4561x6.test(_0x4561x4['nodeName']);) {
                        _0x4561x4 = _0x4561x4['parentNode']
                    }
                    ;'href' in _0x4561x4 && (_0x4561x4['href'].indexOf('http') || ~_0x4561x4['href'].indexOf(_0x4561x5['host'])) && (_0x4561x1.preventDefault(), _0x4561x5['href'] = _0x4561x4['href'])
                }, !1), $('.add-to-home').addClass('disabled'), $('body').addClass('is-on-homescreen')
            }
        }(document, window['navigator'], 'standalone'), $('.simulate-android-badge').on('click', function () {
            $('.add-to-home').removeClass('add-to-home-ios').addClass('add-to-home-visible add-to-home-android')
        }), $('.simulate-iphone-badge').on('click', function () {
            $('.add-to-home').removeClass('add-to-home-android').addClass('add-to-home-visible add-to-home-ios')
        }), $('.add-to-home').on('click', function () {
            $('.add-to-home').removeClass('add-to-home-visible')
        }), $('.simulate-android-banner').on('click', function () {
            $('#menu-install-pwa-android, .menu-hider').addClass('menu-active')
        }), $('.simulate-ios-banner').on('click', function () {
            $('#menu-install-pwa-ios, .menu-hider').addClass('menu-active')
        }), _0x4561x23(), $(window).resize(function () {
            _0x4561x23()
        }), $('.show-map, .hide-map').on('click', function () {
            $('.map-full .caption').toggleClass('deactivate-map'), $('.map-but-1, .map-but-2').toggleClass('deactivate-map'), $('.map-full .hide-map').toggleClass('activate-map')
        }), $('.card-scale').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('card-scale-image')
        }), $('.card-grayscale').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('card-grayscale-image')
        }), $('.card-rotate').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('card-rotate-image')
        }), $('.card-blur').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('card-blur-image')
        }), $('.card-hide').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('.card-center, .card-bottom, .card-top, .card-overlay').toggleClass('card-hide-image')
        }), $('#reading-progress-text').each(function (_0x4561x1) {
            var _0x4561x2 = $(this).text().split(' ').length, _0x4561x3 = Math.floor(_0x4561x2 / 250),
                _0x4561x4 = _0x4561x2 % 60;
            $('.reading-progress-words').append(_0x4561x2), $('.reading-progress-time').append(_0x4561x3 + ':' + _0x4561x4)
        }), $('[data-auto-show-ad]').length) {
            var _0x4561x24 = $('[data-auto-show-ad]').data('auto-show-ad');
            setTimeout(function () {
                $('[data-auto-show-ad]').trigger('click')
            }, 1e3 * _0x4561x24)
        }
        ;$('[data-timed-ad]').on('click', function () {
            var _0x4561x1 = $(this).data('timed-ad'), _0x4561x2 = $('#' + $(this).data('menu'));
            _0x4561x4.addClass('no-click'), _0x4561x2.find('.ad-time-close').addClass('no-click'), _0x4561x2.find('.ad-time-close i').addClass('disabled'), _0x4561x2.find('.ad-time-close span').removeClass('disabled');
            var _0x4561x3 = setInterval(function () {
                if (--_0x4561x1 <= 0) {
                    return _0x4561x4.removeClass('no-click'), _0x4561x2.find('.ad-time-close').removeClass('no-click'), _0x4561x2.find('.ad-time-close i').removeClass('disabled'), _0x4561x2.find('.ad-time-close span').addClass('disabled'), void(clearInterval(_0x4561x3))
                }
                ;_0x4561x2.find('.ad-time-close span').html(_0x4561x1)
            }, 1e3)
        }), _0x4561x1c = '01/19/2030 03:14:07 AM', _0x4561x1c = (_0x4561x1c = new Date(_0x4561x1c)).getTime(), isNaN(_0x4561x1c) || setInterval(function () {
            var _0x4561x1 = new Date,
                _0x4561x1 = new Date(_0x4561x1.getUTCFullYear(), _0x4561x1.getUTCMonth(), _0x4561x1.getUTCDate(), _0x4561x1.getUTCHours(), _0x4561x1.getUTCMinutes(), _0x4561x1.getUTCSeconds()),
                _0x4561x2 = parseInt((_0x4561x1c - _0x4561x1.getTime()) / 1e3);
            _0x4561x2 >= 0 && (_0x4561x1d = parseInt(_0x4561x2 / 31536e3), _0x4561x2 %= 31536e3, _0x4561x1e = parseInt(_0x4561x2 / 86400), _0x4561x2 %= 86400, _0x4561x1f = parseInt(_0x4561x2 / 3600), _0x4561x2 %= 3600, _0x4561x20 = parseInt(_0x4561x2 / 60), _0x4561x2 %= 60, _0x4561x21 = parseInt(_0x4561x2), $('.countdown').length && ($('.countdown #years')[0].innerHTML = parseInt(_0x4561x1d, 10), $('.countdown #days')[0].innerHTML = parseInt(_0x4561x1e, 10), $('.countdown #hours')[0].innerHTML = ('0' + _0x4561x1f).slice(-2), $('.countdown #minutes')[0].innerHTML = ('0' + _0x4561x20).slice(-2), $('.countdown #seconds')[0].innerHTML = ('0' + _0x4561x21).slice(-2)))
        }, 1), $('.accordion-btn').on('click', function () {
            $(this).addClass('no-click'), $('.accordion-icon').removeClass('rotate-180'), 'true' == $(this).attr('aria-expanded') ? $(this).parent().find('.accordion-icon').removeClass('rotate-180') : $(this).parent().find('.accordion-icon').addClass('rotate-180'), setTimeout(function () {
                $('.accordion-btn').removeClass('no-click')
            }, 250)
        }), $('.caption-scale').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('caption-scale-image')
        }), $('.caption-grayscale').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('caption-grayscale-image')
        }), $('.caption-rotate').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('caption-rotate-image')
        }), $('.caption-blur').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('img').toggleClass('caption-blur-image')
        }), $('.caption-hide').unbind().bind('mouseenter mouseleave touchstart touchend', function () {
            $(this).find('.caption-center, .caption-bottom, .caption-top, .caption-overlay').toggleClass('caption-hide-image')
        }), $('.upload-file').length && $('.upload-file').change(function (_0x4561x1) {
            !function (_0x4561x1) {
                if (_0x4561x1['files'] && _0x4561x1['files'][0]) {
                    var _0x4561x2 = new FileReader;
                    _0x4561x2.onload = function (_0x4561x1) {
                        $('.file-data img').attr('src', _0x4561x1['target']['result']), $('.file-data img').attr('class', 'img-fluid rounded-xs mt-4')
                    }, _0x4561x2.readAsDataURL(_0x4561x1['files'][0])
                }
            }(this), _0x4561x1['target']['files'][0]['name'], $('.upload-file-data').removeClass('disabled'), $('.upload-file-name').html(_0x4561x1['target']['files'][0]['name']), $('.upload-file-modified').html(_0x4561x1['target']['files'][0]['lastModifiedDate']), $('.upload-file-size').html(_0x4561x1['target']['files'][0]['size'] / 1e3 + 'kb'), $('.upload-file-type').html(_0x4561x1['target']['files'][0]['type'])
        }), $('.todo-list').length && ($('.todo-list a').each(function () {
            $(this).find('.todo-icon').hasClass('far fa-square') ? $(this).removeClass('opacity-70') : $(this).addClass('opacity-70')
        }), $('.todo-list a').on('click', function () {
            $(this).find('.todo-icon').toggleClass('far fa-square fa fa-check-square color-green1-dark'), $(this).find('.todo-icon').hasClass('far fa-square') ? $(this).removeClass('opacity-70') : $(this).addClass('opacity-70')
        })), $('.check-age').length && (console.log('active'), $('.check-age').on('click', function () {
            var _0x4561x1 = $('#date-birth-day').val(), _0x4561x2 = $('#date-birth-month').val(),
                _0x4561x3 = $('#date-birth-year').val(), _0x4561x4 = new Date;
            _0x4561x4.setFullYear(_0x4561x3, _0x4561x2 - 1, _0x4561x1);
            var _0x4561x5 = new Date, _0x4561x6 = new Date;
            return _0x4561x6.setFullYear(_0x4561x4.getFullYear() + 18, _0x4561x2 - 1, _0x4561x1), _0x4561x5 - _0x4561x6 > 0 ? (console.log('above 18'), $('#menu-age').removeClass('menu-active'), $('#menu-age-okay').addClass('menu-active')) : ($('#menu-age').removeClass('menu-active'), $('#menu-age-fail').addClass('menu-active')), !0
        })), $('.get-location').length && ('geolocation' in navigator ? $('.location-support').html('Your browser and device support Geolocation.') : $('.location-support').html('Your browser and device support Geolocation.'), $('.get-location').on('click', function () {
            $(this).addClass('disabled'), function () {
                const _0x4561x1 = document.querySelector('.location-coordinates');
                navigator.geolocation ? (_0x4561x1['textContent'] = 'Locating', navigator.geolocation.getCurrentPosition(function (_0x4561x2) {
                    const _0x4561x3 = _0x4561x2['coords']['latitude'], _0x4561x4 = _0x4561x2['coords']['longitude'];
                    _0x4561x1.innerHTML = 'Longitude: ' + _0x4561x4 + 'Latitude: ' + _0x4561x3;
                    var _0x4561x5 = 'http://maps.google.com/maps?q=', _0x4561x6 = _0x4561x3 + ',',
                        _0x4561x7 = _0x4561x5 + _0x4561x6 + _0x4561x4 + '&z=18&t=h&output=embed',
                        _0x4561x8 = _0x4561x5 + _0x4561x6 + _0x4561x4 + '&z=18&t=h';
                    $('.location-map').after(''), $('.location-map').parent().after(' View on Google Maps')
                }, function () {
                    _0x4561x1['textContent'] = 'Unable to retrieve your location'
                })) : _0x4561x1['textContent'] = 'Geolocation is not supported by your browser'
            }()
        }));
        var _0x4561x25, _0x4561x26, _0x4561x27 = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
            _0x4561x28 = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
            _0x4561x29 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/, _0x4561x2a = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
            _0x4561x2b = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/,
            _0x4561x2c = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/, _0x4561x2d = '', _0x4561x2e = '';

        function _0x4561x2f() {
            $('.offline-message').addClass('offline-message-active'), $('.online-message').removeClass('online-message-active'), setTimeout(function () {
                $('.offline-message').removeClass('offline-message-active')
            }, 300)
        }

        function _0x4561x30() {
            $('.online-message').addClass('online-message-active'), $('.offline-message').removeClass('offline-message-active'), setTimeout(function () {
                $('.online-message').removeClass('online-message-active')
            }, 300)
        }

        $('.input-required input, .input-required select, .input-required textarea').on('focusin keyup', function () {
            var _0x4561x1 = $(this).parent().find('span').text();
            $(this).val() != _0x4561x1 && '' != $(this).val() && $(this).parent().find('span').addClass('input-style-1-active').removeClass('input-style-1-inactive'), '' === $(this).val() && $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active')
        }), $('.input-required input, .input-required select, .input-required textarea').on('focusout', function () {
            $(this).parent().find('span').text();
            '' === $(this).val() && $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active'), $(this).parent().find('span').addClass('input-style-1-inactive')
        }), $('.input-required select').on('focusout', function () {
            var _0x4561x1 = $(this)[0]['value'];
            'default' === _0x4561x1 && ($(this).parent().find('em').html(_0x4561x2e), $(this).parent().find('span').removeClass('input-style-1-inactive input-style-1-active')), 'default' != _0x4561x1 && $(this).parent().find('em').html(_0x4561x2d)
        }), $('.input-required input[type="email"]').on('focusout', function () {
            _0x4561x27.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), $('.input-required input[type="tel"]').on('focusout', function () {
            _0x4561x28.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), $('.input-required input[type="password"]').on('focusout', function () {
            _0x4561x2a.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), $('.input-required input[type="url"]').on('focusout', function () {
            _0x4561x2b.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), $('.input-required input[type="name"]').on('focusout', function () {
            _0x4561x29.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), $('.input-required textarea').on('focusout', function () {
            _0x4561x2c.test($(this).val()) ? $(this).parent().find('em').html(_0x4561x2d) : '' === $(this).val() ? $(this).parent().find('em').html('(required)') : $(this).parent().find('em').html(_0x4561x2e)
        }), Date['prototype'].toDateInputValue = function () {
            var _0x4561x1 = new Date(this);
            return _0x4561x1.setMinutes(this.getMinutes() - this.getTimezoneOffset()), _0x4561x1.toJSON().slice(0, 10)
        }, $('input[type="date"]').val((new Date).toDateInputValue()), Date['prototype'].toDateInputValue = function () {
            var _0x4561x1 = new Date(this);
            return _0x4561x1.setMinutes(this.getMinutes() - this.getTimezoneOffset()), _0x4561x1.toJSON().slice(0, 10)
        },
            $('input[type="date"]').val((new Date).toDateInputValue()),
            //$('.offline-message').length || ($('body').append('No internet connection detected'),
            //$('body').append('You are back online')),
        $('.offline-message').length || ($('body').append(''),
            $('body').append('')),
            $('.simulate-offline').on('click', function () {
                _0x4561x2f()
            }), $('.simulate-online').on('click', function () {
            _0x4561x30()
        }), window.addEventListener('online', function (_0x4561x1) {
            navigator['onLine'], _0x4561x30(), console.log('Connection: Online')
        }), window.addEventListener('offline', function (_0x4561x1) {
            _0x4561x2f(), console.log('Connection: Offline')
        }), $('.generate-qr-result, .generate-qr-auto').length && (_0x4561x25 = window['location']['href'], _0x4561x26 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=', $('.generate-qr-auto').attr('src', _0x4561x26 + _0x4561x25), $('.generate-qr-button').on('click', function () {
            if ($(this).parent().find('.fa').hasClass('fa-exclamation-triangle')) {
                console.log('Invalid URL')
            } else {
                var _0x4561x1 = $('.generate-qr-input').val();
                '' == !_0x4561x1 && ($('.generate-qr-result').empty(), setTimeout(function () {
                    $('.generate-qr-result').append('img' + _0x4561x1 + '')
                }, 30))
            }
        })), $('[data-vibrate]').length && ($('[data-vibrate]').on('click', function () {
            var _0x4561x1 = $(this).data('vibrate');
            window['navigator'].vibrate(_0x4561x1)
        }), $('.start-vibrating').on('click', function () {
            var _0x4561x1 = $('.vibrate-demo').val();
            window['navigator'].vibrate(_0x4561x1)
        }), $('.stop-vibrating').on('click', function () {
            window['navigator'].vibrate(0), $('.vibrate-demo').val('')
        }));
        var _0x4561x31 = window['location']['href'], _0x4561x32 = document['title'];
        $('.shareToFacebook').prop('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x4561x31), $('.shareToLinkedIn').prop('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x4561x31 + '&title=' + _0x4561x32 + '&summary=&source='), $('.shareToTwitter').prop('href', 'https://twitter.com/home?status=' + _0x4561x31), $('.shareToPinterest').prop('href', 'https://pinterest.com/pin/create/button/?url=' + _0x4561x31), $('.shareToWhatsApp').prop('href', 'whatsapp://send?text=' + _0x4561x31), $('.shareToMail').prop('href', 'mailto:?body=' + _0x4561x31);
        var _0x4561x33 = $('.preload-img');
        $(function () {
            _0x4561x33.lazyload({threshold: 500})
        }), $('[data-lightbox]').addClass('default-link'), lightbox.option({
            alwaysShowNavOnTouchDevices: !0,
            resizeDuration: 200,
            wrapAround: !1
        }), $('#lightbox').hammer().on('swipe', function (_0x4561x1) {
            4 === _0x4561x1['gesture']['direction'] ? $('#lightbox a.lb-prev').trigger('click') : 2 === _0x4561x1['gesture']['direction'] && $('#lightbox a.lb-next').trigger('click')
        }), $('.gallery-filter').length > 0 && ($('.gallery-filter').filterizr(), $('.gallery-filter-active').addClass('color-highlight')), $('.gallery-filter-controls li').on('click', function () {
            $('.gallery-filter-controls li').removeClass('gallery-filter-active color-highlight'), $(this).addClass('gallery-filter-active color-highlight')
        });
        var _0x4561x34 = $('.gallery-views'), _0x4561x35 = $('.gallery-view-controls a'),
            _0x4561x36 = $('.gallery-view-1-activate'), _0x4561x37 = $('.gallery-view-2-activate'),
            _0x4561x38 = $('.gallery-view-3-activate');
        _0x4561x36.on('click', function () {
            _0x4561x35.removeClass('color-highlight'), $(this).addClass('color-highlight'), _0x4561x34.removeClass().addClass('gallery-views gallery-view-1')
        }), _0x4561x37.on('click', function () {
            _0x4561x35.removeClass('color-highlight'), $(this).addClass('color-highlight'), _0x4561x34.removeClass().addClass('gallery-views gallery-view-2')
        }), _0x4561x38.on('click', function () {
            _0x4561x35.removeClass('color-highlight'), $(this).addClass('color-highlight'), _0x4561x34.removeClass().addClass('gallery-views gallery-view-3')
        });
        var _0x4561x39 = $('[data-search]');
        _0x4561x39.length && _0x4561x39.on('keyup', function () {
            var _0x4561x1 = $(this).val();
            $(this).parent().parent().find('[data-filter-item]'), '' != _0x4561x1 ? ($('.search-results').removeClass('disabled-search-list'), $('[data-filter-item]').addClass('disabled-search'), $('[data-filter-item][data-filter-name*="' + _0x4561x1.toLowerCase() + '"]').removeClass('disabled-search')) : ($('.search-results').addClass('disabled-search-list'), $('[data-filter-item]').removeClass('disabled-search'))
        });
        var _0x4561x3a, _0x4561x3b, _0x4561x3c, _0x4561x3d, _0x4561x3e = 'false';
        if (jQuery(document).ready(function (_0x4561x1) {
            function _0x4561x2(_0x4561x2, _0x4561x3) {
                _0x4561x1('.formValidationError').hide(), _0x4561x1('.fieldHasError').removeClass('fieldHasError'), _0x4561x1('#' + _0x4561x2 + ' .requiredField').each(function (_0x4561x3) {
                    if ('' == _0x4561x1(this).val() || _0x4561x1(this).val() == _0x4561x1(this).attr('data-dummy')) {
                        return _0x4561x1(this).val(_0x4561x1(this).attr('data-dummy')), _0x4561x1(this).focus(), _0x4561x1(this).addClass('fieldHasError'), _0x4561x1('#' + _0x4561x1(this).attr('id') + 'Error').fadeIn(300), !1
                    }
                    ;
                    if (_0x4561x1(this).hasClass('requiredEmailField')) {
                        var _0x4561x4 = '#' + _0x4561x1(this).attr('id');
                        if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(_0x4561x1(_0x4561x4).val())) {
                            return _0x4561x1(_0x4561x4).focus(), _0x4561x1(_0x4561x4).addClass('fieldHasError'), _0x4561x1(_0x4561x4 + 'Error2').fadeIn(300), !1
                        }
                    }
                    ;'false' == _0x4561x3e && _0x4561x3 == _0x4561x1('#' + _0x4561x2 + ' .requiredField').length - 1 && function (_0x4561x2, _0x4561x3) {
                        _0x4561x3e = 'true';
                        var _0x4561x4 = _0x4561x1('#' + _0x4561x2).serialize();
                        _0x4561x1.post(_0x4561x1('#' + _0x4561x2).attr('action'), _0x4561x4, function (_0x4561x3) {
                            _0x4561x1('#' + _0x4561x2).addClass('disabled'), $('.contact-form').addClass('disabled'), _0x4561x1('.formSuccessMessageWrap').fadeIn(500)
                        })
                    }(_0x4561x2)
                })
            }

            _0x4561x1('.formSuccessMessageWrap').hide(0), _0x4561x1('.formValidationError').fadeOut(0), _0x4561x1('input[type="text"], input[type="password"], textarea').focus(function () {
                _0x4561x1(this).val() == _0x4561x1(this).attr('data-dummy') && _0x4561x1(this).val('')
            }), _0x4561x1('input, textarea').blur(function () {
                '' == _0x4561x1(this).val() && _0x4561x1(this).val(_0x4561x1(this).attr('data-dummy'))
            }), _0x4561x1('.contactSubmitButton').on('click', function () {
                return _0x4561x2(_0x4561x1(this).attr('data-formId')), !1
            })
        }), $('.chart').length > 0) {
            _0x4561x3a = 'scripts/charts.js', _0x4561x3b = function () {
                var _0x4561x1 = $('#wallet-chart'), _0x4561x2 = $('#pie-chart'), _0x4561x3 = $('#doughnut-chart'),
                    _0x4561x4 = $('#polar-chart'), _0x4561x5 = $('#vertical-chart'), _0x4561x6 = $('#horizontal-chart'),
                    _0x4561x7 = $('#line-chart');
                _0x4561x1.length && new Chart(_0x4561x1, {
                    type: 'pie',
                    data: {
                        labels: ['Expenses', 'Income'],
                        datasets: [{
                            backgroundColor: ['#ED5565', '#A0D468'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [7e3, 3e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        tooltips: {enabled: !0},
                        animation: {duration: 1500}
                    }
                }), _0x4561x2.length && new Chart(_0x4561x2, {
                    type: 'pie',
                    data: {
                        labels: ['Facebook', 'Twitter', 'WhatsApp'],
                        datasets: [{
                            backgroundColor: ['#4A89DC', '#4FC1E9', '#A0D468'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [7e3, 3e3, 2e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        tooltips: {enabled: !0},
                        animation: {duration: 1500}
                    }
                }), _0x4561x3.length && new Chart(_0x4561x3, {
                    type: 'doughnut',
                    data: {
                        labels: ['Apple', 'Samsung', 'Google'],
                        datasets: [{
                            backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [5500, 4e3, 3e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        tooltips: {enabled: !0},
                        animation: {duration: 1500},
                        layout: {padding: {bottom: 30}}
                    }
                }), _0x4561x4.length && new Chart(_0x4561x4, {
                    type: 'polarArea',
                    data: {
                        labels: ['Windows', 'Mac', 'Linux'],
                        datasets: [{
                            backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [7e3, 1e4, 5e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        tooltips: {enabled: !0},
                        animation: {duration: 1500},
                        layout: {padding: {bottom: 30}}
                    }
                }), _0x4561x5.length && new Chart(_0x4561x5, {
                    type: 'bar',
                    data: {
                        labels: ['2010', '2015', '2020', '2025'],
                        datasets: [{
                            label: 'iOS',
                            backgroundColor: '#A0D468',
                            data: [900, 1e3, 1200, 1400]
                        }, {label: 'Android', backgroundColor: '#4A89DC', data: [890, 950, 1100, 1300]}]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        title: {display: !1}
                    }
                }), _0x4561x6.length && new Chart(_0x4561x6, {
                    type: 'horizontalBar',
                    data: {
                        labels: ['2010', '2013', '2016', '2020'],
                        datasets: [{
                            label: 'Mobile',
                            backgroundColor: '#BF263C',
                            data: [330, 400, 580, 590]
                        }, {label: 'Responsive', backgroundColor: '#EC87C0', data: [390, 450, 550, 570]}]
                    },
                    options: {
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {fontSize: 13, padding: 15, boxWidth: 12}
                        }, title: {display: !1}
                    }
                }), _0x4561x7.length && new Chart(_0x4561x7, {
                    type: 'line',
                    data: {
                        labels: [2e3, 2005, 2010, 2015, 2010],
                        datasets: [{
                            data: [500, 400, 300, 200, 300],
                            label: 'Desktop Web',
                            borderColor: '#D8334A'
                        }, {data: [0, 100, 300, 400, 500], label: 'Mobile Web', borderColor: '#4A89DC'}]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {display: !0, position: 'bottom', labels: {fontSize: 13, padding: 15, boxWidth: 12}},
                        title: {display: !1}
                    }
                })
            }, _0x4561x3c = document.body, (_0x4561x3d = document.createElement('script'))['src'] = _0x4561x3a, _0x4561x3d.onload = _0x4561x3b, _0x4561x3d.onreadystatechange = _0x4561x3b, _0x4561x3c.appendChild(_0x4561x3d)
        }
        ;'file:' === window['location']['protocol'] && $('a').on('mouseover', function () {
            console.log('You are seeing these errors because your file is on your local computer. For real life simulations please use a Live Server or a Local Server such as AMPPS or WAMPP or simulate a Live Preview using a Code Editor like http://brackets.io (it\'s 100% free) - PWA functions and AJAX Page Transitions will only work in these scenarios.')
        });
        var _0x4561x3f = $('.generated-styles'), _0x4561x40 = $('.generated-highlight');

        function _0x4561x41(_0x4561x1) {
            var _0x4561x2;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(_0x4561x1)) {
                return 3 == (_0x4561x2 = _0x4561x1.substring(1).split('')).length && (_0x4561x2 = [_0x4561x2[0], _0x4561x2[0], _0x4561x2[1], _0x4561x2[1], _0x4561x2[2], _0x4561x2[2]]), 'rgba(' + [(_0x4561x2 = '0x' + _0x4561x2.join('')) >> 16 & 255, _0x4561x2 >> 8 & 255, 255 & _0x4561x2].join(',') + ',0.3)'
            }
        }

        !function () {
            var _0x4561x2 = 'none';
            $('body').data('highlight') != _0x4561xb('sticky-color-scheme') && (_0x4561x2 = _0x4561xb('sticky-color-scheme'));
            null == _0x4561xb('sticky-color-scheme') && (_0x4561x2 = $('body').data('highlight'));
            var _0x4561x3 = 'none';
            $('body').data('background') != _0x4561xb('sticky-bg-scheme') && (_0x4561x3 = _0x4561xb('sticky-bg-scheme'));
            null == _0x4561xb('sticky-bg-scheme') && (_0x4561x3 = $('body').data('background'));
            1 == _0x4561x5 && (_0x4561x2 = $('body').data('highlight'), _0x4561x3 = $('body').data('background'));
            var _0x4561x4 = _0x4561x1.map((_0x4561x1) => _0x4561x1[0]);
            if (_0x4561x4.indexOf(_0x4561x2) > -1) {
                var _0x4561x6 = _0x4561x4.indexOf(_0x4561x2), _0x4561x7 = _0x4561x4.indexOf(_0x4561x3),
                    _0x4561x8 = _0x4561x1[_0x4561x6][2],
                    _0x4561x9 = _0x4561x1[_0x4561x7][3] + ', ' + _0x4561x1[_0x4561x7][1],
                    _0x4561xa = '.color-highlight{color:' + _0x4561x8 + '!important}',
                    _0x4561xc = '.bg-highlight, .page-item.active a{background-color:' + _0x4561x8 + '!important}',
                    _0x4561xd = '.footer-bar-1 .active-nav *, .footer-bar-3 .active-nav i{color:' + _0x4561x8 + '!important} .footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong{background-color:' + _0x4561x8 + '!important; color:#FFF;}',
                    _0x4561xe = '.border-highlight{border-color:' + _0x4561x8 + '!important}',
                    _0x4561xf = '.header-tab-active{border-color:' + _0x4561x8 + '!important}',
                    _0x4561x10 = '#page{background: linear-gradient(0deg, ' + _0x4561x9 + ')!important;} .bg-page{background: linear-gradient(0deg, ' + _0x4561x9 + ')!important }';
                _0x4561x40.length || ($('body').append(''), $('body').append(''), $('.generated-highlight').append(_0x4561xa, _0x4561xc, _0x4561xd, _0x4561xe, _0x4561xf), $('.generated-background').append(_0x4561x10))
            }
        }(), $('[data-change-highlight]').on('click', function (_0x4561x2) {
            var _0x4561x3 = $(this).data('change-highlight');
            $('body').attr('data-highlight', _0x4561x3), $('.generated-highlight').remove(), _0x4561xa('sticky-color-scheme', _0x4561x3, 1);
            var _0x4561x4 = _0x4561x1.map((_0x4561x1) => _0x4561x1[0]);
            if (_0x4561x4.indexOf(_0x4561x3) > -1) {
                var _0x4561x5 = _0x4561x4.indexOf(_0x4561x3);
                if (void(0) !== $(this).data('color-light')) {
                    var _0x4561x6 = _0x4561x1[_0x4561x5][1]
                } else {
                    _0x4561x6 = _0x4561x1[_0x4561x5][2]
                }
                ;var _0x4561x7 = '.color-highlight{color:' + _0x4561x6 + '!important}',
                    _0x4561x8 = '.bg-highlight{background-color:' + _0x4561x6 + '!important}',
                    _0x4561x9 = '.active-nav *{color:' + _0x4561x6 + '!important} .active-nav2 strong{background-color:' + _0x4561x6 + '!important} .active-nav3 strong{background-color:' + _0x4561x6 + '!important} .active-nav4 strong{border-color:' + _0x4561x6 + '!important}',
                    _0x4561xb = '.border-highlight{border-color:' + _0x4561x6 + '!important}';
                $('body').append(''), $('.generated-highlight').append(_0x4561x7, _0x4561x8, _0x4561x9, _0x4561xb)
            }
        }), $('[data-change-background]').on('click', function (_0x4561x2) {
            var _0x4561x3 = $(this).data('change-background');
            _0x4561xa('sticky-bg-scheme', _0x4561x3, 1), $('.generated-background').remove();
            var _0x4561x4 = _0x4561x1.map((_0x4561x1) => _0x4561x1[0]).indexOf(_0x4561x3),
                _0x4561x5 = _0x4561x1[_0x4561x4][3] + ', ' + _0x4561x1[_0x4561x4][1],
                _0x4561x6 = '#page{background: linear-gradient(0deg, ' + _0x4561x5 + ')!important;} .bg-page{background: linear-gradient(0deg, ' + _0x4561x5 + ')!important}';
            $('body').append(''), $('.generated-background').append(_0x4561x6)
        }), _0x4561x3f.length || ($('body').append(''), $('.generated-styles').append('/*Generated using JS for lower CSS file Size, Easier Editing & Faster Loading*/'), _0x4561x1.forEach(function (_0x4561x1) {
            $('.generated-styles').append('.bg-' + _0x4561x1[0] + '-light{ background-color: ' + _0x4561x1[1] + '!important; color:#FFFFFF!important;} .bg-' + _0x4561x1[0] + '-light i, .bg-' + _0x4561x1[0] + '-dark i{color:#FFFFFF;} .bg-' + _0x4561x1[0] + '-dark{ background-color: ' + _0x4561x1[2] + '!important; color:#FFFFFF!important;} .border-' + _0x4561x1[0] + '-light{ border-color:' + _0x4561x1[1] + '!important;} .border-' + _0x4561x1[0] + '-dark{ border-color:' + _0x4561x1[2] + '!important;} .color-' + _0x4561x1[0] + '-light{ color: ' + _0x4561x1[1] + '!important;} .color-' + _0x4561x1[0] + '-dark{ color: ' + _0x4561x1[2] + '!important;}')
        }), _0x4561x1.forEach(function (_0x4561x1) {
            $('.generated-styles').append('.bg-fade-' + _0x4561x1[0] + '-light{ background-color: ' + _0x4561x41(_0x4561x1[1]) + '!important; color:#FFFFFF;} .bg-fade-' + _0x4561x1[0] + '-light i, .bg-' + _0x4561x1[0] + '-dark i{color:#FFFFFF;} .bg-fade-' + _0x4561x1[0] + '-dark{ background-color: ' + _0x4561x41(_0x4561x1[2]) + '!important; color:#FFFFFF;} .border-fade-' + _0x4561x1[0] + '-light{ border-color:' + _0x4561x41(_0x4561x1[1]) + '!important;} .border-fade-' + _0x4561x1[0] + '-dark{ border-color:' + _0x4561x41(_0x4561x1[2]) + '!important;} .color-fade-' + _0x4561x1[0] + '-light{ color: ' + _0x4561x41(_0x4561x1[1]) + '!important;} .color-fade-' + _0x4561x1[0] + '-dark{ color: ' + _0x4561x41(_0x4561x1[2]) + '!important;}')
        }), _0x4561x1.forEach(function (_0x4561x1) {
            $('.generated-styles').append('.bg-gradient-' + _0x4561x1[0] + '{background-image: linear-gradient(to bottom, ' + _0x4561x1[1] + ' 0, ' + _0x4561x1[2] + ' 100%)}')
        }), [['facebook', '#3b5998'], ['linkedin', '#0077B5'], ['twitter', '#4099ff'], ['google', '#d34836'], ['whatsapp', '#34AF23'], ['pinterest', '#C92228'], ['sms', '#27ae60'], ['mail', '#3498db'], ['dribbble', '#EA4C89'], ['phone', '#27ae60'], ['skype', '#12A5F4'], ['instagram', '#e1306c']].forEach(function (_0x4561x1) {
            $('.generated-styles').append('.bg-' + _0x4561x1[0] + '{background-color:' + _0x4561x1[1] + '!important; color:#FFFFFF;} .color-' + _0x4561x1[0] + '{color:' + _0x4561x1[1] + '!important;}')
        }), _0x4561x1.forEach(function (_0x4561x1) {
            $('.generated-styles').append('.body-' + _0x4561x1[0] + '{background-image: linear-gradient(to bottom, ' + _0x4561x1[1] + ' 0, ' + _0x4561x1[3] + ' 100%)}')
        }))
    }

    setTimeout(_0x4561x6, 0), $(function () {
        var _0x4561x1 = {
            prefetch: !0,
            prefetchOn: 'mouseover',
            cacheLength: 100,
            scroll: !0,
            blacklist: '.default-link',
            forms: 'contactForm',
            onStart: {
                duration: 150, render: function (_0x4561x1) {
                    return _0x4561x1.addClass('is-exiting'), $('.menu, .menu-hider').removeClass('menu-active'), $('#preloader').removeClass('preloader-hide'), !1
                }
            },
            onReady: {
                duration: 10, render: function (_0x4561x1, _0x4561x2) {
                    _0x4561x1.removeClass('is-exiting'), _0x4561x1.html(_0x4561x2), setTimeout(_0x4561x6, 0), $('#preloader').removeClass('preloader-hide')
                }
            },
            onAfter: function (_0x4561x1, _0x4561x2) {
                setTimeout(function () {
                    $('.menu').css('display', 'block'), $('#preloader').addClass('preloader-hide')
                }, 150)
            }
        };
        //$('#page').smoothState(_0x4561x1).data('smoothState').clear()
    }), !0 === _0x4561x5 && (caches.delete('workbox-runtime').then(function () {
    }), localStorage.clear(), sessionStorage.clear(), caches.keys().then((_0x4561x1) => {
        _0x4561x1.forEach((_0x4561x1) => {
            caches.delete(_0x4561x1)
        })
    }));
    _0x4561x1 = 'scripts/pwa.js', _0x4561x2 = function () {
    }, _0x4561x3 = document.body, (_0x4561x4 = document.createElement('script'))['src'] = _0x4561x1, _0x4561x4.onload = _0x4561x2, _0x4561x4.onreadystatechange = _0x4561x2, _0x4561x3.appendChild(_0x4561x4)
});
