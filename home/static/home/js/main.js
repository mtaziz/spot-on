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
            anchors: ['firstPage', 'secondPage', '3rdPage'],
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

        });
    }

    function w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }

    // Close side navigation
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    // Used to toggle the menu on smaller screens when clicking on the menu button
    function openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace("w3-show", "");
        }
    }

    $(document).ready(function() {
        AOSinit();
        footerReposition();
        loadPage();
        scrollPage();
    });
});
