var $OTLEmodalFadeSpeed = 150
var $templatePacks = [
	// 'videoModal',
	// 'infoModal'
]

var $OTLEparCss = [
	'https://tekura.desire2learn.com/shared/masterTemplates/css/OTLEmodal/OTLEmodal.css',
	'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
]

var $OTLEparJs = [
	// 'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js'
]

var $OTLEwinCss = [
	// 'https://tekura.desire2learn.com/shared/masterTemplates/css/OTLEmodal/OTLEmodalButtons.css'
]

var $OTLEpar = parent;
while ($OTLEpar !== $OTLEpar.parent) {
	$OTLEpar = $OTLEpar.parent;
}

var $OTLEwin = window

$(function() {
	var OTLEmodalLink, OTLEmodalScript;

	// Links $OTLEparCss files to the parent e.g. modal styles
	for (var i = 0; i < $OTLEparCss.length; i++) {
		OTLEmodalLink = $OTLEpar.document.createElement('link');
		OTLEmodalLink.setAttribute('type', 'text/css')
		OTLEmodalLink.setAttribute('rel', 'stylesheet')
		OTLEmodalLink.setAttribute('href', $OTLEparCss[i]);
		$OTLEpar.document.head.appendChild(OTLEmodalLink);
	}

	// Links $OTLEparJs files to the parent e.g. jQuery.mobile
	for (var i = 0; i < $OTLEparJs.length; i++) {
		OTLEmodalScript = $OTLEpar.document.createElement('script');
		OTLEmodalScript.setAttribute('type','text/javascript');
		OTLEmodalScript.setAttribute('src', $OTLEparJs[i]);
		$OTLEpar.document.head.appendChild(OTLEmodalScript);
	}

	// Links $OTLEwinCss files to the parent e.g. buttons styles
	for (var i = 0; i < $OTLEwinCss.length; i++) {
		OTLEmodalLink = document.createElement('link');
		OTLEmodalLink.setAttribute('type', 'text/css')
		OTLEmodalLink.setAttribute('rel', 'stylesheet')
		OTLEmodalLink.setAttribute('href', $OTLEwinCss[i]);
		document.head.appendChild(OTLEmodalLink);
	}	

	// Links template css/js pack files to parent if needed
	for (var i = 0; i < $OTLEparCss.length; i++) {
		if ($('.'+$templatePacks[i]).length > 0) {
			OTLEmodalLink = $OTLEpar.document.createElement('link');
			OTLEmodalLink.setAttribute('type', 'text/css')
			OTLEmodalLink.setAttribute('rel', 'stylesheet')
			OTLEmodalLink.setAttribute('href', 'https://tekura.desire2learn.com/shared/masterTemplates/css/OTLEmodal/'+$templatePacks[i]+'.css');
			$OTLEpar.document.head.appendChild(OTLEmodalLink);

			OTLEmodalScript = $OTLEpar.document.createElement('script');
			OTLEmodalScript.setAttribute('type','text/javascript');
			OTLEmodalScript.setAttribute('src', 'https://tekura.desire2learn.com/shared/masterTemplates/js/OTLEmodal/'+$templatePacks[i]+'.js');
			$OTLEpar.document.head.appendChild(OTLEmodalScript);
		}
	}

	// Gets course URL
	var courseIframe = $($OTLEpar.document).find('iframe')
	if (courseIframe.length > 0) {
		var courseSrc = courseIframe.attr('src').split('/')
		courseSrc.splice(0,1)
		courseSrc.splice(courseSrc.length-1,1)
		if (courseSrc[0] === 'content') {
			courseSrc = '/' + courseSrc.join('/') + '/'
		} else {
			courseSrc = ''
		}
	} else {
		var courseSrc = ''
	}

	var	buttonDupCheck = []
	$('.OTLEmodalButton').each(function() {
		// Links specified button CSS files to iframe
		if (typeof $(this).attr('cssFile') != 'undefined') {
			OTLEmodalCss = document.createElement('link');
			OTLEmodalCss.setAttribute('type', 'text/css')
			OTLEmodalCss.setAttribute('rel', 'stylesheet')
			OTLEmodalCss.setAttribute('href', 'css/' + $(this).attr('cssFile') + '.css');
			if ($.inArray(OTLEmodalCss.href, buttonDupCheck)<0) {
				buttonDupCheck.push(OTLEmodalCss.href)
				document.head.appendChild(OTLEmodalCss);
			}
		}
	});
	var	dupCheck = []
	$('.OTLEmodal').each(function() {
		// Links specified modal CSS files to parent
		if (typeof $(this).attr('cssFile') != 'undefined') {
			OTLEmodalCss = $OTLEpar.document.createElement('link');
			OTLEmodalCss.setAttribute('type', 'text/css')
			OTLEmodalCss.setAttribute('rel', 'stylesheet')
			OTLEmodalCss.setAttribute('href', courseSrc + 'css/' + $(this).attr('cssFile') + '.css');
			
			if ($.inArray(OTLEmodalCss.href, dupCheck)<0) {
				dupCheck.push(OTLEmodalCss.href)
				$OTLEpar.document.head.appendChild(OTLEmodalCss);
			}
		}
		// Links specified modal JS files to parent
		if (typeof $(this).attr('jsFile') != 'undefined') {
			var OTLEmodalJs = $OTLEpar.document.createElement('script');
			OTLEmodalJs.setAttribute('type','text/javascript');
			OTLEmodalJs.setAttribute('src', courseSrc + 'js/' + $(this).attr('jsFile') + '.js');
			if ($.inArray(OTLEmodalJs.href, dupCheck)<0) {
				dupCheck.push(OTLEmodalJs.href)
				$OTLEpar.document.head.appendChild(OTLEmodalJs);
			}
		}
		
		$(this).wrap('<div class="OTLEmodalCurtains"></div>')
		resetOTLEmodalHeight($(this))
		$(window).resize(function() {
			resetOTLEmodalHeight($(this))
		})
		var container = $(this).closest('.OTLEmodalCurtains')
		container.prepend('<div class="OTLEmodalClose"><i class="fa fa-times" aria-hidden="true"></i></div>')
		$($OTLEpar.document.body).append(container)
	});
	
	function resetOTLEmodalHeight(thisModal) {
		var container = thisModal.closest('.OTLEmodalCurtains')
		container.css({
			'display': 'initial',
			'opacity': 0
		})
		var viewerHeight = container.height()
		var modalHeight = thisModal.height()
		if (modalHeight > (viewerHeight*0.9)) {
			thisModal.css({
				'max-height': '90vh',
				'overflow-y': 'auto'
			})
		}
		setTimeout(function() {
			container.css({
				'display': 'none',
				'opacity': 'initial'
			})
		}, 100)
	}
	return
})

var $closeOTLEmodal = false
var OTLEmodalTrigger = 'click'

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if (isMobile) {
	OTLEmodalTrigger = 'touchstart'
}

$($OTLEpar.document).on(OTLEmodalTrigger, '.holdOTLEmodal', function() {
	$closeOTLEmodal = true
	setTimeout(function() {
		$closeOTLEmodal = false
	}, 100)
})

$($OTLEpar.document).on(OTLEmodalTrigger, '.OTLEmodal', function() {
	$closeOTLEmodal = true
	setTimeout(function() {
		$closeOTLEmodal = false
	}, 100)
})

$($OTLEpar.document).on(OTLEmodalTrigger, '.OTLEmodalCurtains', function() {
	setTimeout(function() {
		if ($closeOTLEmodal===false) {
			$($OTLEpar.document).find('.OTLEmodalCurtains').stop().fadeOut($OTLEmodalFadeSpeed)
			$($OTLEpar.document).find('body').removeClass('OTLEModalShowing')
		}
	}, 50)
})

$(function(){
	$('.OTLEmodalButton').on(OTLEmodalTrigger, function() {
		var i = $(this).attr('activateModal')
		var thisModal = $($OTLEpar.document).find('.OTLEmodal[modal="'+i+'"]').closest('.OTLEmodalCurtains')
		thisModal.stop().fadeIn($OTLEmodalFadeSpeed)
		$($OTLEpar.document).find('body').addClass('OTLEModalShowing')
	})
})