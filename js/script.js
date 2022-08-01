// declare our settings
// this is the new release endpoint
// const endpointURL = "https://api.spotify.com/v1/browse/new-releases";
// this is the search endpoint
const endpointURL = "https://api.spotify.com/v1/search?q=milesdavis&type=track";
const token =
  "BQArOLMTKbe4WtttDJhB6gb0MHKUqWNO5uAvN35r8DUcW_Ptxgx7qKj0M86GkmxhXJxVxfoTMrfSzZ6iol76x51znupqEOyaAVsIKzLpwS_NK2j9eWkxnhkMNDGDA_E4l5o0ZknUXKThBLNgBcH-XjMn3DpVPvzQ_GTnj6RZhGPGcL8";

let showMusic = (music) => {
  console.log("this is running!");
  let renderArtists = (artists) => {
    let allArtists = [];
    artists.forEach((item) => {
      // console.log(item.name);
      allArtists.push(item.name);
      console.log(item.popularity);
    });
    return allArtists.join(", ");
  };

  // Activity: show the artists with a space between each name.

  music.forEach((item) => {
    // this function will run for each item
    console.log(item);
    let endMS = new Date(item.duration_ms);
    popularity = item.popularity;
    switch (true) {
        case dogs == 0:
            console.log("You don't own any dogs, my dude or dudette.")
            break;
        case dogs > 0 && dogs <= 3:
            console.log("You're a dog owner.")
            break;
        case dogs > 3 && dogs < 20:
            console.log("You've got heaps of dogs.")
            break;
        case dogs > 100:
            console.log("You're obsessed with dogs!")
            break;
        default:
            console.log("Can't recognise your dogs")
            break;
    }

    calculateMS = () => {
      return `${endMS.getMinutes()}:${calcSecs()}`;
    };

    calcSecs = (calculateMS) => {
      switch (true) {
        case endMS.getSeconds() < 10:
          return `0${endMS.getSeconds()}`;

        default:
          return `${endMS.getSeconds()}`;
      }

      
    };

    result.innerHTML += `
        <div>
        <img alt="album-art" src="${item.album.images[0].url}">
        <h2>${item.name}</h2>
        <h3>${renderArtists(item.artists)}</h3>
        <p>${calculateMS()}</p>
        <p>${item.popularity}</p>
        </div >
    `;
  });
};

// Activity: Show the album/single names in a grid
// Show the album cover.

// Show whether the track is an album or a single.
// Use a different color to render the label

$.ajax({
  url: endpointURL,
  type: "GET",
  // headers are a way to send identifying infomation
  // about yourself to the server
  headers: {
    Authorization: "Bearer " + token,
  },
  success: function (data) {
    // console.log(data);
    // console.log(data.tracks.items);
    showMusic(data.tracks.items);
  },
  error: function (error) {
    console.log(error);
  },
});

// Activity:
// Show the Miles Davis tracks on the screen, with the album covers.
