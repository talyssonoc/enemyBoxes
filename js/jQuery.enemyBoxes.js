(function($) {
	$.fn.enemyBoxes = function() {
		var selector = this.selector;

		return this.each(function() {

			$(this).on("click", function() {
				var element = this;

				if($(this).is(":checked")) {
					$(selector).not(element).attr("checked", false);
				}

			});

		});
	};
})(jQuery);