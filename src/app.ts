import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import { setupSwagger } from './swagger'; 
import commandRoutes from './routes/commandRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.use(cors());
    app.use(bodyParser.json());
    
    app.use('/api', commandRoutes);

    setupSwagger(app);

    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); 
  }
};

startServer();
