const express = require('express');
const app = express();

app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/img'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("pages/index");
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor Funcionando")