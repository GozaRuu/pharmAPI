const express = require('express')
const router = express.Router()
const knex = require('../knexClient')

/* GET users listing. */
router.get('/:name', async (req, res) => {
  const medicament = req.params.name
  const data = await knex
    .select(
      'pharmacies.name as pharmacy_name',
      'pharmacies.lat as pharmacy_lat',
      'pharmacies.long as pharmacy_long',
      'medicaments.description as medicament_description',
      'medicaments.name as medicament_name',
      'pharmacy_medicament.count',
      'pharmacy_medicament.price'
    )
    .from('pharmacies')
    .leftJoin(
      'pharmacy_medicament',
      'pharmacy_medicament.pharmacyId',
      'pharmacies.id'
    )
    .leftJoin(
      'medicaments',
      'pharmacy_medicament.medicamentId',
      'medicaments.id'
    )
    .where({ 'medicaments.name': medicament })
  res.setHeader('Access-Control-Allow-Origin', 'http://www-dev.doctolib.fr')
  res.json(data)
})

module.exports = router
