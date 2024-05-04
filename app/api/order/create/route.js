import { NextResponse } from 'next/server';
import userService from "../../../backend/service/userService"
import orderService from "../../../backend/service/orderService"
import orderItemService from "../../../backend/service/orderItemService"
import ProductService from "../../../backend/service/productService"

export async function POST(req) {

  const {userId, productId , quantity} = await req.json()

  const user = await userService.getUserById(userId)

  const order = await orderService.createOrder(user.id)

  const product = await ProductService.getProductById(productId)

  await orderItemService.createOrderItem(product.id,product.price,quantity, order.id)
  
  return NextResponse.json({data : {
    orderId: order.id
  }})
}
