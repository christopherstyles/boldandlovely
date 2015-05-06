$(function(){
  
  /* -----------------------------------------------------------------
   Fade in/out the contact email address when you hover over "contact" 
  --------------------------------------------------------------------*/
  $('#categories li.contact a').hover(function(){
    $(this).find('span.email').fadeIn();
  }, function(){
    $(this).find('span.email').fadeOut();
  });
  
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 800,
			timeout: 0,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1,
			pager: $('#pager')
		},
		onPagerEvent: function(idx, slide) {
      hasSlid = 1;
      window.location.hash = "photo-"+ (parseInt(idx, 10) + 1) + "";
      return false;
    },
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
			
			// Set up our categories
			$('#categories').find('li').click(function(){
			  var idx = $(this).index();
			  if ($('#pager a:eq(' + idx + ')').length) {
			    $('#pager a:eq(' + idx + ')').click();
			  }
		  });
		  
		  // Check the location hash to see if we're going to a specific page
		  var hash = window.location.hash || '#home';
		  if (hash !== "#home") {
		    setTimeout(function(){
  		    $("a[href='"+ hash +"']").click();
  		  }, 800);
		  }		  
		  
		}
	});
	
	/* -----------------------------------------------------------------
    Update the images when the browser resizes into certain ranges.
  --------------------------------------------------------------------*/
  $(window).resize(function(){
    // iphone portrait
    if (Response.band(0, 320)) {
      $("div[data-href='" + "#home" + "']").css('backgroundImage', 'url(images/boldandlovely-320w.jpg)');
    } else {
      // set us back to the defaults
      $("div[data-href='" + "#home" + "']").css('backgroundImage', 'url(images/boldandlovely.jpg)');
    }
  });
  $(window).trigger('resize');
	
});