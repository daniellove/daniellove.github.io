$(function(){
	$('.clickTrigger').on('click', function() {
		var showNew = false
		if (!$(this).hasClass('clickTriggerShow')) {
			showNew = true
		}

		$('.clickTriggerShow').removeClass('clickTriggerShow');
		$('.clickTrigger_showing').remove()

		if (showNew) {
			var content = $(this).attr('info');
			var pos = $(this).attr('pos')
			var newEle = '<div class="clickTrigger_showing clickTrigger_'+pos+'" col-md-4 col-xs-6><p>'+content+'</p></div>'
			$(this)
				.addClass('clickTriggerShow')
				.append(newEle)
			$('.clickTrigger_showing').stop().fadeIn('fast')
		}
	})
});