import prismaClient from "../../prisma";

class ListService {
    async execute() {
        const products = await prismaClient.product.findMany()

        return products
    }
}

export { ListService }