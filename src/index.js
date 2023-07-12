const Router = require("@koa/router");
const Koa = require("koa");
const { default: koaBody } = require("koa-body");
const KoaLogger = require("koa-logger");
const db = require("./models");
const cors = require("@koa/cors");

app.use(KoaLogger());
app.use(cors({ 
    origin: "*" 
    , methods : ["GET", "POST, PUT"]}));
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());