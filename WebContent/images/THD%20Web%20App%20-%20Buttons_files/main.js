$(document).ready(
		function() {
			(function($) {
			    var ost = 0;
			    $(window).scroll(function() {
			      var cOst = $(this).scrollTop();

			      if(cOst > 200 && cOst > ost) {
			         $('header').addClass('hideHeader').removeClass('default');
			         $('.app-body').addClass('hideHeader').removeClass('default');
			      }
			      else {
			         $('header').addClass('default').removeClass('hideHeader');
			         $('.app-body').addClass('default').removeClass('hideHeader');
			      }

			      ost = cOst;
			    });
			  })(jQuery);
});