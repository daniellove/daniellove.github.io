$genericInstuctions = {
	auth:{
		sheet: {
			text: 'Authentication sheet',
			link: 'https://tekura.desire2learn.com/shared/ncea-override/Authentication sheet.docx',
		},
		dropBox: {
			text: 'Authentication dropbox',
			link: $authLink,
		},
		content: [
			'<p>Before you begin this course, you and your supervisor must read and sign a declaration to say you understand the work you submit for assessment must be you own work. Click on the Authentication sheet button to download and complete the authenticity declaration. Once completed, upload it to dropbox.</p>',
		],
	}
}


if (typeof $diagnostic != 'undefined') {

	if ($diagnostic.buttons) {

		$genericInstuctions.diag = {
			content: [
				'<div>',
					'<div class="content">',
					'</div>',
				'</div>',
			],
		}

		var $buttonList = [
				'<div class="buttons">',
				'</div>',
			]

		for (var i = 0; i < $diagnostic.buttons.length; i++) {
			var $button = $diagnostic.buttons[i]
			var $dropbox = $button.name.search(/dropbox/i);
			if($dropbox != -1) {
				$buttonList.splice($buttonList.length-1, 0, '<a href="'+$button.link+'" target="blank" class="dropbox">'+$button.name+'</a>')
			} else {
				$buttonList.splice($buttonList.length-1, 0, '<a href="'+$button.link+'" target="blank">'+$button.name+'</a>')
			}
			
		}

		// console.log($buttonList);

		$genericInstuctions.diag.content.splice($genericInstuctions.diag.content.length-3, 0, $buttonList.join(""))

	} else {

		$genericInstuctions.diag = {
			content: [
				'<div>',
					'<div class="long-content">',
					'</div>',
				'</div>',
			],
		}

	}

	if($diagnostic.steps.length == 1) {

		$diagnosticWrap = [
			'<p>',
			'</p>',
		]

		for (var i = 0; i < $diagnostic.steps.length; i++) {
			var $step = $diagnostic.steps[i]
			$diagnosticWrap.splice($diagnosticWrap.length-1, 0, $step)
		}

	} else {

		$diagnosticWrap = [
			'<p style="margin-bottom:10px;">'+$diagnostic.initialText+'</p>',
			'<ol>',
			'</ol>',
		]
		
		for (var i = 0; i < $diagnostic.steps.length; i++) {
			var $step = $diagnostic.steps[i]
			$diagnosticWrap.splice($diagnosticWrap.length-1, 0, '<li>'+$step+'</li>')
		}
	}

	$genericInstuctions.diag.content.splice($genericInstuctions.diag.content.length-2, 0, $diagnosticWrap.join(""))


} /* end of initial $dignostic check*/ 
