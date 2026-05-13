$(function() {
  $(".hm_button").click(function() {
    $(".hm_page").toggleClass("open");
    $(".header_inner").toggleClass("open");
    $(".hm_button").toggleClass("open");
  });
});



$(function(){
  $("a[href^='#']:not([href='#'])").click(function(){

    $(".hm_button").removeClass("open");
    $(".hm_page").removeClass("open");
    $(".header_inner").toggleClass("open");
    
    var target = $($(this).attr("href")).offset().top - 70;
    // target -= 70;
    $("html, body").animate({scrollTop:target}, 1000,"linear");
    return false;
  });
});