;(function ( $, window, document, undefined ) {
 

	$.fn.simpleDateSelect = function(options) {

		var pluginName = 'defaultPluginName',
			settings = $.extend({
            // These are the defaults.
            options: ["month","day","year"],
            backgroundColor: "white"
        }, options );

		return this.each(function() {
			var input = $( this );
	        input.wrap("<div class='simpleDateSelect'/>");
            var container = input.parent();

	        $.each(settings.options, function(i, val){
	        	container.append("<select name='" + val + "' />");
	        });
	    });

        function setupSelect(type){
            
        }

        function setupMonthSelect(){
            var limit = 12;
        }
        function setupDaySelect(){
            var limit = 30;
        }
        function setupYearSelect(){
            var limit = 4;
        }

	};
 
}( jQuery, window, document ));