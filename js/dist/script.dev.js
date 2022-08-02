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
    var allArticles = [];
    articles.forEach(function (item) {
      // console.log(item.name);
      allArticles.push(item.name);
    }); // how to put a commer between parameters
    // return allArticles.join(", ");
  };

  articles.forEach(function (item) {
    // this function will run for each item
    console.log(item);
    result.innerHTML += "\n    <div class=\"article-grid\">\n    <img src=\"".concat(item.media[0]["media-metadata"][2].url, "\" alt=\"yay\">\n    <h4>").concat(item.title, "</h4>\n  <p>").concat(item["abstract"], "</p>\n  </div>\n    ");
  });
};

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