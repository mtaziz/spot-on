jQuery(function($) {
    function AOSinit() {
        AOS.init();
    }

    function footerReposition() {
        if ($('.mdl-grid.result-area').length && $('.mdl-grid.result-area').children().length != 0) {
            $('.mdl-mini-footer').css({
                'position': 'relative'
            });
        }
    }

    function loadPage() {
        $('body').css({
            'opacity': '1'
        });
    }

    function scrollPage() {
        $('#fullpage').fullpage({
            //Navigation
            anchors: ['spot-on', 'about-us', 'our-team', 'feedback'],
			navigation: true,
            sectionsColor: ['#963D5A', '#40798C', '#104F55', '#4D243D'],
			navigationPosition: 'right',
			navigationTooltips: ['Spot On', 'Our work', 'Our team', 'Leave us feedback!'],


            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            fitToSection: true,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,


            lazyLoading: true,
            responsiveWidth: 1024,

        });
    }

    function mmenuInit() {
        $("#navbar-mobile").mmenu({
    		extensions: ["fx-menu-slide", "pagedim", "theme-dark", "position-left"]
    	});
    }

    $(document).ready(function() {
        AOSinit();
        footerReposition();
        loadPage();
        scrollPage();
        mmenuInit();
    });
});
