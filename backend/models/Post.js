const Base = require('knex-base');

class Post extends Base {}

Post.belongsTo('user')


module.exports =  Post