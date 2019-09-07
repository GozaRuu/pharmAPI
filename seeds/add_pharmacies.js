exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pharmacies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pharmacies').insert([
        { name: 'apotheke kais', long: '12.3423434', lat: '34.4312431' },
        { name: 'apotheke sergei', long: '11.3423434', lat: '32.4312431' },
        { name: 'apotheke victor', long: '22.4985734', lat: '23.9348378' }
      ])
    })
}
