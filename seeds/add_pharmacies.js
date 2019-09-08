exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pharmacies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('pharmacies').insert([
        { name: 'Pharmacie de Rivoli', long: '2.343760', lat: '48.860149' },
        { name: 'Pharmacie de la Monnaie', long: '2.342569', lat: '48.859090' },
        { name: 'Pharmacie du Parc Monceau', long: '2.305803', lat: '48.877459' },
        { name: 'Pharmacie Batignolles Monceau', long: '2.315710', lat: '48.884846' }
      ])
    })
}
