import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import commandRoutes from './routes/commandRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', commandRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
