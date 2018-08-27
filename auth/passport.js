const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../database/main');
const db = require('../app/db');
const secret = config.secret;

module.exports = function(passport) {
        let opts = {};
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
        opts.secretOrKey = secret;
        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
           /* console.log(jwt_payload);*/
        db.findUserByUsername(jwt_payload.data[0].username, function(err, user) {
            if (err) {
              return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
              done(null, false);
            }
        });

    }));
};