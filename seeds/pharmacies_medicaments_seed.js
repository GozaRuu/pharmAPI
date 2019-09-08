exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pharmacy_medicament')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pharmacy_medicament').insert([
        { pharmacyId: 1, medicamentId: 1, count: '20', price: '30' },
        { pharmacyId: 2, medicamentId: 1, count: '0', price: '30.8' },
        { pharmacyId: 3, medicamentId: 1, count: '0', price: '39' },
        { pharmacyId: 3, medicamentId: 2, count: '76', price: '70' },
        { pharmacyId: 4, medicamentId: 2, count: '33', price: '70.2' }
      ])
    })
}
