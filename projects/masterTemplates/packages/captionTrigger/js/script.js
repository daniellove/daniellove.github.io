$(function(){
	$('.caption').each(function() {
		var width = $(this).siblings().width()
		var margin = $(this).siblings().css('padding-left')
		$(this).css({
			'margin-left': margin,
			'width': width
		})
	})
	if (isTouchDevice()) {
		$('.captionTrigger').on('click', function() {
			$(this).siblings('.caption').toggle()
		});
	} else {
		$('.captionTrigger').hover(function() {
			$(this).siblings('.caption').stop().slideDown('fast')
		}, function() {
			$(this).siblings('.caption').stop().slideUp('fast')
		});
	}
});