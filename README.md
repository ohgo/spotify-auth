# Spotify Auth

Generates access and refresh tokens using Spotify's [OAuth 2 authorization code flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow).  

The refresh token is active forever, 
so it can be used as a secret in a backend service 
to peridocally refresh access token and call Spotify API, 
for instance in https://api.kurniawan.dev/profile. 

## Running locally

1. [Signup as Spotify developer](https://developer.spotify.com/dashboard/login)
2. Edit settings to set redirect uri (e.g. http://localhost:3000)
3. Create `.env` file
```shell script
clientId=<SPOTIFY_CLIENT_ID>
clientSecret=<SPOTIFY_CLIENT_SECRET>
redirectUri=<SPOTIFY_REDIRECT_URI>
```
Run
```shell script
npm i
npm start
```
To get your tokens, go to http://localhost:3000