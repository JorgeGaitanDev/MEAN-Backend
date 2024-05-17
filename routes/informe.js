// Rutas para informe
const express = require('express');
const router = express.Router();
const informeController = require('../controllers/informeController');

// api/informe
router.post('/', informeController.crearInforme);
router.get('/', informeController.obtenerInformes);
router.put('/:id', informeController.actualizarInforme);
router.get('/:id', informeController.obtenerInforme);
router.delete('/:id', informeController.eliminarInforme);

module.exports = router;