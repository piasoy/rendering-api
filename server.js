/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
function getAlbums(request, response, nextFn){
    response.json(albums)
   }

app.get('/api/albums', getAlbums)


// GET /api/circles
function getCircles(request, response, nextFn){
    response.json(circles)
   }
  
app.get('/api/circles', getCircles)

// GET /api/movies
function getMovies(request, response, nextFn){
    response.json(movies)
   }
  
app.get('/api/movies', getMovies)

// GET /api/nametags
function getNameTags(request, response, nextFn){
    response.json(nameTags)
   }
  
app.get('/api/nametags', getNameTags)

// GET /api/poker
function getPoker(request, response, nextFn){
    response.json(poker)
   }
  
app.get('/api/poker', getPoker)

// GET /api/rectangle
function getRectangle(request, response, nextFn){
    response.json(rectangle)
   }
  
app.get('/api/rectangle', getRectangle)

// GET /api/restaurants
function getRestaurants(request, response, nextFn){
    response.json(restaurants)
   }
  
app.get('/api/restaurants', getRestaurants)

// GET /api/students
function getStudents(request, response, nextFn){
    response.json(students)
   }
  
app.get('/api/students', getStudents)

// GET /api/surveys
function getSurveys(request, response, nextFn){
    response.json(surveys)
   }
  
app.get('/api/surveys', getSurveys)

// GET /api/tweets
function getTweets(request, response, nextFn){
    response.json(tweets)
   }
  
app.get('/api/tweets', getTweets)

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})