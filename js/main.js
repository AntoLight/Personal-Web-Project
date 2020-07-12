$(document).ready(function () {
        // variables-Nav-Header
        var menu_i = $("#menu_i");
        var menu_nav = $("#cabeza");

        // Nav-Header

        menu_i.on("click", function () {
                menu_nav.slideToggle();
        });

        // Menu-Fijo
        var windowsAltura = $(window).height() - 900px;
        var barraAltura = $(".barra-principal").innerHeight();

        $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > windowsAltura) {
                        $(".barra-principal").addClass("fixed");
                        $("body").css({ "margin-top": barraAltura + "px" });
                } else {
                        $(".barra-principal").removeClass("fixed");
                        $("body").css({ "margin-top": "0px" });
                }
        });

        // Programacion-Leng.

        $(".programas_contenido div").hide();
        $(".programas_enlaces a:first-child").addClass("activo");
        $("#java").show();

        $(".programas_enlaces a").on("click", function () {
                $(".programas_enlaces a").removeClass("activo");
                var contenidoProgramas = $(this).attr("href");
                $(".programas_contenido div").hide();
                $(this).addClass("activo");
                $(contenidoProgramas).slideDown();
                return false;
        });
});
