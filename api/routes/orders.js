const express = require('express');

const router = express.Router();

// ROUTING within products endpoint

// GET request for all products

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created'
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order Deleted',
    orderId: req.params.orderId
  });
});

module.exports = router;
