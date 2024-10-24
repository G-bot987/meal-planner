import { NextRequest, NextResponse } from 'next/server'
import { addFood } from '../../services/food';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function POST(request: NextRequest) {

    const foodToCreate = await request.json()

    const session = await getServerSession(authOptions);
    const id = session?.user.id

    addFood(foodToCreate, id)


    return   NextResponse.json({ message: 'Data received successfully', foodToCreate:foodToCreate })

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