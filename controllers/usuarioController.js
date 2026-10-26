const listarUsuarios = (req, res) => {
  res.json([{ id: 1, nombre: 'Carlos', email: 'carlos@ejemplo.com' }]);
};

module.exports = { listarUsuarios };