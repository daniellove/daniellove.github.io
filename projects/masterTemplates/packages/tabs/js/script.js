$(function() {
	$('.tabs').each(function() {
		var firstTab = $(this).find('.nav li')[0];
		var firstContent = $(this).find('.tab-pane')[0];
		$(firstTab).addClass('active');
		$(firstContent).addClass('active');
	});

	$('.tabs .nav li').on('click', function() {
		var container = $(this).closest('.tabs');
		var activeTab = container.find('li.active');
		if ($(this)[0]!=activeTab[0]) {
			activeTab.removeClass('active');
			$(this).addClass('active');

			var tabIndex = container.find('.nav li').index($(this));
			var tabContent = container.find('.tab-pane')[tabIndex];

			container.find('.tab-pane.active').removeClass('active').stop().hide();
			$(tabContent).addClass('active').show();
		}
	});
});