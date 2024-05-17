const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

// Conectamos a la DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/informes', require('./routes/informe'));


app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})