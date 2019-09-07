exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pharmacies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pharmacies').insert([
        { name: 'Apotheke am Ostkreuz', long: '52.506242', lat: '13.466042' },
        { name: 'Apotheke am Frankfurter Tor', long: '52.515811', lat: '13.450873' },
        { name: 'apotheke victor', long: '22.4985734', lat: '23.9348378' }
      ])
    })
}
