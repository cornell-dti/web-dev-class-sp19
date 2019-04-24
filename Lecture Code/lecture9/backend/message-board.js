const express = require('express');

const router = express.Router();

router.get('/', (_, resp) => resp.send([{ id: 1, content: 'hello world' }]));

// imaging there are a lot of other functionality of message board.

module.exports = router;
