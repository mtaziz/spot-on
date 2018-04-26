jQuery(function($) {
    AOS.init();

    if (!$(".mdl-grid.result-area").length || $('.mdl-grid.result-area:empty')) {
        $('.mdl-mini-footer').css({
            'position': 'absolute',
            'bottom': '0',
            'left': '0',
            'right': '0'
        });
    }
});
