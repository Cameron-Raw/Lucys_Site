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

		navButton.click(function(){

			// If menu is closed, then open it
			if(menuOpen === false){
				navMenu.css("display","block");
				navMenu.animate({
					opacity : 1
				},500,function(){
					menuOpen = true;
				});
				
			}else{
				// else, close menu.
				navMenu.animate({
					opacity: 0
				},250,function(){
					navMenu.css("display","none");
					menuOpen = false;
				});

			}

			console.log("DEBUG: Click/touch registered!");

		});


	}());


	//
	// *** MODULE 2: Animating slogan on ***
	//

	(function(){

		// Store components of slogan as variables
		var discoverBanner1 = $("#discover span:nth-child(1)"); // "Discover the power "
		var discoverBanner2 = $("#discover span:nth-child(2)"); // " of flawless copy"

		// Store loadPage function
		function loadPage(){

			discoverBanner1.animate({opacity:1},1000,function(){
			discoverBanner2.animate({opacity:1},1000, function(){
				console.log("DEBUG: Slogan successfully loaded.");
			});
			});

		}

		// Execute loadPage()
		loadPage();

	}());



	




});

