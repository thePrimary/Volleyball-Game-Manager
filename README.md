# Volleyball Game Manager

A full-stack web application that facilitates the organization and management of recreational volleyball games for Mercer University students. The platform allows users to register, create games, join games, and track participants.

## Features
- User registration and authentication (JWT-based).
- Create, join, and manage volleyball game events.
- Real-time updates for game information.
- Player and team statistics tracking.

## Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Other:** Docker (for containerization)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local or Cloud)
- [Docker](https://www.docker.com/) (Optional)

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/volleyball-game-manager.git
    cd volleyball-game-manager
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `backend` folder with the following:
    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the app:**
   - **Backend:**
        ```bash
        cd backend
        npm start
        ```
   - **Frontend:**
        ```bash
        cd ../frontend
        npm start
        ```

6. **Docker (Optional):**
   If you prefer to run the app in Docker:
   ```bash
   docker-compose up --build
