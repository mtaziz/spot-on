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
        $('#fullpage').fullpage();
    }

    $(document).ready(function() {
        AOSinit();
        footerReposition();
        loadPage();
        scrollPage();
    });
});
