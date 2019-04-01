if (
    /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    // mobile
    // var rapidConfig = getRapidConfig(1197807548);
} else {
    // desktop
    // var rapidConfig = getRapidConfig(1197807547);
}

// helper functions
var getEl = function(element) {
    return document.querySelector(element);
};

// fetch randomThoughts from data/json
var jsonURL =
    "https://s.yimg.com/cv/apiv2/default/sites/billboard/assets/js/randomThoughts3.json";

function fetchRandomThoughts() {
    getEl(".yahoo-billboard-copy").innerHTML = "brewing...";
    return fetch(jsonURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return json;
        });
}

fetchRandomThoughts().then(function(result) {
    // generate a single quote from random thoughts
    var currRandomNo;
    var generateRandomThoughts = function(eventTrigger) {
        eventTrigger.addEventListener("click", function() {
            var randomGenerator = Math.floor(
                Math.random() * result.randomThoughts.length
            );
            // prevent showing same random
            if (currRandomNo !== randomGenerator) {
                currRandomNo = randomGenerator;
                // set random thought
                getEl(".yahoo-billboard-copy").innerHTML =
                    result.randomThoughts[randomGenerator];
            } else {
                // unbind eventlistener to run function again
                eventTrigger.removeEventListener("click", function() {
                    generateRandomThoughts(eventTrigger);
                });
                eventTrigger.click();
            }
        });
    };

    // desktop onclick RTs event
    var eventTrigger = getEl(".random-thoughts-btn");
    generateRandomThoughts(eventTrigger);
    eventTrigger.click();
    // mobile onclick RTs event
    var eventTrigger2 = getEl(".random-thoughts-btn-footer");
    generateRandomThoughts(eventTrigger2);
    eventTrigger2.click();
});

window.onresize = function(event) {
    setRandomThoughtsToBB();
};

// relative container height - image height = starting point calc
// 53% down and 34.3% left for RTs or addClass to that RTs div

var setRandomThoughtsToBB = function() {
    var billboardContainerHeight = getEl(".billboard-left").clientHeight,
        yahooBillboardHeight = getEl(".yahoo-billboard").clientHeight,
        yahooBillboardWidth = getEl(".yahoo-billboard").clientWidth,
        startHeight = billboardContainerHeight - yahooBillboardHeight,
        adjustedTop = 0.55 * yahooBillboardHeight + startHeight,
        adjustedLeft = 0.38 * yahooBillboardWidth + 15,
        adjustedWidth = 0.41 * yahooBillboardWidth,
        adjustedHeight = 0.092 * yahooBillboardWidth;

    // set diff mobile sizing
    if (document.documentElement.clientWidth < 768) {
        adjustedLeft = 0.37 * yahooBillboardWidth;
    }

    // set random thought container alignment
    getEl(".yahoo-billboard-container").style.top = adjustedTop + "px";
    getEl(".yahoo-billboard-container").style.left = adjustedLeft + "px";
    getEl(".yahoo-billboard-container").style.width = adjustedWidth + "px";
    getEl(".yahoo-billboard-container").style.height = adjustedHeight + "px";
    // set right copy container
    getEl(".copy-container .text-vertical").style.marginTop =
        startHeight / 2.5 + "px";
};

setRandomThoughtsToBB();

// set rapid tracking spaceid
// function getRapidConfig(spaceid) {
//   return {
//     spaceid: spaceid,
//     nol: true,
//     keys: { st_sec: "us.verizonmedia", pt: "home", ver: "html" },
//     webworker_file: "https://s.yimg.com/ss/rapidworker-1.2.js"
//   };
// }

// var rapid = new YAHOO.i13n.Rapid(rapidConfig);

// rapid.addModulesWithViewability([]);
