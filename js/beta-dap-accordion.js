(function($){
$(document).ready(function(){

	var openClass = '-open';

	$('#beta-dap-menu-accordion li.active').addClass(openClass).children('ul').show();
		$('#beta-dap-menu-accordion li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass(openClass)) {
				element.removeClass(openClass);
				element.find('li').removeClass(openClass);
				element.find('ul').slideUp(200);
			}
			else {
				element.addClass(openClass);
				element.children('ul').slideDown(200);
				element.siblings('li').children('ul').slideUp(200);
				element.siblings('li').removeClass(openClass);
				element.siblings('li').find('li').removeClass(openClass);
				element.siblings('li').find('ul').slideUp(200);
			}
		});
	
	});
})(jQuery);
