const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', (req, res) => {
  // Get all products logic
});

router.get('/:id', (req, res) => {
  // Get product by ID logic
});

module.exports = router;