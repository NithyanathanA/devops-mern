import express from 'express';
import cors from 'cors';
import router from './router/mainRouter.js';
import dbConnection from './db/connection.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use("/api", router);

let server;
const startServer = async () => {
  try {
    await dbConnection();
   server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();

export {app,server}