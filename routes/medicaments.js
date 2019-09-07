const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  const medicament = req.params.name
  console.log(medicament)
  const data = {}
  res.json(data)
})

module.exports = router
