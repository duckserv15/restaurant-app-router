import { NextResponse } from 'next/server';
import productService from "../../../backend/service/productService"
import productImageService from "../../../backend/service/productImage"

export async function GET() {
  const product = await productService.getProductList();

  if (!product) {
    return NextResponse.json({ data: [] });
  }

  const newProdPromises = product.map(async (item) => {
    const image = await productImageService.getImageByProductId(item.id);
    return {
      ...item,
      image,
    };
  });

  const newProd = await Promise.all(newProdPromises);

  return NextResponse.json({ data: newProd });
}

