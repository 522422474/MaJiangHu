const fs = require("fs");
exports.showIndex =  (req,res,next) => {
    res.render("index");
};
exports.showLogin = (req,res,result) => {
    res.render("login");
}
exports.typography = (req,res,result) => {
    res.render("typography");
}

exports.contentwidgets = (req,res,result) => {
    res.render("content-widgets");
}

exports.tables = (req,res,result) => {
    res.render("tables");
}
exports.formelements = (req,res,result) => {
    res.render("form-elements");
}
exports.formcomponents = (req,res,result) => {
    res.render("form-components");
}

exports.formexamples = (req,res,result) => {
    res.render("form-examples");
}
exports.formvalidation = (req,res,result) => {
    res.render("form-validation");
}

exports.buttons = (req,res,result) => {
    res.render("buttons");
}


exports.labels = (req,res,result) => {
    res.render("labels");
}



exports.imagesicons = (req,res,result) => {
    res.render("images-icons");
}
exports.alerts = (req,res,result) => {
    res.render("alerts");
}
exports.media = (req,res,result) => {
    res.render("media");
}
exports.components = (req,res,result) => {
    res.render("components");
}
exports.othercomponents = (req,res,result) => {
    res.render("other-components");
}



exports.charts = (req,res,result) => {
    res.render("charts");
}
exports.filemanager = (req,res,result) => {
    res.render("file-manager");
}


exports.calendar = (req,res,result) => {
    res.render("calendar");
}
exports.listview = (req,res,result) => {
    res.render("list-view");
}


exports.profilepage = (req,res,result) => {
    res.render("profile-page");
}


exports.messages = (req,res,result) => {
    res.render("messages");
}

















