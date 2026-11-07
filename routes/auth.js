const express = require('express');
const { body } = require('express-validator');
const validar = require('../middlewares/validar');
const router = express.Router();
const { registrar, login } = require('../controllers/authController');

router.post('/registro', [
  body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('email').trim().isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Mínimo 6 caracteres')
], validar, registrar);

router.post('/login', [
  body('email').trim().isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('La contraseña es obligatoria')
], validar, login);

module.exports = router;