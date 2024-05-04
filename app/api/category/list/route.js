import { NextResponse } from 'next/server';
import categoryrService from "../../../backend/service/categoryService"

export async function GET() {

  const category = await categoryrService.getCategoryList()

  return NextResponse.json({data :category})
}
