const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// Create Report
router.post('/generate', async (req, res) => {
  try {
    const { selectedNames, startDate, endDate } = req.body;
    const newReport = new Report({ selectedNames, startDate, endDate });
    await newReport.save();
    res.status(201).json({ message: 'Report generated successfully', report: newReport });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate report', error });
  }
});

// Get All Reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reports', error });
  }
});

module.exports = router;