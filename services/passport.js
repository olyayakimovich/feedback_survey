const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // the route on which users will be send to after they grant permission
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    },
  ),
);
