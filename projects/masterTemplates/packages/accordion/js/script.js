$(function() {
	var accordionSlideSpeed = 350;
	$('.accordion .panel-heading').on('click', function() {
		var container = $(this).parent();
		container.children('.panel-body').stop().slideToggle(accordionSlideSpeed);
		container.find('.fa-plus').toggle();
	})
});