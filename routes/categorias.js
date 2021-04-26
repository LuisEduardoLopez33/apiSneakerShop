const express = require('express');
const router = express.Router();
const categoriasService = require('../controllers/categoriasService') //Cambiar

router.get('/getCategorias',categoriasService.getCategorias);
module.exports= router;