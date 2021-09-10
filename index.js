const fastify = require('fastify')

const server = fastify({ logger: true })

server.get('/', async (req, res) => {
    return { hello: 'world' }
})

server.post('/:paramVal', async (req, res) => {
    return {
        params: req.params,
        body: req.body,
        query: req.query,
        header: req.headers
    }
})

server.patch('/', async (req, res) => {
    return { hello: "world" }
})

server.put('/', async (req, res) => {
    return { hello: "world" }
})

server.delete('/', async (req, res) => {
    return { hello: "world" }
})

server.all('/allRoute', async (req, res) => {
    return { all: "route" }
})



function user(server, opts, done) {

    server.get('/', async (req, res) => {
        return { user: 'user' }
    })

    server.post('/:id', async (req, res) => {
        return { user: 'user' }
    })

    server.patch('/:id', async (req, res) => {
        return { user: 'user' }
    })

    server.delete('/:id', async (req, res) => {
        return { user: 'user' }
    })

    done()
}

server.register(user, { prefix: '/user' })

server.listen(3000)