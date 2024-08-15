import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'


const prisma = new PrismaClient()

async function createFoods() {
    console.log('creating foods')
    await prisma.food.upsert({
        where: { name: 'carrot' },
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
        where: { name: 'chicken' },
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
        where: { name: 'bread' },
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
    await prisma.client_profile.upsert({
        where: { email: 'test@test.com' },
        update: {},
        create: {
          name: 'test',
          password,
          email: 'test@test.com'
        },
    })
}

async function createMeals() {
    console.log('creating meals')
    await prisma.meal.upsert({
        where: { id: 1 },
        update: {}, 
        create: {
          name: 'Chicken Sandwich',
          client_id: 1,
          foods: {
            create: [
              { food: { connect: { id: 2 } }, assigned_by: 'admin' },
              { food: { connect: { id: 3 } }, assigned_by: 'admin' },
            ],
          },
        },
      });
}

async function main() {
    createFoods()
    createUser()
    createMeals()
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