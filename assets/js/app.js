$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();

    });
});

$('.userTab > ul > li.nav').click(function () {
    var submenu = $(this).children('.sub-menu');
    console.log($(this).parent().siblings('li.nav'));
    if ($(submenu).is(':hidden')) {
        $(submenu).slideDown(200);
    } else {
        $(submenu).slideUp(200);
    }
    $(this).siblings('li.nav').find('ul.sub-menu').slideUp(200);
});

$('.sub-menu').on('click', function(e){
     e.stopPropagation();
})
 

$(document).ready(function(){  
    var $st = $('.pagination');
    var $slickEl = $('.center');

    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $st.text(i + '/' + slick.slideCount);
    });

    $slickEl.slick({
        speed: 1000,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow:3  ,            
        dots: true,          
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
