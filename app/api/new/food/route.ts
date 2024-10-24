import { NextResponse } from 'next/server'
import { globalSearchFoods, personalSearchFoods } from '../../services/food';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function POST(request: Request, context: { params: { typeOf: string, search: string } }) {


console.log('create food')

    // const {params:{typeOf, search}} = context;

    // const session = await getServerSession(authOptions);
    // const id = session?.user.id
    return   NextResponse.json('success') 
// try {
//     switch (typeOf) {
//         case 'global':
//             const data = await globalSearchFoods(search, id)
//             return   NextResponse.json(data)  
//         case 'personal':
//             const personalData = await personalSearchFoods(search, id)
//             return   NextResponse.json(personalData)
//         default:
//             return NextResponse.json({ message: 'Invalid search type' }, { status: 400 });  
//       }
// } catch (error:any) {
//     console.error('Error in search:', error);
//     return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
// }


}