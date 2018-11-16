


var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=0a336f0a65ef4f49b6632678f5d07ca9" 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
})