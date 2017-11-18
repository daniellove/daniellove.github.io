$OTLEvideoModalFadeSpeed = 350

$OTLEwin = $(document).find('iframe')[0]
$OTLEwin = $OTLEwin.contentDocument || $OTLEwin.contentWindow.document

$($OTLEwin).ready(function(){
	setUpVideoModal()

	$($OTLEwin).on('click', '.OTLEmodalButton', function() {
		var slideshow = $('.OTLEmodal[modal="'+$(this).attr('activateModal')+'"]')
		var i = +slideshow.attr('showing')
		removeSlide(slideshow.find('.slide')[i], 1)
		i = +$(this).attr('bRef')
		slideshow.attr('showing', i)
		addSlide(slideshow.find('.slide')[i], 1)
	})

	$('.navLeft').on('click', videoModalNavLeft)
	$('.navRight').on('click', videoModalNavRight)
	// $('.videoModal').on('swiperight', videoModalNavLeft)
	// $('.videoModal').on('swipeleft', videoModalNavRight)
})

function setUpVideoModal() {
	$($OTLEwin).find('.videoModalButtons').each(function() {
		var videos = $(this).find('.OTLEmodalButton').length
		if (videos>1) {
			$(this).find('.OTLEmodalButton').each(function(bRef){
				$(this).attr('bRef', bRef)
			})
			
		}
	})
	$('.videoModal').each(function() {
		var videos = $(this).find('iframe').length

		if (videos>1) {
			$(this).find('iframe').wrap('<div class="slide"></div>')
			var slides = $(this).find('.slide')
			slides.each(function(i) {
				$(this).hide()
				// $(this).append('<p class="slideRef">'+videoModalRefText+'</p>')
				// var thisRef = $(this).find('.slideRef')
				// var thisRefText = $(this).find('.slideRef').text()
				// 	.replace('[current]', (i+1))
				// 	.replace('[max]', (slides.length))
				// thisRef.text(thisRefText)
			})
			var firstItem = 0
			var lastItem = slides.length - 1
			$(slides[firstItem]).show();
			$(this).attr({
				showing: firstItem,
				max: lastItem
			})
		}
		var container = $(this).closest('.OTLEmodalCurtains')
		var closeVideoModal = true
		container.on('click', '.videoModalNav', function() {
			closeVideoModal = false
			setTimeout(function() {
				closeVideoModal = true
			}, 100)
		})
		container.on('click', function() {
			if (closeVideoModal) {
				var slideshow = container.find('.videoModal')
				var i = +slideshow.attr('showing')
				var video = slideshow.find('iframe')[i]
				$(video).attr('src', $(video).attr('src'))
			}
		})

		container.append([
			'<div class="videoModalNav holdOTLEmodal navLeft"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
			'<div class="videoModalNav holdOTLEmodal navRight"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>'
		].join(''))

		positionVideoModalNav(container)
	});
}

function videoModalNavLeft() {
	var container = $(this).closest('.OTLEmodalCurtains')
	var slideshow = container.find('.videoModal')
	var i = +slideshow.attr('showing')
	var max = +slideshow.attr('max')
	removeSlide(slideshow.find('.slide')[i])
	if (i===0) {i = max}
	else {i--}
	slideshow.attr('showing', i)
	addSlide(slideshow.find('.slide')[i])
}
function videoModalNavRight() {
	var container = $(this).closest('.OTLEmodalCurtains')
	var slideshow = container.find('.videoModal')
	var i = +slideshow.attr('showing')
	var max = +slideshow.attr('max')
	removeSlide(slideshow.find('.slide')[i])
	if (i===max) {i = 0}
	else {i++}
	slideshow.attr('showing', i)
	addSlide(slideshow.find('.slide')[i])
}

function removeSlide(slide) {
	$(slide)
		.addClass('fadingOut')
		.stop().fadeOut($OTLEvideoModalFadeSpeed)
		.promise().done(function() {
			$(slide).removeClass('fadingOut')
		})
	var video = $(slide).find('iframe')
	video.attr('src', video.attr('src'))
}
function addSlide(slide) {
	$(slide)
		.addClass('fadingIn')
		.stop().fadeIn($OTLEvideoModalFadeSpeed)
		.promise().done(function() {
			$(slide).removeClass('fadingIn')
		})
}

function positionVideoModalNav(container) {
// Sets the height of the multi-column icons
	container.css({
		'display': 'initial',
		'opacity': 0
	})

	setTimeout(function() {
		var modW = container.find('.videoModal').outerWidth(false)/2
		var modH = container.find('.videoModal').outerHeight(false)/2
		container.find('.navLeft').css({
			'margin-left': -modW,
			'height': modH
		})
		container.find('.navRight').css({
			'margin-left': modW,
			'height': modH
		})
		container.find('.videoModalNav i').css({
			'line-height': modH+'px'
		})
	}, 500)
	
	setTimeout(function() {
		container.css({
			'display': 'none',
			'opacity': 'initial'
		})
	}, 600)
}