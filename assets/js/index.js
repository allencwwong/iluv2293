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

// fetch randomThoughts from data/json
console.log("test");

// var jsonURL = "/assets/js/randomThoughts.json";
var jsonURL =
    "https://s.yimg.com/cv/apiv2/default/sites/billboard/assets/js/randomThoughts.json";

function fetchRandomThoughts() {
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
    var generateRandomThoughts = function() {
        getEl(".random-thoughts-btn").addEventListener("click", function() {
            var randomGenerator = Math.floor(
                Math.random() * result.randomThoughts.length
            );
            // prevent showing same random
            if (currRandomNo !== randomGenerator) {
                currRandomNo = randomGenerator;
                console.log(randomGenerator);
            } else {
                // unbind eventlistener to run function again
                getEl(".random-thoughts-btn").removeEventListener(
                    "click",
                    function() {
                        generateRandomThoughts();
                    }
                );
            }
        });
    };
    generateRandomThoughts();
});

// th: 2132 tb: 1130 53%
// tw: 2162 tb: 741 34.2%

// look for img container use it as the realtive container for RTs
// relative container height - image height = starting point calc
// 53% down and 34.3% left for RTs or addClass to that RTs div

// document.querySelector(".yahoo-billboard")

// helper functions

var getEl = function(element) {
    return document.querySelector(element);
};

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
