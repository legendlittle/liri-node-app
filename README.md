# LIRI - A Language Interpretation and Recognition Interface: a command line Node app 

## Project Overview
The LIRI app is a project that entails retrieving data from APIs about songs, bands, and concerts, using the user's command line inputs.
The app is meant to handle any valid user input and then display the correct retrieved data in the console. The commands will be run and used in the app using the Node.js function process.argv.

## Building the App
1. We will first need to initialize our Github Repository and create the following files:
    1. .env file for storing secret API information
    2. keys.js file for accessing the .env file
    3. .gitignore in order to deny public access to API keys and secret IDs
2. The logic of the code will be written in our liri.js file
3. We will have 4 functions;
    - *concert-this* - this command will execute a function that will display event information about the artist searched for in the console.
    - *spotify-this-song* - this command will execute a function that will display information about the song that matches the top Spotify search result of the given search in the console.
    - *movie-this* - this command will execute a function that will display information about the given movie title to the console.
    - *do-what-it-says* - this function will read the text in the **random.txt** file and execute the given command (which will be one of the three commands above) 
4. A random.txt file will be used to test the functions written in the liri.js file; sample text would be a command and a band name.

## Running the App
You will need Node.js to run this app. You can download [Node here](https://nodejs.org/en/download/).

In order to run the app, you will need to download the following files: keys.js, liri.js, random.txt, and package.json.

After having these files, make sure they are in the same folder and then, in your command line, run the following command to install the packages used in this app:
`
npm i 
`
After installing the necessary packages, please create a .env file and save it in the same folder as the other files. In here, the user will place their Spotify ID and Spotify Secret.

```js{
# Spotify API keys

SPOTIFY_ID = Spotify_ID_here
SPOTIFY_SECRET= Spotify_Secret_here
}
```

To obtain these keys, the user can visit
[Spotify](https://developer.spotify.com/my-applications/#!/) and login or create an account. Register a new application and you will be presented with your Spotify ID and Spotify Secret. Save them as *const* variables in your .env file.

Once you've done this, you're ready to start using the app!

Open the command line and navigate to the directory that all of the app files are in and begin typing commands. 

### Example Calls in Command Line: 
`
node liri.js movie-this Lion King
`
This will return information about the movie Lion King!

`
node liri.js do-what-it-says
`
This will read the command and search term written in the random.txt file. You can open the text file and manually change it to any of the valid commands, along with a valid search term separated by a comma and a space. 

Alternatively, you can add this code before the do-what-it-says function is called to alter the random.txt file, replacing *command_name* with a valid command and *search_term* with the desired search term:

`
fs.writeFile("random.txt", "command_name, search_term", function(err){
    if(err){
       return console.log(err)
    }
})
`
## Screenshots of Outputs from different Commands

![concert-this Taylor Swift](/images/concert-ts.jpg)
![concert-this](/images/concert-no-show.jpg)
![movie-this Inception](/images/movie-inception.jpg)
![movie-this](/images/movie-none.jpg)
![spotify-this-song Galway Girl](/images/song-gg.jpg)
![do-what-it-says concert-this](/images/do-it-concert.jpg)
![do-what-it-says spotify-this-song](/images/do-it-song.jpg)
![do-what-it-says movie-this](/images/do-it-movie.jpg)

## Languages Used
1. Node.js
2. Javascript

## Packages Used
1. Axios- Used for retrieving data from APIs
2. dotenv- Used to load information from the .env file
3. Node Spotify API- Used to make calls to the Spotify API
4. Moment- Used to deal with dates and time formatting

## Licensing
1. MIT
