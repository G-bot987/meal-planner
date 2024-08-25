
import prisma from '@/lib/prisma'

export async function searchMeals(search:string) {


   const data = await prisma.meal.findMany({
        where: {
          name: {
            contains: search ,
            mode: 'insensitive'
          },
        },
        include: {
            foods:{
                include:{
                    food: true
                }
            }
          },
      })

    return data 
}