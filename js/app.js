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

