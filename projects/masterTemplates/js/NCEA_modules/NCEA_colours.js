function toneColour($no, $op) {
	return 'rgba('+ $no +', '+ $no +', '+ $no +', '+ $op +')'
}

checkForColours();

function checkForColours() {
	if (typeof $colourScheme === 'undefined') {
		setTimeout(checkForColours, 100);
	} else {
		addColourStylesheet();
	}
}

function addColourStylesheet() {
	var $c = $colourScheme

	$(function() {
		var $activeStyles = document.createElement('style')
		document.head.appendChild($activeStyles);
		$stylesheet = $activeStyles.sheet;

		var $newStyles = [{
		// Inline-styles
			tag: [
				'*[BackgroundColour="primary_standard"]'
			].join(', '),
			style: {
				'background-color': $c.primary_standard,
			}
		},{
			tag: [
				'*[TextColour="primary_standard"]'
			].join(', '),
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: [
				'*[BackgroundColour="primary_dark"]'
			].join(', '),
			style: {
				'background-color': $c.primary_dark,
			}
		},{
			tag: [
				'*[TextColour="primary_dark"]'
			].join(', '),
			style: {
				'color': $c.primary_dark,
			}
		},{
			tag: [
				'*[BackgroundColour="primary_light"]'
			].join(', '),
			style: {
				'background-color': $c.primary_light,
			}
		},{
			tag: [
				'*[TextColour="primary_light"]'
			].join(', '),
			style: {
				'color': $c.primary_light,
			}
		},{
			tag: [
				'*[BackgroundColour="primary_lightest"]'
			].join(', '),
			style: {
				'background-color': $c.primary_lightest,
			}
		},{
			tag: [
				'*[TextColour="primary_lightest"]'
			].join(', '),
			style: {
				'color': $c.primary_lightest,
			}
		},{
			tag: [
				'*[BackgroundColour="second_standard"]'
			].join(', '),
			style: {
				'background-color': $c.second_standard,
			}
		},{
			tag: [
				'*[TextColour="second_standard"]'
			].join(', '),
			style: {
				'color': $c.second_standard,
			}
		},{
			tag: [
				'*[BackgroundColour="second_dark"]'
			].join(', '),
			style: {
				'background-color': $c.second_dark,
			}
		},{
			tag: [
				'*[TextColour="second_dark"]'
			].join(', '),
			style: {
				'color': $c.second_dark,
			}
		},{
			tag: [
				'*[BackgroundColour="second_light"]'
			].join(', '),
			style: {
				'background-color': $c.second_light,
			}
		},{
			tag: [
				'*[TextColour="second_light"]'
			].join(', '),
			style: {
				'color': $c.second_light,
			}
		},{
			tag: [
				'*[BackgroundColour="second_lightest"]'
			].join(', '),
			style: {
				'background-color': $c.second_lightest,
			}
		},{
			tag: [
				'*[TextColour="second_lightest"]'
			].join(', '),
			style: {
				'color': $c.second_lightest,
			}
		},{
			tag: [
				'*[BackgroundColour="dropbox_standard"]'
			].join(', '),
			style: {
				'background-color': $c.dropbox_standard,
			}
		},{
			tag: [
				'*[TextColour="dropbox_standard"]'
			].join(', '),
			style: {
				'color': $c.dropbox_standard,
			}
		},{
			tag: [
				'*[BackgroundColour="dropbox_dark"]'
			].join(', '),
			style: {
				'background-color': $c.dropbox_dark,
			}
		},{
			tag: [
				'*[TextColour="dropbox_dark"]'
			].join(', '),
			style: {
				'color': $c.dropbox_dark,
			}
		},{
			tag: [
				'*[BackgroundColour="dropbox_light"]'
			].join(', '),
			style: {
				'background-color': $c.dropbox_light,
			}
		},{
			tag: [
				'*[TextColour="dropbox_light"]'
			].join(', '),
			style: {
				'color': $c.dropbox_light,
			}
		},{
			tag: [
				'*[BackgroundColour="dropbox_lightest"]'
			].join(', '),
			style: {
				'background-color': $c.dropbox_lightest,
			}
		},{
			tag: [
				'*[TextColour="dropbox_lightest"]'
			].join(', '),
			style: {
				'color': $c.dropbox_lightest,
			}
		},{
			// General styles
			tag: [
				'h2','h3','h4'
			].join(', '),
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: '.panel-default>.panel-heading',
			style: {
				'border-color': $c.primary_standard,
				'background-color': $c.primary_standard
			}
		},{
			// General buttons
			tag: [
			'.btn-primary',
			'.btn-primary:focus',
			'.btn-primary.focus',
			'.btn-primary:active',
			'.btn-primary.active',
			'.btn-primary.active.focus',
			'.btn-primary.active:focus',
			'.btn-primary.active:hover',
			'.btn-primary:active.focus',
			'.btn-primary:active:focus',
			'.btn-primary:active:hover',
			'.open>.dropdown-toggle.btn-primary.focus',
			'.open>.dropdown-toggle.btn-primary:focus',
			'.open>.dropdown-toggle.btn-primary:hover'
			].join(', '),
			style: {
				'border-color': $c.primary_standard,
				'background-color': $c.primary_standard
			}
		},{
			tag: [
			'.btn-primary:hover',
			'.open>.dropdown-toggle.btn-primary'
			].join(', '),
			style: {
				'border-color': toneColour(0, 0),
				'background-color': $c.primary_light
			}
		},{
			tag: [
			'.externalButton',
			'.externalButton:focus',
			'.externalButton.focus',
			'.externalButton:active',
			'.externalButton.active',
			'.externalButton.active.focus',
			'.externalButton.active:focus',
			'.externalButton.active:hover',
			'.externalButton:active.focus',
			'.externalButton:active:focus',
			'.externalButton:active:hover',
			'.open>.dropdown-toggle.externalButton.focus',
			'.open>.dropdown-toggle.externalButton:focus',
			'.open>.dropdown-toggle.externalButton:hover'
			].join(', '),
			style: {
				'border-color': $c.second_standard,
				'background-color': $c.second_standard
			}
		},{
			tag: '.externalButton:hover',
			style: {
				'border-color': toneColour(0, 0),
				'background-color': $c.second_light
			}
		},{
			// Check and Reset buttons (interactives)
			tag: [
			'.btn-primary.reset',
			'.btn-primary.undo',
			'.btn-primary.checkAnswer'
			].join(', '),
			style: {
				'color': $c.primary_standard,
				'border-color': $c.primary_standard,
				'background-color': 'transparent'
			}
		},{
			tag: [
			'.btn-primary.reset:hover',
			'.btn-primary.undo:hover',
			'.btn-primary.checkAnswer:hover'
			].join(', '),
			style: {
				'color': toneColour(255, 1),
				'background-color': $c.primary_standard,
				'border-color': $c.primary_standard
			}
		},{
			// General alert
			tag: '.importantAlert',
			style: {
				'border-color': $c.primary_standard,
				'background-color': $c.primary_lightest
			}
		},{
			tag: '.cautionAlert',
			style: {
				'border-color': $c.second_standard,
				'background-color': $c.second_lightest
			}
		},{
			tag: '.importantAlert-sidebar',
			style: {
				'border-color': $c.primary_standard,
				'background-color': $c.primary_lightest
			}
		},{
			tag: '.cautionAlert-sidebar',
			style: {
				'border-color': $c.second_standard,
				'background-color': $c.second_lightest
			}
		},{
			tag: '#moduleHeaderContainer',
			style: {
				'background-color': $c.primary_standard
			}
		},{
			// Nav dropdown
			tag: '.dropdownChevron',
			style: {
				'color': $c.primary_standard
			}
		},{
			tag: [
			'.nceaStandardContainer',
			'.timeFrameContainer'
			].join(','),
			style: {
				'border-color': $c.primary_standard
			}
		},{
			tag: '.timeFrameContainer p',
			style: {
				'color': $c.primary_standard
			}
		},{
			tag: '.dlFullModuleContainer',
			style: {
				'border-color': $c.second_standard
			}
		},{
			tag: '.dlFullModuleContainer p',
			style: {
				'color': $c.second_standard
			}
		},{
			// Activity panels
			tag: '.activity:hover .panel-body',
			style: {
				'border-color': $c.primary_standard
			}
		},{
			// Activity dropbox
			tag: '.dropbox:hover .panel-body',
			style: {
				'border-color': $c.dropbox_standard
			}
		},{
			tag: [
			'.dropbox>.panel-heading',
			'.dropbox .btn-primary'
			].join(','),
			style: {
				'background-color': $c.dropbox_standard,
				'border-color': $c.dropbox_standard
			}
		},{
			tag: '.dropbox>.panel-heading',
			style: {
				'color': toneColour(255, 1)
			}
		},{
			tag: '.dropbox .btn-primary:hover',
			style: {
				'background-color': $c.dropbox_light,
				'border-color': $c.dropbox_standard
			}
		},{
			// Tabs
			tag: '.nav-tabs',
			style: {
				'border-color': $c.primary_standard
			}
		},{
			tag: [
			'.nav-tabs>li.active>a',
			'.nav-tabs>li.active>a:hover',
			'.nav-tabs>li.active>a:focus'
			].join(','),
			style: {
				'background-color': $c.primary_standard
			}
		},{
			// Footer
			tag: '.progress-bar',
			style: {
				'background-color': $c.primary_standard
			}
		},{
			tag: [
			'#back-link>i',
			'#forward-link>i'
			].join(','),
			style: {
				'color': $c.primary_standard
			}
		}
		]

		for (var i = $newStyles.length - 1; i >= 0; i--) {
			var $block = $newStyles[i]
			var $tag = $block.tag
			var $styles = []
			for (var $selector in $block.style) {
				var $style = eval('$block.style["'+$selector+'"]')+';'
				var $line = $selector + ' : ' + $style
				$styles.push($line)
			}
			var $rule = $tag + ' { ' + $styles.join("") + '}'
			$stylesheet.insertRule($rule, 0);
		}
	});
}