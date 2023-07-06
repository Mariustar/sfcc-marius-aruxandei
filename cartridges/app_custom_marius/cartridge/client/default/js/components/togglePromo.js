"use strict";

module.exports = function() {
    var promoLink = $("#promoLink");
    var conentToShow = $("#conentToShow");

    conentToShow.hide();

    promoLink.on("click", function(event) {
        event.preventDefault();

        if (conentToShow.is(":hidden")) {
            conentToShow.show();
        } else {
            conentToShow.hide();
        }
    });
};
