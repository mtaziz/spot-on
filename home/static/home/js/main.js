jQuery(function($) {
    $.getJSON("http://127.0.0.1:8000/static/data.json", function(result) {
        $.each(result, function(i, field) {
            var product_name = field.product_name;
            var product_subtitle = field.product_subtitle;
            var product_price = field.product_price;
            var product_stock = field.product_stock;
            var product_rating = field.product_rating;
            var product_url = field.product_url;

            $('.mdl-grid.result-area').append('\
                <div>\
                    <h1>' + product_name + '</h1>\
                </div>\
            ');
        });
    });
});
