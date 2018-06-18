const express = require('express');
const app = express();
const ejs          = require('ejs');
const Router = require("./Routres/router");
const session = require("express-session");


app.use(session({
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : true
}))

//设置模板引擎
app.set("view engine","ejs");
//设置公共文件目录
app.use(express.static("./Public"));

app.get("/",Router.showIndex);
app.get("/index",Router.showIndex);


app.get("/login",Router.showLogin);

app.get("/typography",Router.showIndex);

app.get("/content-widgets",Router.contentwidgets);
app.get("/tables",Router.tables);
app.get("/form-elements",Router.formelements);
app.get("/form-components",Router.formcomponents);

app.get("/form-examples",Router.formexamples);


app.get("/form-validation",Router.formvalidation);
app.get("/buttons",Router.buttons);
app.get("/labels",Router.labels);
app.get("/images-icons",Router.imagesicons);
app.get("/alerts",Router.alerts);
app.get("/media",Router.media);



app.get("/components",Router.components);
app.get("/other-components",Router.othercomponents);
app.get("/charts",Router.charts);
app.get("/file-manager",Router.filemanager);
app.get("/calendar",Router.calendar);
app.get("/listview",Router.listview);
app.get("/profile-page",Router.profilepage);
app.get("/messages",Router.messages);



app.get('*', function(req, res) {
    try {
        res.render("404");
    }catch (e) {
        res.send('小伙子别试了,页面掉了!!!');
    }
})




app.post('/process_post', function (req, res, next) {

    // 输出 JSON 格式
    console.log(req);
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});