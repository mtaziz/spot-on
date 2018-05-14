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
