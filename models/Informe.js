const mongoose = require('mongoose');

const InformeSchema = mongoose.Schema({
    fecha_aplicaci_n: {
        type: String,
        required: true
    },
    a_o: {
        type: String,
        required: true
    },
    cod_territorio: {
        type: String,
        required: true
    },
    nom_territorio: {
        type: String,
        required: true
    },
    cantidad_dosis_aplicadas: {
        type: String,
        required: true
    },
    fecha_corte: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Informe', InformeSchema);