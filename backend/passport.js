const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport");
const GOOGLE_CLIENT_ID = "284071439586-vcr0nfkojb2euefrbd46k0alu7dhi3h4.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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 ";

const FACEBOOK_APP_ID = "3133884073514905"
const FACEBOOK_APP_SECRET = "7d5a71e0ebe51b15555ec432ef2ccd789803b"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done ) {
    done(null,profile)
  }
)); 

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) =>{
    done(null,user)
})

passport.deserializeUser((user, done) =>{
    done(null,user)
})



 