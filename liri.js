var e = require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");


var spotify = new Spotify(keys.spotify);
var omdb = new Omdb(keys.omdb);
var bands = new bands(keys. bands);
var argv = process.argv;
var inputs = process.argv[2];
var info = JSON.stringify(process.argv[3]);


//steps: (1) create a switch case for the calls ex :"spotify-this-song"
// (2) create functions for each -spotify - bands - omdb - what i say
//(3) 
//

switch(inputs){
    case "spotify-this-song":
    spotify(info);
    break;

    case "movie-this":
    if (inputs === undefined){
        inputs = "Mr. Nobody";
    }
	movie(info);
    break;
    
    case "concert-this":
	bands(info);
    break;
    
    case "do-what-it-says":
	doWhatItSays();
	break;
};

function spotifyThisSong() {
    var spotify= new Spotify(keys.spotify);

    request(bands, function(err, result) {
        if (err){
            console.log("I'm sorry, there is an error!" + err);
            return;
        }
        else (result)
        //{
           //console.log(Artist(s));
           //console.log(The song's name);
           //console.log(A preview link of the song from Spotify);
           //console.log(The album that the song is from); 
        
           
       // }
    });


function concertThis() {
    var bands = "https://rest.bandsintown.com/artists/" + inputs + "/events?app_id=codingbootcamp";

    request(bands, function(err, result) {
        if (err){
            console.log("I'm sorry, there is an error!" + err);
            return;
        }
        else (result)
        // {
        //     console.log("Name of the venue");
        //     console.log("Venue location");
        //     console.log("Date of the Event (use moment to format this as MM/DD/YYYY)")
        // }
    });

 function movieThis() {
        var movie = "http://www.omdbapi.com/?t=" + inputs + "&y=&plot=short&apikey=trilogy";
    
        request(movie, function(err, result) {
            if (err){
                console.log("I'm sorry, there is an error!" + err);
                return;
            }
            else (result)
            // {
            //  console.log(Title of the movie);   
            //  console.log(Year the movie came out.);
            //  console.log(IMDB Rating of the movie);
            //  console.log(Rotten Tomatoes Rating of the movie);
            //  console.log(Country where the movie was produced);
            //  console.log(Language of the movie);
            //  console.log(Plot of the movie);
            //  console.log(Actors in the movie);
            // }
        });

function concertThis() {
        
            fs.readFile("./random.txt", function(err, result) {
                if (err){
                    console.log("I'm sorry, there is an error!" + err);
                    return;
                }
                else (result)
                // {
                //  console.log(the info from the random.txt file)   
                //     
                // }
            });






