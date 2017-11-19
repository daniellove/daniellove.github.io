$(document).ready(function(){

	setUpSlideshow()
	
	$('.navLeft').on('click', function() {
		var slideshow = $(this).closest('.slideshow');
		prevSlide(slideshow)
		var audioControls = slideshow.attr('audioControls')
		stopAudio(audioControls)
	})

	$('.navRight').on('click', function() {
		var slideshow = $(this).closest('.slideshow');
		nextSlide(slideshow)
		var audioControls = slideshow.attr('audioControls')
		stopAudio(audioControls)
	})

	var slideAudio = undefined;
	$(document).on('click', '.playSlides', function() {
		var audioControls = $(this).closest('.controls').attr('slideshow');
		if (slideAudio) {
			slideAudio.play();
		} else {
			slideAudio = playSlideAudio(audioControls);
		}
		$(this).removeClass('playSlides');
	});

	$(document).on('click', '.pauseSlides:not(.playSlides)', function() {
		slideAudio.pause();
		$(this).addClass('playSlides');
	});

	$(document).on('click', '.rewindSlide', function() {
		var audioControls = $(this).closest('.controls').attr('slideshow');
		rewindSlideAudio(audioControls)
	});
	
	var slideAudioBank = $('.slide[audio]')
	for (var i = 0; i < slideAudioBank.length; i++) {
		var thisThing = $(slideAudioBank[i])
		var thisTrack = thisThing.attr('audio')
		var tempAudio = new Audio
		tempAudio.src = 'audio/' + thisTrack + '.mp3'
		var audioTriggerID = 'slideAudio_'+i
		thisThing.attr('audio', audioTriggerID)
		eval(audioTriggerID + ' = tempAudio')
	}

	function playSlideAudio(audioControls) {
		var slideshow = $(document.body).find('.slideshow[audioControls="'+audioControls+'"]');
		var slides = slideshow.children('.slide');
		var showing = slideshow.attr('showing');
		var slideAudio = eval($(slides[showing]).attr('audio'));
		slideAudio.play();

		slideAudio.addEventListener('ended', function() {
			stopAudio(audioControls)
		});
		return slideAudio
	}

	function stopAudio(audioControls) {
		if (slideAudio) {
			slideAudio.pause();
			slideAudio.currentTime = 0;
			slideAudio = undefined;
		}
		$(actionButton(audioControls)).addClass('playSlides');
	}

	function rewindSlideAudio(audioControls) {
		if (!$(actionButton(audioControls)).hasClass('playSlides')) {
			var restart = true;
		}
		stopAudio(audioControls)
		if (restart) {
			slideAudio = playSlideAudio(audioControls)
		}
	}

	function actionButton(audioControls) {
		return $('.controls[slideshow="'+audioControls+'"]').find('.pauseSlides')
	}

	$('.slideshow').each(function() {
		var slides = $(this).find('.slide')
		slides.each(function(i) {
			$(this).hide()
			var thisRef = $(this).find('.slideRef')
			var thisRefText = $(this).find('.slideRef').text()
				.replace('[current]', (i+1))
				.replace('[max]', (slides.length))
			thisRef.text(thisRefText)
		})
		var firstItem = 0
		var lastItem = slides.length - 1
		$(slides[firstItem]).show();
		$(this).attr({
			showing: firstItem,
			max: lastItem
		})
	});

	function prevSlide(slideshow) {
		var i = +slideshow.attr('showing')
		var max = +slideshow.attr('max')
		removeSlide(slideshow.find('.slide')[i])
		if (i===0) {
			i = max;
		} else {
			i--;
		}
		slideshow.attr('showing', i)
		addSlide(slideshow.find('.slide')[i])
	}

	function nextSlide(slideshow) {
		var i = +slideshow.attr('showing')
		var max = +slideshow.attr('max')
		removeSlide(slideshow.find('.slide')[i])
		if (i===max) {
			i = 0;
		} else {
			i++;
		}
		slideshow.attr('showing', i)
		addSlide(slideshow.find('.slide')[i])
	}
	
})

function removeSlide(slide) {
	$(slide)
		.addClass('fadingOut')
		.stop().fadeOut(350)
		.promise().done(function() {
			$(slide).removeClass('fadingOut')
		})
}
function addSlide(slide) {
	$(slide)
		.addClass('fadingIn')
		.stop().fadeIn(350)
		.promise().done(function() {
			$(slide).removeClass('fadingIn')
		})
}

function setUpSlideshow() {
	var	duplicateChecker = []
	$('.slideshow').each(function(counter) {
		var slideLink  = document.createElement('link');
		slideLink.rel  = 'stylesheet';
		slideLink.type = 'text/css';
		slideLink.href = 'interactives/slideshow/css/'+$(this).attr('slideCssFile')+'.css';
		if ($.inArray(slideLink.href, duplicateChecker)<0) {
			duplicateChecker.push(slideLink.href)
			document.head.appendChild(slideLink);
		}
	});
}