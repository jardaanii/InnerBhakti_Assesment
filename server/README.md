# Backend Server Setup

This guide will help you set up and run the backend server for this project.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A MongoDB instance (local or hosted).

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

## **Install dependencies**: Navigate to the server directory and run:

```
cd server
npm install
```

## **Create a `.env` file**: In the server directory, create a `.env` file with the following environment variables:

```
PORT=3000
mongoURL="your-mongodb-connection-string"
```

- `PORT`: The port on which your server will run (e.g., 3000).
- `mongoURL`: Your MongoDB connection string (replace `"your-mongodb-connection-string"` with your actual MongoDB URI ).

## **Start the Server**: Run the following command to start the backend server:

```
npm start
```

- The server should now be running at `http://localhost:<PORT>` (replace `<PORT>` with the value you set in the `.env` file).
