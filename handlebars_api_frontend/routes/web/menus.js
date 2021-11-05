const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.menus}`; // http://localhost:3005/api/menus

Router

.post('/', async (req, res, next) => {
  try {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(req.body),
      headers: {'Content-Type': 'application/json'},
    });
    res.redirect('/menus');
  } catch(error) {
    return next(error);
  }
})

.get('/new', (req, res, next) => {
  res.render('newMenu');
})

.get('/:id', async (req, res, next) => {
  try {
    const response = await fetch(url + "/" + req.params.id)
    const menu = await response.json();
  res.render('menu', {menu});
  } catch (error) {
      return next(error);
  }
})

.get('/:id/edit', (req, res, next) => {
  res.render('editmenu', {menuID: req.params.id});
})

.get('/', async (req, res, next) => {
  try {
    const response = await fetch(url);
    const menus = await response.json();
    res.render('menus', { menus });
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;