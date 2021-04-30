const router = require('express').Router();
const fs = require('fs');
const { paths } = require('../../config');

router.get('/', (req, res) => {
  fs.readFile(paths.listingsJSON, (err, data) => {
    // TODO: handle errors
    const listings = JSON.parse(data);
    res.send(listings);
  });
});

module.exports = router;
