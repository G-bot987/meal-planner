
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { searchFoods } from '../../services/food';

export async function GET(request: Request, context:any) {

    const {params} = context;

 const data = await searchFoods(params.search)

    return NextResponse.json(data)  
}