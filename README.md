<img width="1584" alt="Screenshot 2023-01-18 at 8 55 11 PM" src="https://user-images.githubusercontent.com/114819096/213337309-421203f5-b2f7-4037-97a2-83032ecda306.png">

## <a href='https://vapor.onrender.com/'>VAPOR</a>
<p>     by <a href='https://github.com/EddieFahrenheit'>Edmund He</a>, <a href='https://github.com/Jasonp1992'>Jason Potvin</a>, and <a href='https://github.com/justintricate'>Justin Wooley</a> </p>
<p> (Render shuts down after 15 min of inactivity. Please allow the page to load for a few seconds upon initially entering) </p>

LinkedIn:
<a href='https://www.linkedin.com/in/eddiefahrenheit/'>Edmund He</a> | 
<a href='https://www.linkedin.com/in/jason-potvin/'>Jason Potvin</a> | 
<a href='https://www.linkedin.com/in/justin-wooley//'>Justin Wooley</a>

- Vapor is a video game ecommerce website that pulls all video games from the Best Buy API.
- It is a SPA (Single Page Application) that follows REST (Representation State Transfer) protocol
- Exemplifies functional programming, and allows for CRUD (Create Read Update Delete) operations
- Implements user authentication and password encryption
- Stack: PERN (Postgresql, Express, React, Node)
- Node libraries featured: Redux, MUI (Material UI), JWT (JSON Web Tokens), Sequelize, Bcrypt
- Check it out at <a href='https://vapor.onrender.com/'>VAPOR</a>

## Set Up Depencies and Database
- Obtain <a href='https://bestbuyapis.github.io/api-documentation/?javascript#getting-started'>Best Buy API keys</a> with non-gmail or .edu accounts
- create your .env file with your secrets, namely JWT=`input`,key1=`input`,key2=`input`, key3=`input`
- Run `npm i` for all dependencies
- With postgresql installed, run `createdb graceshopper`

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)
- Windows users should run 'npm run build:dev' & 'npm run start' in separate terminals for full functionality 
