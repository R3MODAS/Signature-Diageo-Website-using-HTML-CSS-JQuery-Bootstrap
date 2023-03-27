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
        items: 3,
        margin: 0,
        loop: true,
        nav: false,
        dots: false
    });
});
