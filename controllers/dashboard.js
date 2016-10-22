const mongoose = require('mongoose');
const Poll = require('../models/Poll');

/*
* GET /dashboard
* Dashboard page.
*/
exports.getDashboard = (req, res, next) => {
  Poll.find({ by: req.user.email }, (error, polls) => {
    if(error) return next(error);
    else {

    }
      res.render('dashboard', { polls });
  });
};

/*
* POST /createPoll
* API Create poll
*/
exports.postCreatePoll = (req, res, next) => {
  const poll = new Poll({
    title: req.body.pollTitle,
    by: req.user.email,
    options: req.body.answers,

  }).save(error => {
      if(error) {
        req.flash('error', { msg: error });
        res.redirect('/dashboard');
      } else {
        req.flash('success', { msg: `Yo' nigga. Your poll was saved. 👍` });
        res.redirect('/dashboard');
      }
  });
};

exports.postDeletePoll = (req, res, next) => {
  Poll.remove({_id: req.params.id}, error => {
    if(error) {
        console.log(error);
        req.flash( 'error',`Sorry bro. There was an error.\n${error}`);
        res.redirect('/dashboard');
      } else {
        req.flash('success', { msg: 'The poll was removed!' });
        res.redirect('/dashboard');
      }
  });
};
