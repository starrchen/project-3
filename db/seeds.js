var mongoose = require('mongoose');
var conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/project_3_db');

var TopicModel = require("../models/topic");
var LinkModel = require("../models/link");

TopicModel.remove({}, function(err){
  console.log(err);
});
LinkModel.remove({}, function(err){
  console.log(err);
});

var atom = new TopicModel({
  name: "Atom Packages",
  description: "Tricks for using the Atom text editor.",
  imageUrl: "images/atom.png"
});

var jobs = new TopicModel({
  name: "Jobs/Interviews",
  description: "Interview tips, resume building resources, open positions, and more",
  imageUrl: "images/hireme.png"
});
//
// var lol = new TopicModel({
//   name: "For the Lulz",
//   description: "",
//   imageUrl: "images/lol.png"
// });

var powermode = new LinkModel({
    title: "Power Mode",
    summary: "Make every keystroke feel awesome!",
    url: "https://atom.io/packages/activate-power-mode"
});

var techQs = ({
  title: "Technical Questions",
  summary: "List of questions/question topics a Redditor had at tech interviews",
  url: "https://www.reddit.com/r/webdev/comments/3f7q3q/been_interviewing_with_a_lot_of_tech_startups_as/"
});

var pokedata = ({
  title: "Pokemon or Big Data?",
  summary: "A game that tests if you know the difference between Pokemon names and Big Data terms",
  url: "http://pixelastic.github.io/pokemonorbigdata/"
});

// var topics = [atom, jobs, lol];
var topics = [atom, jobs];
var links = [powermode, techQs, pokedata];

for(var i = 0; i < topics.length; i++){
  topics[i].links.push(links[i]);
  topics[i].save(function(err){
    if (err){
      console.log(err);
    }else {
      console.log("topic was saved");
    }
  });
}
