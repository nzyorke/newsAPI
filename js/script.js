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
    articles.forEach(function (item) {
      // console.log(item.name);
      allArticles.push(item.name);
    });
    // how to put a commer between parameters
    // return allArticles.join(", ");
  };

  articles.forEach(function (item) {
    // this function will run for each item
    let generateImage = () => {
      if (item.media[0]) {
        return item.media[0]["media-metadata"][2].url;
      } else {
        return "https://static-prod.adweek.com/wp-content/uploads/2020/03/nytimes-building-content-2020.jpg";
      }
    }
    result.innerHTML += `
    <div class="article-card">
    <img src="${generateImage()}" alt="yay">
    
    <div class="article-description">
    <a href="${item.url}">
    <h4>${item.title}</h4>
  <p class="abstract">${item.abstract}</p>
  <div class="section">
  <p>${item.section}<p>
  </div>
  <div class="published_date">
  <p>${item.published_date}<p>
  </a>
  </div>
 
  </div>
  
    `;
  });
};
// };

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
