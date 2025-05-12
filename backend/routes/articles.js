const express = require('express');
const router = express.Router();
const Article = require('../models/articulo');

// GET todos
router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// POST nuevo
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);
  const saved = await newArticle.save();
  res.status(201).json(saved);
});

// PUT actualizar
router.put('/:id', async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
