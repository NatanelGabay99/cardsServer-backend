# Project Title
CardsServer-Backend

## Description
This project contains the backend side of the frontend project (React cards project). It provides APIs for managing business cards, including creating, updating, deleting, and retrieving card information. The backend is built using Node.js and Express, and it connects to a MongoDB database to store card data.

## Technologies Used
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing card data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.

## Libraries Used
bcryptjs- a widely used library for securely hashing passwords.
chalk- a declarative drawing library.
config- a popular module used for managing application configuration settings.
cors- used to enable or configure cross-origin requests in a web application.
cross-env- a small but useful tool that helps you set environment variables in a cross-platform way.
dotenv- a popular Node.js module used to load environment variables from a .env file into process.env in your Node.js application.
express- a popular, lightweight, and flexible web application framework for Node.js.
joi-  a powerful and widely used data validation library for JavaScript.
jsonwebtoken- a widely-used Node.js library that allows you to create, sign, verify, and decode JSON Web Tokens (JWTs).
lodash- a popular JavaScript utility library that provides a wide range of functions for working with arrays, objects, strings, and other data types in a more efficient and cleaner way.
mongoose- a popular Object Data Modeling (ODM) library for MongoDB and Node.js.
morgan- a popular HTTP request logging middleware for Node.js applications.

## Installation Instructions

1. **Clone the repository:**
    ```sh
    git clone url: ['https://github.com/NatanelGabay99/cardsServer-backend.git']
    cd CardsServer-Backend
    ```

2. **Install dependencies:**
    Make sure you have Node.js and npm installed. Then run:
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=8181,
   MONGODB_URI=YOUR_ATLASS_CONNECTION_STRING
    ```

4. **Start the server:**
    ```sh
    npm start
    ```

 5. **Review BackEnd Documentation**   
    Here you may review the documentation for the backend side of the cards project via link
    Cards documentation: ["https://documenter.getpostman.com/view/34977862/2sAXxQes7z"]
    Users documentation: ["https://documenter.getpostman.com/view/34977862/2sAXxQdCAj"],


