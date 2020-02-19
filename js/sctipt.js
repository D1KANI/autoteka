
$('.footer__item__title').click(function(){
    $(this).parent('.footer__item').children('.footer__item_content').toggle(200)
  });

$('.block-FAQ__question').click(function(){
    $(this).parent('.block-FAQ__item').children('.block-FAQ__answer').toggle(200);
    $(this).toggleClass('block-FAQ__question_active');
});

$(document).ready(function() {
    $(window).resize(function() {
               if ($(window).width() <= '1025'){
                    $(document).ready(function(){
                        $('.block-rewiews__row').slick({
                        });

                    });      
                };
            });
        });