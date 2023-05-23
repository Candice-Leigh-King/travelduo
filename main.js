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

// const header = document.querySelector("header");
// const logo = document.getElementsByClassName("logo-div");
// let lastScroll = 0;

// const throttle = (func, time = 100) => {
//   let lastTime = 0;
//   return () => {
//     const now = new Date();
//     if (now - lastTime >= time) {
//       func();
//       time = now;
//     }
//   };
// };

// const validateHeader = () => {
//   const windowY = window.scrollY;
//   const windowH = window.innerHeight;
//   if (windowY > windowH) {
//     // We passed the first section, set a toggable class
//     header.classList.add("is-fixed");
//     // logo.classList.add("show")
//     // Determine is we ready to animate
//     if (windowY > windowH + 5) {
//       header.classList.add("can-animate");
//       if (windowY < lastScroll) {
//         // Determine if we scrolling up
//         header.classList.add("scroll-up");
//       } else {
//         header.classList.remove("scroll-up");
//       }
//     } else {
//       header.classList.remove("scroll-up");
//     }
//   } else {
//     header.classList.remove("is-fixed", "can-animate");
//   }
//   lastScroll = windowY;
// };

// window.addEventListener("scroll", throttle(validateHeader, 40));


// New scroll function
// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }






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


// New New Hide Show Header 

// var hideHeader =$(".header-to-hide");
// // var showHeader = $('.header-to-show');
// var pos =  hideHeader.postion();

// $(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= pos.top & windowpos >=20) {
// 			hideHeader.addClass("hide");
// 		} else {
// 			hideHeader.removeClass("hide");	
// 		} });


// When the user scrolls the page, execute myFunction

// Fetch the header to hide on scroll and assign
// var hideHeader = document.getElementById("hideHeader");
// // Fetch the header to show on scroll up and assign
// var showHeader = document.getElementById("showHeader");
// // Set Last Scroll:
// // var lastScroll = 0;

// // Position of red header
// var pos = hideHeader.position();
// $(window).scroll(function() {
// 	// var st = $(window).scrollTop();
// 	var windowpos = $(window).scrollTop();
// 	if (windowpos >= pos.top & windoepos >=20){
// 		// downscroll code
// 		hideHeader.addClass("hideHeader");
// 	} else {
// 		// upscroll code
// 		hideHeader.removeClass("hideHeader");
// 	}
// 	lastScroll = st;
//  });


//  var hideLogo = $(".logo");
// 	var pos = hideLogo.position();					   
// 	$(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
// 		if (windowpos >= pos.top & windowpos >=20) {
// 			hideLogo.addClass("hide");
// 		} else {
// 			hideLogo.removeClass("hide");	
// 		}
// 	});

			
// End of JS


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var hideHeader = document.getElementById("hideHeader");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // Scroll Down
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = "0";
  } 
  // Scroll Up
  else {
    // hideHeader.removeClass("bg-initial");
    // hideHeader.addClass("bg-new");
    hideHeader.style.top = "-190px";
  }
  prevScrollpos = currentScrollPos;
};

//   End .js
});
