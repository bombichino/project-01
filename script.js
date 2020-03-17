


///function

key ="YX7AqB8m3C8As3mPU2OpZWGifXMvQ2h1";

actor = "Robin Williams";
actorNameSplit = actor.split(" ");

actorName = "";
for (var i=0; i < actorNameSplit.length; i++) {
    if (i>0) {
    actorName += "+" + actorNameSplit;
    }
}

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ actorName + "&api-key=" + key;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for (i=0; i<5;i++) {
    console.log(response.response.docs[i].abstract);
    $("#nyt-col").append(JSON.stringify(response.response.docs[i].abstract));  
    $("#nyt-col").append("<br>"); 
    $("#nyt-col").append("<br>"); 
    }
  });



  