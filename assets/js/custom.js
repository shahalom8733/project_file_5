      

      $(document).ready(function(){


    $('.shows').click(function(){
      $('.menu').addClass("show");
      $('ul').addClass('slider');
      $(this).hide();
    })

    $('.hide').click(function(){
      $('.menu').removeClass("show");
      $('ul').removeClass('slider');
      $('.shows').show();
    })



})



             var swiper = new Swiper(".sliders-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


       var swiper = new Swiper(".blog-slider-container", {
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
                breakpoints: {
          500: {
            slidesPerView: 2,
          },
          900:{
            slidesPerView: 3,
          },
        },
      });





      var swiper = new Swiper(".owsam", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
       grid: {
          rows: 2,
        },
        spaceBetween: 30,
        breakpoints: {
          500: {
            slidesPerView: [2],
                   grid: {
          rows: 2,
        },
          },
          900:{
            slidesPerView: [3],
                               grid: {
          rows: 2,
        },
          },
        },
      });

            var swiper = new Swiper(".about-slide", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



  var swiper = new Swiper(".super-first", {
        slidesPerView: 3,
                spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });

