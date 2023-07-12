PORT = 3000;

const Router = require("@koa/router");
const Koa = require("koa");
const { default: koaBody } = require("koa-body");
const KoaLogger = require("koa-logger");
const cors = require("@koa/cors");
const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
    ctx.response.body = { message: "Hello world!" };
    ctx.status = 200;
});

app.use(KoaLogger());
app.use(cors({ 
    origin: "*" 
    , methods : ["GET", "POST, PUT"]}));
app.use(koaBody());


app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`);
});