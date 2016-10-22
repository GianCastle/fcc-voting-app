const chai = require('chai');
const expect = chai.expect;
const User = require('../models/User');

const Poll = require('../models/Poll');

describe('User Model', () => {
  it('should create a new user', (done) => {
    const user = new User({
      email: 'test@gmail.com',
      password: 'password'
    });
    user.save((err) => {
      expect(err).to.be.null;
      expect(user.email).to.equal('test@gmail.com');
      expect(user).to.have.property('createdAt');
      expect(user).to.have.property('updatedAt');
      done();
    });
  });

  it('should not create a user with the unique email', (done) => {
    const user = new User({
      email: 'test@gmail.com',
      password: 'password'
    });
    user.save((err) => {
      expect(err).to.be.defined;
      expect(err.code).to.equal(11000);
      done();
    });
  });

  it('should find user by email', (done) => {
    User.findOne({ email: 'test@gmail.com' }, (err, user) => {
      expect(err).to.be.null;
      expect(user.email).to.equal('test@gmail.com');
      done();
    });
  });

  it('should delete a user', (done) => {
    User.remove({ email: 'test@gmail.com' }, (err) => {
      expect(err).to.be.null;
      done();
    });
  });
});

describe('Poll model', () => {
  it('should create a new Poll', (done) => {
    const poll = new Poll({
      title: 'This is a poll test title',
      by: 'testuser@gmail.com',
      at: new Date(),
      options: [
        "Test option 1",
        "Test option 2"
      ],
      votes: [{
        user: 'test user',
        when: new Date()
      }],

      lastUpdate: new Date()
    });

    poll.save(err => {
      expect(err).to.be.defined;
      expect(err).to.be.null;
      done();
    });
  });
  it('should find a poll by email', done => {
    Poll.findOne({by: 'testuser@gmail.com'}, (error, doc) => {
      expect(error).to.be.null;
      expect(doc.by).to.be.equal('testuser@gmail.com');
      done();
    })
  });

  it('should delete a poll', done => {
    Poll.remove({by: 'testuser@gmail.com'}, (err) => {
      expect(err).to.be.null;
      done();
    });
  });

  //TODO
  // it('should not save a poll with empty answers', (done) => {
  //   const poll = new Poll({
  //     title: 'Test title',
  //     by: 'testuser',
  //     at: '01/01/1995',
  //
  //     options: ['', 'test', 'emtpy', 'literals', ' ', '      '],
  //     lastUpdate: '01/01/1995'
  //   }).save((error) => {
  //     if(error)
  //       done(error);
  //
  //   });
  // });

});
