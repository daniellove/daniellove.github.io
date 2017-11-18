var OTLEinfoModalFadeSpeed = 150
$(function() {
	setTimeout(function() {
		$('.OTLEmodal.infoModal').each(function() {
			// Links viewer button icons to their related content
			$('.viewerButtons').find('i').each(function(i) {
				var container = $(this).closest('.OTLEmodal.infoModal')
				$(this).attr('activate', i)
				var relCont = $(container.find('.viewerItem')[i])
				relCont.attr('listenFor', i)
				relCont.addClass('infoHidden')
				relCont.css('display', 'none')
			})
			
			resetColIconHeight($(this))
			
			$(window).resize(function() {
				resetColIconHeight($(this))
			})
		})
	}, 500)


	$('.OTLEmodal.infoModal .viewerButtons').find('i').on('click', function() {
		var container = $(this).closest('.OTLEmodal.infoModal')
		container.find('.infoPlaceholder').hide()

		var item = $(this).attr('activate')
		var relCont = container.find('.viewerItem[listenFor="'+item+'"]')
		if (relCont.hasClass('infoHidden')) {
			container.find('.viewerItem')
				.stop().fadeOut(OTLEinfoModalFadeSpeed)
				.addClass('infoHidden')
			relCont
				.stop().fadeIn(OTLEinfoModalFadeSpeed)
				.removeClass('infoHidden')
		}
	})
})

function resetColIconHeight(thisModal) {
// Sets the height of the multi-column icons
	thisModal.closest('.OTLEmodalCurtains').css({
		'display': 'initial',
		'opacity': 0
	})
	
	var sets = []
	thisModal.find('.colIcon').each(function() {
		if (typeof $(this).attr('set') === 'undefined') {
			$(this).attr('set', 1)
		}
		var thisSet = $(this).attr('set')
		if ($.inArray(thisSet, sets)<0) {
			sets.push(thisSet)
		}
	})
	for (var i = sets.length - 1; i >= 0; i--) {
		var maxHeight = 0
		thisModal.find('.colIcon[set="'+sets[i]+'"]').each(function() {
			console.log($(this).height(), maxHeight)
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height()
			}
		})
		thisModal.find('.colIcon[set="'+sets[i]+'"]').height(maxHeight)
	}
	setTimeout(function() {
		thisModal.closest('.OTLEmodalCurtains').css({
			'display': 'none',
			'opacity': 'initial'
		})
	}, 500)
}