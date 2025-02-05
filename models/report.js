const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  selectedName: { type: Number, required: true }, // Changed from an array to a single number
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
