const mongoose = require('mongoose');
const moment = require('moment');

const PollSchema = mongoose.Schema({
    title: String,
    by: String,
    at: {type: String, default: moment().format('DD/MM/YYYY')},

    options: [ String ],
    votes: [{
      user: String,
      when: Date
    }],
    lastUpdate: {type: String, default: moment().format('DD/MM/YYYY')},

});


const Poll = mongoose.model('Poll', PollSchema);

module.exports =  Poll;
