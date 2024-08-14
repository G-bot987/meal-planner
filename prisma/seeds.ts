import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'


const prisma = new PrismaClient()

async function createFoods() {
    console.log('creating foods')
    await prisma.foods.upsert({
        where: { name: 'carrot' },
        update: {}, 
        create: {
          name: 'carrot',
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

async function main() {
    createFoods()
    createUser()
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