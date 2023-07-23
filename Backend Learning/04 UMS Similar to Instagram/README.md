# User Management System Similar to Instagram

This project is a full-stack Instagram clone that includes user registration, login, and user page functionality. It is built using HTML, CSS, and JavaScript for the front-end, while the back-end is developed using Express.js and MongoDB for data storage.

## Features

- User Registration: Allows users to sign up with their name, username, bio, email, and password.
- User Login: Provides a login mechanism to authenticate users using their username and password.
- User Page: Displays user information fetched from the server after successful login.

## Prerequisites

To run this application, you need to have the following installed on your system:
- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine:
  ```
    git clone <repository-url>
  ```

2. Install the dependencies for both the front-end and back-end:
  ```
    cd client
    npm install
    cd ../server
    npm install
  ```

3. Configuration:

- Rename the .env.example file in the `UMS Similar to Instagram` directory to .env.
- Update the `.env` file with your `MongoDB connection string` and a `secret key` for JWT token generation.

## Usage

1. Start the back-end server:
  ```
    cd server
    npm start
  ```

2. Access the application in your web browser:

- The front-end development server will run on `http://localhost:5500`.
- Open `http://localhost:5500` in your web browser to access the application.

## API Endpoints

- `POST /signup`: This endpoint is used for user registration. It accepts the following JSON data in the request body:
  ```
    {
      "name": "Rohan Kumar",
      "username": "rohan07",
      "bio": "Hello, I'm Rohan!",
      "email": "rohan@example.com",
      "password": "password123"
    }
  ```
  Upon successful registration, the server will respond with a success message.

- `POST /login`: This endpoint is used for user login. It accepts the following JSON data in the request body:
  ```
    {
      "username": "rohan07",
      "password": "password123"
    }
  ```
  If the provided credentials are correct, the server will respond with a success message and set a JWT token in the response cookie.

## Security

- User passwords are hashed and salted before storing them in the database to enhance security.
- Sensitive routes are protected using authentication middleware to ensure that only authenticated users can access them.

## Contributing

- Contributions are welcome! If you find any issues or want to add new features, feel free to create a pull request.

## Author

  ### Rahul Kumar Sharma
