$(document).ready(function () {

    $('.slider-wrapper').slick({
        centerMode: true,
        slidesToShow: 3,
        rows: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});