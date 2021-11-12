 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  

$('.slide-video-home').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
    responsive: [
        {
            breakpoint: 757,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
}); 

$('.list-tab-prd a').click(function(){
   var tab_id = $(this).attr('data-tab');
   $('.list-tab-prd a').removeClass('active');
   $('.tab-content').removeClass('active');
   $(this).addClass('active');
   $("#"+tab_id).addClass('active');
}) 

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});