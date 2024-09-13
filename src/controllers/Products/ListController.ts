import { FastifyRequest, FastifyReply } from "fastify";
import { ListService } from "../../services/products/ListService";

class ListController {
    async handle(req: FastifyRequest, rep: FastifyReply){
        const listService = new ListService()

        const products = await listService.execute()

        rep.send(products)
    }
}

export { ListController }