<<<<<<< HEAD
var APIKey = "0aae7f54e5404ddaa31097eea03cd23e";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + APIKey;

$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
=======
Trying a Push!
>>>>>>> b69352b0fd8cba6924d567c9720942b26778296d
