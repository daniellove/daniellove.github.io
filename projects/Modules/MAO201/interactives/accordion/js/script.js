$(function() {

	setTimeout(function() {
		$('.accordion').find('.tabContent').each(function() {
			$(this).wrap('<div class="tabOuter open"></div>')

			if ($(this).hasClass('tabMargin')) {
				$(this).parent().addClass('tabMargin')
				$(this).removeClass('tabMargin')
			}
		})
		setHeights()
		runAccordion()
	}, 200)

	function setHeights() {
		$('.accordion').find('.tabContent').each(function() {
			if (typeof $(this).attr('maxHeight') != 'undefined') {
				var maxHeight = $(this).attr('maxHeight')
				$(this).parent().attr('maxHeight', maxHeight)
				closeAccordion();
			} else {
				var maxHeight = $(this).parent().height()
				$(this).parent().attr('maxHeight', maxHeight)
				setTimeout(function() {
					var reset = false
					$(this).closest('.accordion').find('.tabOuter').each(function() {
						var maxHeight = $(this).attr('maxHeight')
						var thisheight = $(this).height()
						if (thisheight!=maxHeight) {
							reset = true
							$(this).attr('maxHeight', thisheight)
						}
					})
					if (reset) {
						setHeights();
					} else {
						closeAccordion();
					}				
				}, 100)
			}
		})
		function closeAccordion() {
			$('.accordion').each(function() {
				if ($(this).attr('init') != 'open') {
					$(this).find('.tabOuter').css('height',0)
					$(this).find('.tabOuter').removeClass('open')
				}
			})
		}
		return
	}
	function runAccordion() {
		var animateSpeed = 350
		$('.accordion').find('.tabButton').on('click', function() {
			var relatedContent = $(this).closest('.accordion').find('.tabContent[tabContent="'+$(this).attr('tabButton')+'"]').parent()
			if ($(this).closest('.accordion').attr('init') == 'open') {
				relatedContent.toggleClass('open')
				if (relatedContent.hasClass('open')) {
					var height = relatedContent.attr('maxHeight')
					relatedContent.stop().animate({'height':relatedContent.attr('maxHeight')}, animateSpeed)
				} else {
					relatedContent.stop().animate({'height':0}, animateSpeed)
				}
			} else {
		
				if (relatedContent.hasClass('open')) {
					relatedContent.stop().animate({'height':0}, animateSpeed)
					relatedContent.removeClass('open')
				} else {
					$('.tabOuter.open').stop().animate({'height':0}, animateSpeed)
					$('.tabOuter.open').removeClass('open')
					$(relatedContent).stop().animate({'height':relatedContent.attr('maxHeight')}, animateSpeed)
					relatedContent.addClass('open')
				}
			}
		})
	}	
})

$(function() {
	var	duplicateChecker = []
	$('.accordion').each(function() {
	    var ddLink  = document.createElement('link');
	    ddLink.rel  = 'stylesheet';
	    ddLink.type = 'text/css';
	    ddLink.href = 'interactives/accordion/css/'+$(this).attr('cssFile')+'.css';
		if ($.inArray(ddLink.href,duplicateChecker)<0) {
			duplicateChecker.push(ddLink.href)
			document.head.appendChild(ddLink);
		}	
	});
})