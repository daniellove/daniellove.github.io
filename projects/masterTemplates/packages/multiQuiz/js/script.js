setTimeout(function() {










$(function() {
	setUpMultiQuiz()
	$('.multiBox').on('click', function() {
		var question = $(this).closest('.multiQuestion')
		question.find('*[outcome]').remove()
		question.removeAttr('correct')

		question.find('.multiBox').removeAttr('selected')
		$(this).attr('selected', true)

		var container = $(this).closest('.multiQuiz')
		var questionCount = container.find('.multiQuestion').length
		var selectedCount = container.find('.multiBox[selected]').length
		container.find('.checkAnswer').addClass('hidden')
		console.log(questionCount, selectedCount)
		if (questionCount === selectedCount) {
			container.find('.checkAnswer').removeClass('hidden')
		}
	})
	$('.multiQuiz .checkAnswer').on('click', function() {
		var container = $(this).closest('.multiQuiz')
		var outcomeLocation = "https://tekura.desire2learn.com/shared/masterTemplates/images/NCEA/"
		container.find('.multiBox[selected]').each(function() {
			var option = $(this).parent()
			var answer = option.attr('value')			
			if (answer==='correct') {
				$(this)
					.append('<img src="'+outcomeLocation+'tick.png" outcome>')
					.attr('correct', 'true')
			} else {
				$(this)
					.append('<img src="'+outcomeLocation+'cross.png" outcome>')
					.attr('correct', 'false')
			}
		})
	})
	$('.multiQuiz .reset').on('click', function() {
		var container = $(this).closest('.multiQuiz')
		var correct = 0
		container.find('.multiBox').each(function() {
			var outcome = $(this).attr('correct')
			if (outcome!='true') {
				resetMulti($(this))
			} else {
				correct++
			}
		})
		var questions = container.find('.multiQuestion').length
		if (questions === correct) {
			container.find('.multiBox').each(function() {
				resetMulti($(this))
			})
		}
		container.find('.checkAnswer').addClass('hidden')
		function resetMulti(ele) {
			ele.find('*[outcome]').remove()
			ele.removeAttr('correct')
			ele.removeAttr('selected')
		}
	})
})

function setUpMultiQuiz() {
	$('.multiQuiz .option').each(function() {
		$(this).prepend('<div class="multiBox"></div>')
		var box = $(this).find('.multiBox')
		var words = $(this).find('p')
		
		var fullWidth = $(this).outerWidth()
		var boxWidth = box.outerWidth(true)
		var wordPad = +words.css('padding-left').replace('px', '')
		words.width(fullWidth - (boxWidth+wordPad+4))
		
		var height = words.outerHeight(true)
		var radioHeight = box.outerHeight()

		box.css('margin-top', (height - radioHeight)/2)
	})
}







































































},2000)

