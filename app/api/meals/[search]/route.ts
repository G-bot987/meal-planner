
import { NextResponse } from 'next/server'
import { searchMeals } from '../../services/meal';

export async function GET(request: Request, context:any) {

    const {params} = context;

    const data = await searchMeals(params.search)

    return NextResponse.json(data)  
}