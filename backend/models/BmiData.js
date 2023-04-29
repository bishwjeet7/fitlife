// models/BmiData.js
const mongoose = require('mongoose');

const BmiDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
});

module.exports = mongoose.model('BmiData', BmiDataSchema);
