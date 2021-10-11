
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /*Easy on scroll event listener */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".navbar .nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});




  /*Back to top button*/
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /*Testimonials slider*/
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /*Animation on scroll*/
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  // number count for stats, using jQuery animate

$(".counting").each(function () {
	var $this = $(this),
	  countTo = $this.attr("data-count");
  
	$({ countNum: $this.text() }).animate(
	  {
		countNum: countTo,
	  },
	  {
		duration: 20000,
		easing: "linear",
		step: function () {
		  $this.text(Math.floor(this.countNum));
		},
		complete: function () {
		  $this.text(this.countNum);
		  //alert('finished');
		},
	  }
	);
  });

  // Initiate venobox (lightbox feature used in gallery
	$(document).ready(function() {
		$('.venobox').venobox();
	  });


})()