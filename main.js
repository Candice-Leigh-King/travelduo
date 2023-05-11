$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu

// Reveal and hidee header

const header = document.querySelector("header");
const logo = document.getElementsByClassName("logo-div");
let lastScroll = 0;

const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

const validateHeader = () => {
  const windowY = window.scrollY;
  const windowH = window.innerHeight;
  if (windowY > windowH) {
    // We passed the first section, set a toggable class
    header.classList.add("is-fixed");
    // logo.classList.add("show")
    // Determine is we ready to animate
    if (windowY > windowH +100) {
      header.classList.add("can-animate");
      if (windowY < lastScroll) {
        // Determine if we scrolling up
        header.classList.add("scroll-up");
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("scroll-up");
    }
  } else {
    header.classList.remove("is-fixed", "can-animate");
  }
  lastScroll = windowY;
};

window.addEventListener("scroll", throttle(validateHeader, 40));



//   Slick Slider Elements

	$('.single-item').slick(
		{
			dots: true,
			speed: 500,
			arrows: true,
			infinite: true,
			pauseOnFocus: true,
			pauseOnDotsHover: true,
			autoplay: true
		

		}

	);
// Animations
  // on scroll
			// on scroll
			function reveal() {
				let reveals = document.querySelectorAll(".reveal");
	
				for (let i = 0; i < reveals.length; i++) {
				let windowHeight = window.innerHeight;
				let elementTop = reveals[i].getBoundingClientRect().top;
				let elementVisible = 150;
	
				if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
				} else {
				}
				}
				}
	
				window.addEventListener("scroll", reveal);


			
// End of JS
//   End .js
});
