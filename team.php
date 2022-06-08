<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>Hashmi Group Of Companies</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link href="css/default.css" rel="stylesheet" type="text/css">
	<script src="js/jquery-3.5.1.min.js"></script>
	<script src="js/owl-carousel.js"></script>
</head>

<body>

	<?php include('header.php') ?>
	<div class="main-banner">
		<div class="owl-carousel owl1">
			<div class="item main-img" style="background-image: url(images/team-bg.jpg);">
				<a href="">
					<header class="main-banner-header">
						<div class="grid1170 center">
							<div class="image-info playfair">Management Team</div>
						</div>
					</header>
				</a>
			</div>
		</div>
	</div>
    
    <div class="grid1260 f-zero tabs">
        <button class="tab tabs1 active" id="mg-tab" ><h3 class="h234 playfair">Management</h3></button>
        <button class="tab tabs2" id="eg-tab" ><h3 class="h234 playfair">Senior Engineers</h3></button>
    </div>

    

	<div class="grid1260 f-zero pdm100 management tabContent" id="tab1">
	<h2 class="h250 playfair">COMING SOON</h2>
		<!-- <div class="managemnt-card card1 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div>
        <div class="managemnt-card card2 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div>
        <div class="managemnt-card card3 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div>
        <div class="managemnt-card card4 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div>
        <div class="managemnt-card card5 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div>
        <div class="managemnt-card card6 gridbox30 in-block ">
            <div class="team-hover">
                <h6>Mr.Hamad Ali Lootah</h6>
                <p>Chairman</p>
            </div>
		</div> -->
	</div>

    <div class="grid1260 f-zero pdm100 engineer tabContent" id="tab2">
        <h2 class="h250 playfair">COMING SOON</h2>
    </div>
   

	<?php include('footer.php') ?>
	
	<script>
		$(document).ready(function(){
			$("#tab2").hide();

			$("#mg-tab").click(function(){
				$("#tab1").show();
				$("#tab2").hide();
				$("#eg-tab").removeClass("active");
				$("#mg-tab").addClass("active");

			});

			$("#eg-tab").click(function(){
				$("#tab1").hide();
				$("#tab2").show();
				$("#mg-tab").removeClass("active");
				$("#eg-tab").addClass("active");
			});


		});
	</script>

</body>

</html>