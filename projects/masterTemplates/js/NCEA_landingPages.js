var $pageURL = $(location).attr('href');
if ($pageURL.includes('desire2learn')) {

	var $courseLink = 'https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode
	var $masterLink = 'https://tekura.desire2learn.com/shared/masterTemplates'

	var $NCEA_styles =  $masterLink+'/css/NCEA_LandingPage'
	$(document.head).append(newStyle($NCEA_styles))

	var $NCEA_links = {
		content: [
			$courseLink+'/baseFiles/js/outline',
			$courseLink+'/baseFiles/js/needToKnow',
			$courseLink+'/baseFiles/js/modules',
			$courseLink+'/baseFiles/js/banner',
			$courseLink+'/baseFiles/js/diagnostics',
			$masterLink+'/js/NCEA_landingPages/NCEA_genericInfo',
			$masterLink+'/js/NCEA_landingPages/NCEA_authLinks',
			$masterLink+'/js/NCEA_colourSchemes/NCEA_colourScheme'+$colourFile,
		],
		scripts: [
			$masterLink+'/js/NCEA_landingPages/NCEA_genericInstructions',
			$masterLink+'/js/NCEA_landingPages/NCEA_contentManager',
			$masterLink+'/js/NCEA_landingPages/NCEA_colours',
			$masterLink+'/js/NCEA_landingPages/NCEA_mechanics',
			$masterLink+'/js/NCEA_landingPages/NCEA_unlockModules',
		]
	}

	for (var i = 0; i < $NCEA_links.content.length; i++) {
		var $script = newScript($NCEA_links.content[i])
		$(document.body).append($script)
	}

	var $delayedScripts = []
	var $delayedIndex = 0
	for (var i = 0; i < $NCEA_links.scripts.length; i++) {
		var $script = newScript($NCEA_links.scripts[i])
		$delayedScripts.push($script)
		setTimeout(function() {
			$(document.body).append($delayedScripts[$delayedIndex])
			$delayedIndex++
		}, (1000+i*200))
	}

	function newStyle($link) {
		return '<link rel="stylesheet" type="text/css" href="'+$link+'.css">'
	}

	function newScript($link) {
		return '<script type="text/javascript" src="'+$link+'.js"></script>'
	}
}