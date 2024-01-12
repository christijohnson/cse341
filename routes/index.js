const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.kevinRoute);
routes.get('/kati', lesson1Controller.katiRoute);

module.exports = routes;