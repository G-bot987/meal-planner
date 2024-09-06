
import prisma from '@/lib/prisma'

export async function globalSearchFoods(search:string) {

  

   const data = await prisma.food.findMany({
        where: {
          name: {
            contains: search ,
            mode: 'insensitive'
          },
        },
      })

    return data
}

export async function personalSearchFoods(search:string, id:string|undefined) {

  switch (typeof id) {
    case  'string':
      const idAsInt = parseInt(id, 10)
      // Ensure `id` is a valid number before querying the database
      if (isNaN(idAsInt)) {
            return 'Invalid user ID';
          }
      const data = await prisma.food.findMany({
        where: {
          name: {
            contains: search ,
            mode: 'insensitive'
          },
          user_id: {
           equals: idAsInt ,
         },
        },
      })
      return data    
    case 'undefined':
        return  'an error getting your session'
    default:
        return 'An unexpected error occurred';
    }
}