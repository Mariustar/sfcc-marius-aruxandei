"use strict";

module.exports = function() {
    var toggleLink = $("#togglePromoLink");
    var contentToToggle = $("#contentToToggle");

    toggleLink.on("click", function(event) {
        event.preventDefault();

        console.log("Link clicked!");

        if (contentToToggle.is(":hidden")) {
            contentToToggle.show();
        } else {
            contentToToggle.hide();
        }
    });
    console.log("Link clicked!");
};
