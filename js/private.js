 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  

$('.slide-new-top').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2, 
    prevArrow: '<a href="javascript:void(0)" class="prev"><img src="images/arr-left.png" class="img-fluid" alt=""></a>',
    nextArrow: '<a href="javascript:void(0)" class="next"><img src="images/arr-right.png" class="img-fluid" alt=""></a>',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 480, 
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});  

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});