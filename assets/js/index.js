"use strict";

let isMobile = $(window).width() > 568 ? true : false;
console.log($(window).width());

$(".carousel").slick({
    mobileFirst: !isMobile,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    arrows: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }
    ]
});

// fetch Carousel Description from data/json
var jsonURL =
    "https://s.yimg.com/cv/apiv2/default/yahoo/oot/assets/js/randomThoughts-1.0.4.json";

function fetchCarouselDescription() {
    return fetch(jsonURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return json;
        });
}

function getCarouselDescription(result) {
    let currItem = $(".slick-slide.slick-current.slick-active img").data(
        "item"
    );
    console.log(currItem);
    $(".carousel-panel").html(result.randomThoughts[currItem]);
}

function setArrowAlignment() {
    console.log($(".slick-list").height());
    // slider height - arrow height / 2 to get margin top
    let top = `${($(".slick-list").height() - 81) / 2}px`;
    $(".arrow").css({ top: top });
}

fetchCarouselDescription().then(function(result) {
    // get first desc
    getCarouselDescription(result);
    // onClick Arrow prev / next change copy
    $(".arrow").on("click", function() {
        // get next/prev onclick
        console.log("clicked");
        getCarouselDescription(result);
    });
    // on swipe change copy
    $(".carousel").on("swipe", function() {
        console.log("swiped");
        getCarouselDescription(result);
    });
});

setArrowAlignment();

window.onresize = function(event) {
    setArrowAlignment();
};
