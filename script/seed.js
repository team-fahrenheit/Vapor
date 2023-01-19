"use strict";
require("dotenv").config();

const {
  db,
  models: { User },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating first users
  const users = await Promise.all([
    User.create({
      firstName: "Justin",
      lastName: "Wooley",
      email: "justinwooley@vapor.com",
      password: "123",
      userType: "Admin",
      cart: [
        {
          sku: 123456789,
          albumTitle: "Madden 2099",
          platform: "PlayStation 5",
          regularPrice: 30.0,
          quantity: 1,
        },
        {
          sku: 456789456,
          albumTitle: "Minecraft 2.0",
          platform: "PC",
          regularPrice: 150.0,
          quantity: 2,
        },
        {
          sku: 987654321,
          albumTitle: "Call of Duty XYZ",
          platform: "Xbox",
          regularPrice: 100.0,
          quantity: 1,
        },
      ],
    }),
    User.create({
      firstName: "Jason",
      lastName: "Potvin",
      email: "jasonpotvin@vapor.com",
      password: "123",
      userType: "Admin",
    }),
    User.create({
      firstName: "Edmund",
      lastName: "Fahrenheit",
      email: "edmundfahrenheit@vapor.com",
      password: "123",
      userType: "Admin",
      image: "/img/edmundfahrenheit.jpg",
    }),
    User.create({
      firstName: "Elvis",
      lastName: "Presley",
      email: "elvispresley@gmail.com",
      password: "123",
      userType: "Member",
      image: "/img/ElvisPresley.jpeg",
    }),
    User.create({
      firstName: "Paul",
      lastName: "McCartney",
      email: "paulmccartney@gmail.com",
      password: "123",
      userType: "Member",
      image: "/img/PaulMcCartney.jpeg",
    }),
    User.create({
      firstName: "Tom",
      lastName: "Scholz",
      email: "tomscholz@gmail.com",
      password: "123",
      userType: "Member",
      image: "/img/TomScholz.png",
    }),
    User.create({
      firstName: "Michael",
      lastName: "Jackson",
      email: "michaeljackson@gmail.com",
      password: "123",
      userType: "Member",
      image: "/img/MichaelJackson.jpeg",
    }),
    User.create({
      firstName: "Bruce",
      lastName: "Springsteen",
      email: "brucespringsteen@gmail.com",
      password: "123",
      userType: "Member",
      image: "/img/BruceSpringsteen.jpeg",
    }),
    User.create({
      firstName: "John",
      lastName: "Cena",
      email: "johncena@unseen.com",
      password: "123",
      userType: "Member",
      image: "/img/johncena.png",
    }),
    User.create({
      firstName: "Martin",
      lastName: "Luther King",
      email: "ihad@dream.com",
      password: "123",
      userType: "Member",
      image: "/img/martinking.jpeg",
    }),
    User.create({
      firstName: "Genghis",
      lastName: "Khan",
      email: "GenghisKhan@warlords.com",
      password: "123",
      userType: "Member",
      image: "/img/genghiskhan.webp",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
