"use strict";

var isMobile = $(window).width() > 568 ? false : true;

console.log(isMobile);

$(".carousel").slick({
    // mobileFirst: isMobile,
    centerMode: true,
    slidesToShow: 5,
    arrows: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});

// // fetch Carousel Description from data/json
var jsonURL =
    "https://s.yimg.com/cv/apiv2/default/yahoo/oot/assets/js/carousel-slide-desc-1.0.0.json";

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
    var currItem = $(".slick-slide.slick-current.slick-active img").data(
        "item"
    );
    $(".carousel-panel").html(result.randomThoughts[currItem]);
}

function setArrowAlignment() {
    // slider height - arrow height / 2 to get margin top
    var top =
        ($(".slick-list").height() - $(".arrow-prev").height()) / 2 + "px";
    $(".arrow").css({ top: top });
}

fetchCarouselDescription().then(function(result) {
    // get first desc
    getCarouselDescription(result);
    // onClick Arrow prev / next change copy
    $(".arrow").on("click", function() {
        // get next/prev onclick
        getCarouselDescription(result);
    });
    // on swipe change copy
    $(".carousel").on("swipe", function() {
        getCarouselDescription(result);
    });

    // on click change slide
    $(".slick-slide").on("click", function(e) {
        e.preventDefault();
        console.log("slide clicked");
        var slideNo = $(this).data("slick-index");
        $(".carousel").slick("slickGoTo", slideNo);
        getCarouselDescription(result);
    });
});

setArrowAlignment();

window.onresize = function(event) {
    setArrowAlignment();
};
