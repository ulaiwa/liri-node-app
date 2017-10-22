var keysjs = require('./keys');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var myTweet = function () {
	var client = new Twitter(keysjs.twitterKeys);
	 
	var params = {screen_name: 'ulaiwa', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {

	  if (!error) {
	  	// var data = []; //empty array to hold data
	      for (var i = 0; i < tweets.length; i++) {
	      //   data.push({
	      //       'created at: ' : tweets[i].created_at,
	      //       'Tweets: ' : tweets[i].text,
	      //   });
	      // }
	      console.log("my tweet: \n" + tweets[i].text);
	      console.log("created at: \n" + tweets[i].created_at);
	      // console.log(data);
	      // writeToLog(data);
	  
	  	}
	// });
		}
	});
}

var mySpotify = function (songName) {

var spotify = new Spotify({
  id: '703f68d7e50a4e0d880e14f9fe00be89',
  secret: 'cd1378a9ed564c41aca164814aa555e5'
});

var songName = JSON.stringify(value);


	spotify.search({ type: 'track', query: songName }, function(err, data) {
 	 if (err) {

 	 	console.log("Artist: Ace of Base \nSong: The Sign \nAlbum: The Sign \nUrl: https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE\n"); 

  		return 
  		}
 		
 		// console.log(data)
		console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
		console.log("Song: " + data.tracks.items[0].name);
		console.log("Album: " + data.tracks.items[0].album.name);
		console.log("Url: " + data.tracks.items[0].preview_url + "\n");
		});
};

var myMovie = function(movieName) {

var movieName = JSON.stringify(value);

var movieURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(movieURL, function (error, response, body) {

if (!error && response.statusCode == 200) {

    var jsonData = JSON.parse(body);
     
    console.log("* Title: " + jsonData.Title);
    console.log("* Year: " + jsonData.Year);
    console.log("* IMDB Rating: " + jsonData.imdbRating);
    console.log("* Rotten Tomatoes Rating: " + jsonData.tomatoRating);
    console.log("* Country: " + jsonData.Country);
    console.log("* Language: " + jsonData.Language);
    console.log("* Plot: " + jsonData.Plot);
    console.log("* Actors: " + jsonData.Actors);

  		} else {
  			myMovie.movieName = "Mr Nobody";
  			return
  		}

	});

};

var myDo = function() {

fs.readFile("random.txt", "utf8", function(error, data) {

    var dataArr = data.split(',');

	var spotify = new Spotify({
	  id: '703f68d7e50a4e0d880e14f9fe00be89',
	  secret: 'cd1378a9ed564c41aca164814aa555e5'
	});

	var doWhatSong = dataArr[1];

	var spotify = new Spotify({
	  id: '703f68d7e50a4e0d880e14f9fe00be89',
	  secret: 'cd1378a9ed564c41aca164814aa555e5'
	});


	spotify.search({ type: 'track', query: doWhatSong }, function(err, data) {
 	 if (err) {

 	 	console.log("Artist: Ace of Base \nSong: The Sign \nAlbum: The Sign \nUrl: https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE\n"); 

  		return 
  		}
 		
 		// console.log(data)
		console.log("Artist: " + data.tracks.items[0].album.artists[0].name); 
		console.log("Song: " + data.tracks.items[0].name);
		console.log("Album: " + data.tracks.items[0].album.name);
		console.log("Url: " + data.tracks.items[0].preview_url + "\n");
			});

    });
};


var command = process.argv[2];
var value = process.argv.slice(3).join("%20");

switch(command) {
	case "my-tweets":
    myTweet();
     break;

    case"spotify-this-song":
    mySpotify();
    break;

    case"movie-this":
    myMovie();
    break;

    case"do-what-it-says":
    myDo();
    break;

}




