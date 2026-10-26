const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipo = sequelize.define('Equipo', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING, allowNull: false },
  ubicacion: DataTypes.STRING,
  estado: { type: DataTypes.ENUM('operativo', 'en_mantenimiento', 'inactivo'), defaultValue: 'operativo' }
}, { tableName: 'equipos' });

const Tecnico = sequelize.define('Tecnico', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefono: DataTypes.STRING
}, { tableName: 'tecnicos' });

const Mantenimiento = sequelize.define('Mantenimiento', {
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
  tipo: { type: DataTypes.ENUM('preventivo', 'correctivo'), allowNull: false },
  descripcion: DataTypes.TEXT,
  estado: { type: DataTypes.ENUM('pendiente', 'en_proceso', 'completado'), defaultValue: 'pendiente' }
}, { tableName: 'mantenimientos' });

Equipo.hasMany(Mantenimiento, { foreignKey: 'equipo_id' });
Mantenimiento.belongsTo(Equipo, { foreignKey: 'equipo_id' });
Tecnico.hasMany(Mantenimiento, { foreignKey: 'tecnico_id' });
Mantenimiento.belongsTo(Tecnico, { foreignKey: 'tecnico_id' });

module.exports = { sequelize, Equipo, Tecnico, Mantenimiento };