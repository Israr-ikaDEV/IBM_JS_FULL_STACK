// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// multer will save files into uploads/ with generated filenames
const upload = multer({ dest: 'uploads/' });

// simple health check
app.get('/', (req, res) => res.send('Server is up'));


app.post('/upload', upload.single('file'), (req, res) => {


  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({
    message: 'File uploaded successfully!',
    file: req.file
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
