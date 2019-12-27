const express = require('express');
const router = express.Router();

/** Controladores */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

/**
 *
 * req = request es lo que estas pidiendo a la pagina (peticiones)
 * res = responde es la respuesa del servidor
 * .send metodo para imprimir o mostrar en la pantalla
 * use responde a todos los verbos de HTTP (put, delete, get, post)
 *
 */

module.exports = function() {
    router.get('/', homeController.consultasHome);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
};