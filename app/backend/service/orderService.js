import prismaClient from "../lib/prismaSingleton"

export class OrderService {

  createOrder = async(userId) => {
    return await prismaClient.order.create({
      data : {
        userId,
        status: "pending",
        orderDate: new Date(),
        totalAmount: 0
      }
    })
  }

  getOrderById =async(id)=> {
    const order = await prismaClient.order.findFirst({
      where: {
        id,
      }
    })

    return order
  } 

  updateTotalAmount = async(id, totalAmount) => {
    return await prismaClient.order.update({
      where: {
        id,
      },
      data: {
        totalAmount: totalAmount
      }
    })
  }
}

export default new OrderService()
