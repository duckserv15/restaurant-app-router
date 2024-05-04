import prismaClient from "../lib/prismaSingleton"

export class ProductService {

  getProductList = async() => {
    return await prismaClient.product.findMany({
      include: {
        category: true
      }
    })
  }

  getProductById = async(id) => {
    return await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        category: true
      }
    })
  }
}

export default new ProductService()
