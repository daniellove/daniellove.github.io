$(function(){
	$('.infoTrigger').closest('row').css('position: relative;')
	if (isTouchDevice()) {
		$('.infoTrigger').on('click', function() {
			var showNew = false
			if (!$(this).hasClass('infoTriggerTouch')) {
				showNew = true
			}

			$('.infoTriggerTouch').removeClass('infoTriggerTouch');
			$('.infoTrigger_content').remove()

			if (showNew) {
				var newEle = createInfotriggerEle($(this));
				appendAndShowInfo($(this), newEle)
				$(this).addClass('infoTriggerTouch')
			}
		});
	} else {
		$('.infoTrigger').hover(function() {
			var newEle = createInfotriggerEle($(this));
			appendAndShowInfo($(this), newEle)
		}, function() {
			$('.infoTrigger_content').remove()
		});
	}
	function createInfotriggerEle(thisEle) {
		var content = thisEle.attr('info');
		var thisPos = thisEle.offset();
		var rowPos = thisEle.closest('.row').offset();
		var anchor = {
			'width' : thisEle.width(),
			'height' : thisEle.height(),
			'top' : thisPos.top - rowPos.top,
			'left' : thisPos.left - rowPos.left
		}

		anchor.end = anchor.left + anchor.width
		var newEle = {
			'ele': '<div class="infoTrigger_content col-sm-4 col-xs-6"><p>'+content+'</p></div>',
			'anchor': anchor
		}
		return newEle
	}
	function appendAndShowInfo(thisEle, newEle) {
		thisEle.closest('.row').append(newEle.ele)
		var showing = $('.infoTrigger_content')
		var showingDim = showing[0].getBoundingClientRect()
		showing.width(showingDim.width.toFixed(5))

		showing.addClass('positioning')
		
		var showPos = showing.offset();
		var rowPos = showing.closest('.row').offset();
		var showLeft = showPos.left - rowPos.left;
		// if (showLeft>=newEle.anchor.end&&!isTouchDevice()) {
		if (isTouchDevice()) {
			var eleLeft = 'initial'
			var eleRight = 'initial'
			var rowDim = showing.closest('.row')[0].getBoundingClientRect()	
			if (newEle.anchor.left < (showingDim.width.toFixed(5)/2)) {
				showing.addClass('droppedDownCut')
				eleLeft = 0
			} else if (rowDim.width - newEle.anchor.width < showPos.left) {
				showing.addClass('droppedDownCut')
				eleRight = 0
			} else {
				showing.addClass('droppedDown')
				eleLeft = newEle.anchor.left + (newEle.anchor.width/2)
			}
			showing.css({
				'left': eleLeft,
				'right': eleRight,
				'top': newEle.anchor.top + newEle.anchor.height
			})
		} else {
			console.log(showPos.left, newEle.anchor.left)
			if (showPos.left < newEle.anchor.left) {
				showing.addClass('droppedDown')
				showing.css({
					'left': eleLeft = newEle.anchor.left + (newEle.anchor.width/2),
					'right': 'initial',
					'top': newEle.anchor.top + newEle.anchor.height
				})
			} else {
				showing.css('top', newEle.anchor.top)
			}
		}

		showing.addClass('showingInfo')
		showing.stop().fadeIn('fast')
	}
});