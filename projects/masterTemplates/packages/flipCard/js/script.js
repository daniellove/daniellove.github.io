$(document).ready(function(){
	$('.flipCard').each(function() {
		var front = $(this).find('.front').children().outerHeight()
		var back = $(this).find('.back').children().outerHeight()
		$(this).css('padding-bottom', Math.max(front, back))
	})

	$('.flipCard').on('click', function(){
		$(this).toggleClass('flipped');
	})
});