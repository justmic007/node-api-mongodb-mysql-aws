const express = require('express');

const router = express.Router();

// ROUTING within products endpoint

// GET request for all products
router.get('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling GET requests to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /products'
  });
});

// GET request for a single product by its id
router.get('/:productsid', (req, res, next) => {
  // First extract the product id
  const id = req.params.productsid;
    if (id === 'special') {
      res.status(201).json({
        message: 'You discovered a Special ID',
        id: id
      });
    } else {
      res.status(201).json({
        message: 'You passed an ID'
      })
    }
  res.status(201).json({
    message: 'Hanlding GET request to /product:id'
  })
});


// PATCH requests
router.patch('/:productsid', (req, res, next) => {
  res.status(201).json({
    message: 'Updated product!'
  });
});

// DELETE requests
router.delete('/:productsid', (req, res, next) => {
  res.status(201).json({
    message: 'Delete product!'
  });
});


module.exports = router;
