<img width="1584" alt="Screenshot 2023-01-18 at 8 55 11 PM" src="https://user-images.githubusercontent.com/114819096/213337309-421203f5-b2f7-4037-97a2-83032ecda306.png">

## <a href='https://vapor.onrender.com/'>VAPOR</a>
-          by <a href='https://github.com/EddieFahrenheit'>Edmund He</a>, <a href='https://github.com/Jasonp1992'>Jason Potvin</a>, and <a href='https://github.com/justintricate'>Justin Wooley</a>

- Vapor is a video game ecommerce website that pulls all video games from the Best Buy API.
- It is a SPA (Single Page Application) that follows REST (Representation State Transfer) protocol
- Exemplifies functional programming, and allows for CRUD (Create Read Update Delete) operations 
- Stack: PERN (Postgresql, Express, React, Node)
- Node libraries featured: Redux, MUI (Material UI), JWT (JSON Web Tokens), Sequelize, Bcrypt

## Set Up Depencies and Database
- Run `npm i` for all dependencies
- With postgresql installed, run `createdb graceshopper`

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)
