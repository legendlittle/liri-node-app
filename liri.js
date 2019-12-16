require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var spotify = require('node-spotify-api')
var dotenv = require('dotenv').config();
var moment = require('moment');
var axios = require('axios')

function band(input) {
    var [nodey, filey, commando, ...artistArr] = process.argv;
    if(artistArr.length === 0){
        artist = "Taylor Swift"
    }
    if (input !== '') {
        artist = input.slice(1,-1);
    } 
    console.log(artist)
    if (artistArr.length > 0){
        artist = artistArr.join('+')
    }
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    console.log(bandURL)
    axios.get(bandURL).then(function (response) {
        if(response.data.length === 0){
            console.log(`No results were found for ${artist}.`)
        }
        
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
            console.log(`
Concert Results for ${artist}
====================================================================================================================================
Venue name: ${response.data[i].venue.name}
Location: ${location}
Date of Event: ${eventTime}
====================================================================================================================================`)
        }

    }).catch(function(error){
        console.log(error)
    })
}

function songify(input) {
    var spot = new spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    var song;
    var [node, file, command, ...songArr] = process.argv;

    if (songArr.length === 0) {
        song = "The Sign"
    }
    if (input !== '') {
        song = input;
    }
    if (songArr.length > 0){
        song = songArr.join('+')
    }
    spot.search({
        type: 'track', query: song
    }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
        }
        console.log(
            `
Spotify Top Search Results for keyword(s): ${song}
====================================================================================================================================
Song name: ${data.tracks.items[0].name}
Artist(s): ${data.tracks.items[0].album.artists[0].name}
Album name: ${data.tracks.items[0].album.name}
Song preview link: ${data.tracks.items[0].external_urls.spotify}
====================================================================================================================================`)


    })
}

function moviee(input) {
    var [nodie, filie, commandie, ...movieArr] = process.argv;
    if (movieArr.length === 0) {
        movie = 'Mr. Nobody'
    }
    
    if (input !== '') {
        movie = input;
    }
    if (movieArr.length > 0) {
        movie = movieArr.join('+')
    } 
    var movieURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy'

    axios.get(movieURL).then(function (response) {
        console.log(
            `
Movie Title: ${response.data.Title}
====================================================================================================================================
Plot: ${response.data.Plot}

Release Year: ${response.data.Year}
IMDB Rating: ${response.data.imdbRating}
Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
Country: ${response.data.Country}
Language: ${response.data.Language}
Actors: ${response.data.Actors}
====================================================================================================================================`)

    })
}

switch (process.argv[2]) {
    case 'concert-this':
        band('');

        break;
    case 'spotify-this-song':
        songify('');
        break;
    case 'movie-this':
        moviee('');

        break;
    case 'do-what-it-says':
        fs.readFile('random.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            };
            var datArray = data.split(',');
            var command = datArray[0];
            console.log(command)
            var input = datArray[1];
            console.log(input)
            switch (command) {
                case 'concert-this':
                    band(input);
                    break;
                case 'spotify-this-song':
                    songify(input);
                    break;
                case 'movie-this':
                    moviee(input);
                    break;
            }
        })
        break;

    default:
        console.log("Please use one of the following commands after 'node' 'fileName': 1. 'concert-this' 2. 'spotify-this-song' 3. 'movie-this' 4. 'do-what-it-says'")

}

