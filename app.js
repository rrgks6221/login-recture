"use strict";

//모듈
const express = require("express");
const app = express();

//리우팅
const home = require("./routes/home")

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);  //use는 미들웨어를 등록해주는 메서드.

module.exports = app;