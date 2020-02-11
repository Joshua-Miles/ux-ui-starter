const Base = require('knex-base');

class User extends Base {}

module.exports =  User

User.hasMany('posts')