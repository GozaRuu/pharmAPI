exports.up = function(knex) {
  return knex.schema.createTable('pharmacy_medicament', function(table) {
    table.increments().primary()
    table
      .integer('pharmacyId')
      .unsigned()
      .references('id')
      .inTable('pharmacies')
    table
      .integer('medicamentId')
      .unsigned()
      .references('id')
      .inTable('medicaments')
    table.integer('count')
    table.integer('price')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('pharmacy_medicament')
}
