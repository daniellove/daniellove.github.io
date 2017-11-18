function toneColour($no, $op) {
	return 'rgba('+ $no +', '+ $no +', '+ $no +', '+ $op +')'
}

var $c = $colourScheme

$(function() {
	var $activeStyles = document.createElement('style')
	document.head.appendChild($activeStyles);
	$stylesheet = $activeStyles.sheet;

	var $newStyles = [{
		// Welcome banner
			tag: '#welcomeBanner h1',
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: '#welcomeBanner h2',
			style: {
				'color': toneColour(50, 1),
			}
		},{
			tag: '#buttonContainer h1',
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: '#buttonContainer .landingButton[activate="getStarted"]',
			style: {
				'color': toneColour(255, 1),
				'background-color': $c.second_standard,
			}
		},{
			tag: '#buttonContainer .landingButton[activate="getStarted"]:not(.touch):hover',
			style: {
				'background-color': $c.button_hover,
			}
		// Layer window generic
		},{
			tag: '#curtains',
			style: {
				'background-color': toneColour(0, 0.35),
			}
		},{
			tag: '.layerWindow',
			style: {
				'background-color': toneColour(255, 1),
			}
		},{
			tag: '.layerWindow .heading',
			style: {
				'color': toneColour(255, 1),
				'background-color': $c.primary_standard,
			}
		},{
			tag: '.layerWindow .backBox:not(.touch):hover, .layerWindow .closeBox:not(.touch):hover',
			style: {
				'background-color': toneColour(0, 0.15),
			}
		},{
			tag: '.subheading > div',
			style: {
				'color': toneColour(255, 1),
				'background-color': $c.second_dark,
			}
		},{
			tag: '.subheading > div.active',
			style: {
				'background-color': $c.second_standard,
			}
		},{
			tag: '.subheading > div.inactive',
			style: {
				'background-color': toneColour(200, 1),
			}
		// Course outline
		},{
			tag: '.outlineCircle',
			style: {
				'background-color': $c.primary_light,
			}
		},{
			tag: '.courseOutlineContent .tabHead',
			style: {
				'color': toneColour(100, 1),
			}
		},{
			tag: '.courseOutlineContent .tabHead:not(.touch):hover, .courseOutlineContent .tabHead.active',
			style: {
				'color': toneColour(255, 1),
				'background-color': $c.primary_standard,
			}
		},{
			tag: '.courseOutlineContent .standardCredits .chevron',
			style: {
				'background-color': toneColour(255, 1),
			}
		},{
			tag: '.outlineTopBar, .courseOutlineContent .infoBar',
			style: {
				'background-color': toneColour(250, 1),
			}
		},{
			tag: '.courseOutlineContent .content .subheading, .outlineTopBar p',
			style: {
				'color': toneColour(50, 1),
			}
		},{
			tag: '.courseOutlineContent .content .module',
			style: {
				'color': toneColour(100, 1),
			}
		// Need to know
		},{
			tag: '#needToKnowContainer .needToKnowContent, #needToKnowContainer .needToKnowContent:after',
			style: {
				'background-color': toneColour(255, 1),
			}
		},{
			tag: '#needToKnowMenu .tabHead',
			style: {
				'background-color': toneColour(200, 1),
			}
		},{
			tag: '#needToKnowMenu .submenuItem',
			style: {
				'background-color': toneColour(240, 1),
			}
		},{
			tag: '#needToKnowMenu .submenuItem:not(.touch):hover',
			style: {
				'background-color': toneColour(220, 1),
			}
		},{
			tag: '#needToKnowMenu p.activeBorder',
			style: {
				'border-color': $c.primary_standard,
			}
		// Instructions
		},{
			tag: '#instructions .buttons a',
			style: {
				'background-color': $c.primary_standard,
				'color': toneColour(255, 1),
			}
		},{
			tag: '#instructions .buttons .dropbox',
			style: {
				'background-color': $c.dropbox_standard,
			}
		},{
			tag: '#instructions p, #instructions li',
			style: {
				'color': toneColour(100, 1),
			}
		// Pathways/Topics/Modules
		},{
			tag: '.topicCircle h3',
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: '.moduleContainer .content h2',
			style: {
				'color': $c.primary_standard,
			}
		},{
			tag: '.moduleContainer .content h3',
			style: {
				'color':  toneColour(80, 1),
			}
		},{
			tag: '.moduleContainer .content p',
			style: {
				'color':  toneColour(100, 1),
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