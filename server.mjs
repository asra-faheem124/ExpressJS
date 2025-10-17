import express from "express";
import productRouter from "./routes/productRoutes.mjs";
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// body parser
app.use(express.json());

// product routes
app.use('/products', productRouter)

// mongodb connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://asrafaheem124_db_user:vXSS5nez@cluster0.awbelfz.mongodb.net/2307C1');
  console.log('MongoDb Connected Successfully...')
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
