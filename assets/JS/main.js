


var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=0a336f0a65ef4f49b6632678f5d07ca9" 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    for(i = 0; i < response.response.docs.length; i++) {
        var articleDiv = $("<div>")
        var p = $("<p>")
        var articleAuthor = $("<p>")
        var articleDate = $("<p>")
        var articleLink = $("<a>")
        articleLink.attr("href", response.response.docs[i].web_url)
        if(response.response.docs[i].byline) {
            articleAuthor.text(response.response.docs[i].byline.original)
        }
        articleLink.text(response.response.docs[i].web_url)
        articleDate.text(response.response.docs[i].pub_date)
        p.text(response.response.docs[i].headline.main);
        articleDiv.append(p)
        articleDiv.append(articleAuthor)
        articleDiv.append(articleDate)
        articleDiv.append(articleLink)
        $("#articlePlace").append(articleDiv)
    }
    
})