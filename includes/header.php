<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<!-- For use with IE -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Controls scaling for mobile -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Calls in Bootstrap from its CDN. Bear in mind this is an older version -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css" type="text/css">

	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One|Open+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
	<title>Lucy Lynch || Literary Services</title>
</head>

<body>

	<header>
		<div class="head-container group">

			<a <?php if($currentPage !== "index") {

						echo "href = \"index.php\"";

					}?>><div id="logo-div">

				<h1>Lucy Lynch</h1>
				<h2>Copywriter, copy-editor and proof reader</h2>

			</div></a>

			<div id="navButton">

				<img src="img/nav.png">

			</div>

			<nav>

				<ul class="group">

					<a <?php if($currentPage == "bio") {

						echo "class = \"currentPage\"";

					} else {

						echo "href=\"bio.php\"";

					}
						 ?>><li>Biography</li></a>

					<a <?php if($currentPage == "qualifications") {

						echo "class = \"currentPage\"";

					} else {

						echo "href=\"qualifications.php\"";

					}
						 ?>><li>Qualifications</li></a>

					<a <?php if($currentPage == "publications") {

						echo "class = \"currentPage\"";

					} else {

						echo "href=\"publications.php\"";

					}
						 ?>><li>Publications</li></a>

					<a <?php if($currentPage == "testimonials") {

						echo "class = \"currentPage\"";

					} else {

						echo "href=\"testimonials.php\"";

					}
						 ?>><li>Testimonials</li></a>

					<a <?php if($currentPage == "contact") {

						echo "class = \"currentPage\"";

					} else {

						echo "href=\"contact.php\"";

					}
						 ?>><li>Contact</li></a>
				</ul>
			</nav>


		</div>
		

	</header>