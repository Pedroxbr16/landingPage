$(document).ready(function(){

	$('.nav-bar').on('click', function(){

		// if($('.menu-lateral').hasClass('active')){
		// 	$('.menu-lateral').removeClass('active'); 
		// 	// ou $(this).prev() porem a de cima é mais utilizada
		// }else{
		// 	$('.menu-lateral').addClass('active');
		// } jeito mais iniciante
		
		$('.menu-lateral').toggleClass('active');
		$('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');

	});

		$('.videos .itens').slick({
  			  dots: true,
  			  arrows: false,
 			 infinite: true,
 			 speed: 300,
 			 autoplay: true,
 			 autoplaySpeed: 2000,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }

			  ]
			});

		$('a').on('click', function(){
			if($(this).is('[href]')){
				var link = $(this).attr('href');

				if(link.indexOf('#') > -1){
					event.preventDefault();

					$('.menu-lateral').removeClass('active');
					$('.nav-bar i.fa-xmark').toggleClass('fa-xmark fa-bars-staggered');

					$('html,body').animate({scrollTop: $(link).offset().top -50}, 1500)




				}
			}
		});
});

