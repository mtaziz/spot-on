jQuery(function($) {
    function AOSinit() {
        AOS.init();
    }

    function footerReposition() {
        if (!$(".mdl-grid.result-area").length || $('.mdl-grid.result-area:empty')) {
            $('.mdl-mini-footer').css({
                'position': 'absolute',
                'bottom': '0',
                'left': '0',
                'right': '0'
            });
        }

        $(".mdl-mini-footer").css({
            'opacity': '1',
        });
    }

    $(document).ready(function() {
        AOSinit();
        footerReposition();
    });
});
