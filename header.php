<header class="mona-header clear-after">
	<div class="menu-toogle"><span></span><span></span><span></span></div>
	<div class="menu-close"></div>
	<div class="monalogo">
		<a href="index.php"><img style="height: 37px" src="images/logo.png" /></a>
	</div>
	<div class="mona-menu">
		<ul>
			<li id="who">
				<a href="#."
					>who we are
					<img
						src="images/drop-down.png"
						alt="HASHMI GROUP OF COMPANIES"
						class="drop-downIcon"
				/></a>
				<ul id="whod">
					<li><a href="about.php">About US</a></li>
					<!-- <li><a href="chairmen-speech.php">Chairman Message</a></li> -->
					<li><a href="team.php">Management</a></li>
					<li><a href="missionVissionValue.php">Mission & Vision</a></li>
					<!-- <li><a href="">Our History</a></li> -->
					<!-- <li><a href="">Company Profile</a></li> -->
				</ul>
			</li>
			<li id="pro">
				<a href="#."
					>projects
					<img
						src="images/drop-down.png"
						alt="HASHMI GROUP OF COMPANIES"
						class="drop-downIcon"
				/></a>
				<ul id="prod">
					<li><a href="completedProjects.php">Completed</a></li>
					<li><a href="projectsDetail.php">Projects Detail</a></li>
				</ul>
			</li>
			<!-- <li><a href="#.">Accreditation</a></li> -->
			<li><a href="careers.php">career</a></li>
			<li><a href="#.">News</a></li>
			<li><a href="contact-us.php">Contact us</a></li>
		</ul>
	</div>
</header>

<script>
	$(document).ready(function () {
		$("#who").click(function () {
			$("#whod").toggle().css("position", "relative");
			$("#prod").css("position", "absolute");
		});
		$("#pro").click(function () {
			$("#prod").toggle().css("position", "relative");
			$("#whod").css("position", "absolute");
		});
	});

	$(".menu-toogle").click(function () {
		$("body").addClass("open-menu");
	});
	$(".menu-close").click(function () {
		$("body").removeClass("open-menu");
	});
</script>
