const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

router.get('/', async function (req, res, next) {
    const { code, state } = req.query;
    if (state !== 'Texas') res.redirect('/');
    const clientId = process.env.clientId;
    const clientSecret = process.env.clientSecret;
    const redirectUri = process.env.redirectUri;

    const authResponse = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
    }));

    res.render('token', {
        title: 'Authorized',
        accessToken: authResponse.data.access_token,
        refreshToken: authResponse.data.refresh_token,
        expiresIn: authResponse.data.expires_in,
        scope: authResponse.data.scope
    });
});

module.exports = router;
