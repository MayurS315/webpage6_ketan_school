let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("is-sticky");
    }
    else{
        nav.classList.remove("is-sticky");
    }
}

$(".testimonials-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    margin: 30,
 
    responsive: {
        0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
    }
});