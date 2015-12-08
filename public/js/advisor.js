var navTop = $('.side-nav-beta').offset().top;
var navHeight = $('.side-nav-beta').height();

var contentTop1 = $('#advisorInline1').offset().top;
var theTop1 = contentTop1 - navTop - navHeight;
//$('#advisorInline1--box').css('top', theTop+'px');

var contentTop2 = $('#advisorInline2').offset().top;
var theTop2 = contentTop2 - navTop - navHeight;
//$('#advisorInline2--box').css('top', theTop+'px');

$(document).ready(function(){
	$('#advisorInline1Button').click(function() {	 
		$('#advisorInline1--box').css('top', theTop1+'px');   

		$('#advisorInline1--box').slideToggle('show');
		$('#advisorInline2--box').slideUp();
	});
	$('#advisorInline2Button').click(function() {
		$('#advisorInline2--box').css('top', theTop2+'px');  

		$('#advisorInline1--box').slideUp();
		$('#advisorInline2--box').slideToggle('show');
	});

	$('#advisor1').click(function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(".tooltip.1").remove();
		} else {
			$(this).attr('data-click-state', 1)
			$("#advisor1").append('<div class="tooltip 1"><p>This is a tooltip. It is typically used to explain something to a user without taking up space on the page.</p></div>');
			var tooltipHeight = $('.tooltip').height();
			var tooltipHeight = tooltipHeight - tooltipHeight * 2 - 32;
			$('.tooltip.1').css('top', tooltipHeight);
			//alert(tooltipHeight);
		}
	});

	$('#advisor2').click(function(){
		if($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0)
			$(".tooltip.2").remove();
		} else {
			$(this).attr('data-click-state', 1)
			$("#advisor2").append('<div class="tooltip 2"><p>This is a tooltip. It is typically used to explain something to a user without taking up space on the page.</p></div>');
			var tooltipHeight = $('.tooltip').height();
			var tooltipHeight = tooltipHeight - tooltipHeight * 2 - 32;
			$('.tooltip.2').css('top', tooltipHeight);
			//alert(tooltipHeight);
		}
	});
});