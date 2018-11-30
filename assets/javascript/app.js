var APIKey = "0aae7f54e5404ddaa31097eea03cd23e";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIKey;

var search = $("#search-term").val();
var records = $("#num-records-select").val();
var startYear = $("#start-year").val();
var endYear = $("#end-year").val();

$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});