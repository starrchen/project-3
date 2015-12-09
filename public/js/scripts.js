
$(document).ready(function() {
  var url = "http://localhost:4000/topics.json"
  var request = $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    var allTopics = [];
    for (var i = 0; i < response.topics.length; i++){
    console.log(response.topics[i].name);
    $(".all-topics").append("<div class='topic'><h3 class='topicHeader' id='"+i+"'>" + response.topics[i].name + "</h3></div>");
  }
  $(".topicHeader").on("click", function() {
    console.log("clicked");
    var topicId = $(this).attr('id')
    console.log(topicId)
   

      var links = function() {
        var linksArray = []
        for(i = 0; i < response.topics[topicId].links.length; i++) {
          console.log(response.topics._id);
          console.log(response.topics[topicId].links[i].url);
          linksArray[i] = ("<li><a href='" + response.topics[topicId].links[i].url + "'>" + response.topics[topicId].links[i].url + '</a>');

        }
        return linksArray
      };
      links()
      $('#'+topicId).append(links);
    })
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  });
