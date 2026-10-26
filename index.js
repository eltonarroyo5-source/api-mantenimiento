require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

app.use('/equipos', require('./routes/equipos'));
app.use('/tecnicos', require('./routes/tecnicos'));
app.use('/mantenimientos', require('./routes/mantenimientos'));

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a MySQL exitosa');
    app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
  })
  .catch(err => console.error('Error de conexión:', err.message));