// new york times api key

var nyt_api_key ="YX7AqB8m3C8As3mPU2OpZWGifXMvQ2h1";


// actor name splitter function

function actorNameSplitter(actor) {

  actorNameSplit = actor.split(" ");
  actorName = "";
  for (var i=0; i < actorNameSplit.length; i++) {
      if (i>0) {
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

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ actorName + "&api-key=" + nyt_api_key;

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#nyt-col").empty();
      $("#nyt-col").append("<br>"); 
      for (i=0; i<5;i++) {
        var article = $("<p>");
        article.text(JSON.parse(JSON.stringify(response.response.docs[i].abstract)));
        
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
    $("#movie-reviews").append("<br>"); 
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
  });

}

//Pull Actor Names with OMDB API

function MoviePull () {
  var title = $("#movieinput").val();
  console.log(title);
  var MovieQuery = "https://www.omdbapi.com/?t=" + title + "&apikey=d58d1281";
  console.log(MovieQuery);
  
  $.ajax({
    url: MovieQuery,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      $("#movietitle").text(title);
      var ActorsList = JSON.stringify(response.Actors);
      ActorsList = ActorsList.replace(/"/g,'');
      ActorsList = ActorsList.split(",");
      
      if (ActorsList[0] != null){
          $("#actor1").css('visibility', 'visible');
          $("#actor1").text(ActorsList[0]);
          ActorButtons2()}
          else {}
      
      function ActorButtons2 () {
      if (ActorsList[1] != null){
          $("#actor2").css('visibility', 'visible');
          $("#actor2").text(ActorsList[1]);
          ActorButtons3()}
          else {}}

      function ActorButtons3 () {
      if (ActorsList[2] != null){
          $("#actor3").css('visibility', 'visible');
          $("#actor3").text(ActorsList[2]);
          ActorButtons4()}
          else {}}

      function ActorButtons4 () {
      if (ActorsList[3] != null){
          $("#actor4").css('visibility', 'visible');
          $("#actor4").text(ActorsList[3]);
          ActorButtons5()}
          else {}}

      function ActorButtons5 () {
      if (ActorsList[4] != null){
          $("#actor5").css('visibility', 'visible');
          $("#actor5").text(ActorsList[4]);}
      else {}
      };
  });
};


//Giphy pull functions (brings top 5 images to picture1-picture5 divs)
function ButtonPull1() {
  Search = $("#actor1").text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Search + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  $("#picture1").css("visibility", "visible");
  $("#picture1").attr("src",response.data[0].images.original.url);
  $("#picture2").css("visibility", "visible");
  $("#picture2").attr("src",response.data[1].images.original.url);
  $("#picture3").css("visibility", "visible");
  $("#picture3").attr("src",response.data[2].images.original.url);
  $("#picture4").css("visibility", "visible");
  $("#picture4").attr("src",response.data[3].images.original.url);
  $("#picture5").css("visibility", "visible");
  $("#picture5").attr("src",response.data[4].images.original.url);
  });
}

function ButtonPull2() {
  Search = $("#actor2").text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Search + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";

  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  $("#picture1").css("visibility", "visible");
  $("#picture1").attr("src",response.data[0].images.original.url);
  $("#picture2").css("visibility", "visible");
  $("#picture2").attr("src",response.data[1].images.original.url);
  $("#picture3").css("visibility", "visible");
  $("#picture3").attr("src",response.data[2].images.original.url);
  $("#picture4").css("visibility", "visible");
  $("#picture4").attr("src",response.data[3].images.original.url);
  $("#picture5").css("visibility", "visible");
  $("#picture5").attr("src",response.data[4].images.original.url);
  });
}

function ButtonPull3() {
  Search = $("#actor3").text()
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Search + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";
  
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  $("#picture1").css("visibility", "visible");
  $("#picture1").attr("src",response.data[0].images.original.url);
  $("#picture2").css("visibility", "visible");
  $("#picture2").attr("src",response.data[1].images.original.url);
  $("#picture3").css("visibility", "visible");
  $("#picture3").attr("src",response.data[2].images.original.url);
  $("#picture4").css("visibility", "visible");
  $("#picture4").attr("src",response.data[3].images.original.url);
  $("#picture5").css("visibility", "visible");
  $("#picture5").attr("src",response.data[4].images.original.url);
  });
}

function ButtonPull4() {
  Search = $("#actor4").text()
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Search + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";
      
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  $("#picture1").css("visibility", "visible");
  $("#picture1").attr("src",response.data[0].images.original.url);
  $("#picture2").css("visibility", "visible");
  $("#picture2").attr("src",response.data[1].images.original.url);
  $("#picture3").css("visibility", "visible");
  $("#picture3").attr("src",response.data[2].images.original.url);
  $("#picture4").css("visibility", "visible");
  $("#picture4").attr("src",response.data[3].images.original.url);
  $("#picture5").css("visibility", "visible");
  $("#picture5").attr("src",response.data[4].images.original.url);
  });
}    

function ButtonPull5() {
  Search = $("#actor5").text()
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Search + "&api_key=z6IvcDcCGQWaYNeWv3tfp3h19XDJ7V8C";    
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  $("#picture1").css("visibility", "visible");
  $("#picture1").attr("src",response.data[0].images.original.url);
  $("#picture2").css("visibility", "visible");
  $("#picture2").attr("src",response.data[1].images.original.url);
  $("#picture3").css("visibility", "visible");
  $("#picture3").attr("src",response.data[2].images.original.url);
  $("#picture4").css("visibility", "visible");
  $("#picture4").attr("src",response.data[3].images.original.url);
  $("#picture5").css("visibility", "visible");
  $("#picture5").attr("src",response.data[4].images.original.url);
  });
}

// event listeners

$("#movie-search").click(function() {
  moviePull();
});

document.addEventListener('click', function(event) {
  if (event.target.className.split(" ")[0] === "actorBtn") {
    var actor = event.target.textContent;
    articleSearch(actor);
    movieReview(actor);

  }
});

document.getElementById("movieSearchBtn").addEventListener('click', function(event){
  MoviePull();
})

