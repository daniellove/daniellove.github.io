//---------- SET UP FUNCTIONS ----------//

var triggerAction = 'click'

// Sets up accrodions
var $accordionSpeed = 350;
$(function() {
	$('.accordion .tab').each(function(i) {
		// Gives references and status to element: used to open/close
		$(this).find('.tabHead').attr('tabRef', i);
		// Sets the height of the accordion tab when open then closes it.
		var $content = $(this).find('.content');
		var $height = $content.height();
		$content.attr('maxHeight', $height);
		$content.css('height', 0);
	});
})

// Touch device functions
var $touchDragging = false
$(function() {
	$("body").on("touchmove", function(){
		$touchDragging = true;
	});
	$("body").on("touchstart", function(){
		$touchDragging = false;
	});
})
$(function() {
	if (isTouchDevice()) {
		triggerAction = 'touchend'
		$('#outlineCircles').children('div').addClass('touch');
		$('.backBox').addClass('touch');
		$('.closeBox').addClass('touch');
		$('.landingButton').addClass('touch');
		$('.hovercolour').addClass('touch');
		$('.hovercolour').addClass('touch');
		$('.layerWindow').addClass('touch');
		$('.genericSubmenu').addClass('touch');
		$('.buttons a').addClass('touch');
		$('.topicCircle').addClass('touch');

		n2nAddBurger()
		mobileLayerHeadings()
		
		windowMobileSizing()
		$(window).resize(function() {
			windowMobileSizing()
		})
	}
})

function n2nAddBurger() {
	$('.needToKnowContent:not(.needToKnowPartial)').parent().append('<div id="n2nBurger"><div class="burgerBar"></div></div>')
	$('#n2nBurger').on(triggerAction, function() {
		if (triggerAction === 'touchend' && $touchDragging) {return}
		$('#needToKnowMenu').toggleClass('n2nShowing')
	})
}

function mobileLayerHeadings() {
	$('.layerWindow .heading h1').text($course)
	$('#needToKnowMenu div[activate]').each( function() {
		var $text = $(this).text()
		var $targ = $(this).attr('activate')
			$targ = $('.needToKnowContent[listenFor="'+$targ+'"]')
		$targ.prepend('<h2>'+$text+'</h2>')
	})
}

function windowMobileSizing() {
	var storeWindow = transWindows()
	mobileSizing()
	hideWindows(storeWindow)
}

function transWindows() {
	var storeWindow = null
	$('#curtains').css('opacity', '1').show()
	$('.layerWindow').each(function() {
		if ($(this).css('display') === 'block') {
			storeWindow = $(this)
		}
	})
	$('.layerWindow').css('opacity', '1').show()
	$('.shrink1').removeClass('shrink1')
	$('.shrink2').removeClass('shrink2')
	return storeWindow
}

function mobileSizing() {
	burgerMobileSizing()
	$('#NCEA_container .layerWindow .heading h1').each(function() {
		if ($(this).height() > $(this).parent().height()) {
			$(this).addClass('shrink1')
		}
		if ($(this).height() > $(this).parent().height()) {
			$(this).addClass('shrink2')
		}
	})
}

function hideWindows(saveWindow) {
	$('#curtains').css('opacity', 'initial').hide()
	$('.layerWindow').css('opacity', 'initial').hide()
	if (saveWindow) {
		saveWindow.show()
	}
}

function burgerMobileSizing() {
	$('#n2nBurger').height($('#n2nBurger').width())
}

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Hides these elements once page has loaded
$(function() {
	var $hide = [
		'#curtains',
		'.layerWindow',
		'.courseOutlineContent',
		'.needToKnowContent:not(:first-child)'
	]
	for (var i = 0; i < $hide.length; i++) {
		$($hide[i]).hide()
	}
	$('#curtains').css('opacity', 'initial').removeClass('zBg')
	$('.layerWindow').css('opacity', 'initial').removeClass('zBg')
});

//---------- END OF SET UP FUNCTIONS ----------//





//---------- LAYER WINDOWS ----------//

// Generic fade speed unless identified in child function
var $fadeSpeed = 80;

// layer window back button
$(document).on(triggerAction,'.backBox', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $window = $(this).closest('.layerWindow')
	$window.fadeOut($fadeSpeed)
});

// layer window close button
$(document).on(triggerAction,'.closeBox', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $curtains = $('#curtains')
	$curtains.fadeOut($fadeSpeed)
	$('.layerWindow').fadeOut($fadeSpeed)
	$('body').removeClass('curtainActive')
});

// Show top layer window when button clicked
$(document).on(triggerAction,'.landingButton', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $curtains = $('#curtains')
	var $window = $('div[listenFor="'+$(this).attr('activate')+'"]')
	$curtains.fadeIn($fadeSpeed)
	$window.fadeIn($fadeSpeed)
	$('body').addClass('curtainActive')
});

// Show top layer window when button clicked
$(document).on(triggerAction,'.outlineCircle', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $window = $('.layerWindow[listenFor="'+$(this).attr('activate')+'"]')
	$window.fadeIn($fadeSpeed)
});

// Show show modules from pathways/topics
$(document).on(triggerAction,'.topicCircle', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $window = $('.layerWindow[listenFor="'+$(this).attr('activate')+'"]')
	$window.fadeIn($fadeSpeed)
});

//---------- END OF LAYER WINDOWS ----------//





//---------- LAYERWINDOW SUBHEADINGS ----------//

// Show content when subheading clicked
$(function() {
	$('.subheading .active').each(function() {
		activateSubheading($(this))
	})
})
$(document).on(triggerAction,'.subheading div:not(.inactive)', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	if (!$(this).hasClass('active')) {
		activateSubheading($(this))
	}
});

// 
function activateSubheading($thisSub) {
	var $adjSub = $thisSub.siblings()
	var $container = $thisSub.closest('.layerWindow');
	var $activate = $thisSub.attr('activate');
	var $thisContent = $container.find('div[listenFor="'+$activate+'"]')
	var $adjContent = $thisContent.siblings()
	
	$thisSub.addClass('active')
	$thisContent.fadeIn($fadeSpeed)

	$adjSub.removeClass('active')
	$adjContent.fadeOut($fadeSpeed)
}

//---------- END OFLAYERWINDOW SUBHEADINGS ----------//





//---------- ACCORDIONS ----------//

// Closes an active accordion tab on click
$(document).on(triggerAction, '.tabHead.active', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $tab = $(this).closest('.tab')
	animateAccordion($tab, 'close', closeChevron())
	if (isTouchDevice()) {
	}
});

// Opens a accordion tab on click
$(document).on(triggerAction, '.tabHead:not(.active)', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	var $tab = $(this).closest('.tab')
	var $content = $tab.find('.content')
	var $container = $tab.closest('.accordion')
	animateAccordion($tab, 'open', openChevron())

	// Closes sibling tabs
	var $tabRef = $(this).attr('tabRef')
	$container.find('.tabHead.active').each(function(){
		var $thisTabref = $(this).attr('tabRef')
		if ($thisTabref!=$tabRef) {
			var $thistab = $(this).closest('.tab')
			animateAccordion($thistab, 'close', closeChevron())
		}
	})
});

// Animates accordion tabs between closed and open
// $tab: the tab to be animated
function animateAccordion($tab, $status, $chev) {
	var $content = $tab.find('.content');
	var $tabHead = $tab.find('.tabHead');
	
	if ($status==='open') {
		$content.animate({
			'height': $content.attr('maxHeight')
		}, $accordionSpeed)
		$tabHead.addClass('active')
	} else {
		$content.animate({
			'height': 0
		}, $accordionSpeed)
		$tabHead.removeClass('active')
	}

	if (typeof $chev != 'undefined') {
		var $chevron = $tab.find('.chevron');
		rotateElement($chevron, $chev);
	}
}

function rotateElement($ele, $deg) {
	$({'deg': $deg[0]}).animate({'deg': $deg[1]}, {
		'duration': $accordionSpeed,
		step: function(now) {
			$ele.css({
				'-webkit-transform': 'rotate('+now+'deg)',
				'-moz-transform': 'rotate('+now+'deg)',
				'transform': 'rotate('+now+'deg)'
			})
		}
	})
}

function openChevron() {
	return [0, -180]
}

function closeChevron() {
	return [-180, 0]
}

//---------- END OF ACCORDIONS ----------//





//---------- GENERIC INFO ----------//

$(document).on(triggerAction, '#needToKnowMenu div[activate]', function() {
	if (triggerAction === 'touchend' && $touchDragging) {return}
	$activate = $(this).attr('activate')
	$('.needToKnowContent').hide()
	$('.needToKnowContent[listenFor="'+$activate+'"]').show()
	$('#needToKnowMenu').removeClass('n2nShowing')
	$('#needToKnowMenu div[activate] p').removeClass('activeBorder')
	if (!$(this).hasClass('tabHead')) {
		$(this).find('p').addClass('activeBorder')
	}
	var $text = $(this).text()
	$(this).closest('.layerWindow:not(.touch)').find('.heading h1').text($text)
	$(this).closest('.layerWindow:not(.touch)').find('.heading h1').text($text)
});

//---------- END OF GENERIC INFO ----------//





//---------- GO TO TOPICS/PATHWAYS/MODULES ----------//

$(function() {
	var $altTab = $('.layerWindow[listenFor="getStarted"]').find('.subheading div:last-child')
		$altTab.removeClass('inactive')

	if ($('#diagnostic_completed').length > 0) {
		$('div[activate="Modules"]').click()
		$('div[activate="Topics"]').click()
		$('div[activate="Pathways"]').click()
	}
	
})

//---------- END OF GO TO TOPICS/PATHWAYS/MODULES ----------//





//---------- DEBUGGING ------------//

$(function() {
	var $debug = {
		colours: 'false',
	}

	if ($debug.colours === 'true') {
		var $rules = $stylesheet.cssRules
		for (var i = 0; i < $rules.length; i++) {
			var $rule = $rules[i].cssText
			console.log($rule)
		}
	}
});

//---------- END OF DEBUGGING ------------//