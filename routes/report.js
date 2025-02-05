const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// Create Report
router.post('/generate', async (req, res) => {
  try {
    const { selectedNames, startDate, endDate } = req.body;

    // Create a separate report for each selected name
    const reports = await Promise.all(selectedNames.map(async (nameId) => {
      const newReport = new Report({ selectedName: nameId, startDate, endDate });
      return await newReport.save();
    }));

    res.status(201).json({ message: 'Reports generated successfully', reports });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate reports', error });
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

// Delete a report by ID
router.delete('/:id', async (req, res) => {
  try {
    const reportId = req.params.id;
    const result = await Report.findByIdAndDelete(reportId);
    if (result) {
      res.status(200).json({ message: 'Report deleted successfully' });
    } else {
      res.status(404).json({ message: 'Report not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the report', error: error.message });
  }
});

module.exports = router;
