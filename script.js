// new york times api key

var nyt_api_key = "YX7AqB8m3C8As3mPU2OpZWGifXMvQ2h1";
var omdb_api_key = ""

// actor name splitter function

function actorNameSplitter(actor) {

  actorNameSplit = actor.split(" ");
  actorName = "";

  for (var i=0; i < actorNameSplit.length; i++) {
      if (i>0 & !actorNameSplit ==="") {
      actorName += "+"+ actorNameSplit[i] ;
      }
      else {
        actorName = actorNameSplit[i];
      }
    }
  return actorName;
}

// new york times article search function

function articleSearch(actor) {

  actorName = actorNameSplitter(actor);
  // console.log(actorName);

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ actorName + "&api-key=" + nyt_api_key;

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $("#nyt-col").empty();
      title = $("<h3>"); 
      title.text("In News:")
      $("#nyt-col").append(title); 

      for (i=0; i<5;i++) {
        var article = $("<p>");
        article.text(JSON.parse(JSON.stringify(response.response.docs[i].snippet)));
        var link = $("<a>");
        link.attr("href", JSON.parse(JSON.stringify(response.response.docs[i].web_url)));
        link.attr("target","_blank");
        link.text(" Read more..");
        
        article.append(link);
        $("#nyt-col").append(article);
      }
    });
}

// new york times movie review function

function movieReview(actor) {

  actorName = actorNameSplitter(actor);

  var queryURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + actorName + "&api-key=" + nyt_api_key;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    $("#movie-reviews").empty();

    title = $("<h3>"); 
    title.text("Movie Reviews:")
    $("#movie-reviews").append(title); 

    for (i=0; i<5;i++) {
  
    var review = $("<h6>");
    review.text(JSON.parse(JSON.stringify(response.results[i].display_title))+": ");

    var link = $("<a>");
    link.attr("href", JSON.parse(JSON.stringify(response.results[i].link.url)));
    link.attr("target","_blank");
    link.text(JSON.parse(JSON.stringify(response.results[i].summary_short)));

    review.append(link);
    $("#movie-reviews").append(review);
    $("#movie-reviews").append("<br>"); 
    }
    $("#movie-reviews").addClass("border-left");
  });

}

//Pull Actor Names with OMDB API

function moviePull () {
  var title = $("#movie-input").val();
  // console.log(title);
  var movieQuery = "https://www.omdbapi.com/?t=" + title + "&apikey=d58d1281";
  // console.log(movieQuery);
  
  $.ajax({
    url: movieQuery,
    method: "GET"
  }).then(function(response) {

    $("#lower-tag").empty();

      var actorsList = JSON.parse(JSON.stringify(response.Actors));
      actorsList = actorsList.split(",");

      for (var i=0;i< 4;i++) {
        actor = $('<button>');
        actor.addClass("actorBtn btn btn-outline-secondary");
        if (actorsList[i] != null){
          // $("#actor"+(i+1)).css('visibility', 'visible');
          actor.text(actorsList[i]);
          $("#lower-tag").append(actor);
          $("#lower-tag").addClass("bg-light-yellow rounded");       
          }
      }
  });
};

//Giphy pull functions (brings top 5 images to picture1-picture5 divs)
function giphy(actor) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    $("#giphy-title").empty();
    $("#giphy-col").empty();
    title = $("<h3>"); 
    title.text("GIFs:");
    $("#giphy-title").append(title); 
    for (var i=0;i< 4;i++) {
        giphyImg = $("<img>");
        giphyImg.attr("src",JSON.parse(JSON.stringify(response.data[i].images.original.url)));
        giphyImg.addClass("img-thumbnail");
        giphyImgCol = $("<div>");
        giphyImgCol.addClass("col-md-3");
        giphyImgCol.append(giphyImg);
        $("#giphy-col").append(giphyImgCol);

        $("#giphy").addClass("border-top border-bottom");
    };
  });
}

// event listeners

//search button click
document.getElementById("movieSearchBtn").addEventListener('click', function(event){
  moviePull();
})

//search bar enter
document.addEventListener('keypress', function(event) {
  if (event.target.id === "movie-input" & event.keyCode===13) {
    moviePull();
  }
});

document.addEventListener('click', function(event) {
  if (event.target.className.split(" ")[0] === "actorBtn") {
    
    $("#main-wrapper").removeClass("main");
    var actor = event.target.textContent;
    articleSearch(actor);
    movieReview(actor);
    giphy(actor);
  }
});





