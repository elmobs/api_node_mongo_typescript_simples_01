import prismaClient from "../../prisma";

interface CreateProps {
  name: string;
  category: string;
  amount: string
}

class CreateService {
  async execute({ name, category, amount }: CreateProps) {
    if (!name || !category || !amount) {
      throw new Error("Preencha todos os campos !");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        category,
        amount,
        status: true
      },
    });

    return product;
  }
}

export { CreateService };
