const express = require('express');
const { body } = require('express-validator');
const validar = require('../middlewares/validar');
const router = express.Router();
const c = require('../controllers/mantenimientoController');

const reglas = [
  body('equipo_id').isInt({ min: 1 }).withMessage('equipo_id inválido'),
  body('tecnico_id').isInt({ min: 1 }).withMessage('tecnico_id inválido'),
  body('fecha').isISO8601().withMessage('Fecha inválida (use AAAA-MM-DD)'),
  body('tipo').isIn(['preventivo', 'correctivo']).withMessage('Tipo inválido')
];

router.get('/', c.listar);
router.get('/:id', c.obtener);
router.post('/', reglas, validar, c.crear);
router.put('/:id', c.actualizar);
router.delete('/:id', c.eliminar);

module.exports = router;