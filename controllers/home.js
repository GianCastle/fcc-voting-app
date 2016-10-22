/**
 * GET /
 * Home page.
 */
const mongoose =  require('mongoose');
const Poll = require('../models/Poll');

exports.index = (req, res, next) => {
  Poll.find((error, polls ) => {
    if(error) return next(error);
    res.render('home', {
      title: 'Home',
      polls: polls
    });
  });

};
