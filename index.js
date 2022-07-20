const fetch = require('node-fetch')

fetch('https://statsapi.web.nhl.com/api/v1/teams')
    .then(response => response.json())
    .then(data => console.log(data));
