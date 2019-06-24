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
		}, 200);
  	});

  	$('#popup-link').click(function(e){
		e.preventDefault();
		$('#scan-popup').fadeOut();
      	var self = document.getElementById('popup-link');
      	setTimeout(function() {
          	window.location.href = self.href;
      	}, 600);
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

  	/*employee time chart*/
  	var cvEmTimeChart = $('#cv-emtime-chart');
    cvEmTimeChart = new Chart(cvEmTimeChart, {
	    type: 'line',
	    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        
        datasets: [{
        	label: 'hours',
            data: [82, 100, 111, 92, 127, 120, 138, 149],
            backgroundColor: 'rgba(58, 150, 253, 0.13)',
            borderColor: '#3a96fd',
            borderWidth: 2
        }, {
        	label: 'hours',
            data: [62, 80, 91, 72, 107, 100, 118, 129],
            backgroundColor: 'rgba(37,195,224, 0.13)',
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
	                tension: 0 // disables bezier curves
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


	Chart.plugins.register({
	   afterDatasetsDraw: function(chart, ease) {
	      var barLabels = chart.options.barLabels;
	      if (!barLabels) return;
	      var ctx = chart.ctx;
	      chart.data.datasets.forEach(function(dataset, index) {
	         var meta = chart.getDatasetMeta(index);
	         if (!meta.hidden) {
	            meta.data.forEach(function(segment, index) {
	               var model = segment._model,
	                   position = segment.tooltipPosition(),
	                   x = 17.5,
	                   y = position.y - 20,
	                   height = model.height,
	                   padding = height / 4;
	               ctx.save();
	               ctx.textBaseline = 'middle';
	               ctx.font = 12 + 'px Arial';
	               ctx.fillStyle = '#eee'; //first label's font color
	               var text1 = barLabels.first[index],
	                   text2 = barLabels.second[index],
	                   textWidth = ctx.measureText(text1).width + padding;
	               ctx.fillText(text1, x + padding, y);
	               ctx.fillStyle = '#fff'; //second label's font color
	               ctx.fillText(text2, x + padding + textWidth, y);
	               ctx.restore();
	            });
	         }
	      });
	   }
	});
  	var cvWorkingPercent = $('#cv-work-percent');
    cvWorkingPercent = new Chart(cvWorkingPercent, {
	    type: 'horizontalBar',
	    data: {
	    	labels: ['', '', '',  ''],
	        datasets: [{
	            data: [ 25, 12.5, 12.5,20],
	            backgroundColor: [ '#4DD0ED' ,'#4DD0ED', '#4DD0ED','#4DD0ED'],
	            borderColor: '#50e3c2',
	            borderWidth: 0
	        }]
    	},
    	options: {
	    	legend: {
	    		display: false
	    	},
	    	scales: {
		      	xAxes: [{
			        display: true,
			        labelString: " ",
			        gridLines: {
			          	color: "rgba(255,255,255,0.1)"
			        },
			        ticks: {
			        	display: false,
			        	max: 100
			        }

		      	}],
		      	yAxes: [{
			        display: true,
			        barPercentage: 0.3,
			        gridLines: {
			          	color: "rgba(255,255,255,0.1)"
			        },
			        ticks: {
		                display: false,
		                max: 100
		            }
		      	}]
		    },
		    barLabels: {
		      	first: ['Designing', 'Meeting', 'Brainstorming', 'Iteration', 'Presentation'],
		        second: ['(14%)', '(13%)', '(12%)', '(10%)', '(30%)']
	      	}
	    },
  	});


});