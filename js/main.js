$( document ).ready(function() {

	$('#scan-popup').hide();
    
	$('#navbar-btn-toggle').click(function(e) {
		e.stopPropagation();
  		$(this).toggleClass('navbar-btn-active');
  		$('#side-nav').toggleClass('active');
  	});

  	$('#side-nav').click(function(e){
    	e.stopPropagation();
	});

	$('body,html').click(function(e){
	   $('#side-nav').removeClass('active');
	   $('#navbar-btn-toggle').removeClass('navbar-btn-active');
	});

	$('#scan-btn').click(function(e) {
		setTimeout(function(){
			$('#scan-popup').fadeIn();
		}, 300);
  	});

  	/*nice select*/
  	 $('select').niceSelect();

  	$(function () {
        $('#datetimepicker1').datetimepicker({
        	format: 'L'
        });
        $('#datetimepicker2').datetimepicker({
        	format: 'L'
        });

    });


});