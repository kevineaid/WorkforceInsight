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


    /*chart*/
    /*time chart*/
    var cvTimeChart = $('#cv-time-chart');
    cvTimeChart = new Chart(cvTimeChart, {
	    type: 'line',
	    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        
        datasets: [{
        	label: 'hours',
            data: [82, 100, 111, 92, 127, 120, 138, 149],
            backgroundColor: 'rgba(37,195,224, 0.63)',
            borderColor: '#50e3c2',
            borderWidth: 3
        }]
    	},
    	options: {
	    	legend: {
	    		display: false
	    	},
	        elements: {
	            line: {
	                tension: 0.4 // disables bezier curves
	            }
	        },
	        scales: {
		      	xAxes: [{
			        display: true,
			        labelString: " ",
			        gridLines: {
			          	color: "rgba(255,255,255,0.1)"
			        }
		      	}],
		      	yAxes: [{
			        display: true,
			        gridLines: {
			          	color: "rgba(255,255,255,0.1)"
			        },
			        ticks: {
		                display: false
		            }
		      	}]
		    }
	    },
  	});

  	/*category chart*/
    var cvCatChart = $('#cv-cat-chart');
    cvCatChart = new Chart(cvCatChart, {
	    type: 'pie',
	    data: {
	    	labels: ['Digital Marketing', 'Website Design', 'Company Profile',  'Business Card'],
	        datasets: [{
	        	label: 'hours',
	            data: [ 25, 12.5, 12.5,50],
	            backgroundColor: [ '#ffffff' ,'#00fff9', '#49bdca','#1e5f6f'],
	            borderColor: '#50e3c2',
	            borderWidth: 0
	        }]
    	},
    	options: {
	    	legend: {
	    		display: false
	    	}
	    },
  	});


});