"use strict";

module.exports = function() {
    var promoLink = $("#promoLink");
    var conentToShow = $("#contentToShow");

    conentToShow.hide();

    console.log("da");

    promoLink.on("click", function(event) {
        event.preventDefault();

        console.log("nu");

        if (conentToShow.is(":hidden")) {
            conentToShow.show();
        } else {
            conentToShow.hide();
        }
    });
};
