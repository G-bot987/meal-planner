
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context:any) {

    const {params} = context;

   const data = await prisma.food.findMany({
        where: {
          name: {
            contains: params.search ,
            mode: 'insensitive'
          },
        },
      })

    return NextResponse.json(data)  
}