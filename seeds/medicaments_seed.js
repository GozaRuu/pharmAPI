exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medicaments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('medicaments').insert([
        { name: 'isoGalen 10 mg Weichkapseln 30 St. N1', description: 'lorem ipsum' },
        { name: 'Antistressin Impfstoff Amp. 10 x 0.5 ml', description: 'lorem ipsum' }
      ])
    })
}
