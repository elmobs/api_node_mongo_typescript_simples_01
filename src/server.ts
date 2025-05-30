import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

app.setErrorHandler((error, req, rep) => {
    rep.code(400).send({ message: error.message })
})

const start = async () => {

    await app.register(cors)
    await app.register(routes)


    try {
        await app.listen({ port:4040 })
    } catch (err) {
        process.exit(1)
    }
}

start()