var APIKey = "0aae7f54e5404ddaa31097eea03cd23e";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIKey + "&q=";

var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var articleCount = 0;

$("#run-search").on("click", function(event) {

    event.preventDefault();

// var search = $("#search-term").val().trim();
// var records = $("#num-records-select").val().trim();
// var startYear = $("#start-year").val().trim();
// var endYear = $("#end-year").val().trim();

$.ajax({
    url: queryURL,
    method: "GET",
}).done(function(result) {
    console.log(queryURL);
    console.log(result);
}).fail(function(err) {
    throw err;
});

})