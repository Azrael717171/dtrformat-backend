const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  selectedNames: [{ type: Number, required: true }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
