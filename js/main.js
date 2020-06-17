
//preloading

$(window).on("load",function(){

	$("#preloader").fadeOut(5000);

});

// Filtering Recently Projects With Isotope.js
$(document).ready(function(){

        let $btns=$('.project-area .button-group button');

        $btns.click(function(e){
            $('.project-area .button-group button').removeClass('active');
            e.target.classList.add('active');

            let selector=$(e.target).attr('data-filter');
            $('.project-area .grid').isotope({
                filter:selector
            });
            return false;
        })

//Makeing beautiful layout to 'all' project category
$('.project-area .button-group #btn-all-project').trigger('click');


// Magnific pop up effect on Recently Project with magnific(css/js)
$('.project-area .grid .test-popup-link').magnificPopup({
    type:"image",
    //other options

    // gallery mode
    gallery:{enabled:true}
});


//Owl Carousel on What client say about me
$('.site-main .client-about-area .owl-carousel').owlCarousel({

    //loop carousel
    loop:true,
    autoplay:true,
    dots:true,
    autoplayTimeout:1500,
    // animateIn:'flipInX',
    // animateOut:'fadeOut',
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        },
        
    }
});

// sticky navigation menu +to top button
let nav_offset_top=$('.header_area').height()+400;

function navBarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll=$(window).scrollTop();
            if(scroll>=nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
                $('.toTopButton').css({
                    "opacity":"1","pointer-event":"auto"
                });
            }
            else{
                $('.header_area .main-menu').removeClass('navbar_fixed');
                $('.toTopButton').css({
                    "opacity":"0","pointer-event":"none"
                }); 
            }
            $('.toTopButton').click(function(){
                $(window).scrollTop(0);
            });
            
        })
    }
}
navBarFixed();




    //scroll to element
    $('.js--scroll-feedback').click(function(){
        $('html,body').animate({scrollTop:$('.js--feedback-section').offset().top-150},1000);
    })

    $('.js--scroll-about').click(function(){
        $('html,body').animate({scrollTop:$('.js--about-section').offset().top-100},1000)
    })

    $('.js--scroll-downloadCV').click(function(){
        $('html,body').animate({scrollTop:$('.js--downloadCV').offset().top-600},1000)
    })
    $('.js--scroll-services').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-services').offset().top-200},1000)
    })
    $('.js--scroll-projects').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-projects').offset().top-100},1000)
    })
    $('.js--scroll-contact').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-contact').offset().top-100},1000)
    })


    //AOS instance
    AOS.init();

});








