jQuery(function($) {
    $.getJSON("http://127.0.0.1:8000/static/data.json", function(result) {
        $.each(result, function(i, field) {
            var product_name = field.product_name;
            var product_subtitle = field.product_subtitle;
            var product_price = field.product_price;
            var product_stock = field.product_stock;
            var product_rating = field.product_rating;
            var product_url = field.product_url;
            var product_image_url = field.product_image_url

            $('.mdl-grid.result-area').append('\
                <div class="mdl-cell mdl-cell--3-col">\
                    <div class="demo-card-square mdl-card mdl-shadow--2dp">\
                        <div class="mdl-card__title mdl-card--expand">\
                            <img src="' + product_image_url + '">\
                        </div>\
                        <div class="mdl-card__supporting-text">\
                            <h2>' + product_name + '</h2>\
                            <p>' + product_subtitle + '</p>\
                        </div>\
                        <div class="mdl-card__actions mdl-card--border">\
                            <a target="_blank" href="' + product_url + '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">\
                                View product\
                            </a>\
                        </div>\
                    </div>\
                </div>\
            ');
        });
    });
});
