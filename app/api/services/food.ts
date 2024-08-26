
import prisma from '@/lib/prisma'

export async function searchFoods(search:string) {

  

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