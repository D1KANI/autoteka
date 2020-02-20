$('.footer__item__title').click(function(){
    if (innerWidth <= 700) {
            $(this).parent('.footer__item').children('.footer__item_content').toggle(200);
            $(this).parent('.footer__item').toggleClass('footer__item_active');
    }   
});



$('.block-FAQ__question').click(function(){
    $(this).parent('.block-FAQ__item').children('.block-FAQ__answer').toggle(200);
    $(this).toggleClass('block-FAQ__question_active');
});

function mobileOnlySlider() {
    $(document).ready(function(){
        $('.block-rewiews__row').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            touchMove:true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 700,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1,
                        skiderToScroll: 1,
                        settings:"unslick"
                }
            }]
        });
    });
}

function mobileOnlySliderTop() {
    $(document).ready(function(){
        $('.block-advantage__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            touchMove:true,
            dots: true,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                        skiderToScroll: 1,
                        settings:"unslick"
                }
            }
            ]
        });
    });
}

if(window.innerWidth < 1000) {
    mobileOnlySlider();
}
$(window).resize(function(e){
    if(window.innerWidth < 1000) {
        if(!$('.slider').hasClass('slick-initialized')){
            mobileOnlySlider();
        }

    }else{
        if($('.slider').hasClass('slick-initialized')){
            $('.slider').slick('unslick');
        }
    }
});

if(window.innerWidth < 1000) {
    mobileOnlySliderTop();
}
$(window).resize(function(e){
    if(window.innerWidth < 1000) {
        if(!$('.slider').hasClass('slick-initialized')){
            mobileOnlySliderTop();
        }

    }else{
        if($('.slider').hasClass('slick-initialized')){
            $('.slider').slick('unslick');
        }
    }
});

$('.burger').on('click', function() {
    $('.poopup').fadeToggle()
    $(this).toggleClass('active')
});