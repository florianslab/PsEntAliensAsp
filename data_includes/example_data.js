var Parameters = {},
    URLParameters = window.location.search.replace("?", "").split("&");

for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];

// ############################  GENERAL SETTINGS ##########################
//

// Triggers
var data = startItems, sounds = "StartSentences.zip"; // default
if (Parameters.Trig == "Sp"){
  data = stopItems;
  sounds = "StopSentences.zip";
}
else if (Parameters.Trig == "St"){
  data = startItems;
  sounds = "StartSentences.zip";
}
else if (Parameters.Trig == "Ce"){
  data = continueItems;
  sounds = "ContinueSentences.zip";
}
else if (Parameters.Trig == "An"){
  data = againItems;
  sounds = "AgainSentences.zip";
}
else if (Parameters.Trig == "Sl"){
  data = stillItems;
  sounds = "StillSentences.zip";
}
else if (Parameters.Trig == "Ae"){
  data = anymoreItems;
  sounds = "AnymoreSentences.zip";
}
else if (Parameters.Trig == "Nl"){
  data = nolongerItems;
  sounds = "NoLongerSentences.zip";
}


var shuffleSequence = seq("instruct",startsWith("practice"),rshuffle(endsWith("PsEnt")));
var showProgressBar = true;   // show progress bar


//var practiceItemTypes = ["practice"];

var defaults = [
    "DynamicQuestion", {
        randomOrder: ["F", "J"],   // Randomly ordered answers, but 1st should always be 'F' and 2nd 'J'
        clickableAnswers: false    // Prevents participants from choosing an answer by clicking on it
    },
];

var zipFiles = {images: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Images.zip",
                //sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Sentences.zip"};
                sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/"+sounds};
//
// ##########################################################################
    
var items = [

  ["instruct", "ZipPreloader", {}],

];

items = items.concat(data);
