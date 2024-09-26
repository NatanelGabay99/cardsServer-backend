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
    MONGODB_URI=mongodb+srv://natanelg1:RFMGFuJgOdG9V8SM@cluster0.wqt4rma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

4. **Start the server:**
    ```sh
    npm start
    ```


