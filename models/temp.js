const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define tempSchema
const tempSchema = new Schema({

    temp: { type: Number, unique: false, required: true },
    humidity: { type: Number, unique: false, required: true },
    soilMoisture: { type : Number, unique: false, required: true },
    minute: { type: Number, unique: false, required: true },
    hour: { type: Number, unique: false, required: true },
    day: { type: Number, unique: false, required: true },
    year: { type: Number, unique: false, required: true }

});

const Temp = mongoose.model('Temp', tempSchema);
module.exports = Temp;
