
$(document).ready(function() {
  $(".linktitle").on("click", function() {
    console.log("clicked");
    var topicId = $(this).attr('id')
    console.log(topicId)
   var topicInfo = $("<div>").attr("id",topicId);
   console.log(topicInfo)
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:4000/topics"
    }).done(function(response) {
      console.log(topicId);
      var links = function() {
        for(i = 0; i < response.topics[0].links.length; i++) {
          console.log(topicInfo);
          console.log(response.topics[0].links[i].url);
          $('#'+topicId).append("<li><a href='" + response.topics[0].links[i].url + "'>" + response.topics[0].links[i].url + '</a>');
        }
      };
      $('.postlinks').append(links);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  });
});
