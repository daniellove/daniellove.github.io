$(function() {
	$('.accordionContent').stop().slideUp(0)
	var hideSpeed = 600
	var showSpeed = 800
	var timeOut = null
	$('.accordionTab').on('click', function() {
		var activator = $(this).attr('activate')
		$('.accordionTab.Active').removeClass('Active')
		if (timeOut) {clearTimeout(timeOut)}
		$('.accordionContent:not(div[listenFor="'+activator+'"])').stop().slideUp(hideSpeed)
		if (timeOut) {var toSpeed=hideSpeed} else {var toSpeed=0}
		$(this).addClass('Active')
		timeOut = setTimeout(function() {
			$('.accordionContent[listenFor="'+activator+'"]').stop().slideDown(showSpeed)
		}, toSpeed)
	})
})