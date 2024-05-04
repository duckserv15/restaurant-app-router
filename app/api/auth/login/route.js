import { NextResponse } from 'next/server';
import authService from "../../../backend/service/authService"

export async function POST(req) {

  const {email , password} = await req.json()

  const user = await authService.login(email,password)

  if(!user){ 
    return NextResponse.json({data : "login failed"})
  }
  
  const {password : pass, ...rest} = user

  return NextResponse.json({data : rest})
}
