<footer class="main-footer">

	<div class="fullfooter">
		<div class="grid1260 pdm75 f-zero">
			<div class="upper-footer">

				<div class="grid20">
					<div class="f-title acc_trigger0 playfair">Contact Us</div>
					<div class="hidelist">
						<span class="ftxt"><strong>Address:</strong>  Office 4-7, Mehran Plaza, G-9 Markaz, Islamabad</span>
						<span class="ftxt"><strong>Phone:</strong> 03-111-567-786</span>
						<span class="ftxt"><strong>UAN:</strong> +92 51 285 1785</span>
						<span class="ftxt"><strong>Email:</strong> info.ikaenterprises1@gmail.com</span>

					</div>
				</div>
				<div class="grid20">
					<div class="f-title acc_trigger0 playfair">Main Menu</div>
					<ul class="ullist hidelist">
						<li><a href="about.php">About</a>
						</li>
						<li><a href="">Company Profile</a>
						</li>
						<li><a href="missionVissionValue.php">Mission & Vision</a>
						</li>
						<li><a href="contact-us.php">Contact Us</a>
						</li>
					</ul>
				</div>
				<div class="grid20">
					<div class="f-title acc_trigger0 playfair">service</div>
					<ul class="ullist hidelist">
					<li><a href="">Utility System Installation</a>
						</li>
						<li><a href="">Fire Fighting System Installation</a>
						</li>
						<li><a href="">HVAC System Installation</a>
						</li>
						<li><a href="">Flooring works</a>
						</li>
					</ul>
				</div>
				<div class="grid20">
					<div class="f-title acc_trigger0 playfair">service</div>
					<ul class="ullist hidelist">
						
						<li><a href="">Electrical System Installation</a>
						</li>
					</ul>
				</div>

			</div>
			<div class="copyright">Copyright © 2022 Hashmi Group Of Companies. All Rights Reserved.</div>
		</div>
	</div>
</footer>
<script>
	$( document ).ready( function () {
		var owl = $( '.owl-carousel.owl1' );
		owl.owlCarousel( {
			margin: 0,
			nav: false,
			loop: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				}
			}
		} );
		var owl = $( '.owl-carousel.testimonials' );
		owl.owlCarousel( {
			margin: 0,
			nav: false,
			loop: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				}
			}
		} );
		var owl = $( '.owl-carousel.services' );
		owl.owlCarousel( {
			margin: 0,
			nav: false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				479: {
					items: 2,
					margin: 2
				},
				767: {
					items: 3,
					margin: 2
				},
				1024: {
					items: 4,
					margin: 2
				}
			}
		} );
		var owl = $( '.owl-carousel.gcclogos' );
		owl.owlCarousel( {
			margin: 0,
			nav: false,
			loop: true,
			responsive: {
				0: {
					items: 3,
					margin: 10
				},
				767: {
					items: 4,
					margin: 20
				},
				1024: {
					items: 6,
					margin: 25
				}
			}
		} );
		var owl = $( '.owl-carousel.teams' );
		owl.owlCarousel( {
			margin: 0,
			nav: false,
			loop: true,
			responsive: {
				0: {
					items: 2,
					margin: 10
				},
				767: {
					items: 3,
					margin: 20
				},
				1024: {
					items: 3,
					margin: 25
				}
			}
		} );
	} )

	$( document ).ready( function () {
		$( '.acc_trigger0' ).toggleClass( 'inactive-header0' );
		//$('.acc_trigger0:first').addClass('active-header0').next().show();
		$( '.acc_trigger0' ).click( function () {
			if ( $( this ).next().is( ':hidden' ) ) {
				$( '.active-header0' ).toggleClass( 'active-header0' ).toggleClass( 'inactive-header0' ).next().slideToggle().toggleClass( 'open-content0' );
				$( this ).toggleClass( 'active-header0' ).toggleClass( 'inactive-header0' );
				$( this ).next().slideToggle().toggleClass( 'open-content0' );
			} else {
				$( this ).toggleClass( 'active-header0' ).toggleClass( 'inactive-header0' );
				$( this ).next().slideToggle().toggleClass( 'open-content0' );
			}
		} );
		return false;
	} );

	$( ".menu-toogle" ).click( function () {
		$( "body" ).addClass( "open-menu" );
	} );
	$( ".menu-close" ).click( function () {
		$( "body" ).removeClass( "open-menu" );
	} );
</script>