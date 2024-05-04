import { NextResponse } from 'next/server';
import productService from "../../../backend/service/productService"

export async function POST(req) {

  const {id} = await req.json()
  const product = await productService.getProductById(id)

  if(!product){ 
    return NextResponse.json({data : "product is no found"})
  }
  
  return NextResponse.json({data : product})
}
