// @ts-ignore
window.jQuery = window.$ = require("jquery");
var processInclude = require("../../../../../app_storefront_base/cartridge/client/default/js/util");

$(document).ready(function() {
    processInclude(require("./../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./cart/cartPromoCode"));
});
