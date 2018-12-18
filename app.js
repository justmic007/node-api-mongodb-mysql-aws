const express = require('express');
const app = express();

// Adding a loggin package
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

// Middleware
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'It works!'
//   });
// });

// This is a filter essentially

app.use(morgan('dev'));

// Middleware
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

// Handles errors that bypass the above Middleware
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app;
