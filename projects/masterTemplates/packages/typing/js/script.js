$(document).ready(function(){
	$('.typing input').on('keyup', function() {
		typingInput($(this));
	});
	$('.typing .reset').on('click', function() {
		typingReset($(this).closest('.typing'));
	});
	$('.typing .checkAnswer').on('click', function() {
		typingCheck($(this).closest('.typing'));
	});
});

function typingInput(currentInput) {
	currentInput.attr('completed',true);
	if (currentInput.val()==='') {
		currentInput.attr('completed',false);
	}
	currentInput.siblings('*[outcome]').remove()
	var container = currentInput.closest('.typing');
	var questions = +container.find('input').length;
	var completed = container.find('input[completed="true"]').length;
	if (questions===completed) {
		container.find('.checkAnswer').removeClass('hidden');
	} else {
		container.find('.checkAnswer').addClass('hidden');
	}
	return
}

function typingReset(container) {
	var questions = +container.find('input').length;
	var completed = +container.find('input:disabled').length;
	if (questions==completed) {
		container.find('input').each(function() {
			resetTypingInput($(this));
		})
	} else {
		container.find('input:not(:disabled)').each(function() {
			resetTypingInput($(this));
		})
	}
	function resetTypingInput(thisInput) {
		thisInput
			.val('')
			.attr('completed','false')
			.prop('disabled', false)
			.siblings('*[outcome]').remove()
	}
	container.find('.checkAnswer').addClass('hidden');
	return
}

function typingCheck(container) {
	var outcomeLocation = "https://tekura.desire2learn.com/shared/masterTemplates/images/NCEA/"
	container.find('input').each(function() {
		var userInput = $(this).val();
		var inputAnswers = $(this).attr('answer').split('||');
		var correctInput = false;
		for (var i = 0; i < inputAnswers.length; i++) {
			if ($(this).attr('caseSensitive')==='false') {
				userInput = userInput.toLowerCase();
				inputAnswers[i] = inputAnswers[i].toLowerCase();
			}
			if (userInput===inputAnswers[i]) {
				correctInput = true;
			}
		}
		if (correctInput) {
			$(this)
				.prop('disabled',true)
				.parent().append('<img src="'+outcomeLocation+'tick.png" outcome>');
		} else {
			$(this).parent().append('<img src="'+outcomeLocation+'cross.png" outcome>');
		}
	})
	$(this).addClass('hidden');
	return
}

// Vertical align bottom bootstrap
$('.typing .pull-down').each(function() {
  $(this).css('margin-top', $(this).parent().height() - $(this).outerHeight())
});