/*
Responsive Revealable
Author: marcoarib
License: http://codecanyon.net/licenses/standard
*/

(function($, window, document, undefined) {
	
    $.revealable = function(element, options) {

        var defaults = {
			duration		: 200,
			delay			: 0,
			exclusive		: true,
			onOpen			: function(){},
			onClose			: function(){}
        }

        var plugin = this;

        var $element = $(element),
            element = element,
			items = $element.children(".revealable-item");

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            startRevealable();
			toggle();
        }
		
		var startRevealable = function(){
			$(items).each(function(){
				if($(this).hasClass("active")){
					$(this).children(".revealable-content").show(0);
				}
			});
		}
		
		var toggle = function(){
			$(items).find(".revealable-header").bind("click", function(e){
				if(!$(this).parent(items).hasClass("active")){
					plugin.open($(this).parent(items).index());
				}
				else{
					plugin.close($(this).parent(items).index());
				}
			});
		}
		 
		plugin.open = function(index){
			if(!$(items[index]).hasClass("active")){
				if(plugin.settings.exclusive){
					$(items).find(".revealable-content").slideUp(plugin.settings.duration);
					$(items).removeClass("active");
				}
				$(items[index]).children(".revealable-content").delay(plugin.settings.delay).slideDown(plugin.settings.duration, function(){
					$(items[index]).addClass("active");
				});
				plugin.callback("onOpen");
			}
		}
		
		plugin.setDuration = function(duration){
			plugin.settings.duration = duration;
		}
		
		plugin.setExclusive = function(exclusive){
			plugin.settings.exclusive = exclusive;
		}
		
		plugin.setDelay = function(delay){
			plugin.settings.delay = delay;
		} 
		
		plugin.close = function(index){
			$(items[index]).children(".revealable-content").delay(plugin.settings.delay).slideUp(plugin.settings.duration, function(){
				$(items[index]).removeClass("active");
			});
			plugin.callback("onClose");
		}
		
		plugin.closeAll = function(){
			$(items).find(".revealable-content").slideUp(plugin.settings.duration);
			$(items).removeClass("active");
		}
		
		plugin.callback = function(func) {
			if (options[func] !== undefined) {
				options[func].call(element);
			}
		}

        plugin.init();

    }

    $.fn.revealable = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('revealable')) {
                var plugin = new $.revealable(this, options);
                $(this).data('revealable', plugin);
            }
        });
    }

})( jQuery, window , document );