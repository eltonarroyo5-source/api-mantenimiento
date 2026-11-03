require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { sequelize } = require('./models');

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/equipos', require('./routes/equipos'));
app.use('/api/v1/tecnicos', require('./routes/tecnicos'));
app.use('/api/v1/mantenimientos', require('./routes/mantenimientos'));

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a MySQL exitosa');
    app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
  })
  .catch(err => console.error('Error de conexión:', err));