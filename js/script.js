$(document).on('ready', function() {
    $(".productslider").slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
            breakpoint: 550 ,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
                   },
                  {
                    breakpoint: 992 ,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                           }
                  }       
          ]
    });
});