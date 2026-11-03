const express = require('express');
const { body } = require('express-validator');
const validar = require('../middlewares/validar');
const router = express.Router();
const c = require('../controllers/equipoController');

const reglas = [
  body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('tipo').trim().notEmpty().withMessage('El tipo es obligatorio'),
  body('estado').optional().isIn(['operativo', 'en_mantenimiento', 'inactivo'])
    .withMessage('Estado inválido')
];

router.get('/', c.listar);
router.get('/:id', c.obtener);
router.post('/', reglas, validar, c.crear);
router.put('/:id', c.actualizar);
router.delete('/:id', c.eliminar);

module.exports = router;