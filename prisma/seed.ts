import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "user@example.com",
      password: 123456,
      name: "John Doe",
    },
  });

  
  await prisma.event.create({
    data: {
      title: "Birthday Party",
      date: new Date(),
      location: "Smoke and Grill",
    },
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
