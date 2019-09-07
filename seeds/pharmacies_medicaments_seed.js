
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pharmacy_medicament').del()
    .then(function () {
      // Inserts seed entries
      return knex('pharmacy_medicament').insert([
        {pharmacyId: 1, medicamentId: 1, count: '20', price: '30'},
        {pharmacyId: 1, medicamentId: 2, count: '32', price: '50'},
        {pharmacyId: 2, medicamentId: 1, count: '0', price: '32'},
        {pharmacyId: 2, medicamentId: 2, count: '2', price: '50'},
        {pharmacyId: 3, medicamentId: 1, count: '90', price:'39'},
        {pharmacyId: 3, medicamentId: 2, count: '0', price: '49'},
      ]);
    });
};
