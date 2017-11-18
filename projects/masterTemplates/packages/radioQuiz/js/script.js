setTimeout(function() {










$(function() {
	setUpRadioQuiz()
	$('.radioBox').on('click', function() {
		var radioButtons = $(this).closest('.radioButtons')
		radioButtons.find('*[outcome]').remove()
		radioButtons.removeAttr('correct')

		radioButtons.find('.radioBox').removeAttr('selected')
		$(this).attr('selected', true)

		var container = $(this).closest('.radioQuiz')
		var questionCount = container.find('.radioButtons').length
		var selectedCount = container.find('.radioBox[selected]').length
		container.find('.checkAnswer').addClass('hidden')
		if (questionCount === selectedCount) {
			container.find('.checkAnswer').removeClass('hidden')
		}
	})
	$('.radioQuiz .checkAnswer').on('click', function() {
		var container = $(this).closest('.radioQuiz')
		var outcomeLocation = "https://tekura.desire2learn.com/shared/masterTemplates/images/NCEA/"
		container.find('.radioButtons').each(function() {
			var answer = $(this).attr('answer')
			var selected = $(this).find('.radioBox[selected]').attr('option')
			
			if (selected === answer) {
				$(this)
					.attr('correct', 'true')
					.append('<img src="'+outcomeLocation+'tick.png" outcome>')
			} else {
				$(this)
					.attr('correct', 'false')
					.append('<img src="'+outcomeLocation+'cross.png" outcome>')
			}
		})
	})
	$('.radioQuiz .reset').on('click', function() {
		var container = $(this).closest('.radioQuiz')
		var correct = 0
		container.find('.radioButtons').each(function() {
			var outcome = $(this).attr('correct')
			if (outcome!='true') {
				resetRadio($(this))
			} else {
				correct++
			}
		})
		var questions = container.find('.radioButtons').length
		if (questions === correct) {
			container.find('.radioButtons').each(function() {
				resetRadio($(this))
			})
		}
		container.find('.checkAnswer').addClass('hidden')
		function resetRadio(ele) {
			ele.find('*[outcome]').remove()
			ele.removeAttr('correct')
			ele.find('.radioBox').removeAttr('selected')
		}
	})
})

function setUpRadioQuiz() {
	$('.radioButtons').each(function() {
		$(this).append([
			'	<div class="col-xs-6"><div class="radioBox" option="true"></div></div>',
			'	<div class="col-xs-6"><div class="radioBox" option="false"></div></div>',
			].join(''))
		var height = $(this).parent().height()
		$(this).height(height)
		var radioHeight = $(this).find('.radioBox').outerHeight()
		$(this).find('.radioBox').css('margin-top', (height - radioHeight)/2)
	})
}







































































},2000)

