$(function() {
	if (isTouchDevice()) {
		$('.wordHighlighter span').on('click', function() {
			var container = $(this).closest('.wordHighlighter')
			var newColour = true
			if ($(this).hasClass('active')) {
				newColour = false
			}
			container.find('.active')
				.css('background-color', 'inherit')
				.removeClass('active')
			if (newColour) {var selector = $(this).attr('colour')
				var colour = $(this).css('border-color')
				container.find('span[colour="'+selector+'"]')
					.css('background-color', colour)
					.addClass('active')
			}
		})
	} else {
		$('.wordHighlighter span').hover(function() {
			var container = $(this).closest('.wordHighlighter')
			var selector = $(this).attr('colour')
			var colour = $(this).css('border-color')
			container.find('span[colour="'+selector+'"]').css('background-color', colour)
		}, function() {
			var container = $(this).closest('.wordHighlighter')
			container.find('span').css('background-color', 'inherit')
		})
	}
});