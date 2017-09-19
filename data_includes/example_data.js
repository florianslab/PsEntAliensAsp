var Parameters = {},
    URLParameters = window.location.search.replace("?", "").split("&");

for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];

var shuffleSequence = seq("instruct",startsWith("practice"),rshuffle(startsWith("Stop")));

// ############################  GENERAL SETTINGS ##########################
//
/*
var data;
// Order of presentation
if (Parameters.Trig == "Sp")
  data = dataStop;
else if (Parameters.Trig == "St")
  data = dataStart;
else if (Parameters.Trig == "Ce")
  data = dataContinue;
else if (Parameters.Trig == "An")
  data = dataAgain;
else if (Parameters.Trig == "Sl")
  data = dataStill;
else if (Parameters.Trig == "Ae")
  data = dataAnymore;


var shuffleSequence = seq("instruct", "trials", "postexp");
var showProgressBar = true;   // show progress bar
*/


//var practiceItemTypes = ["practice"];

var defaults = [
    "DynamicQuestion", {
        randomOrder: ["F", "J"],   // Randomly ordered answers, but 1st should always be 'F' and 2nd 'J'
        clickableAnswers: false    // Prevents participants from choosing an answer by clicking on it
    },
];

var zipFiles = {images: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Images.zip",
                //sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Sentences.zip"};
                sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/StopSentences.zip"};
//
// ##########################################################################
    
var items = [

  ["instruct", "ZipPreloader", {}],

];

items = items.concat(stopItems);
