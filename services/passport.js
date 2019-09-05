const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // the route on which users will be send to after they grant permission
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('1', accessToken);
      console.log('2', refreshToken);
      console.log('3', profile);
      console.log('4', done);
    },
  ),
);
