// @ts-ignore
window.jQuery = window.$ = require("jquery");
var processInclude = require("../../../../../app_storefront_base/cartridge/client/default/js/util");

require("jquery");

$(document).ready(function() {
    processInclude(require("./components/togglePromo"));
});
