const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/user_controller');
// router.get('/profile', passport.checkAuthentication, usersController.profile);
router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
//only to profile when it is signed in
router.post('/update/:id', passport.checkAuthentication, usersController.update);

router.get('/sign-in', usersController.signIn);
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);

//use passport as a middleware to authenticate

router.post('/create-session', passport.authenticate(
    'local', { // type of authentication local
        failureRedirect: '/users/sign-in'
    },
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);


router.get('/auth/google', passport.authenticate('google', {
    scope: {
        'profile',
        'email'
    }
}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/user/sign-in' }))



module.exports = router;