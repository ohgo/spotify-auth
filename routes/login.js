const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const scopes = 'user-read-recently-played';
    const clientId = process.env.clientId;
    const redirectUri = process.env.redirectUri;
    const state = 'Texas'

    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + clientId +
        '&state=' + state +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirectUri));
});

module.exports = router;
