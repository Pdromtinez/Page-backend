PORT = 3000;

const Router = require("@koa/router");
const Koa = require("koa");
const { default: koaBody } = require("koa-body");
const KoaLogger = require("koa-logger");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

const datosArray = [{
    nombre: 'Victor'
  },
  {
    nombre: 'Jassed2'
  },
  {
    nombre: 'Jassed3'
  },
  {
    nombre: 'Jassed4'
  },
  {
    nombre: 'Jassed5'
  },
  {
    nombre: 'Jassed6'
  },
  {
    nombre: 'Jassed7'
  },
  {
    nombre: 'Jassed8'
  },
  {
    nombre: 'Jassed9'
  },
  {
    nombre: 'Jassed10'
  }]


router.get("/", (ctx, next) => {
    ctx.response.body = { message: "Hello world!" };
    ctx.status = 200;
});

router.post('/agregar-datos', (ctx) => {
    const datos = JSON.stringify(ctx.request.body);

    datosArray.push(datos);

    ctx.body = { message: 'Datos agregados correctamente' };
});

router.get('/datos', (ctx) => {
    ctx.response.type = 'application/json'; 
    ctx.response.body = JSON.stringify(datosArray); 
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