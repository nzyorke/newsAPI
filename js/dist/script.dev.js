"use strict";

// declare our settings
// this is the new release endpoint
// const endpointURL = "https://api.spotify.com/v1/browse/new-releases";
// this is the search endpoint
var endpointURL = "https://api.spotify.com/v1/search?q=milesdavis&type=track";
var token = "BQArOLMTKbe4WtttDJhB6gb0MHKUqWNO5uAvN35r8DUcW_Ptxgx7qKj0M86GkmxhXJxVxfoTMrfSzZ6iol76x51znupqEOyaAVsIKzLpwS_NK2j9eWkxnhkMNDGDA_E4l5o0ZknUXKThBLNgBcH-XjMn3DpVPvzQ_GTnj6RZhGPGcL8";

var showMusic = function showMusic(music) {
  console.log("this is running!");

  var renderArtists = function renderArtists(artists) {
    var allArtists = [];
    artists.forEach(function (item) {
      // console.log(item.name);
      allArtists.push(item.name);
      console.log(item.popularity);
    });
    return allArtists.join(", ");
  }; // Activity: show the artists with a space between each name.


  music.forEach(function (item) {
    // this function will run for each item
    console.log(item);
    var endMS = new Date(item.duration_ms);
    popularity = item.popularity;

    switch (true) {
      case dogs == 0:
        console.log("You don't own any dogs, my dude or dudette.");
        break;

      case dogs > 0 && dogs <= 3:
        console.log("You're a dog owner.");
        break;

      case dogs > 3 && dogs < 20:
        console.log("You've got heaps of dogs.");
        break;

      case dogs > 100:
        console.log("You're obsessed with dogs!");
        break;

      default:
        console.log("Can't recognise your dogs");
        break;
    }

    calculateMS = function calculateMS() {
      return "".concat(endMS.getMinutes(), ":").concat(calcSecs());
    };

    calcSecs = function calcSecs(calculateMS) {
      switch (true) {
        case endMS.getSeconds() < 10:
          return "0".concat(endMS.getSeconds());

        default:
          return "".concat(endMS.getSeconds());
      }
    };

    result.innerHTML += "\n        <div>\n        <img alt=\"album-art\" src=\"".concat(item.album.images[0].url, "\">\n        <h2>").concat(item.name, "</h2>\n        <h3>").concat(renderArtists(item.artists), "</h3>\n        <p>").concat(calculateMS(), "</p>\n        <p>").concat(item.popularity, "</p>\n        </div >\n    ");
  });
}; // Activity: Show the album/single names in a grid
// Show the album cover.
// Show whether the track is an album or a single.
// Use a different color to render the label


$.ajax({
  url: endpointURL,
  type: "GET",
  // headers are a way to send identifying infomation
  // about yourself to the server
  headers: {
    Authorization: "Bearer " + token
  },
  success: function success(data) {
    // console.log(data);
    // console.log(data.tracks.items);
    showMusic(data.tracks.items);
  },
  error: function error(_error) {
    console.log(_error);
  }
}); // Activity:
// Show the Miles Davis tracks on the screen, with the album covers.