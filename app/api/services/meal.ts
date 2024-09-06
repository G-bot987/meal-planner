
import prisma from '@/lib/prisma'

export async function globalSearchMeals(search:string) {


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


export async function personalSearchMeals(search:string,  id:string|undefined) {
  switch (typeof id) {
    case  'string':
      const idAsInt = parseInt(id, 10)
      // Ensure `id` is a valid number before querying the database
      if (isNaN(idAsInt)) {
            return 'Invalid user ID';
          }
          const data = await prisma.meal.findMany({
            where: {
              name: {
                contains: search ,
                mode: 'insensitive'
              },
              original_meal_id: {
                equals: null ,
              },
              user_id: {
               equals: idAsInt ,
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
    case 'undefined':
        return  'an error getting your session'
    default:
        return 'An unexpected error occurred';
    } 
}