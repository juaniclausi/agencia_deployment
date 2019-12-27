// importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

require('dotenv').config({ path: 'variables.env' });


// db.authenticate()
//     .then(() => console.log('DB conectada'))
//     .catch(() => console.log(error));


// configuar express
const app = express();

// habilitar pug
app.set('view engine', 'pug');

// añadir vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta estatica llamada public
app.use(express.static('public'));

// Validar desarrollo o produccion
const config = configs[app.get('env')];

// Creamos la variable para cambiar el sitio
app.locals.titulo = config.nombreSitio;

// Muestra el año actual
app.use((req, res, next) => {
    // crear una nueva fecha y ruta actual
    const fecha = new Date();
    // crea una variable local que la uso en el footer
    res.locals.fechaActual = fecha.getFullYear();
    // otra variable para mostrarme el path actual
    res.locals.ruta = req.path;
    console.log(res.locals);

    return next();
});

// Ejecutamos el bodyParser (sirve para tomar los datos post)
app.use(bodyParser.urlencoded({ extended: true }));

// cargar las rutas
app.use('/', routes());

/** Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor esta funcionando');

});