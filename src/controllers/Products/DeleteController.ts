import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteService } from "../../services/products/deleteService";

class DeleteController{
    async handle(req: FastifyRequest, rep: FastifyReply){
        const { id } = req.query as { id: string }

        const productService = new DeleteService()

        const product = await productService.execute({ id })

        rep.send(product)
    }
}

export { DeleteController }