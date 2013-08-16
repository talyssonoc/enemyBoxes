(function($) {
	$.fn.enemyBoxes = function() {
		var selector = this.selector; //Get the selector used

		return this.each(function() {

			$(this).on('change', function() { //Creates a change listener on every element that matches the selector
				var element = this;

				//If a matching element changes, then it unchecks all its enemy boxes
				if($(this).is(':checked')) {
					$(selector).not(element).attr('checked', false);
				}

			});

		});
	};
})(jQuery);
