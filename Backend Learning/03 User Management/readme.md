# User Management Backend System

## Problem Statement:
   Design and develop a user management backend system using Express.js and MongoDB, allowing users to create, login account

## Techstack:
  - Express Js
  - MongoDB

## Library:
  - Mongoose
  - Cors
  - Nodemon
  - dotenv

## Installing Instruction
1. Install the `node_modules` using:

   ```
   
     npm install
     
   ```
2. Establish the connection to DataBase `MongoDB` :
     - Create a `.env` file in root folder of Project
     - Copy the `DB_URI` from MongoDB Atlas using your creditinals
     - Paste in `.env` file in this way:
       
       ```

       DB_URI=

       ```
     - Save the `.env` file and exit.
  
3. Now Open the `Terminal` and run this:

     ```

      npm start

     ```
     or
   
     ```

      npm run dev

     ```

## API Documentations:

### Routes:
  - /home
  - /register
    
    - For `register` yourself you have to provide:
      
      ```
        {
            "name": "Your Name",
            "email": "example@gmail.com",
            "password": "Your Password"
        }
      ```
      
  - /login
    
    - For `login` yourself you have to provide:
      
      ```
        {
            "email": "example@gmail.com",
            "password": "Your Password"
        }
      ```
