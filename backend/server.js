// server.js (or wherever your routes are defined)
const express = require('express');
const mongoose = require('mongoose');
const BmiData = require('./models/BmiData');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bmi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Route for saving BMI data
app.post('/api/bmi', async (req, res) => {
  try {
    const bmiData = new BmiData(req.body);
    await bmiData.save();
    res.status(201).json(bmiData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
