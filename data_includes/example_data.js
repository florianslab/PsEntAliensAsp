var Parameters = {},
    URLParameters = window.location.search.replace("?", "").split("&");

for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];

var shuffleSequence = seq("test");
// ############################  GENERAL SETTINGS ##########################
//
/*var data;
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

var zipFiles = {images: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Images.zip"};
                //sounds: "http://files.lab.florianschwarz.net/ibexfiles/PsEntAliens/Sounds.zip"};
//
// ##########################################################################
    
var items = [

  ["test", "ZipPreloader", {}],

  ["test", "DynamicQuestion", {

         legend: "test",
         randomOrder: ["F", "J"],
         answers: {
                  Target: newAliens([ ["alien_red.png", "alien_grey.png", "alien_red.png"],
                                      ["alien_blue.png", "alien_grey.png", "alien_red.png"],
                                      ["alien_blue.png", "alien_grey.png", "alien_red.png"],
                                      ["alien_blue.png", "alien_grey.png", "alien_red.png"]
                                    ]),
                  Covered: newAliens([
                                      ["CoveredBox.png", "alien_grey.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey.png", "CoveredBox.png"]
                                    ])
         },
         enabled: false,                             // The user won't validate the trial by clicking/pressing the key.

         sequence: [
           "test",
           {pause: "key ", newRT: true},             // Wait for the participant to press the space bar and records a new RT when they do
           function(t){ t.enabled = true; },         // Enable validation
           "Press F or J",
           {this: "answers", showKeys: "bottom", waitFor: true}
         ]
    }
  ]
];

/*GetItemsFrom(data, null, {
     // ItemGroup: ["item","group"],
      Elements: [
        function(row){ return "alien"+row.condition+"Quantifier"+row.quantifier; },
    
    "DynamicQuestion", {

         legend: function(row){ return [row.condition, row.quantifier, row.item, row.group, row.sentence].join('+'); },
         randomOrder: ["F", "J"],
         answers: function(row){ return {
                  Target: newAliens([ [row.left1, "alien_grey1.png", row.right1],
                                      [row.left2, "alien_grey1.png", row.right2],
                                      [row.left3, "alien_grey1.png", row.right3],
                                      [row.left4, "alien_grey1.png", row.right4],
                                      [row.left5, "alien_grey1.png", row.right5],
                                      [row.left6, "alien_grey1.png", row.right6],
                                      [row.left7, "alien_grey1.png", row.right7]
                                    ]),
                   Covered: newAliens([
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"]
                                    ])
                  };
                },
         enabled: false,                             // The user won't validate the trial by clicking/pressing the key.

         sequence: function(row) { return [
           //{this: "legend"},              // Prints the 'legend' parameter (comment out when done debugging)
           "<H4>"+row.sentence+"</H4>",   
           {pause: "key ", newRT: true},             // Wait for the participant to press the space bar and records a new RT when they do
           function(t){ t.enabled = true; },         // Enable validation
           "Press F or J",
           {this: "answers", showKeys: "bottom", waitFor: true}

         ];
       }
     }
    ]
}).concat([

    ["instruct", "Form", {html: {include: "ID.html"}, continueOnReturn: true}],

    ["instruct", "Form", {  html: { include: "Instructions.html" }}],
           
           
    // FIRST PRACTICE ITEM (TRUE)
    ["instruct",
           
     "Preloader", {
           host: host,
           files: ["CoveredBox.png", "planets.png", "alien_blue1.png", "alien_green1.png",
                   "alien_orange1.png", "alien_pink.png", "arrow.png", "alien_grey1.png", "alien_yellow1.png", "alien_red1.png"]
     },
    
     "DynamicQuestion", {
    
      legend: "practice",
      randomOrder: null, // For the practice items, we want to manually order the visible vs covered images
      answers: {
                 Target: ["F", newAliens([  ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"],
                                            ["alien_blue1.png", "alien_grey1.png", "alien_yellow1.png"]
                                   ])],
                 Covered: ["J", newAliens([ ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                            ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"]
                                   ])]
      },
      enabled: false,                             // The user won't validate the trial by clicking/pressing the key.
      sequence: [
                  //{this: "legend"},  // Prints the 'legend' parameter (comment out when done debugging)
                  TT("#bod", "This experiment is a guessing game: in every trial, you will see two pictures "+
                             "and you will have to select the one that matches the sentence description.", "Press Space", "mc"),
                  {pause: "key\x01"},
                  "<H4 id='sentence'>No alien turned blue again.</H4>",
                  "<span id='press'>Press F or J</span>",
                  {this: "answers", showKeys: "bottom"},
                  // First hide everything but the aliens on their home planet
                  function(t){ $("#sentence, #press, #Covered, [id^=alienLeft], [id^=alienRight], .DynamicQuestion-keyLabel").css("visibility", "hidden"); },
                  TT("#Target", "In every trial, you will see a series of events involving aliens.", "Press Space", "tc"),
                  {pause: "key\x01"},     
                  TT("#Target #alienAlienMiddle0", "The aliens in this experiment travel in groups of seven from their Home Planet, to Planet B, via Planet A.", "Press Space", "tr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft0", "Every alien is born on his Home Planet, in a particular color.", "Press Space", "tr"),
                  {pause: "key\x01"},
                  // Reveal the left and right aliens
                  function(t){ $("#Target [id^=alienLeft], [id^=alienRight]").css("visibility", "visible"); },
                  TT("#Target #alienAlienMiddle0", "A special characteristic of Planet A is that every alien on that planet turns gray.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienRight0", "On Planet B the aliens always have a more colorful skin color, that may or may not be the same color as they had on their Home Planet.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target", "For instance, each of these aliens was colored blue on their Home Planet, then each alien travelled to Planet A where they turned gray, and finally they travelled to Planet B where they turned yellow.", "Press Space", "tc"),
                  {pause: "key\x01"},
                  // Reveal the covered picture (including its bubbles and mini aliens)
                  function(t){ $("#Covered").css("visibility", "visible"); },
                  TT("#Covered", "In every trial, you will see two pictures, but one will be partly hidden from your view.", "Press Space", "tc"),
                  {pause: "key\x01"},
                  // Reveal the sentence
                  function(t){ $("#sentence").css("visibility", "visible"); },
                  TT("#sentence", "You will read a sentence and will have to decide which of the two pictures matches the description.", "Press Space", "bc"),
                  {pause: "key\x01"},
                  // Reveal the instruction ("Press F or J")
                  function(t){ $("#press").css("visibility", "visible"); },
                  TT("#press", "Please use the <b>F</b> and <b>J</b> keys to give your answer.", "Press Space", "bc"),
                  {pause: "key\x01"},
                  // Reveal the labels under the pictures
                  function(t){ $(".DynamicQuestion-keyLabel").css("visibility", "visible"); },
                  TT("#Target", "If you think the visible picture matches the description, you press the corresponding key (here, <b>F</b>).", "Press Space", "tc"),
                  {pause: "key\x01"},
                  TT("#Covered", "If you think a better match is hidden in the other picture, you press the other key (here, <b>J</b>).", "Press Space and then F or J", "tc"),
                  {pause: "key\x01"},
                  {pause: "keyFJ"},
                  // Printing a feedback in function to what key the participant just pressed
                  function(t){
                    setTimeout(function() {
                      if ("F".match(t.pressedKey))
                        TT("#Target", "Right: in this picture no alien turned blue again.", "Press Space to Proceed", "tc")(t);
                      else if ("J".match(t.pressedKey))
                        TT("#Covered", "<span style='color: red;'>Wrong: you should go with the visible picture, "+
                                       "where no alien is blue on Planet B.</span>", "Press Space to Proceed", "tc")(t);
                    }, 12);
                  },
                  {pause: "key\x01"}
                ]
     }
    ],
                      

    // SECOND PRACTICE ITEM (FALSE)                      
    ["instruct",
    
     "DynamicQuestion", {
    
      legend: "practice",
      randomOrder: null, // For the practice items, we want to manually order the visible vs covered images
      answers: {
                 Covered: ["F", newAliens([   ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"]
                                   ])],
                 Target: ["J", newAliens([    ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_green1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_green1.png"]
                                   ])]
      },
      enabled: false,                             // The user won't validate the trial by clicking/pressing the key.
      sequence: [
                  //{this: "legend"},   // Prints the 'legend' parameter (comment out when done debugging)
                  "<H4 id='sentence'>No alien is red on Planet B.</H4>",
                  //{pause: "key ", newRT: true},             
                  "<span id='press'>Press F or J</span>",
                  {this: "answers", showKeys: "bottom"},
                   TT("#Target", "Sometimes the aliens have the same color on Planet B, as they had on their Home Planet.", "Press Space", "tc"),
                  {pause: "key\x01"},                                        
                  TT("#Target #alienAlienLeft0", "For instance, this alien was born red on his Home Planet, and is red on Planet B too.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#sentence", "Now guess which picture matches the description.", "Press Space and then F or J", "bc"),
                  {pause: "key\x01"},
                  {pause: "keyFJ"},
                  // Filling th bullet with blanks to give it some height, but the text will change right after it pops up (takes 10ms).
                  function(t){
                    setTimeout(function() {
                      //console.log(t.pressedKey);
                      if ("J".match(t.pressedKey))
                        TT("#Target", "<span style='color: red;'>Wrong: in this picture some aliens are colored red on Planet B, so you should have chosen the covered picture.</span>", "Press Space to the Experiment", "tc")(t);
                      else if ("F".match(t.pressedKey))
                        TT("#Covered", "Right: in the visible picture, some aliens are colored red on Planet B, so this picture should be chosen instead.", "Press Space to the Experiment", "tc")(t);
                    }, 12);
                  },
                  {pause: "key\x01"}
                ]
     }
    ],
                      

                      
            // GIVE THE DIFFERENT COLORS

    ["instruct",
    
     "DynamicQuestion", {
    
      legend: "practice",
      randomOrder: null, // For the practice items, we want to manually order the visible vs covered images
      answers: {
                 Covered: ["F", newAliens([   ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"],
                                              ["CoveredBox.png", "alien_grey1.png", "CoveredBox.png"]
                                   ])],
                 Target: ["J", newAliens([    ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_blue1.png", "alien_grey1.png", "alien_blue1.png"],
                                              ["alien_green1.png", "alien_grey1.png", "alien_green1.png"],
                                              ["alien_pink.png", "alien_grey1.png", "alien_pink.png"],
                                              ["alien_yellow1.png", "alien_grey1.png", "alien_yellow1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"],
                                              ["alien_red1.png", "alien_grey1.png", "alien_red1.png"]
                                   ])]
      },
      enabled: false,                             // The user won't validate the trial by clicking/pressing the key.
      sequence: [
                  //{this: "legend"},   // Prints the 'legend' parameter (comment out when done debugging)
                  "<H4 id='sentence'>Every alien was the same color on his Home Planet as on Planet B.</H4>",
                  {pause: "key ", newRT: true},             
                  "<span id='press'>Press F or J</span>",
                  {this: "answers", showKeys: "bottom"},
                  // First hide everything but the visible aliens
                  //function(t){ $("#sentence, #press, #Covered, [id^=alienmini], [id^=alienbubble], .DynamicQuestion-keyLabel").css("visibility", "hidden"); },
                  TT("#Target", "The aliens in this experiment can be of five colors other than gray.", "Press Space", "tc"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft0", "This alien is red.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft1", "This alien is blue.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft2", "This alien is green.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft3", "This alien is pink.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  TT("#Target #alienAlienLeft4", "This alien is yellow.", "Press Space", "mr"),
                  {pause: "key\x01"},
                  // Now uncover everything
                  //function(t){ $("#sentence, #press, #Covered, [id^=alienmini], [id^=alienbubble], .DynamicQuestion-keyLabel").css("visibility", "visible"); },
                  TT("#sentence", "Now decide which picture matches the description.", "Press Space and then F or J", "bc"),
                  {pause: "key\x01"},
                  {pause: "keyFJ"},
                     function(t){
                    setTimeout(function() {
                      console.log(t.pressedKey);
                      if ("J".match(t.pressedKey))
                        TT("#Target", "Right: in this picture indeed every alien was the same color on his Home Planet as on Planet B.",
                           "<b>We will now start the actual experiment. Press Space if you're ready to continue to the experiment.</b>", "tc")(t);
                      else if ("F".match(t.pressedKey))
                        TT("#Covered", "<span style='color: red;'>Wrong: in the visible picture, every alien was the same color on his Home Planet as on Planet B.</span>",
                           "<b>We will now start the actual experiment. Press Space if you're ready to continue to the experiment.</b>", "tc")(t);
                    }, 12);
                  },
                  {pause: "key\x01"}
                ]
     }
    ]          
           
                      
    ]);
    
         
*/
    