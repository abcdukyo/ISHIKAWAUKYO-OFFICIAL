'use strict'

$(function() {
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    let speed = 500;
    $('html, body').animate({scrollTop: position}, speed, "swing");
    return false;
  });
});

// $(function(){
//   $('a[href^="#"]').click(function(){
//     let speed = 500;
//     let href= $(this).attr("href");
//     let target = $(href == "#" || href == "" ? 'html' : href);
//     let position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });


