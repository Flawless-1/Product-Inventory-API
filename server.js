const express = require('express');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Product Inventory API is running smoothly!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});