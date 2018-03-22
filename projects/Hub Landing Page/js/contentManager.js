var scr = document.createElement('link');
scr.setAttribute('rel', 'stylesheet');
scr.setAttribute('href', 'https://tekura.desire2learn.com/shared/Hub Landing Page/css/styles.css');
document.head.appendChild(scr)
;
$(function() {
	$('#LP_container').append([
		'<div id="butttonBlock">',
		'</div><div id="contentBlock">',
		'	<div class="instructions">',
		'		<span class="heading">'+$landingPageInstructions.heading.split('_').join(' ')+'</span>',
		'		<span class="content">'+$landingPageInstructions.content+'</span>',
		'	</div>',
		'</div>'
	].join(''))
	for (var $item in $accordionTabs) {
		generateAccordianTab($item)
		generateAccordianContent($item, $accordionTabs)
	}
})

function generateAccordianTab($item) {
	$('#butttonBlock').append([
		'<div class="accordionTab" activate="'+$item+'">',
		'	<img src="images/'+$item+'.png">',
		'	<span>'+$item.split('_').join(' ')+'</span>',
		'</div>'
	].join(''))
}



function generateAccordianContent($item, $accordionTabs) {
	$('#contentBlock').append('<div class="accordionContent" listenFor="'+$item+'"></div>')
	var $newContent = $('.accordionContent[listenFor="'+$item+'"]')
		var printedNumber = 1;
	for (var $itemNumber = 0; $itemNumber < $accordionTabs[$item].length; $itemNumber++) {
		var itemNumber = $itemNumber + 1;

		// if ($itemNumber.toString().length === 1) {
		// 	itemNumber = '0' + ($itemNumber + 1).toString()
		// } else {
		// 	itemNumber = $itemNumber + 1
		// }

		if($accordionTabs[$item][$itemNumber].intro) {
			$newContent.append([
			'	<div class="intro-box">',
			'		<span class="intro">'+$accordionTabs[$item][$itemNumber].intro+'</span>',
			'	</div>',
			'	<div class="clearDiv"></div>',
		].join(''))


		} else {
			$newContent.append([
			'<a href="'+$accordionTabs[$item][$itemNumber].link+'" class="contentContainer">',
			'	<div class="itemNumber"><span>'+printedNumber+'</span></div>',
			'	<div class="content">',
			'		<span class="heading">'+$accordionTabs[$item][$itemNumber].heading+'</span>',
			'		<span class="blurb">'+$accordionTabs[$item][$itemNumber].blurb+'</span>',
			'	</div>',
			'	<div class="clearDiv"></div>',
			'</a>',
		].join(''))

			printedNumber = printedNumber + 1;

		}

		
	}
}