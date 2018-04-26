jQuery(function($) {
    function AOSinit() {
        AOS.init();
    }

    function footerReposition() {
        if ($('.mdl-grid.result-area').length && $('.mdl-grid.result-area:empty')) {
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

    $(document).ready(function() {
        AOSinit();
        footerReposition();
        loadPage();
    });
});
