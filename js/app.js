$(document).ready(function(){
	
	//Load homepage
	var discoverBanner1 = $("#discover span:nth-child(1)"); //Stores h1
	var discoverBanner2 = $("#discover span:nth-child(2)");
	var welcomeBlock = $("#welcome-col");

	welcomeBlock.css({'top':'-20px',
					'opacity':'0'});

	//Load 'discover' slogan

	function loadPage(){

		discoverBanner1.animate({opacity:1},1000,function(){
		discoverBanner2.animate({opacity:1},1000, function(){
			welcomeBlock.animate({opacity:1,bottom: 0}, 1000);
		});
		});

	}

	function loadWelcome(){

		//Then greetings div
		

	}

	loadPage();

	//Then lucy img

	//Then text

	//Load mobile nav

	var mobileNavButton = $(".nav-button");
	var mobileNavList = $("#mobile-nav ul").find("li").toArray();


	mobileNavButton.on('tap',function(){

		$(mobileNavList).css({'top':'-800%',
								'display':'block'});
		$(mobileNavList).animate({opacity:1,top:0},1500);


		console.log("Tap registered");

		console.log(mobileNavList);




	});

});

