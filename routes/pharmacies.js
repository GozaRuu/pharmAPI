const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/pharmacy', function(req, res, next) {
  const data = {}
  res.json(data)
})

module.exports = router
