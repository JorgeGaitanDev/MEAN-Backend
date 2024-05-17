const Informe = require("../models/Informe");



exports.crearInforme = async (req, res) => {

    try {
        let informe;

        // Creamos nuestro producto
        informe = new Informe(req.body);

        await informe.save();
        res.send(informe);
        
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
        const { a_o, cod_territorio, nom_territorio, cantidad_dosis_aplicadas} = req.body;
        let informe = await Informe.findById(req.params.id);

        if (!informe) {
            res.status(404).json({ msg: 'No existe ese informe'})
        }

        informe.a_o = a_o;
        informe.cod_territorio = cod_territorio;
        informe.nom_territorio = nom_territorio;
        informe.cantidad_dosis_aplicadas = cantidad_dosis_aplicadas;

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
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}