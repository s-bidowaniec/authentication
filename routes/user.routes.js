const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if(req.user){
        res.render('logged', {picture: req.user._json.picture, name: req.user._json.name});
    } else {
        res.redirect('no-permission')
    }
});

router.get('/profile', (req, res) => {
    if(req.user){
        res.render('userProfile')
    } else {
        res.redirect('no-permission')
    }
})

router.get('/profile/settings', (req, res) => {
    if(req.user){
        res.render('userProfileSettings')
    } else {
        res.redirect('no-permission')
    }
})

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});

module.exports = router;
