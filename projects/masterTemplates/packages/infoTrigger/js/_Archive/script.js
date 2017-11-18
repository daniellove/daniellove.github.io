$(function(){
	if (isTouchDevice()) {
		$('.infoTrigger').on('click', function() {
			var showNew = false
			if (!$(this).hasClass('infoTriggerTouch')) {
				showNew = true
			}

			$('.infoTriggerTouch').removeClass('infoTriggerTouch');
			$('.infoTrigger_showing').remove()

			if (showNew) {
				var newEle = createInfotriggerEle($(this));
				$(this)
					.addClass('infoTriggerTouch')
					.closest('div').append(newEle.ele)
				$('.infoTrigger_showing')
					.css('top', newEle.top)
					.stop().fadeIn('fast')
			}
		});
	} else {
		$('.infoTrigger').hover(function() {
			var newEle = createInfotriggerEle($(this));
			$(this).closest('div').append(newEle.ele)
			$('.infoTrigger_showing')
				.css('top', newEle.top)
				.stop().fadeIn('fast')
		}, function() {
			$('.infoTrigger_showing').remove()
		});
	}
	function createInfotriggerEle(thisEle) {
		var content = thisEle.attr('info');
		var thisPos = thisEle.offset();
		var parentPos = thisEle.closest('div').offset();
		var newOffset = thisPos.top - parentPos.top;
		var newEle = {
			'ele': '<div class="infoTrigger_showing col-xs-4"><p>'+content+'</p></div>',
			'top': newOffset
		}
		return newEle
	}
});