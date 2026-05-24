$(function(){
  $("a[href^='#']:not([href='#'])").click(function(){


    var target = $($(this).attr("href")).offset().top ;
   var headerHeight=96;
    $("html, body").animate({scrollTop:target-headerHeight}, 1000,"linear");
    return false;
  });
});

AOS.init();
