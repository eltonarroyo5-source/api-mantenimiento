const express = require('express');
const { body } = require('express-validator');
const validar = require('../middlewares/validar');
const router = express.Router();
const c = require('../controllers/tecnicoController');

const reglas = [
  body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('email').trim().isEmail().withMessage('Email inválido')
];

router.get('/', c.listar);
router.get('/:id', c.obtener);
router.post('/', reglas, validar, c.crear);
router.put('/:id', c.actualizar);
router.delete('/:id', c.eliminar);

module.exports = router;