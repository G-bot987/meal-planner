import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'


const prisma = new PrismaClient()

async function createFoods() {
    console.log('creating foods')
    await prisma.food.upsert({
        where: { id: 1 },
        update: {}, 
        create: {
          name: 'carrot',
          calories:       1,
          fat:            1,
          protein:        1,
          carbohydrates:  1,
          fibre:          1,
          sugar:          1,
          weight:         1,
        },
    })
    await prisma.food.upsert({
        where: { id: 2 },
        update: {}, 
        create: {
          name: 'chicken',
          calories:       4,
          fat:            0.12,
          protein:        0.54,
          carbohydrates:  0.10,
          fibre:          0.0,
          sugar:          0.0,
          weight:         2,
        },
    })
    await prisma.food.upsert({
        where: { id: 3 },
        update: {}, 
        create: {
          name: 'bread',
          calories:       10,
          fat:            0.4,
          protein:        0.10,
          carbohydrates:  2.0,
          fibre:          0.3,
          sugar:          0.0,
          weight:         4,
        },
    })
}

async function createUser() {
    console.log('creating user')
    const password = await hash('test', 12)
    // await prisma.user.upsert({
    //     where: { email: 'test@test.com' },
    //     update: {},
    //     create: {
    //       name: 'test',
    //       password,
    //       email: 'test@test.com'
    //     },
    // }),
    await prisma.user.upsert({
      where: { email: 'newuser@test.com' },
      update: {},
      create: {
        name: 'newUser',
        password,
        email: 'newuser@test.com'
      },
  })
}

async function createMeals() {
    console.log('creating meals')
    // await prisma.meal.upsert({
    //     where: { id: 1 },
    //     update: {}, 
    //     create: {
    //       name: 'Chicken Sandwich',
    //       user_id: 1,
    //       foods: {
    //         create: [
    //           { food: { connect: { id: 2 } }, assigned_by: 'admin' },
    //           { food: { connect: { id: 3 } }, assigned_by: 'admin' },
    //         ],
    //       },
    //     },
    //   });
    // await prisma.meal.upsert({
    //   where: { id: 2 },
    //   update: {}, 
    //   create: {
    //     name: 'store bought pizza',
    //     user_id: 1,
    //     calories:        750,
    //     fat      :        120,
    //     protein   : 20,
               
    //     carbohydrates:    300,
    //     fibre         :   6,
    //     sugar          :  30,
    //     weight          :700,
    //     portion          :'one slice',
    //     foods: {
    //       create: [

    //       ],
    //     },
    //   },
    // });
      await prisma.meal.create({
   
        data: {
          name: 'store bought sushi spicy chicken roles',
          user_id: 2,
          calories:        500,
          fat      :        5,
          protein   : 20,
                 
          carbohydrates:    70,
          fibre         :   6,
          sugar          :  30,
          weight          :450,
          portion          :'6 roles 1 pack',
          foods: {
            create: [

            ],
          },
        },
      });
}


async function createNewMealVersion() {
  const originalMealId = 2; 

  const originalMeal = await prisma.meal.findUnique({
    where: { id: originalMealId },
  });

  if (!originalMeal) {
    console.error('Original meal not found');
    return;
  }

  const highestVersion = originalMeal.version;
  const newVersionNumber = highestVersion + 1;

  await prisma.meal.create({
    data: {
      name:`new ${originalMeal.name}`,
      version: newVersionNumber,
      original_meal_id: originalMeal.id,
      calories:        900,
      fat      :        70,
      protein   : 20,
             
      carbohydrates:    500,
      fibre         :   6,
      sugar          :  60,
      weight          :500,
      foods: {
        create: [

        ]
      },
      user_id: originalMeal.user_id ,
    },
  });

  console.log(`Created a new version of meal ${originalMeal.id} with version ${newVersionNumber}`);
}


async function main() {
    // createFoods()
    // createUser()
    createMeals()
    // createNewMealVersion()
}

main()
    .then(async () => {
        await prisma.$disconnect()  
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })