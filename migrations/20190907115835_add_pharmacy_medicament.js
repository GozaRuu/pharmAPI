exports.up = function(knex) {
  return knex.schema.createTable('parmacy_medicament', function(table) {
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
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('parmacy_medicament')
}
