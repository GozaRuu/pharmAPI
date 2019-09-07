const express = require('express')
const router = express.Router()
const knex = require('../knexClient')

/* GET users listing. */
router.get('/:name', async (req, res) => {
  const medicament = req.params.name
  const data = await knex.select('*').from('pharmacies')

  res.json(data)
})

module.exports = router
