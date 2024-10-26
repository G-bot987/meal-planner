import { NextRequest, NextResponse } from 'next/server'
import { addFood } from '../../services/food';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function POST(request: NextRequest) {

    
    try {
        const foodToCreate = await request.json()
    
        const session = await getServerSession(authOptions);
        const id = session?.user.id
    
        const res = await addFood(foodToCreate, id)
    
        return   NextResponse.json(res)
        
    } catch (error:any) {
            return NextResponse.json({ message: 'your food could not be created', error: error.message }, { status: 500 });
    }
}