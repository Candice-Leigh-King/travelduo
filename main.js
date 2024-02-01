$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	// $(".blog-dropdown").hover(function(){
	//   $(this).toggleClass('active');
	//   $(".dropdown-content").fadeToggle();
	// });

	// $(".exit").hover(function(){
	// 	$(this).toggleClass('active');
	// 	$(".page-nav").fadeToggle();
	// });

	// $(".blog-dropdown").mouseenter(function(){
	// 	$(this).addClass('active');
	// 	$(".dropdown-content").fadeIn();
	//   }).mouseleave(function(){
	// 	$(this).removeClass('active');
	// 	$(".dropdown-content").fadeOut();
	//   });
	  
	//   $(".exit").mouseenter(function(){
	// 	$(this).addClass('active');
	// 	$(".page-nav").fadeIn();
	//   }).mouseleave(function(){
	// 	$(this).removeClass('active');
	// 	$(".page-nav").fadeOut();
	//   });
	  

	$(".menu-button").click(function(){
		$(this).toggleClass('active');
		$(".mobile-menu").fadeToggle();
	  });

	$(".leave").click(function(){
		$(this).toggleClass('active');
		$(".navigation").fadeToggle();
	});

// put class of exit on elements to make them navigate back to page-nav

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

	// Portfolio Slick Slider:
	$('.slider-for').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		asNavFor: '.slider-nav',
		rows: 1,
		slidesPerRow: 4,

	  });
	  $('.slider-nav').slick({
		slidesToShow: 8,
		slidesToScroll: 4,
		asNavFor: '.slider-for',
		autoplay: true,
		arrows: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		centerPadding: '0',
		nextArrow: '<p class = "next-right"> > </p>',
  		prevArrow: '<p class = "prev-left"> < </p>',
		responsive: [
			// Add responsive setting one
		{
			breakpoint: 990, // Set a breakpoint for mobile devices (adjust as needed)
			settings: {
			slidesToShow: 5, // Number of slides to show on mobile
			}
		},
			// Add responsive setting two	
		{
			breakpoint: 500, // Set a breakpoint for mobile devices (adjust as needed)
			settings: {
			slidesToShow: 4, // Number of slides to show on mobile
			}
		},


			// End Responsive settings	


		]
	  });


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
var prevScrollpos = window.scrollY;
var hideHeader = document.getElementById("hideHeader");
var logo = document.getElementById("logo");
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  // Scroll up
  if (prevScrollpos > currentScrollPos) {
    hideHeader.style.top = "0rem";
	hideHeader.classList.remove("headerBackgroundInitial");
	hideHeader.classList.add("headerBackgroundNew");
	logo.classList.remove("hide");
	logo.classList.add("logo-show");
  } 
  // Scroll down
  else {
    hideHeader.style.top = "-13rem";
	
  }
  prevScrollpos = currentScrollPos;
};



// Highligh nav on current page

window.onload = function() {
	// Get the current page URL or set a flag indicating the active page
	var currentPage = window.location.pathname; // Example: Use the appropriate method to get the current page URL dynamically
	
	// Find all navigation links
	var navLinks = document.getElementsByClassName("nav-link");
  
	// Loop through the navigation links and check if the href matches the current page
	for (var i = 0; i < navLinks.length; i++) {
	  if (navLinks[i].getAttribute("href") === currentPage) {
		navLinks[i].classList.add("active");
	  }
	}
  
	// Find all blog navigation links
	var blogNavLinks = document.getElementsByClassName("blog-nav");
  
	// Loop through the blog navigation links and check if the href matches the current page
	for (var i = 0; i < blogNavLinks.length; i++) {
	  if (blogNavLinks[i].getAttribute("href") === currentPage) {
		blogNavLinks[i].classList.add("blog-active");
	  }
	}
  };
  

//   End .js
});
