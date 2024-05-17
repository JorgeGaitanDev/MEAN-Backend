const mongoose = require('mongoose');

const InformeSchema = mongoose.Schema({
    a_o: {
        type: Number,
        required: true
    },
    cod_territorio: {
        type: Number,
        required: true
    },
    nom_territorio: {
        type: String,
        required: true
    },
    cantidad_dosis_aplicadas: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Informe', InformeSchema);