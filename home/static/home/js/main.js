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

    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("myBtn").click();
        }
    });

    $(document).ready(function() {
        AOSinit();
        footerReposition();
        loadPage();
    });
});
