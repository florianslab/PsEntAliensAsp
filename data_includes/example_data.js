var Parameters = {},
    URLParameters = window.location.search.replace("?", "").split("&");

for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];


//if (!Parameters.hasOwnProperty("id")) throw new Error("Oops! It looks like you've not reached here through SONA...");
//assert(Parameters.hasOwnProperty("id") == true, "Oops! It looks like you've not reached here through SONA...");
//var id = Parameters.id;


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

var shuffleSequence = seq("instruct",startsWith("practice"),rshuffle(endsWith("PsEnt")),"postExp");
var showProgressBar = true;   // show progress bar
var manualSendResults = true;

//var practiceItemTypes = ["practice"];

var defaults = [
    "DynamicQuestion", {
        randomOrder: ["F", "J"],   // Randomly ordered answers, but 1st should always be 'F' and 2nd 'J'
        clickableAnswers: false    // Prevents participants from choosing an answer by clicking on it
    },
];

var zipFiles = {images: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Images.zip",
                sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/"+sounds};
//
// ##########################################################################
    
var items = [

  ["instruct", "Message", {html: {include: "IbexConsentSona2017.html"}} ],  

  ["instruct", "ZipPreloader", {}],

  ["postExp", "Form", {html: {include: "FeedbackPreConfirmation.html"}} ],

  ["postExp", "__SendResults__", {
       manualSendResults: true,
       sendingResultsMessage: "Please wait while your answers are being saved.",
       completionMessage: "Your answers have successfully being saved!"
    }],

  ["postExp", "Message", {html: {include: "PsEntAliensAspectual_Debriefing.html"}, transfer:null} ]

];

items = items.concat(data);