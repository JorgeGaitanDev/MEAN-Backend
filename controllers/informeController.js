const Informe = require("../models/Informe");



exports.crearInforme = async (req, res) => {
    try {
        let informes = req.body;

        // Si el cuerpo de la solicitud no es un array, lo convierte en un array
        if (!Array.isArray(informes)) {
            informes = [informes];
        }

        // Guardar todos los informes usando insertMany
        const result = await Informe.insertMany(informes);
        res.status(201).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerInformes = async (req, res) => {

    try {

        const informes = await Informe.find();
        res.json(informes)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarInforme = async (req, res) => {

    try {
        const { fecha_aplicaci_n, a_o, cod_territorio, nom_territorio, cantidad_dosis_aplicadas, fecha_corte} = req.body;
        let informe = await Informe.findById(req.params.id);

        if (!informe) {
            res.status(404).json({ msg: 'No existe ese informe'})
        }

        informe.fecha_aplicaci_n = fecha_aplicaci_n;
        informe.a_o = a_o;
        informe.cod_territorio = cod_territorio;
        informe.nom_territorio = nom_territorio;
        informe.cantidad_dosis_aplicadas = cantidad_dosis_aplicadas;
        informe.fecha_corte = fecha_corte;

        informe = await Informe.findOneAndUpdate({ _id: req.params.id }, informe, { new: true } )
        res.json(informe);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerInforme = async (req, res) => {

    try {
        let informe = await Informe.findById(req.params.id);

        if (!informe) {
            res.status(404).json({ msg: 'No existe ese informe'})
        }

        res.json(informe);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarInforme = async (req, res) => {

    try {
        let informe = await Informe.findById(req.params.id);

        if (!informe) {
            res.status(404).json({ msg: 'No existe ese informe'})
        }

        await Informe.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'Informe eliminado con éxito'});

        
    } catch (error) {
        //error
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}