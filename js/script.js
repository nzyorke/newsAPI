// "use strict";

// declare our settings
// this is the new release endpoint
const headliner = document.getElementById("headliner")
const endpointURL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
const token = "97GC6qqtO5nSA3mSo3GJE1yc6uQ4DLbI";

const showNews = function showNews(articles) {
  console.log("this is running!");

  const renderArticles = function renderArticles(articles) {
    let allArticles = [];
    articles.forEach(function (item) {
      // console.log(item.name);
      allArticles.push(item.name);
    });
    // how to put a commer between parameters
    // return allArticles.join(", ");
  };

  articles.forEach(function (item) {
    // this function will run for each item
    console.log(item);
    result.innerHTML += `
    <div class="article-grid">
    <img src="${item.media[0]["media-metadata"][2].url}" alt="yay">
    <h4>${item.title}</h4>
  <p>${item.abstract}</p>
  </div>
    `;
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
  },
});
