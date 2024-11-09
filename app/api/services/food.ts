
import prisma from '@/lib/prisma'
import { FOODINTERFACE } from '@/utils/interfaces/mealsAndFoodsInterfaces/interfaces';


class CustomError extends Error {
  code: number;
  cause?: string

  constructor(message: string, code: number, cause?:string) {
      super(message);

      this.code = code;
      this.cause = cause;
      this.name = this.constructor.name;

      Object.setPrototypeOf(this, CustomError.prototype);
  }
}

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


export async function addFood(food:FOODINTERFACE, id:string|undefined) {


  switch (typeof id) {
    case  'string':
            // make request
      try {
          const idAsInt = parseInt(id, 10)
          // Ensure `id` is a valid number before querying the database
          if (isNaN(idAsInt)) {
              throw new CustomError(
                'user id is not a number',
                400
              );
            }
          await prisma.food.create({
            data: {
              user_id: idAsInt,
              ...food
            },
          })
          
        return {   
                  status: 'success',
                  message: 'Food added successfully', 
                  code: 201 
                }  
        
      } catch (error:any) {
        console.error('Error creating food:', error, 'your prisma error code is:', error.code);
        throw new CustomError(
          'your food data was in the incorrect form', 400,error.message)
        }  

    case 'undefined':
      //handle these
      try {

        throw new CustomError(    
          'a user could not be found',
          401,
          'session id was undefined in service', 
        );
      } catch (error) {
        throw error; 
      }
    default:
      try {
        throw new CustomError (  'a user could not be found',
        401,
        'failure id was not a string in service caught in default case', 
        );  
      } catch (error) {
        throw error; 
      }
  
    }
}