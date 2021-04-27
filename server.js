const express = require('express');

const listings = require('./routes/api/listings');

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Better Rentals API');
});

app.use('/api/listings', listings);

app.listen(port, () => {
  console.log(`Better Rentals API listening at port ${port}`);
});
