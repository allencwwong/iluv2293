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
    "https://s.yimg.com/cv/apiv2/default/yahoo/bb/assets/js/randomThoughts-1.0.4.json";

function fetchRandomThoughts() {
    getEl(".yahoo-billboard-copy").style.visibility = "hidden";
    getEl(".yahoo-billboard-copy").innerHTML = "brewing...";
    return fetch(jsonURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return json;
        });
}

fetchRandomThoughts()
    .then(function(result) {
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
                    // getEl(".yahoo-billboard-copy").style.visibility = 'hidden';
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

        console.log("fetch RT");
        // desktop onclick RTs event
        var desktopRT = getEl(".random-thoughts-btn");
        generateRandomThoughts(desktopRT);
        desktopRT.click();
        // mobile onclick RTs event
        var mobileRT = getEl(".random-thoughts-btn-footer");
        generateRandomThoughts(mobileRT);
        mobileRT.click();
    })
    .then(function() {
        // relative container height - image height = starting point calc
        // 53% down and 34.3% left for RTs or addClass to that RTs div

        console.log(getEl(".yahoo-billboard").clientHeight);
        var setRandomThoughtsToBB = function() {
            console.log("show RTs");
            getEl(".yahoo-billboard-copy").style.visibility = "visible";
            getEl(".yahoo-billboard-copy").style.display = "block";
            var billboardContainerHeight = getEl(".billboard-left")
                    .clientHeight,
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
            getEl(".yahoo-billboard-container").style.left =
                adjustedLeft + "px";
            getEl(".yahoo-billboard-container").style.width =
                adjustedWidth + "px";
            getEl(".yahoo-billboard-container").style.height =
                adjustedHeight + "px";
            // set right copy container
            getEl(".copy-container .text-vertical").style.marginTop =
                startHeight / 2.5 + "px";
        };

        var inter = setInterval(function() {
            if (getEl(".yahoo-billboard").clientHeight > 200) {
                setRandomThoughtsToBB();
                clearInterval(inter);
            }
        }, 500);

        window.onresize = function(event) {
            setRandomThoughtsToBB();
        };
    });

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
