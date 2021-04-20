$(function(){
    'use strict'

    //Navbar toggler program
    $('.custom-toggler').on('click', function(){
        $('.menubar').addClass('menubar-on-screen');
        $('.full-screen-black').addClass('visible');
    });

    $('.custom-close, .full-screen-black, .scroll-link').on('click', function(){
        $('.menubar').removeClass('menubar-on-screen');
        $('.full-screen-black').removeClass('visible');
    });

    //Pagepiling initialize
        $('#pagepiling').pagepiling({

            menu                : '.main-manu',
            direction           : 'vertical',
            verticalCentered    : true,
            sectionsColor       : [],
            anchors             : ['banner', 'about', 'choose-us', 'works', 'experience', 'testimonials', 'download', 'news', 'pricing', 'contact'],
            scrollingSpeed      : 700,
            easing              : 'swing',
            loopBottom          : false,
            loopTop             : false,
            css3                : true,
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity    : 5,
            keyboardScrolling   : true,
            sectionSelector     : '.section',
            animateAnchor       : false,

            afterRender: function(anchorLink, index) {
                NavbarColor();
            },
            afterLoad: function(anchorLink, index) {
                NavbarColor();
            }
        });

        function NavbarColor () {
            if($('.pp-section.active').hasClass('navbar-is-white')) {
                $('.navbar').addClass('navbar-white');
                $('.pp-section.active .social-icon').addClass('navbar-white');
            }

            else{
                $('.navbar').removeClass('navbar-white');
            }
        }

        //About section parallax initialize
        var scene = document.getElementById('about-video');
        var parallaxInstance = new Parallax(scene);

        //Banner and about section venobox initialize
        $('.venobox').venobox();

        //Counter up initialize
        $('.counter').counterUp({
            delay: 5,
            time: 2000,
        });

        //experience section carusel initialize
        $(".exp-slider-main").owlCarousel({
            items: 3,
            autoplay: true,
            autoplaySpeed: 1500,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                }
            }
        });

        //testimonial section carusel initialize
        $(".testimonial-slider-main").owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 1,
                }
            }
        });

        //news section carusel initialize
        $(".news-slider-main").owlCarousel({
            items: 3,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

});