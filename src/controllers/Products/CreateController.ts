import { FastifyRequest, FastifyReply } from "fastify";
import { CreateService } from "../../services/products/CreateService";

class CreateController {
    async handle(req: FastifyRequest, rep: FastifyReply) {

        const { name, category, amount } = req.body as { name: string, category: string, amount: string }
       
        const productService = new CreateService()

        const product = await productService.execute({ name, category, amount })

        rep.send(product)
    }
}

export { CreateController }