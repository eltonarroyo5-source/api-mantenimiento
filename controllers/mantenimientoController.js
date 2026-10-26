const { Mantenimiento, Equipo, Tecnico } = require('../models');
module.exports = require('./crud')(Mantenimiento, { include: [Equipo, Tecnico] });