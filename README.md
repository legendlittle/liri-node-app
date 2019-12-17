# LIRI - A Language Interpretation and Recognition command line Node app 

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

`{js}
//Example Call in Command Line:
node liri.js movie-this Lion King
//Or
node liri.js concert-this Taylor Swift
`

--- 
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
