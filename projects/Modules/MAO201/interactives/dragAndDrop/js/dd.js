var ddActions = {}

$(document).ready(function(){
	var ddScript = document.createElement('script');
	ddScript.type = 'text/javascript'
	ddScript.src = 'interactives/dragAndDrop/js/jquery-ui.min.js';
	document.head.appendChild(ddScript);

	linkUiTouch();
	function linkUiTouch() {
		if (typeof uiReady === 'undefined') {
			setTimeout(linkUiTouch, 100);
		} else {
			ddScript = document.createElement('script');
			ddScript.type = 'text/javascript'
			ddScript.src = 'interactives/dragAndDrop/js/jquery.ui.touch-punch.min.js';
			document.head.appendChild(ddScript);
		}
	}
	
	linkDDfunctions();
	function linkDDfunctions() {
		if (typeof uiReady === 'undefined' || typeof touchReady === 'undefined') {
			setTimeout(linkDDfunctions, 100);
		} else {
			ddScript = document.createElement('script');
			ddScript.type = 'text/javascript'
			ddScript.src = 'interactives/dragAndDrop/js/runDragAndDrop.js';
			document.head.appendChild(ddScript);
		}
	}

	var	duplicateChecker = []
	$('.dragAndDrop').each(function(counter) {
	    var ddLink  = document.createElement('link');
	    ddLink.rel  = 'stylesheet';
	    ddLink.type = 'text/css';
	    ddLink.href = 'interactives/dragAndDrop/css/'+$(this).attr('ddCssFile')+'.css';
		if ($.inArray(ddLink.href,duplicateChecker)<0) {
			duplicateChecker.push(ddLink.href)
			document.head.appendChild(ddLink);
		}
		$(this).find('.dragContainer:not(.noShuffle)').each(function() {
			var dragBoxes = $(this).find('.dragBox')
			$(this).find('.dragBox').remove()
			shuffle(dragBoxes);
			for ( var i=0; i<dragBoxes.length; i++ ) {
				$(this).append(dragBoxes[i])
			}
		})
		$(this).attr('actions', 'dd'+counter)
		eval('ddActions.dd'+counter+' = []')
	});
	return
})

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;								
}