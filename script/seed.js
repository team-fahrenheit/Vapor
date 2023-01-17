"use strict";

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
      email: "JustinWooley@Vapor.com",
      password: "123",
      userType: "Admin",
    }),
    User.create({
      firstName: "Jason",
      lastName: "Potvin",
      email: "JasonPotvin@Vapor.com",
      password: "123",
      userType: "Admin",
    }),
    User.create({
      firstName: "Edmund",
      lastName: "Fahrenheit",
      email: "EdmundFahrenheit@Vapor.com",
      password: "123",
      userType: "Admin",
      image: "/img/edmundfahrenheit.jpg",
    }),
    User.create({
      firstName: "Elvis",
      lastName: "Presley",
      email: "ElvisPresley@Gmail.com",
      password: "123",
      userType: "Member",
    }),
    User.create({
      firstName: "Paul",
      lastName: "McCartney",
      email: "PaulMcCartney@Gmail.com",
      password: "123",
      userType: "Member",
    }),
    User.create({
      firstName: "Tom",
      lastName: "Scholz",
      email: "TomScholz@Gmail.com",
      password: "123",
      userType: "Member",
    }),
    User.create({
      firstName: "Michael",
      lastName: "Jackson",
      email: "MichaelJackson@Gmail.com",
      password: "123",
      userType: "Member",
    }),
    User.create({
      firstName: "Bruce",
      lastName: "Springsteen",
      email: "BruceSpringsteen@Gmail.com",
      password: "123",
      userType: "Member",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
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
