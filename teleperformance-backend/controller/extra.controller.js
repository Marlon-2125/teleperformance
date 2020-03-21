const ExtraSchema = require('../models/extra');

const extraHourCtrl = {};

extraHourCtrl.getExtraList = async (req, res) => {
    try {
        const ExtraF = await ExtraSchema.find();
        res.send(ExtraF)
    } catch (error) {
        res.status(404)
        res.send({ error: error.toString() })
    }
}

extraHourCtrl.getExtraById = async (req, res) => {
    const idExtra = req.params.id;
    try {
        const ExtraF = await ExtraSchema.findById(idExtra);
        res.send(ExtraF)
    } catch (error) {
        res.status(404)
        res.send({ error: error.toString() })
    }
}

extraHourCtrl.createExtra = async (req, res) => {
    let myNewExtra = new ExtraSchema(req.body);
    try {
        await myNewExtra.save();
        res.json(req.body);
    } catch (error) {
        res.status(404)
        res.send({ error: error.toString() })
    }
}

extraHourCtrl.editExtra = async (req, res) => {
    let idExtra = req.params.id;
    let myNewExtra = new ExtraSchema(req.body);
    try {
        ExtraSchema.findByIdAndUpdate(idExtra, { $set: myNewExtra }, { new: true })
        res.status(200).send(myNewExtra)
    } catch (error) {
        res.status(404)
        res.send({ error: error.toString() })
    }
}

extraHourCtrl.deleteExtra = async (req, res) => {
    let id_extra = req.params.id;
    await ExtraSchema.findByIdAndRemove(id_extra);
    res.json({
        estado3: "Entra a Delete"
    });
}

module.exports = extraHourCtrl;

