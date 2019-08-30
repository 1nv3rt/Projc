var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 10,
	centeredSlides: true,
	breakpoints: {
		// when window width is <= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		// when window width is <= 480px
		480: {
		  slidesPerView: 2,
		  spaceBetween: 20
		},
		// when window width is <= 640px
		640: {
		  slidesPerView: 3,
		  spaceBetween: 30
		}
	  },
	  autoplay: {
		delay: 2000,
	  },
	  
	  
  });