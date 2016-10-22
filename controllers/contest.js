const mongoose = require('mongoose');
const Poll = require('../models/Poll');

/* GET Contest
* Users voting page
*/
exports.getContest = (req, res, next) => {
  Poll.findById(req.params.id, (error, poll) => {
    res.render('contest', poll);
  });
};
