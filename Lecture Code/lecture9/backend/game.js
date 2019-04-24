const express = require('express');

const router = express.Router();

router.get('/guess-number', (req, resp) => {
  if (parseInt(req.query.num) === 42) {
    resp.send('Your guess is right.');
  } else {
    resp.send('Your guess is wrong.');
  }
});

// imaging there are a lot of other games...

module.exports = router;

