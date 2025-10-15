const express = require('express');
const app = express();
 
app.use(express.json());



app.get('/practice', (req, res) => {
  console.log('GET params:', req.query);
  res.send('GET request received!');
});

app.post('/practice', (req, res) => {
  console.log('POST body:', req.body);
  res.send('POST request received!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});