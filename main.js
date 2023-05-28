$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){
	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
	});

	$(".exit").click(function(){
		$(this).toggleClass('active');
		$(".page-nav").fadeToggle();
	});

	$(".menu-button").click(function(){
		$(this).toggleClass('active');
		$(".menu").fadeToggle();
	});
// put class of exit on elements to make them navigate back to page-nav
	

	$(".leave").click(function(){
		$(this).toggleClass('active');
		$(".navigation").fadeToggle();
	});

			// end hamburger menu

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

// Header Styles
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var hideHeader = document.getElementById("hideHeader");
var logo = document.getElementById("logo");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // Scroll up
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = "-1.5rem";
	hideHeader.classList.remove("headerBackgroundInitial");
	hideHeader.classList.add("headerBackgroundNew");
	logo.classList.remove("hide");
	logo.classList.add("logo-show")
  } 
  // Scroll down
  else {
    hideHeader.style.top = "-13rem";
	
  }
  prevScrollpos = currentScrollPos;
};

//   End .js
});
