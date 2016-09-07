$(document).ready(function(){
	
	//Load homepage
	var discover1 = $("#part1");
	var discover2 = $("#part2");
	var greeting = $("#greeting");
	var greetingImg = $("#greeting img");
	var greetingH2 = $("#greeting h2");
	var greetingP = $("#greeting p");


	//Fade in "Discover the power"... "of flawless copy"
	discover1.animate({opacity: 1}, 1500, function(){
		// Once first half of sentence is visible, fade in second half
		discover2.animate({opacity: 1}, 1500, function(){
			// Once sentence is visible, fade in greetings div
			greeting.animate({opacity: 1}, 800, function(){
				// Once div is visible, fade in img...
				greetingImg.animate({opacity: 1}, 500, function(){
					// Then the h2...
					greetingH2.animate({opacity: 1}, 500, function(){
						// And finally, the p
						greetingP.animate({opacity: 1}, 500, function(){

							console.log("Homepage load complete");
						});

					});

				});



			});


		});
	});

	//Then greetings div

	//Then lucy img

	//Then text

});

