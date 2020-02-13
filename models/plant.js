const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define plantSchema
const plantSchema = new Schema({

  plantid: { type: Number, unique: true, required: true },
  name: { type: String, unique: false, required: true },
  genus: { type: String, unique: false, required: false },
  family: { type: String, unique: false, required: false },
  species: { type: String, unique: false, required: false },
  water: { type: String, unique: false, required: false },
  growthTime: { type: String, unique: false, required: false },
  sunExposure: { type: String, unique: false, required: false }

});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;