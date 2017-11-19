var trigger = 'click'
if (touchDevice()) {
	trigger = 'touchstart'
}
function touchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

$(function() {
	if (touchDevice()) {
		$('.navItem').addClass('touch')
	}
	$('#mobileMenu').on(trigger, function() {
		$('#navItems').slideToggle('fast').css('display', 'inline-block')
	})
	// if ($(window).width() < 568) {
		$('#navItems').on(trigger, function() {
			if (touchDevice()) $('#navItems').fadeOut(100)
		})
	// }
})

var scrollSpeed = 400
function winScroll(ele) {
	var top = $(ele.attr('rel')).offset().top - $('nav').height()
	$('html, body').animate({scrollTop: top}, scrollSpeed);
}

$(function() {
	if (touchDevice()) {
		$('span[touchSwap]').each(function() {
			$(this).text($(this).attr('touchSwap'))
		})
	}
})

$(function() {
	if (!touchDevice()) {
		var timeDelay = 4500
		var timer;
		runCarousel()
		function runCarousel() {
			timer = setTimeout(function() {
				shiftRight()
			}, timeDelay)
		}
		function resetTimer() {
			clearTimeout(timer)
			runCarousel()
		}
	}
	$(document).on(trigger, '.rightThumb', shiftRight)
	$(document).on(trigger, '.leftThumb', shiftLeft)

	$(document).on(trigger, '.showing', function() {
		window.open($(this).attr('location'), '_blank')
	})

	
	function shiftRight() {
		var ele = getEle()
		var newEle = $('.rightHide')[0]
		$(ele.left).addClass('leftHide').removeClass('leftThumb')
		$(ele.mid).addClass('leftThumb').removeClass('showing')
		$(ele.right).addClass('showing').removeClass('rightThumb')
		$(newEle).addClass('rightThumb').removeClass('rightHide')
		var xfer = $('.leftHide')[0]
		$(xfer)
			.addClass('rightHide').removeClass('leftHide')
			.appendTo($(xfer).parent())
		resetTimer()
	}

	function shiftLeft() {
		var ele = getEle()
		var newEle = $('.leftHide')[$('.leftHide').length - 1]
		$(ele.left).addClass('showing').removeClass('leftThumb')
		$(ele.mid).addClass('rightThumb').removeClass('showing')
		$(ele.right).addClass('rightHide').removeClass('rightThumb')
		$(newEle).addClass('leftThumb').removeClass('leftHide')
		var xfer = $('.rightHide')[$('.rightHide').length - 1]
		$(xfer)
			.addClass('leftHide').removeClass('rightHide')
			.prependTo($(xfer).parent())
		resetTimer()
	}
	function getEle() {
		return {
			left: $('.leftThumb'),
			mid: $('.showing'),
			right: $('.rightThumb')
		}
	}
})