require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var spotify = require('node-spotify-api')
var dotenv = require('dotenv').config();
var moment = require('moment');
var axios = require('axios')

// Bands in Town API- command is concert-this

switch (process.argv[2]) {
    case 'concert-this':
        var artist = process.argv[3]
        var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios.get(bandURL).then(function (response) {
            // console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                var time = moment(response.data[i].datetime)
                var eventTime = moment(time.month() + '/' + time.date() + '/' + time.year()).format('MM/DD/YYYY')
                var region;
                if (response.data[i].venue.region === '') {
                    region = ', '
                }
                else {
                    region = ', ' + response.data[i].venue.region + ', '
                }
                var location = response.data[i].venue.city + region + response.data[i].venue.country
                console.log('Venue name: ', response.data[i].venue.name)
                console.log('Location: ', location)
                console.log('Date of Event: ', eventTime);
                console.log('')
            }

        })

        break;
    case 'spotify-this-song':
        var spot = new spotify({
            id: keys.spotify.id,
            secret: keys.spotify.secret
        });
        var [node, file, command, ...song] = process.argv;
        if (song.length === 0) {
            song = "The Sign"
        }

        spot.search({
            type: 'track', query: song
        }, function (err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
            }
            console.log(
`Spotify Top Search Results for keyword(s): ${song})
Song name: ${data.tracks.items[0].name}
Artist(s): ${data.tracks.items[0].album.artists[0].name}
Album name: ${data.tracks.items[0].album.name}
Song preview link: ${data.tracks.items[0].external_urls.spotify}`)


        })
        break;
    case 'movie-this':
        break;
    case 'do-what-it-says':
        break;

    default:
        console.log("Please use one of the following commands after node file: 1. 'concert-this' 2. 'spotify-this-song' 3. 'movie-this' 4. 'do-what-it-says'")

}