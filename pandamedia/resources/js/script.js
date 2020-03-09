$(document).ready(function(){
  
  var map = new GMaps({
  div: '.map',
  lat: 42.88027727915553,
  lng: 74.62555761581335,
});

map.addMarker({
  lat: 42.88027727915553,
  lng: 74.62555761581335,
  title: 'Panda Media',
  infoWindow: {
    content: '<p>Panda Media></p>'
  }
});
  
$('#menu-btn').click(function(){  
   $('nav').slideToggle(400); 
   if ($(this).hasClass('not-active')) {
    $(this).addClass('is-active').removeClass('not-active');
   }
  
  else{
    setTimeout(function(){
     $('.is-active').addClass('not-active').removeClass('is-active')
    },300)   
   }  
  });
  
  
  
  /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

	$(".section-team").waypoint(function(direction){	
		if (direction == "down") {
			$(".btn-up").addClass("btn-up-active")
		} else {
			$(".btn-up").removeClass("btn-up-active");
		}
	}, {
		offset: "60px"
	});

	$(".section-team").waypoint(function(direction){	
		if (direction == "down") {
			$(".top-header").addClass("header-active")
		} else {
			$(".top-header").removeClass("header-active");
		}
	}, {
		offset: "60px"
	});

  /* Animated */
  
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    }); 
  
    $('.flex-item-block').waypoint(function(direction) {
          $('.flex-item-block').addClass('animated fadeInUp');
      }, {
        offset: '50%'
    });   
  
  
	$(".section-team").waypoint(function(direction){	
		if (direction == "down") {
			$(".fade").addClass("animated fadeInUp")
		} else {
			$(".fade").removeClass("animated fadeInUp");
		}
	}, {
		offset: "60px"
	});
  
  
  
  
  
})

