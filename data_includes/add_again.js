againItems = [

  ["practice1", "DynamicQuestion", {

        legend: "practice1",
        //randomOrder: ["F", "J"],
        randomOrder: null,
        answers: {
                  Target: ["F", newAliens([ ["alien_red.png", "alien_grey.png", "alien_red.png"],
                                      ["alien_blue.png", "alien_grey.png", "alien_yellow.png"],
                                      ["alien_red.png", "alien_grey.png", "alien_yellow.png"],
                                      ["alien_blue.png", "alien_grey.png", "alien_yellow.png"]
                                    ], ["Planet FV", "Planet ZY"])],
                  Covered: ["J", newAliens([
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"]
                                    ], ["Planet FV", "Planet ZY"])]
        },
        enabled: false,                             // The user won't validate the trial by clicking/pressing the key.

        sequence: [
          TT("#bod", "This experiment is a guessing game: in every trial, you will see two pictures "+
                             "and you will have to select the one that corresponds to what you hear.", "Press Space", "mc"),
          {pause: "key\x01"},  
          "<div id='sentence' style='font-weight:bold;'>These four aliens had to leave their home planet. While in transit on Planet FV, they all lost their color. Then they moved on to Planet ZY.</div>", 
          {this: "answers", showKeys: "bottom"},
          "<span id='press'>Press F or J</span>",
          // First hide everything but the visible aliens
          function(t){ $("#sentence, [id^=alienArrowMiddle], [id^=alienAlienRight], .DynamicQuestion-keyLabel").css("visibility", "hidden"); },
          function(t){ $("#press").css("display", "none"); },
          TT("#Target", "In every trial, you will see a series of events involving aliens.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Covered", "And in every trial, you will see two pictures side by side.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Covered", "Each picture shows a different group of four aliens, but black squares cover the aliens on this picture.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #homePlanet", "The aliens in this experiment travel in groups of four from their Home Planet...", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #planetB", "... to their final destination...", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #planetA", "... via a planet of transit.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #alienAlienRight2", "In this case, these four aliens had a transit on Planet FV, before settling on Planet ZY.", "Press Space", "tr"),
          {pause: "key\x01"},
          TT("#Target #alienAlienRight2", "All the aliens were born on their Home Planet in a particular color.", "Press Space", "tr"),
          {pause: "key\x01"},
          TT("#Target #alienAlienMiddle0", "As you can see, all of these aliens lost their color while they were in transit on Planet FV.", "Press Space", "mr"),
          {pause: "key\x01"},
          // Reveal the context sentence
          function(t){ $("#sentence").css("visibility", "visible"); },
          $("<p id='press_space'>Press space.</p>").css({"font-style":"italic", "text-align": "center"}),
          TT("#sentence", "A sentence at the top of the screen will describe the initial situation.", "Press Space", "bc"),
          {pause: "key\x01"},
          TT("#press_space", "When you press the Space key, the sentence above disappears...", "Press Space", "tc"),
          {pause: "key\x01"},
          function(t){ $("#sentence").css("visibility", "hidden"); },
          function(t){ $("#press_space").css("display", "none"); },
          // Reveal the right aliens
          function(t){ $("[id^=alienAlienRight], [id^=alienArrowMiddle]").css("visibility", "visible"); },
          TT("#alienAlienRight0", "... and you can see what happened to the aliens upon arriving at their final destination.", "Press Space", "ml"),
          {pause: "key\x01"},
          {audio: "practice1.wav", waitFor: true},
          // Reveal the covered picture
          //function(t){ $("#Covered, #Covered [id^=alienAlienRight], #Covered [id^=alienArrowMiddle]").css("visibility", "visible"); },
          TT("#Target", "Your task will be to guess whether what you just heard describes what happened to the four aliens in this picture...", "Press Space", "bc"),
          {pause: "key\x01"},
          TT("#Covered", "... or whether it more likely describes what happened to the aliens behind those black squares.", "Press Space", "bc"),
          {pause: "key\x01"},
          // Reveal the instruction ("Press F or J")
          function(t){ $("#press").css("display", "block"); },
          TT("#press", "Please use the <b>F</b> and <b>J</b> keys to give your answer.", "Press Space", "bc"),
          {pause: "key\x01"},
          // Reveal the labels under the pictures
          function(t){ $(".DynamicQuestion-keyLabel").css("visibility", "visible"); },
          TT("#Target", "If you think the picture with the visible aliens matches the description ('Exactly one alien was red again on Planet ZY'), you press the corresponding key (here, <b>F</b>).", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Covered", "If you think a better match is hidden in the other picture, you press the other key (here, <b>J</b>).", "Press Space and then F or J", "tc"),
          {pause: "key\x01"},
          {pause: "keyFJ"},
          // Printing a feedback in function to what key the participant just pressed
          function(t){
            setTimeout(function() {
              console.log(t.pressedKey);
              if ("F".match(t.pressedKey))
                TT("#Target", "Right: in this picture, exactly one alien was red again on Planet ZY.", "Press Space to Proceed", "tc")(t);
              else if ("J".match(t.pressedKey))
                TT("#Covered", "<span style='color: red;'>Wrong: you should go with the picture with the visible aliens, "+
                               "where exactly one alien was red again on Planet ZY</span>", "Press Space to Proceed", "tc")(t);
            }, 12);
          },
          {pause: "key\x01"}
        ]

     }
  ],


  ["practice2", "DynamicQuestion", {

        legend: "practice2",
        //randomOrder: ["F", "J"],
        randomOrder: null,
        answers: {
                  Target: ["F", newAliens([ ["alien_pink.png", "alien_grey.png", "alien_pink.png"],
                                      ["alien_green.png", "alien_grey.png", "alien_pink.png"],
                                      ["alien_pink.png", "alien_grey.png", "alien_pink.png"],
                                      ["alien_green.png", "alien_grey.png", "alien_orange.png"]
                                    ], ["Planet TH", "Planet XF"])],
                  Covered: ["J", newAliens([
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"]
                                    ], ["Planet TH", "Planet XF"])]
        },
        enabled: false,                             // The user won't validate the trial by clicking/pressing the key.

        sequence: [
          TT("#bod", "Let's go through a second round.", "Press Space", "mc"),
          {pause: "key\x01"},  
          "<div id='sentence' style='font-weight:bold;'>These four aliens had to leave their home planet. While in transit on Planet TH, they all lost their color. Then they moved on to Planet XF.</div>", 
          {this: "answers", showKeys: "bottom"},
          "<span id='press' style='display:none;'>Press F or J</span>",
          $("<p id='press_space'>Press space.</p>").css({"font-style":"italic", "text-align": "center"}),
          // First hide everything but the visible aliens
          function(t){ $("[id^=alienArrowMiddle], [id^=alienAlienRight]").css("visibility", "hidden"); },
          TT("#Target", "Each trial is about four <i>new</i> aliens.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #planetB", "These four aliens are taveling to Planet XF.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Target #planetA", "They are transiting via Planet TH.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#sentence", "As indicated in this sentence, their color remained unchanged during their transit on Planet TH.", "Press Space", "bc"),
          {pause: "key\x01"},
          TT("#press_space", "Please pay attention to how the pictures and the audio description unfold before making your guess.", "Press Space", "tc"),
          {pause: "key\x01"},
          // Reveal the context sentence
          function(t){ $("#sentence").css("visibility", "hidden"); },
          function(t){ $("#press_space").css("display", "none"); },
          // Reveal the right aliens
          function(t){ $("[id^=alienAlienRight], [id^=alienArrowMiddle]").css("visibility", "visible"); },
          {audio: "practice2.wav", waitFor: true},
          function(t){ $("#press").css("display", "block"); },
          function(t){ $(".DynamicQuestion-keyLabel").css("visibility", "visible"); },
          TT("#Target", "If you think the picture with the visible aliens matches the description, press <b>F</b>.", "Press Space", "tc"),
          {pause: "key\x01"},
          TT("#Covered", "If you think the picture with the hidden aliens is a better guess, press <b>J</b>.", "Press Space and then F or J", "tc"),
          {pause: "key\x01"},
          {pause: "keyFJ"},
          // Printing a feedback in function to what key the participant just pressed
          function(t){
            setTimeout(function() {
              console.log(t.pressedKey);
              if ("J".match(t.pressedKey))
                TT("#Covered", "Right: in the picture with the visible aliens, there wasn't exactly one alien that was pink again on Planet XF, so the picture with the hidden aliens is a better guess.", "Press Space to Proceed", "tc")(t);
              else if ("F".match(t.pressedKey))
                TT("#Target", "<span style='color: red;'>Wrong, you should go with the picture with the hidden aliens, "+
                               "which is a better guess: there wasn't exactly one alien that was pink again on Planet XF in the picture with the visible aliens.</span>", "Press Space to Proceed", "tc")(t);
            }, 12);
          },
          {pause: "key\x01"}
        ]

     }
  ],

  ["practiceTransition", "Message", 
    {html: "Now we are going to start the actual experiment. Please be ready. Press Space to proceed.", transfer: "keypress"}
  ]

].concat(

  GetItemsFrom(dataAgain, null, {
    ItemGroup: ["item","group"],
    Elements:[
      function(row){return "StopTest"+row.Expt;},
      "DynamicQuestion",
      {
        legend: function(row){return[row.item,row.Expt,row.Condition,row.Trigger,row.Critical,
                                     row.Predict,row.group,row.ColorTest,row.ColorFill,row.ColorCheck].join("+");},
        randomOrder: ["F","J"],
        answers: function(x){
                  var visible = [[x.Alien1Planet1, "alien_grey.png", x.Alien1Planet3],
                                 [x.Alien2Planet1, "alien_grey.png", x.Alien2Planet3],
                                 [x.Alien3Planet1, "alien_grey.png", x.Alien3Planet3],
                                 [x.Alien4Planet1, "alien_grey.png", x.Alien4Planet3]
                                ];
                  fisherYates(visible);
                  return {
                    Target: newAliens(visible, ["Planet "+x.Planet2, "Planet "+x.Planet3]),
                    Covered: newAliens([
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"],
                                      ["CoveredBox.png", "CoveredBox.png", "CoveredBox.png"]
                                    ], ["Planet "+x.Planet2, "Planet "+x.Planet3])
                  };
        },
        enabled: false,
        sequence: function(x){return[
            "<div id='sentence' style='font-weight:bold;'>These four aliens had to leave their home planet. While in transit on Planet "+x.Planet2+", they all lost their color. Then they moved on to Planet "+x.Planet3+".</div>", 
            {this: "answers", showKeys: "bottom"},
            "<span id='press' style='display:none;'>Press F or J</span>",
            $("<p id='press_space'>Press space.</p>").css({"font-style":"italic", "text-align": "center"}),
            //"<p style='font-size: 0.7em;'>Condition: "+x.Condition+"; Item: "+x.item+"; Group: "+x.group+"</p>",
            // First hide everything but the visible aliens
            function(t){ $("[id^=alienArrowMiddle], [id^=alienAlienRight]").css("visibility", "hidden"); },
            // Wait for a keypress
            {pause: "key ", newRT: true},
            {pause: 150},
            // Hide the context sentence
            function(t){ $("#sentence").css("visibility", "hidden"); },
            function(t){ $("#press_space").css("display", "none"); },
            // Reveal the right aliens
            function(t){ $("[id^=alienAlienRight], [id^=alienArrowMiddle]").css("visibility", "visible"); },
            {pause: 550},
            {audio: x.test_sound_filename},
            function(t){ $("#press").css("display", "block"); },
            function(t){ $(".DynamicQuestion-keyLabel").css("visibility", "visible"); },
            function(t){ t.enabled = true; }
          ];
        }
      }
    ]
  })
);