const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const Hello = require('../models/Hello');

// ----------------------
// GET /  (main route)
// ----------------------
router.get('/', (req, res) => {
  console.log(req.headers);
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// ----------------------
// GET /hello
// ----------------------
router.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from the /hello route!',
    time: new Date().toISOString()
  });
});

// ----------------------
// POST /hello  (validate + save to MongoDB)
// ----------------------
router.post(
  '/hello',
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long')
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {
      const { name } = req.body;

      // Save to MongoDB
      const newEntry = new Hello({ name });
      await newEntry.save();

      res.json({
        message: `Saved to MongoDB: ${name}`,
        saved: newEntry
      });
    } catch (error) {
      res.status(500).json({
        error: 'Database save failed',
        details: error.message
      });
    }
  }
);

module.exports = router;

// ----------------------
// GET /hello/all  (fetch all saved documents)
// ----------------------
router.get('/hello/all', async (req, res) => {
  try {
    const allEntries = await Hello.find().sort({ createdAt: -1 }); // newest first

    res.json({
      count: allEntries.length,
      entries: allEntries
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch documents',
      details: error.message
    });
  }
});
