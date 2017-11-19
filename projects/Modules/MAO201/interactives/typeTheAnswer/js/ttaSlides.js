$(function() {
	setUpTTAslides()

	$('.ttaSlides .ttaBack').on('click', function() {
		ttaNav($(this).closest('.viewer'), $(this).closest('.typeTheAnswer').outerWidth())
	})
	$('.ttaSlides .ttaNext').on('click', function() {
		ttaNav($(this).closest('.viewer'), -$(this).closest('.typeTheAnswer').outerWidth())
	})
	$('.ttaSlides .ttaAccent').on('click', function() {
		ttaAddAccent($(this))
	})
	$('.ttaInputBox').on('keydown', function(thisThing) {
		if (thisThing.keyCode===13||thisThing.which===13) {
			thisThing.preventDefault()
			$(this).closest('.typeTheAnswer').find('.ttaCheck').click()
		}
	})
	$(document).on('click', '.ttaShow', function() {
		ttaShow($(this).closest('.typeTheAnswer'))
	});
})

function ttaHideResetButton(container) {
	container.find('.ttaReset').addClass('ttaHidden')
}

function ttaHideNextButton(container) {
	container.find('.ttaNext').addClass('ttaHidden')
}

function ttaShowNextButton(container) {
	container.find('.ttaNext').removeClass('ttaHidden')
}

function ttaShowResetButton(container) {
	container.find('.ttaReset').removeClass('ttaHidden')
}

function ttaShowSlideOptions(container) {
	container.find('.ttaCheck').addClass('ttaHidden')
	container.find('.ttaInputBox').prop('disabled',true)
	container.find('.ttaButtonBlock').append('<div class="language-button ttaOption ttaReset">Reset</div><div class="language-button ttaOption ttaShow">Show answer</div>')
}

function ttaResetSlides(container) {
	container.find('.ttaReset').removeClass('ttaHidden')
	container.find('.ttaAccentContainer').removeClass('ttaHidden')
	container.find('.ttaInputBox').removeClass('ttaInputShowingAnswer')
	container.find('.ttaOption').remove()
	container.find('.ttaShowAnswer').remove()
	ttaHideNextButton(container)
}

function ttaShow(container) {
	container.find('.ttaAccentContainer').addClass('ttaHidden')
	container.find('.ttaInputBox').addClass('ttaInputShowingAnswer')
	container.find('.ttaReset').removeClass('ttaHidden')
	container.find('.ttaOption').remove()
	var correctAnswer = container.find('.ttaInputBox').attr('answer').split('||')
	for (var i = correctAnswer.length - 1; i >= 0; i--) {
		$('<div class="ttaShowAnswer">'+correctAnswer[i]+'</div>').insertAfter(container.find('.ttaOutcome'))	
	}
	ttaShowNextButton(container)
}

function ttaAddAccent(thisThing) {
	var container = thisThing.closest('.typeTheAnswer')
	var thisAccent = thisThing.text()
	var thisInput = container.find('.ttaInputBox')
	var inputValue = thisInput.val()
	container.find('.ttaInputBox').val(inputValue+thisAccent)
	thisInput.focus()
	container.find('.ttaCheck').removeClass('ttaHidden')
}

function ttaNav(viewer, slideWidth) {
	var currentPos = +$(viewer).css('margin-left').replace('px','') || 0
	$(viewer).animate({'margin-left':(currentPos+=slideWidth)},'fast','swing')
}

function setUpTTAslides() {
	$('.ttaSlides').each(function() {
		var totalSlides = $(this).find('.typeTheAnswer').length
		var wrapper = $(this).children().wrapAll('<div class="viewer"></div>')
		var slideWidth = $(this).find('.typeTheAnswer').outerWidth(true)
		var viewerWidth = totalSlides*slideWidth
		$(this).find('.viewer').css('width',viewerWidth)

		var ttaAccents = []

		if ($(this).attr('accents')!=undefined) {
			var ttaAccents = $(this).attr('accents').split(',')
		}
		

		$(this).find('.typeTheAnswer').each(function(questionNumber) {
			var thisSlide = (questionNumber+1)
			$(this).attr({
				'currentSlide': thisSlide,
				'totalSlides': totalSlides
			})
			if ($(this).find('.ttaQuestionHead').length) {
				var thisEle = $(this).find('.ttaQuestionHead')
				var thisText = $(thisEle).attr('text')
				thisText = thisText.replace('[current]', thisSlide)
				thisText = thisText.replace('[max]', totalSlides)
				$(thisEle).html(thisText)
			}
			var buttonBlock = $(this).find('.ttaButtonBlock')
			if (thisSlide>1) {
				buttonBlock.prepend('<div class="ttaBack"><p>'+buttonBlock.attr('backText')+'</p></div>')
			}
			if (thisSlide<totalSlides) {
				buttonBlock.append('<div class="ttaNext ttaHidden"><p>'+buttonBlock.attr('nextText')+'</p></div>')
			}
			if (ttaAccents.length>0) {
				$(this).find('.ttaInputBox').parent().append('<div class="ttaAccentContainer"></div>')
				for (var i = 0; i < ttaAccents.length; i++) {
					$(this).find('.ttaAccentContainer').append('<div class="ttaAccent"><p>'+ttaAccents[i]+'</p></div>')
				}
				$(this).find('.ttaAccentContainer').css('width', $(this).find('.ttaAccent').outerWidth(true)*ttaAccents.length)
			}

		})
	})
}
	