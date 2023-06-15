const express = require('express');
const router = express();
const { index } = require('./controller');

router.get(
  '/:refreshToken',index
);

module.exports = router;
