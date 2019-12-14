require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var dotenv = require('dotenv');
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
        break;
    case 'movie-this':
        break;
    case 'do-what-it-says':
        break;

    default:
        console.log("Please use one of the following commands after node file: 1. 'concert-this' 2. 'spotify-this-song' 3. 'movie-this' 4. 'do-what-it-says'")

}