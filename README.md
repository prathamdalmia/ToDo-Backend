# ToDo-Backend

A robust and secure backend API for managing to-do lists, built with Node.js, Express, and MongoDB. This project enables user authentication and provides RESTful endpoints to create, read, update, and delete tasks, making it ideal for integration with any frontend or mobile client.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure registration and login using JWT and Argon2 password hashing.
- **Task Management:** Create, read, update, and delete to-do items.
- **RESTful API:** Clean endpoints for easy integration.
- **Error Handling:** Asynchronous error handling middleware.
- **Environment Config:** Support for environment variables via `.env`.
- **CORS Enabled:** Ready for cross-origin requests.

## Tech Stack

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT, Argon2
- **Key Dependencies:**
  - express
  - mongoose
  - cors
  - dotenv
  - jsonwebtoken
  - argon2
  - express-async-handler

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prathamdalmia/ToDo-Backend.git
   cd ToDo-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server:**
   ```bash
   npm run dev
   ```

   The server will start on the port specified in `.env` (default: 5000).

## API Documentation

### User Endpoints

- `POST /api/user/register` — Register a new user
- `POST /api/user/login` — User login, returns JWT

### To-Do Endpoints

- `GET /api/todo/` — Get all to-dos for authenticated user
- `POST /api/todo/` — Create a new to-do
- `PUT /api/todo/:id` — Update a to-do by ID
- `DELETE /api/todo/:id` — Delete a to-do by ID

> All `/api/todo` endpoints require authentication via JWT in the `Authorization` header.

## Project Structure

```
.
├── config/
│   └── db.js
├── controllers/
├── middleware/
├── models/
├── routes/
│   ├── userRoutes.js
│   └── toDoRoutes.js
├── server.js
├── package.json
└── .env (not committed)
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request with a detailed description.

## License

This project is licensed under the ISC License.

---

> For any questions or issues, please open an issue on the repository.
