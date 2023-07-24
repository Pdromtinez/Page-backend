PORT = 3000;

const Router = require("@koa/router");
const Koa = require("koa");
const { default: koaBody } = require("koa-body");
const KoaLogger = require("koa-logger");
const cors = require("@koa/cors");
const path = require('path');
const app = new Koa();
const fs = require('fs');
const router = new Router();


const rutaCarpetaImagenes = './Avatares sin fondo';


const datosArray = []

    const indiceAleatorio = Math.floor(Math.random() * ArrayDeImagenes.length);
    const imagenAleatoria = imagenesDisponibles.splice(indiceAleatorio, 1)[0];
//----------------------------------------------------------------------------------
router.get("/", (ctx, next) => {
    ctx.response.body = { message: "Hello world!" };
    ctx.status = 200;
});

router.post('/agregar-datos', (ctx) => {
    const datos = ctx.request.body;

    datosArray.push(datos);

    ctx.body = { message: 'Datos agregados correctamente' };
});

router.get('/datos', (ctx) => {
    ctx.response.type = 'application/json'; 
    ctx.response.body = datosArray; 
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

fs.readdir(rutaCarpetaImagenes, (err, archivos) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
    return;
  }

  // Filtrar solo los archivos con extensiones de imagen (puedes ajustar esto según tus necesidades)
  const extensionesImagenes = [ '.png',];
  const imagenes = archivos.filter(archivo => extensionesImagenes.includes(path.extname(archivo)));

  // Crear el array de URLs de imágenes
  const arrayDeImagenes = imagenes.map(imagen => path.join(rutaCarpetaImagenes, imagen));

  // Aquí tienes tu array de URLs de imágenes listo para usar
  console.log(arrayDeImagenes);
});

