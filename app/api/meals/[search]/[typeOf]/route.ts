
import { NextResponse } from 'next/server'
import { globalSearchMeals, personalSearchMeals } from '../../../services/meal';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export async function GET(request: Request, context:any) {

    const {params:{typeOf, search}} = context;

    const session = await getServerSession(authOptions);
    const id = session?.user.id
    
    try {
    switch (typeOf) {
        case 'global':
            const data = await globalSearchMeals(search)
            return   NextResponse.json(data)  
        case 'personal':
            const personalData = await personalSearchMeals(search, id)
            return   NextResponse.json(personalData)
        default:
            return NextResponse.json({ message: 'Invalid search type' }, { status: 400 });  
      }
    } catch (error:any) {
    console.error('Error in search:', error);
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    }
}


