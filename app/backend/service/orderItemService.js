import prismaClient from "../lib/prismaSingleton"

class OrderItem {
  createOrderItem = async(productId, price , quantity , orderId) => {

       await prismaClient.orderItem.create({
        data : {
          orderId,
          productId,
          price,
          quantity,
          
        }
      })
  }
}

export default new OrderItem()