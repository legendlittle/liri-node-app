# liri-node-app -- A Language Interpretation and Recognition command line Node app --

## Project Overview
The LIRI app is a project that entails retrieving data from APIs about songs, bands, and concerts, using the user's command line inputs.
The app is meant to handle any valid user input and then display the correct retrieved data in the console.

## Building the App
1. We will first need to initialize our Github Repository and create the following files:
    1. .env file for storing secret API information
    2. keys.js file for accessing the .env file
    3. .gitignore in order to deny public access to API keys and secret IDs
2. The logic of the code will be written in our liri.js file
3. A random.txt file will be used to test the functions written in the liri.js file; sample text would be a command and a band name.

## Languages Used
1. Node.js
2. Javascript

## Packages Used
1. Axios- Used for retrieving data from APIs
2. dotenv- Used to load information from the .env file
3. Node Spotify API- Used to make calls to the Spotify API
4. Moment- Used to deal with dates and time formatting

##Licensing
1. MIT
