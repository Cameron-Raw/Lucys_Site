function callSloganModule(mobileView){

	// Store components of slogan as variables
	var discoverBox = $("#discover"); // Div that contains the slogan
	var discoverBanner1 = $("#discover span:nth-child(1)"); // "Discover the power "
	var discoverBanner2 = $("#discover span:nth-child(2)"); // " of flawless copy"

	// Store Welcome div as variable
	var welcomeDiv = $("#welcome");


	if(mobileView){

		// Preset CSS starting point for animation on mobile devices
		discoverBox.css({
			"position":"absolute",
			"top":"38.5%",
			"opacity":"0"
	
		});

	}else{

		// Preset CSS starting point for animation on larger screens
		discoverBox.css({
			"position":"absolute",
			"top":"35%",
			"opacity":"0"
		});

	}



	welcomeDiv.css({
			"opacity":"0",
			"top": "20%"
	});

	// Create function that first reveals Discover div, and calls next function, loadText.
	function revealDiscover(){

		discoverBox.animate({
			opacity:1
		},750,function(){
			console.log("DEBUG: revealDiscover complete, now loadText");
			loadText();
		});

	}

	// Create function that slowly reveals text and calls next function, slideDiscoverUp.
	function loadText(){

		discoverBanner1.animate({opacity:1},1000,function(){
		discoverBanner2.animate({opacity:1},1000, function(){
			console.log("DEBUG: loadText complete, now slideDiscoverUp");

			if(mobileView){

				slideDiscoverUp();

			}
			
		});
		});

	}

	if(mobileView){

		// The last animation in the sequence slides the Discovery div upwards to its final place.
		function slideDiscoverUp(){
			discoverBox.animate({
				top: "0%"
			},750,function(){
				console.log("DEBUG: slideDiscoverUp complete, now loadWelcomeDiv");
				loadWelcomeDiv();
			});
		}


	}



	function loadWelcomeDiv(){

		// Animate the welcome div, fading in and upwards after the discovery div
		welcomeDiv.animate({
			opacity:1,
			top:"22.5%"
		},750,function(){
			console.log("DEBUG: Welcome div loaded.");
		})
	}
	// Call revealDiscover to start chain of animation events
	revealDiscover();

};