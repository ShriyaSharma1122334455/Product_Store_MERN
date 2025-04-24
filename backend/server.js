import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './route/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json()); // allows us to accept json data in the body

app.use('/api/products', productRoute); // use the product route for all requests to /api/products


app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on http://localhost:'+ PORT);
});