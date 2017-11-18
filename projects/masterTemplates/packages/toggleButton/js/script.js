$(function() {
	var toggleButtonSlideSpeed = 350;
	$('.toggleButton').on('click', function() {
		var container = $(this).parent()
		var buttons = container.find('.toggleButton')
		var array = [];
		for (var i = buttons.length - 1; i >= 0; i--) {
			array[i] = buttons[i]
		}
		var index = array.indexOf($(this)[0]);
		var relContent = container.find('.toggleInfo.well')[index]
		if (!$(relContent).hasClass('showing')) {
			var allWells = container.find('.toggleInfo.well')
			allWells.stop().slideUp(toggleButtonSlideSpeed)
			allWells.removeClass('showing')
		}
		$(relContent).stop().slideToggle(toggleButtonSlideSpeed);
		$(relContent).addClass('showing')
	});
});