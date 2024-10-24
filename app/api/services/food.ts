
import prisma from '@/lib/prisma'

export async function globalSearchFoods(search:string, id:string|undefined) {

    switch (typeof id) {
      case  'string':
        // Ensure `id` is a valid number before querying the database
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
              },
            })
            const response = data.map(food => {
             if (  food.user_id ==  idAsInt ){
              return {...food, creator:true}
             }else{
              return {...food, creator: false};
             }
            });
          return response 
      case 'undefined':
          return  'an error getting your session'
      default:
          return 'An unexpected error occurred';
      }
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
        select: {
          user_id: true,
          id: true,
          name: true,
          calories: true,
          carbohydrates: true,
          fat: true,
          fibre: true,
          protein: true,
          sugar: true,
          weight: true,
        },
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
      
     const response = data.map(food => ({...food, creator: true}))
      return response    
    case 'undefined':
        return  'an error getting your session'
    default:
        return 'An unexpected error occurred';
    }
}


export async function addFood(food:any, id:string|undefined) {

  // will use a loop just destructing for now while iterating over logic
  const {name, calories, carbohydrates, fat, fibre, protein, sugar, weight} = food

  switch (typeof id) {
    case  'string':
      const idAsInt = parseInt(id, 10)
      // Ensure `id` is a valid number before querying the database
      if (isNaN(idAsInt)) {
            return 'Invalid user ID';
          }
      const data =  await prisma.food.create({
        data: {
          user_id: idAsInt,
          name: name,
          calories: calories,
          carbohydrates: carbohydrates,
          fat: fat,
          fibre: fibre,
          protein: protein,
          sugar: sugar,
          weight: weight
        },
      })
      
     const response = data
      return response    
    case 'undefined':
        return  'an error getting your session'
    default:
        return 'An unexpected error occurred';
    }
}