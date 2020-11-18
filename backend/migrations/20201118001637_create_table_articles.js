
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table =>{
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('description', 1000).notNull()
      table.string('imageUrl', 1000)
      table.binary('content').notNull()
      table.integer('useId').references('id')
        .inTable('users')

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
