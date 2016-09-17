$(document).ready(function(){

	//
	// *** MODULE 1: Mobile nav control ***
	//

	(function(){

		// Store nav button as variable
		var navButton = $("#navButton");
		// Store nav menu as variable
		var navMenu = $("nav ul");
		// Store menu state (open or closed)
		var menuOpen = false;

		// Create touch and click event
		navButton.on('touch', function(e){
			e.preventDefault(); // Prevents click and touch events being run together
			e.target.click(); // Touch event essentially just runs click event
		},false);

		// Store opening animation as function
		function openMenu(){

			navMenu.css("display","block");
			navMenu.animate({
				opacity : 1
			},500,function(){
				menuOpen = true;
			});

		}

		// Store closing animation as function
		function closeMenu(){

			navMenu.animate({
				opacity: 0
			},250,function(){
				navMenu.css("display","none");
				menuOpen = false;
			});

		}

		// Bind openMenu and closeMenu events to navButton
		navButton.click(function(){

			// If menu is closed, then open it
			if(menuOpen === false){

				openMenu();
				
			}else{
				// else, close menu.
				closeMenu();

			}

			console.log("DEBUG: Click/touch registered!");

		});

		// Close menu if user selects the current page from nav

		var currentPage = $(".currentPage");

		currentPage.on('touch', function(e){
			e.preventDefault();
			e.target.click();
		},false);

		currentPage.click(function(){

			closeMenu();

		});




	}());

	//
	// *** MODULE 2: Animating slogan on ***
	//

	(function(){

		// Store components of slogan as variables
		var discoverBox = $("#discover"); // Div that contains the slogan
		var discoverBanner1 = $("#discover span:nth-child(1)"); // "Discover the power "
		var discoverBanner2 = $("#discover span:nth-child(2)"); // " of flawless copy"

		// Store Welcome div as variable
		var welcomeDiv = $("#welcome");

		// Preset CSS starting point for animation
		discoverBox.css({
			"position":"absolute",
			"top":"100%",
			"opacity":"0"
		});

		welcomeDiv.css({
				"opacity":"0",
				"top": "20%"
		});

		// Create function that first reveals Discover div, and calls next function, loadText.
		function revealDiscover(){

			discoverBox.animate({
				opacity:1,
				top: "38.5%"
			},750,function(){
				console.log("DEBUG: revealDiscover complete, now loadText");
				loadText();
			});

		}

		// Create function that slowly reveals text and calls next function, slideDiscoverUp.
		function loadText(){

			discoverBanner1.animate({opacity:1},750,function(){
			discoverBanner2.animate({opacity:1},750, function(){
				console.log("DEBUG: loadText complete, now slideDiscoverUp");
				slideDiscoverUp();
			});
			});

		}

		// The last animation in the sequence slides the Discovery div upwards to its final place.
		function slideDiscoverUp(){
			discoverBox.animate({
				top: "0%"
			},750,function(){
				console.log("DEBUG: slideDiscoverUp complete, now loadWelcomeDiv");
				loadWelcomeDiv();
			});
		}

		function loadWelcomeDiv(){

			// Animate the welcome div, fading in and upwards after the discovery div
			welcomeDiv.animate({
				opacity:1,
				top:"0%"
			},750,function(){
				console.log("DEBUG: Welcome div loaded.");
			})
		}
		// Call revealDiscover to start chain of animation events
		revealDiscover();

	}());

});

