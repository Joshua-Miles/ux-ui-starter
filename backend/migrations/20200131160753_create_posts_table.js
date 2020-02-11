
exports.up = function(knex) {
    return knex.schema
    .createTable('posts', table => {
        table.increments('id')
        table.integer('user_id')
        table.text('content')
    })
};

exports.down = function(knex) {
  
};
