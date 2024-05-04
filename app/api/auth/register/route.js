import { NextResponse } from 'next/server';
import authService from "../../../backend/service/authService"

export async function POST(req) {

  const {email , password} = await req.json()

  await authService.register(email,password)
  return NextResponse.json({data : "success"})
}
