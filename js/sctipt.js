
$('.footer__item__title').click(function(){
    $(this).parent('.footer__item').children('.footer__item_content').toggle(200)
  });

$('.block-FAQ__question').click(function(){
    $(this).parent('.block-FAQ__item').children('.block-FAQ__answer').toggle(200);
    if ($(this).hasClass('block-FAQ__question_active')) {
        $(this).removeClass('block-FAQ__question_active');
    }
    else {
        $(this).addClass('block-FAQ__question_active');
    }
});