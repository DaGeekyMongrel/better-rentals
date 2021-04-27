const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, '../../../data/listings.json'),
    (err, data) => {
      // TODO: handle errors
      const listings = JSON.parse(data);
      res.send(listings);
    }
  );
});

module.exports = router;
