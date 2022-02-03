const { Product } = require('../models');

const productData = [
  {
    product_name: 'Giraffe',
    price: 30000.00,
    stock: 8,
    category_id: 1,
  },
  {
    product_name: 'Chimp',
    price: 5000.00,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Gazelle',
    price: 4000.00,
    stock: 4,
    category_id: 4,
  },
  {
    product_name: 'Polar Bear',
    price: 50000.00,
    stock: 1,
    category_id: 3,
  },
  {
    product_name: 'Flamingo',
    price: 2000.00,
    stock: 20,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
