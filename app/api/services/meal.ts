
import prisma from '@/lib/prisma'

export async function searchMeals(search:string) {


   const data = await prisma.meal.findMany({
        where: {
          name: {
            contains: search ,
            mode: 'insensitive'
          },
          original_meal_id: {
            equals: null ,
          },
        },
        include: {
            foods:{
                include:{
                    food: true
                }
            },
            archived_meals: {
              include: {
                foods: {
                  include: {
                    food: true,
                  },
                },
              },
            },
          },

      })

    return data 
}