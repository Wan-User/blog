$(function(){
    $('.nav_ul li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
$('.silder_bth').click(function(){
    showSlider()
})
$('.mask').click(function(){
    hideSlider()
})
    function showSlider(){
        $('.mask').fadeIn()
        $('.silder').css('right', 0)
    }
    function hideSlider(){
        $('.mask').fadeOut()
        $('.silder').css('right', -300)
    }
$('.top').click(function(){
    $('body, html').animate({
        scrollTop:0
    }, 300)
})
$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $('.top').css('display',' block')
    }else{
        $('.top').css('display','none')
    }
})
})