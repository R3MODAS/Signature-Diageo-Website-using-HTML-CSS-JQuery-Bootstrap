$(function () {
    var owl = $(".owl-carousel1");
    owl.owlCarousel({
        items: 1,
        margin: 300,
        loop: false,
        nav: true,
        navText: ["<img src='assets/leftarrow.png' alt='arrow'>", "<img src='assets/rightarrow.png' alt='arrow'>"]
    });
});

$(function () {
    var owl = $(".owl-carousel2");
    owl.owlCarousel({
        items: 4,
        margin: 25,
        loop: true,
        nav: false,
        dots: false,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            1000: {
                items: 3
            },
            1440: {
                items: 4
            }
        }
    });
});
