exports.up = function(knex) {
  return knex.schema.createTable('pharmacies', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('long')
    table.string('lat')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('pharmacies')
}
