
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('passwordDigest')
    })
};

exports.down = function(knex) {
  
};
