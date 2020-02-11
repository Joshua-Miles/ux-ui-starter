const io = require('socket.io')()
const { hash, compare } = require('bcrypt')
const Base = require('knex-base')

const User = require('./models/User')
const Post = require('./models/Post')
const databaseSettings = require('./knexfile').development;
const knex = require('knex')(databaseSettings);

Base.establishConnection(knex)

Base.where = function(attributes){
    return knex(this.tableName + 's').where(attributes)
}

Base.findBy = async function(attributes){
    let results = await knex(this.tableName + 's').where(attributes)
    return results[0]
}

io.on('connection', socket => {

    let user = null

    socket.on('signUp', async ({ username, password }, respond) => {
        let passwordDigest = await hash(password, 10)
        user = await User.create({ passwordDigest, username })
        respond(user)
    })

    socket.on('login', async ({ username, password }, respond) => {
        let foundUser = await User.findBy({ username })
        if(await compare(password, foundUser.passwordDigest)){
            user = foundUser
            respond(true)
        } else {
            respond(false)
        }
    })

    socket.on('getPosts', async (respond) => {
        const posts = await (
            knex('posts')
                .innerJoin('users', 'users.id', 'posts.user_id')
        )
        respond(posts)
    })

    socket.on('createPost', async (content, respond) => {
        const user_id = user.id
        const post = await Post.create({ content, user_id })
        io.emit('newPostAlert', { ...post, username: user.username })
    })

    socket.on('getCurrentUser', respond => {
        respond(user)
    })

})

io.listen(3001)