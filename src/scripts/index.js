import '../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../video/Ocean51585.mp4';
import '../styles/header.scss';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

console.log('webpack starterkit');

$(document).ready(function() {
    $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.opinion-comment').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            },
            1080: {
                items: 3
            }
        }
    });
});

    $(function() {
    $(".start__video").click(function() {

        var elementClick = $(this).attr("#video");
        var destination = $(elementClick).offset();
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1300, function() {
            $("video")[0].play();
            $("video").show();
            $("video").animate({opacity:1.0});
            $("#video").hide();
             $("video").prop("controls",true);
        });
        return false;
    });
});

$(document).ready(function() {
    $('.header_top_nav__menu-btn').click(function(event){
        $('.header_top_nav__menu-btn, .header-menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});
