"use strict";

// "use strict";
// declare our settings
// this is the new release endpoint
var headliner = document.getElementById("headliner");
var endpointURL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
var token = "97GC6qqtO5nSA3mSo3GJE1yc6uQ4DLbI";

var showNews = function showNews(articles) {
  console.log("this is running!");

  var renderArticles = function renderArticles(articles) {
    articles.forEach(function (item) {
      // console.log(item.name);
      allArticles.push(item.name);
    }); // how to put a commer between parameters
    // return allArticles.join(", ");
  };

  articles.forEach(function (item) {
    // this function will run for each item
    var generateImage = function generateImage() {
      if (item.media[0]) {
        return item.media[0]["media-metadata"][2].url;
      } else {
        return "https://static-prod.adweek.com/wp-content/uploads/2020/03/nytimes-building-content-2020.jpg";
      }
    };

    result.innerHTML += "\n    <div class=\"article-card\">\n    <img src=\"".concat(generateImage(), "\" alt=\"yay\">\n    \n    <div class=\"article-description\">\n    <a href=\"").concat(item.url, "\">\n    <h4>").concat(item.title, "</h4>\n  <p class=\"abstract\">").concat(item["abstract"], "</p>\n  <div class=\"section\">\n  <p>").concat(item.section, "<p>\n  </div>\n  <div class=\"published_date\">\n  <p>").concat(item.published_date, "<p>\n  </a>\n  </div>\n \n  </div>\n  \n    ");
  });
}; // };


$.ajax({
  url: endpointURL + token,
  type: "GET",
  success: function success(data) {
    showNews(data.results);
    console.log(data.results);
  },
  error: function error(_error) {
    console.log(_error);
  }
});