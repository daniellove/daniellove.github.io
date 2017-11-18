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

// Inject masterStyles
var injectLinks = [
	'https://tekura.desire2learn.com/shared/masterTemplates/css/triple000_styles.css'
]
var jsAnchor = document.getElementById('masterJs')
var titleAnchor = document.getElementsByTagName('title')[0]
for (var i = injectLinks.length - 1; i >= 0; i--) {
	var tempLink = document.createElement('link');
	tempLink.setAttribute('type', 'text/css');
	tempLink.setAttribute('rel', 'stylesheet');
	tempLink.setAttribute('href', injectLinks[i]);
	document.head.insertBefore(tempLink, titleAnchor.nextSibling);
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

// Triple000 what, why and how menus/dropdowns
$(function(){
	if (isTouchDevice()) {
		// Listens for a touch/click on touch devices
		$('.menu-item').on('click', function() {
			var targID = $(this).attr('id');
			$('#' + targID + '-submenu').toggle()
			$('.submenu:not(#' + targID + '-submenu)').hide()
		});
	} else {
		// Listens for the mouse entering the element on larger devices
		$('.menu-item').hover(function() {
			var targID = $(this).attr('id');
			$('#' + targID + '-submenu').stop().slideDown('slow');
		}, function() {
			var targID = $(this).attr('id');
			$('#' + targID + '-submenu').stop().slideUp('slow');
		});
	}
});

// Info/explanation trigger
$(function(){
	$('.hiddenInfo p').wrap('<div class="padding"></div>')
	if (isTouchDevice()) {
		// Listens for a touch/click on touch devices
		$('.infoTrigger').on('click', function() {
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
		$(document).on('click', '.audioTrigger', function() {
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

$(function(){
	if (isTouchDevice()) {
		$('.audio-trigger').on("click", function(){
				var targetID = '#' + $(this).attr('id') + '-audio';
				var audioTarget = $(targetID)[0];

				$(this).children('.icon').attr('src', 'images/icons/audio-trigger-playing.png');
				audioTarget.pause();
				audioTarget.play();

				audioTarget.onended = function() {
				    if ($(this).children('.icon').length > 0) {
						$(this).children('.icon').attr('src', 'images/icons/audio-trigger-static.png');
					}
				};

		});
	}
})

// Caption trigger
$(function(){
	// Creates the caption based on the element attributes
	$('.captionTrigger').each(function() {
		var classes = $(this).attr('class')
		var thisId = $(this).attr('id')
		var thisStyle = $(this).attr('style')
		var audioName = $(this).attr('audioName')
		// Wraps the element in a container
		$(this).wrap('<div id="' + thisId + '" class="' + classes + '" style="' + thisStyle + '" audioName="' + audioName + '"></div>')

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
		$(document).on('click', '.captionTrigger', function() {
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

// Popout window
var newWindow = null;
function popOutWindow(url, pageName) {
	newWindow = window.open(
	url, pageName, 'width=950,height=544,left=10,top=10')
}
$(window).focus(function() {
	if (newWindow != null) {
		newWindow.close();
		newWindow = null;
	};
});

// toolTipTrigger
$(function() {
	if (isTouchDevice()) {
		$('.toolTipTrigger').siblings('.toolTip').show();
	} else {
		$('.toolTipTrigger').hover(function() {
			$(this).siblings('.toolTip').stop().fadeIn('fast');
		}, function() {
			$(this).siblings('.toolTip').stop().fadeOut('fast');
		});
	}
});

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Div swap - a simple slideshow of sorts
$(function() {
	var maxDelay = 1
	$('.divSwap').each(function() {
		var thisThing = $(this)
		var changeSpeed = (+thisThing.attr('changeSpeed')*1000)||1000
		var delayTime = +thisThing.attr('delay')*changeSpeed||0
		if (maxDelay<delayTime) {
			maxDelay = delayTime
		}
	})
	$('.divSwap').each(function() {
		var thisThing = $(this)
		var bank = thisThing.find('.item')
		var ele = 0
		var fadeSpeed = thisThing.attr('fadeSpeed')||350
		if (fadeSpeed==='none') {
			fadeSpeed=0
		} else {
			fadeSpeed = +fadeSpeed
		}
		var changeSpeed = (+thisThing.attr('changeSpeed')*1000)||1000
		var delayTime = +thisThing.attr('delay')*changeSpeed||0
		setTimeout(function() {
			nextDsItem(bank, ele, delayTime, fadeSpeed, maxDelay, 0)
		}, delayTime)
	})

})
function nextDsItem(bank, ele, delayTime, fadeSpeed, maxDelay, changeSpeed) {
	var delay
	if (changeSpeed===0) {
		delay = changeSpeed
	} else {

	 	delay = maxDelay
	}
	setTimeout(function() {
		$(bank[ele]).fadeOut(fadeSpeed)
		ele++
		if (ele===bank.length) {
			ele=0
		}
		$(bank[ele]).fadeIn(fadeSpeed)
		nextDsItem(bank, ele, delayTime, fadeSpeed, maxDelay)
	}, delay)
}

// Links modals if needed
$(function() {
	if ($('.OTLEmodal').length > 0) {
		var OTLEmodalScript = document.createElement('script');
		OTLEmodalScript.setAttribute('type', 'text/javascript')
		OTLEmodalScript.setAttribute('src', 'https://tekura.desire2learn.com/shared/masterTemplates/js/OTLEmodal/OTLEmodal.js');
		document.head.appendChild(OTLEmodalScript);
	}
})



// Links daylight override styles
var daylightStyles = document.createElement('link');
daylightStyles.setAttribute('type', 'text/css');
daylightStyles.setAttribute('rel', 'stylesheet');
daylightStyles.setAttribute('href', 'https://tekura.desire2learn.com/shared/masterTemplates/css/daylight000_styles.css');
document.head.appendChild(daylightStyles);

// radio button blanket fix for touch devices
$(function() {
	if (isTouchDevice()) {
		$('.radioContainer').on('touchstart', '.checkable', function() {
			var thisPos = $(this).attr('checkPos');
			$('[checkPos='+thisPos+']').removeClass('clickedCheck').children('.checkAns').remove();
			$(this).addClass('clickedCheck');

			var container = $(this).closest('.radioContainer');
			var j = $(container).find('.questionText p').length;
			var i = $(container).find('.clickedCheck').length;
			if (j===i) {
				container.find('.radioAnswers').removeClass('hidden');
			};
			return
		});
	}
})