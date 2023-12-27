import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function createFoods() {
    console.log('creating foods')
    await prisma.foods.create({
        data: {
            name: 'carrot'
        }
    })
}

async function main() {
    createFoods()
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