
/*
  Flyout plugin - Alex Davis - 8-10-2015
*/

(function ($) {

    $.fn.initFlyout = function ( options ) {

        var settings = $.extend({
            position: "relative",
            top: "0",
            left: "0",
            color: "#000",
            backgroundColor: "#ccc",
            cursor: "pointer",
            flyoutWidth:100
        }, options);

        var e = this;
        this.on("mouseenter", function () {
            e.css({ backgroundColor: "#ccc" }); 
            e.find(".fly").css({ left: e.width(), width:settings.flyoutWidth, height: e.height() });
            e.find(".fly").fadeIn();
        });

        this.on("mouseleave", function () {
            e.css({ backgroundColor: settings.backgroundColor });
            e.find(".fly").fadeOut();
        });

        return this.css({
            position: settings.position,
            top: settings.top,
            left: settings.left,
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            cursor: settings.cursor
        });

    };

}(jQuery));

