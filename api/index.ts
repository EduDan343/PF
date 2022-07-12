// import { sequelize } from './src/db';
import app from './src/app';
import {PrismaClient} from '@prisma/client'
import {cars, spider, sonic, iceAge, thor, jurassic, MinionsTheRiseofGru, lightyear, topGun, DrStranger, Minions, MinionsHolidaySpecial, SupermanSpidermanorBatman} from "./src/routes/data"

const prisma = new PrismaClient()

app.listen(3001, async () => {

   const del1 = await prisma.comment.deleteMany({})
   const del = await prisma.movie.deleteMany({})

   const movie = await prisma.movie.createMany({   
      data: [cars, spider, sonic, iceAge, thor, jurassic, MinionsTheRiseofGru, lightyear, topGun, DrStranger, Minions, MinionsHolidaySpecial, SupermanSpidermanorBatman]
  })
   console.log(`Server ready at: http://localhost:3001`);
})

 