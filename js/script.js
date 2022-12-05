
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
  AOS.init();

  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });


$(".js-tilt").tilt({
    maxTilt: 10,
  });

  var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$("#event .event-main").slick({
  arrows: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 900,
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$(window).scroll(function(){
 
  if($(window).scrollTop() > 600){
    $(".up-button").fadeIn();
  }else{
    $(".up-button").fadeOut();
  }
if($(window).scrollTop() >200){
  $("nav").addClass("fixed");
}else{
  $("nav").removeClass("fixed");
}
if($(window).scrollTop() >300){
  $("nav .logo").addClass("log-fixed");
}else{
  $("nav .logo").removeClass("log-fixed");
}

})

$(".up-button").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  })
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $("nav").addClass("fixe");
  }else{
    $("nav").removeClass("fixe");
  }
})


