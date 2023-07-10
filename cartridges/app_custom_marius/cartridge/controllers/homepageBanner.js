"use strict";

var server = require("server");
var ContentMgr = require("dw/content/ContentMgr");

server.get("BannerAsset", function(req, res, next) {
    var banner = ContentMgr.getContent("custom-homepage-banner");
    res.render("components/customBanner", { banner: banner });
    return next();
});

module.exports = server.exports();
