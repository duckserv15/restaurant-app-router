import { NextResponse } from 'next/server';

export async function GET(req) {
  console.log(req.url);
  return NextResponse.json({data : "reva"})
}
