var APIKey = "0aae7f54e5404ddaa31097eea03cd23e";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIKey + "&q=";

var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var articleCount = 0;

$("#run-search").on("click", function(event) {

    event.preventDefault();

searchTerm = $("#search-term").val().trim();
var queryURL = queryURLBase + searchTerm;
console.log(queryURL);
numResults = $("#num-records-select").val().trim();
console.log(numResults);
startYear = $("#start-year").val().trim();
endYear = $("#end-year").val().trim();

$.ajax({
    url: queryURL,
    method: "GET",
}).done(function(result) {
    // console.log(queryURL);
    console.log(result);
}).fail(function(err) {
    throw err;
});

});

// This button clears the top articles section
$("#clear-all").on("click", function() {
    articleCounter = 0;
    $("#well-section").empty();
});