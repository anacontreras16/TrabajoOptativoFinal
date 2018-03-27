$("document").ready(function () {
    

    $(".addCart").on( "click",function () {
        debugger;
        var precio = $(this).prev()[0].innerHTML;
        var precioSinEspacios = $.trim(precio);
        $(".total").text(precioSinEspacios);
      
    });

    console.log(`Hello World`);
    var avalaibleProducts = [
        "Ranita Santorini",
        "Vestido Corfú",
        "Blusa Itaca",
        "Bombacho Rodas",
        "Pinocho Creta",
        "Mono Mykonos",
        "Pantalón Itaca",
        "Vestido Mykonos",
        "Peto Rodas",
        "Vestido Santorini"
    ];
    $("#buscadorProductos").autocomplete({
        source: [
            "Ranita Santorini",
            "Vestido Corfú",
            "Blusa Itaca",
            "Bombacho Rodas",
            "Pinocho Creta",
            "Mono Mykonos",
            "Pantalón Itaca",
            "Vestido Mykonos",
            "Peto Rodas",
            "Vestido Santorini"
        ],
        select: function (event, ui) {
            var itemName = ui.item.label;
            window.open("detail.html", "_self");
        }
    });





});
