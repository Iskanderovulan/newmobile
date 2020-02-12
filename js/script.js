$('.mobile-btn').on('click',function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.nav').toggleClass('show-nav')
});

$('.nav a').on('click',function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.nav').removeClass('show-nav')
});