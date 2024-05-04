import prismaClient from "../lib/prismaSingleton"

export class ProductImageService {

  getImageByProductId = async(productId) => {
    return await prismaClient.productImage.findMany({
      where: {
        productId
      },
      include: {
        product: true
      }
    })
  }
}

export default new ProductImageService()
