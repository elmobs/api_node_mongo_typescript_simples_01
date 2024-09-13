import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreateController } from './controllers/Products/CreateController'
import { ListController } from './controllers/Products/ListController'
import { DeleteController } from './controllers/Products/DeleteController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (req: FastifyRequest, rep: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/products", async (req: FastifyRequest, rep: FastifyReply) => {
        return new CreateController().handle(req, rep)
    })

    fastify.get("/products", async (req: FastifyRequest, rep: FastifyReply) => {
        return new ListController().handle(req, rep)
    })

    fastify.delete("/products", async (req: FastifyRequest, rep: FastifyReply) => {
        return new DeleteController().handle(req, rep)
    })

}