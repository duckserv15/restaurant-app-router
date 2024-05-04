import prismaClient from "../lib/prismaSingleton"

class CategoryService {
  getCategoryList = async() => {

      return await prismaClient.category.findMany()
  }
}

export default new CategoryService()