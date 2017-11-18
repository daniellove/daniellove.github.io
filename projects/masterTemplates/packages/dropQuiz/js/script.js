setTimeout(function() {










$(function() {
	setUpDropQuiz()
	if (isTouchDevice()) {
		$('.dropQuiz .options p')
			.attr('backgroundColour', 'second_lightest')
			.css('margin-top', '1px')
		$('.dropQuiz .dropQuestion .dropDown').on('click', function() {
			if (!$(this).hasClass('open')) {
				var dropQuestion = $(this).closest('.dropQuestion')
				if (dropQuestion.attr('correct') != 'true') {
					if (typeof dropQuestion.attr('correct') != 'undefined') {
						resetDropQuestion(dropQuestion)
					}
					$(this).addClass('open')
					$(this).find('.options').stop().slideDown('fast')
				}
			} else {
				closeThisDropDown($(this))
			}
		})
	} else {
		$('.dropQuiz .options p').hover(function() {
			$(this).attr('backgroundColour', 'second_lightest')
		}, function() {
			$(this).removeAttr('backgroundColour')
		})
		$('.dropQuiz .dropQuestion .dropDown').hover(function() {
			var dropQuestion = $(this).closest('.dropQuestion')
			if (dropQuestion.attr('correct') != 'true') {
				if (typeof dropQuestion.attr('correct') != 'undefined') {
					resetDropQuestion(dropQuestion)
				}
				$(this).addClass('open')
				$(this).find('.options').stop().slideDown('fast')
			}
		}, function() {
			closeThisDropDown($(this))
		})
	}
	
	$('.dropQuiz .options p').on('click', function() {
		var dropDown = $(this).closest('.dropDown')
		var words = $(this).text()
		var placeholder = dropDown.find('.placeholder')
		placeholder
			.text(words)
			.siblings('.fa').css({
				'line-height': placeholder.outerHeight() + 'px'
			})
			
		closeThisDropDown(dropDown)

		var options = dropDown.find('.options p')
		var optionsArray = []
		for (var i = options.length - 1; i >= 0; i--) {
			optionsArray[i] = options[i]
		}
		var option = optionsArray.indexOf($(this)[0]) + 1
		dropDown.attr('chosen', option)

		var container = $(this).closest('.dropQuiz')
		var questions = container.find('.dropQuestion').length
		var chosen = container.find('.dropDown[chosen]').length
		container.find('.checkAnswer').addClass('hidden')
		if (questions === chosen) {
			container.find('.checkAnswer').removeClass('hidden')
		}
	})
	function closeThisDropDown(ele) {
		ele.find('.options').stop().slideUp('fast').promise().done(function() {
			ele.removeClass('open')
		})
	}

	$('.dropQuiz .checkAnswer').on('click', function() {
		var container = $(this).closest('.dropQuiz')
		var outcomeLocation = "https://tekura.desire2learn.com/shared/masterTemplates/images/NCEA/"
		container.find('.dropDown[chosen]').each(function() {
			var chosen = $(this).attr('chosen')
			var answer = $(this).attr('answer')		
			if (chosen===answer) {
				$(this).closest('.dropQuestion')
					.append('<img src="'+outcomeLocation+'tick.png" outcome>')
					.attr('correct', 'true')
			} else {
				$(this).closest('.dropQuestion')
					.append('<img src="'+outcomeLocation+'cross.png" outcome>')
					.attr('correct', 'false')
			}
		})
		$(this).addClass('hidden')
	})

	$('.dropQuiz .reset').on('click', function() {
		var container = $(this).closest('.dropQuiz')
		var questions = container.find('.dropQuestion').length
		var correct = container.find('.dropQuestion[correct="true"]').length
		if (questions===correct) {
			container.find('.dropQuestion').each(function() {
				resetDropQuestion($(this))
			})
		} else {
			container.find('.dropQuestion:not([correct="true"])').each(function() {
				resetDropQuestion($(this))
			})
		}
		container.find('.checkAnswer').addClass('hidden')
	})
	function resetDropQuestion(ele) {
		ele.removeAttr('correct')
		ele.find('*[outcome]').remove()
		ele.find('.dropDown').removeAttr('chosen')
		var placeholder = ele.find('.placeholder')
		placeholder
			.text(placeholder.attr('original'))
			.siblings('.fa').css({
				'line-height': placeholder.outerHeight() + 'px'
			})
	}
})

function setUpDropQuiz() {
	$('.dropQuiz .placeholder').each(function() {
		$(this)
			.wrap('<div class="dropTrigger"></div>')
			.attr('original', $(this).text())
			.parent().append('<i class="fa fa-chevron-down" backgroundColour="primary_standard"></i><div class="clearfix"></div>')
			.find('.fa').css({
				'line-height': $(this).outerHeight() + 'px'
			})
	})
}







































































},2000)

