$(document).ready(function(){

	var mobileView;
		if ($(window).width() < 769){
			mobileView = true;
		}

	//
	// *** MODULE 1: Mobile nav control ***
	//

	callNavModule();

	//
	// *** MODULE 2: Animating slogan on ***
	//

	callSloganModule(mobileView);

});

