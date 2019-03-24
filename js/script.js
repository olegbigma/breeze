// document.getElementById('turnleft').onclick=turnleft;
// var left=0;

// function turnleft(){
//     var str=document.getElementById('productslider');
//     left=left-240;
//     if(left<240){
//         left=0;
//     }
//     str.style.left=left+'px';
// }
$('.productslider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'slick-dots',
    mobileFirst:true,
    responsive: [{
        breakpoint: 1199 ,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
               }
      }]
  });