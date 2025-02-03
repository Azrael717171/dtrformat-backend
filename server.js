const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const reportRoutes = require('./routes/report');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/reportsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reports', reportRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));