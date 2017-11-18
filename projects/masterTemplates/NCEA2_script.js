// Inject master .js and .css into parent document (OTLE)
var par = parent;
while (par !== par.parent) {
	par = par.parent;
}
var baseUrl = 'https://tekura.desire2learn.com/shared'
var scr = par.document.createElement('script');
scr.setAttribute('type', 'text/javascript');
scr.setAttribute('src', baseUrl+'/master-css-file/your-javascript-file.js');
par.document.head.appendChild(scr);

var lnk = par.document.createElement('link');
lnk.setAttribute('type', 'text/css');
lnk.setAttribute('rel', 'stylesheet');
lnk.setAttribute('href', baseUrl+'/master-css-file/override-styles.css');
par.document.head.appendChild(lnk);


// Inject bootstrap and font-awesome .css
thisCourse = thisCourse.toLowerCase()
var injectLinks = [
	'https://tekura.desire2learn.com/shared/masterTemplates/css/NCEA2_' + thisCourse + '.css',
	'https://tekura.desire2learn.com/shared/masterTemplates/css/NCEA2_styles.css',
	'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
]
var jsAnchor = document.getElementById('masterJs')
for (var i = injectLinks.length - 1; i >= 0; i--) {
	var tempLink = document.createElement('link');
	tempLink.setAttribute('type', 'text/css');
	tempLink.setAttribute('rel', 'stylesheet');
	tempLink.setAttribute('href', injectLinks[i]);
	document.head.insertBefore(tempLink, jsAnchor);
}


// Inject bootstrap .js
var injectScripts = [
	'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
	'https://use.fontawesome.com/ba852c32c2.js'
]

for (var i = injectScripts.length - 1; i >= 0; i--) {
	var tempScript = document.createElement('script');
	tempScript.setAttribute('type', 'text/javascript');
	tempScript.setAttribute('src', injectScripts[i]);
	document.head.insertBefore(tempScript, jsAnchor);
}


// Org unit replacer
$(function() {
	var pageURL = $(location).attr('href');
	if (pageURL.includes('ou=')) {
		var splitURL = pageURL.split('ou=');
		var secondSplitURL = splitURL[1].split('&');
		var ouID = secondSplitURL[0];
	}

	$('a').each(function() {
		var href = $(this).attr('href');
		if(href&&href.includes('{orgUnitId}')) {
			href = href.replace('{orgUnitId}', ouID);
			$(this).attr('href', href);
		}
	});
});


// Dropdown menu
$(function() {
	var closeDropdown = true
	$('button[data-toggle="dropdown-menu"]').on('click', function() {
		var targEle = $($(this).attr('data-target'))
		var showEle = false
		if (targEle.css('display')==='none') {
			showEle = true
		}
		$('.dropdown-menu').hide()
		if (showEle) {
			targEle.show()
			holdDropdown(100)
		}
	})
	$('.dropdown-menu').on('click', function() {
		holdDropdown(100)
	})

	function holdDropdown(delay) {
		closeDropdown = false
		setTimeout(function() {
			closeDropdown = true
		}, delay)
	}

	$(par).on('click', function() {
		if (window!=par) {
			$('.dropdown-menu').hide()
		}
	})
	$(document).on('click', function() {
		if (closeDropdown) {
			$('.dropdown-menu').hide()
		}
	})
});


// Accordion dynamic icons
//Changes accordion icons on each panel from + to -
$(function() {
	$('.panel-heading').on('click', function() {
		var container = $(this).closest('.accordion-group')
		container.find('.fa-minus').addClass('fa-hidden')
		container.find('.fa-plus').removeClass('fa-hidden')
		setTimeout(function() {
			var openPanel = container.find('.in').closest('.panel')
			console.log(container.find('.in').closest('.panel'))
			openPanel.find('.fa-minus').removeClass('fa-hidden')
			openPanel.find('.fa-plus').addClass('fa-hidden')
		}, 365)	
	})
})


// Progress bar
// Located in the footer
$(function() {
	if (typeof thisLesson !== 'undefined') {
		var progressPercentage = (thisLesson/totalLessons*100).toFixed(0)
		$('.progress-bar')
			.text(progressPercentage+'%')
			.css({'width':progressPercentage+'%'})
			.attr('aria-valuenow', progressPercentage)
	}
});


// Info/explanation trigger
$(function(){
	$('.hiddenInfo p').wrap('<div class="padding"></div>')
	if (isTouchDevice()) {
		// Listens for a touch/click on touch devices
		$('.infoTrigger').on('touchstart', function() {
			// Alternates between showing/hiding the element
			var showThis = $(this).attr('showThis')
			$('.hiddenInfo[showOn="'+showThis+'"]').toggle()
			$('.hiddenInfo:not([showOn="'+showThis+'"])').hide()
		});
	} else {
		// Listens for the mouse entering the element on larger devices
		$('.infoTrigger').hover(function() {
			var showThis = $(this).attr('showThis')
			$('.hiddenInfo[showOn="'+showThis+'"]').stop().fadeIn('fast')
		// Listens for the mouse leaving the element on larger devices
		}, function() {
			var showThis = $(this).attr('showThis')
			$('.hiddenInfo[showOn="'+showThis+'"]').stop().fadeOut('fast')
		});
	}
});


// Audio trigger
$(function(){
	// Preloads audio files for audioTriggers
	var audioTriggerBank = $('.audioTrigger')
	for (var i = 0; i < audioTriggerBank.length; i++) {
		var thisThing = $(audioTriggerBank[i])
		// Preloads audio track
		var thisTrack = thisThing.attr('audioName')
		var tempAudio = new Audio
		tempAudio.src = 'audio/' + thisTrack + '.mp3'
		// Generates unique ID
		var audioTriggerID = 'audioTriggerID_'+i
		// Replaces file name with unique ID
		thisThing.attr('audioName', audioTriggerID)
		// Stores track as global variable
		eval(audioTriggerID + ' = tempAudio')
	}

	// Clears the audioFile variable
	var audioFile = null;
	if (isTouchDevice()) {
		// Listens for a trigger element touch/click
		$(document).on('touchstart', '.audioTrigger', function() {
			// Plays the audio file
			audioFile = playAudioFile($(this))
		});
	} else {
		// Listens for the mouse entering the trigger element
		$(document).on('mouseenter', '.audioTrigger', function() {
			// Plays the audio file
			audioFile = playAudioFile($(this))
		});
	}
	
	function playAudioFile(thisThing) {
		// Resets existing audio
		if (audioFile) {
			audioFile.pause()
			audioFile.currentTime = 0
		}
		// Finds global variable trigger based on unique ID
		audioFile = eval(thisThing.attr('audioName'))
		audioFile.play();
		// Stores the audio file in case it needs to be paused
		return audioFile
	}
});


// Caption trigger
$(function(){
	// Creates the caption based on the element attributes
	$('.captionTrigger').each(function() {
		var classes = $(this).attr('class')
		var thisId = $(this).attr('id')
		var thisStyle = $(this).attr('style')
		// Wraps the element in a container
		$(this).wrap('<div id="' + thisId + '" class="' + classes + '" style="' + thisStyle + '"></div>')

		var container = $(this).parent('.captionTrigger')
		var captionText = $(this).attr('captionText')
		var captionType = $(this).attr('captionType')
		// Creates a caption div with the specified type and text
		container.append('\
			<div class="caption" type="' + captionType + '">\
				<p>' + captionText + '</p>\
			</div>')
		$(this).removeAttr('captionText')
		$(this).removeAttr('captionType')
		$(this).removeAttr('class')
		$(this).removeAttr('id')
		$(this).removeAttr('style')
	})

	if (isTouchDevice()) {
		// Listens for a trigger touch/click
		$(document).on('touchstart', '.captionTrigger', function() {
			// Alternates between showing/hiding the caption
			$(this).find('.caption').toggle()
		});
	} else {
		// Listens for the mouse entering the trigger
		$(document).find('.captionTrigger').hover(function() {
			// Slides the caption into view
			$(this).find('.caption').stop().slideDown('fast')
		// Listens for the mouse leaving the trigger
		}, function() {
			// Slides the caption out of view
			$(this).find('.caption').stop().slideUp('fast')
		});
	}
});

// Links modals if needed
$(function() {
	if ($('.OTLEmodal').length > 0) {
		var OTLEmodalScript = document.createElement('script');
		OTLEmodalScript.setAttribute('type', 'text/javascript')
		OTLEmodalScript.setAttribute('src', 'https://tekura.desire2learn.com/shared/masterTemplates/js/OTLEmodal/OTLEmodal.js');
		document.head.appendChild(OTLEmodalScript);
	}
})

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}