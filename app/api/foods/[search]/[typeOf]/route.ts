import { NextResponse } from 'next/server'
import { globalSearchFoods } from '../../../services/food';

export async function GET(request: Request, context: { params: { typeOf: string, search: string } }) {

    const {params:{typeOf, search}} = context;


try {
    switch (typeOf) {
        case 'global':
            const data = await globalSearchFoods(search)
            return   NextResponse.json(data)  
        case 'personal':
            console.log('personal search')
            return   NextResponse.json('data coming soon')
        default:
            return NextResponse.json({ message: 'Invalid search type' }, { status: 400 });  
      }
} catch (error:any) {
    console.error('Error in search:', error);
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
}


}