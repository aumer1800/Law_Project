  
  /* scroll navbar  aftr 10vh height*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header_navbar');
    const scrollTrigger = window.innerHeight * 0.1; // 40vh in pixels

    if (window.scrollY >= scrollTrigger) {
      header.style.backgroundColor = 'red';
      header.style.transition=' background-color 0.3s ease';
   header.style.zIndex = '2';


    } else {
      header.style.backgroundColor = 'transparent'; // or original color
            header.style.transition=' background-color 0.3s ease';

    }
  });



/*****************************     about us swiper ********************/
 var swiper = new Swiper(".aboutcard", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".aboutcard .swiper-pagination",
        clickable: true,
      },
       autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    });


/*******************  making swiper cards coverflow service section ****************/

  var swiper = new Swiper(".servicecard", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     pagination: {
    el: ".servicecard> .swiper-pagination",
    clickable: true, // Allows user to click dots
  }
  });