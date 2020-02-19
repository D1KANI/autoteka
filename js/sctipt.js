
$('.footer__item__title').click(function(){
    $(this).parent('.footer__item').children('.footer__item_content').toggle(200)
});


$('.block-FAQ__question').click(function(){
    $(this).parent('.block-FAQ__item').children('.block-FAQ__answer').toggle(200);
    $(this).toggleClass('block-FAQ__question_active');
});

function mobileOnlySlider() {
    $(document).ready(function(){
        $('.block-rewiews__row').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            touchMove:true,
            dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 568,
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
            dots: false,
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
    mobileOnlySliderTop();
}
$(window).resize(function(e){
    if(window.innerWidth < 1000) {
        if(!$('.slider').hasClass('slick-initialized')){
            mobileOnlySlider();
            mobileOnlySliderTop();
        }

    }else{
        if($('.slider').hasClass('slick-initialized')){
            $('.slider').slick('unslick');
        }
    }
});