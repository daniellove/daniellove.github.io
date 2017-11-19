ttaExceptions = [
	'none', // Requires an exact match || This is the default option
	'case', // Removes case sensitivity
	'special', // Ignores special characters and spaces
	'special+case' // Ignores special characters and removes case sensitivity 
]

ttaLimits = [
	'none', // Users can input any character || This is the default limit
	'numbersOnly', // Restricts input to numbers
	'lettersOnly' // Restricts input to letters
]

$(document).ready(function(){
	setUpTypeTheAnswer();
	$('.typeTheAnswer .ttaInputBox').on('keydown', function() {
		ttaValidateInput($(this), event)
	});
	$('.typeTheAnswer .ttaInputBox').on('keyup', function(thisThing) {
		if (thisThing.keyCode!=13||thisThing.which!=13) {
			ttaCountInput($(this))
		}
	});
	$(document).on('click', '.ttaReset', function() {
		ttaReset($(this).closest('.typeTheAnswer'))
	});
	$(document).on('click', '.ttaCheck', function() {
		ttaCheck($(this).closest('.typeTheAnswer'))
		$(this).addClass('ttaHidden')
	});
});


function ttaValidateInput(currentInput, event) {
	var limits = []
	if (currentInput.attr('limit')) {
		limits = currentInput.attr('limit').split(' ')
	} else {
		limits = ['none']
	}
	for (var i = 0; i < limits.length; i++) {
		if (limits[i] === ttaLimits[1]) {limit1(event)}
		if (limits[i] === ttaLimits[2]) {limit2(event)}
	}

}

// No characters A-Z
function limit1(event) {
	var keycode = event.keyCode || theEvent.which;
	var thisEvent = event || window.event
	if (keycode>= 65 && keycode<= 90) {
		thisEvent.returnValue = false
	}
}

// No characters 0-9
function limit2(event) {
	var keycode = event.keyCode || theEvent.which;
	var thisEvent = event || window.event
	if (keycode>= 48 && keycode<= 57) {
		thisEvent.returnValue = false
	} else if (keycode>= 96 && keycode<= 105) {

	}
}

function ttaType(container) {
	if (container.closest('.ttaSlides').length>0) {
		return 'slides'
	}
}

function ttaCountInput(currentInput) {
	if (currentInput.val()!='') {
		currentInput.attr('completed',true)
	} else {
		currentInput.attr('completed',false)
	}
	currentInput.siblings('.ttaOutcome').remove()
	var container = currentInput.closest('.typeTheAnswer')
	var questions = +container.find('.ttaInputBox').length
	var completed = container.find('.ttaInputBox[completed="true"]').length
	// console.log(questions, completed)
	if (questions===completed) {
		container.find('.ttaCheck').removeClass('ttaHidden')
		if (ttaType(container)==='slides') {ttaHideResetButton(container)}
	} else {
		container.find('.ttaCheck').addClass('ttaHidden')
		if (ttaType(container)==='slides') {ttaShowResetButton(container)}
	}
	return
}

function ttaReset(container) {
	var questions = +container.find('.ttaInputBox').length
	var completed = +container.find('.ttaInputBox:disabled').length
	container.find('.ttaInputBox').each(function() {
		if (!$(this).prop('disabled')||questions===completed) {
			$(this)
				.val('')
				.attr('completed','false')
				.prop('disabled',false)
				.siblings('.ttaOutcome').remove()
		}
	})
	container.find('.ttaCheck').addClass('ttaHidden')
	if (ttaType(container)==='slides') {ttaResetSlides(container)}
	return
}

function ttaCheck(container) {
	var exceptions = ttaGetOptions(container)
	container.find('.ttaInputBox').each(function(i) {
		if (typeof $(this).attr('answer') != 'undefined') {
			var userInput = $(this).val()
			var inputexceptions = exceptions[i]
			var ttaComparison = []
			for (var j = 0; j < inputexceptions.length; j++) {
				var inputAnswers = $(this).attr('answer').split('||')
				switch(inputexceptions[j]) {
					case ttaExceptions[0]:
						ttaComparison.push(ttaNoException(userInput, inputAnswers))
						break;
					case ttaExceptions[1]:
						ttaComparison.push(ttaException1(userInput, inputAnswers))
						break;
					case ttaExceptions[2]:
						ttaComparison.push(ttaException2(userInput, inputAnswers))
						break;
					case ttaExceptions[3]:
						ttaComparison.push(ttaException3(userInput, inputAnswers))
						break;
					default:
						ttaComparison.push(ttaNoException(userInput, inputAnswers))
				}
			}
			var correctInput = false
			for (var x = 0; x < ttaComparison.length; x++) {
				var thisObj = ttaComparison[x]
				var thisAnswer = ttaComparison[x].answer
				var thisInput = ttaComparison[x].input
				console.log(thisAnswer, thisInput)
				for (var y = 0; y < thisAnswer.length; y++) {
					var answer = thisAnswer[y]
						.replace('‘','\'')
						.replace('’','\'')
						.replace('“','\"')
						.replace('”','\"')
					if (answer===thisInput) {
						correctInput=true
					}
				}
				if (correctInput) {
					$(this)
						.prop('disabled',true)
						.parent().append('<img src="interactives/typeTheAnswer/img/tick.png" class="ttaOutcome" />')
					if (ttaType(container)==='slides') {ttaShowNextButton(container)}
				} else {
					$(this)
						.parent().append('<img src="interactives/typeTheAnswer/img/cross.png" class="ttaOutcome" />')
					if (ttaType(container)==='slides') {ttaShowSlideOptions(container)}
				}
			}
		}
				
	})
}

function ttaNoException(userInput, inputAnswers) {
	var tempObj = {}
	tempObj.input = userInput
	tempObj.answer = []
	for (var i = 0; i < inputAnswers.length; i++) {
		tempObj.answer[i] = inputAnswers[i]
	}
	return tempObj
}

// Case exception
function ttaException1(userInput, inputAnswers) {
	var tempObj = {}
	tempObj.input = userInput.toLowerCase()
	tempObj.answer = []
	for (var i = 0; i < inputAnswers.length; i++) {
		tempObj.answer[i] = inputAnswers[i].toLowerCase()
	}
	return tempObj
}

// Special exception
function ttaException2(userInput, inputAnswers) {
	var tempObj = {}
	tempObj.input = userInput.replace(/[&\/\\#,+()$~%.'":*?<>{}\ ]/g,'')
	tempObj.answer = []
	for (var i = 0; i < inputAnswers.length; i++) {
		tempObj.answer[i] = inputAnswers[i].replace(/[&\/\\#,+()$~%.'":*?<>{}\ ]/g,'')
	}
	return tempObj
}

// Special+case exception
function ttaException3(userInput, inputAnswers) {
	var tempObj = {}
	tempObj.input = userInput.replace(/[&\/\\#,+()$~%.'":*?<>{}\ ]/g,'').toLowerCase()
	tempObj.answer = []
	for (var i = 0; i < inputAnswers.length; i++) {
		tempObj.answer[i] = inputAnswers[i].replace(/[&\/\\#,+()$~%.'":*?<>{}\ ]/g,'').toLowerCase()
	}
	return tempObj
}

function setUpTypeTheAnswer() {
	// Links .css files
	var	duplicateChecker = []
	$('.typeTheAnswer').each(function() {
		var ttaLink  = document.createElement('link');
		ttaLink.rel  = 'stylesheet';
		ttaLink.type = 'text/css';
		ttaLink.href = 'interactives/typeTheAnswer/css/'+$(this).attr('ttaCssFile')+'.css';
		if ($.inArray(ttaLink.href,duplicateChecker)<0) {
			duplicateChecker.push(ttaLink.href)
			document.head.appendChild(ttaLink);
		}

		if (ttaType($(this))) {
			var ttaScript = document.createElement('script');
			ttaScript.type = 'text/javascript'
			ttaScript.src = 'interactives/typeTheAnswer/js/ttaSlides.js';
			if ($.inArray(ttaScript.href,duplicateChecker)<0) {
				duplicateChecker.push(ttaScript.href)
				document.head.appendChild(ttaScript);
			}
		}
	});
	return
}

function ttaGetOptions(container) {
	var exceptions = []
	container.find('.ttaInputBox').each(function(i) {
		if ($(this).attr('exceptions')) {
			exceptions[i] = $(this).attr('exceptions').split(' ')
		} else {
			exceptions[i] = ['none']
		}
	})
	return exceptions
}

$(function() {
	var focusEle = null
	$('.accentBlock').hide()
	$('.ttaInputBox').on('focus', function() {
		focusEle = $(this)
		$('.accentBlock').hide()
		focusEle.siblings('.accentBlock').show()
	})
	$('.accentBlock div').on('click', function() {
		var accent = $(this).text()
		focusEle.val(focusEle.val()+accent)
		focusEle.focus()
	})

})