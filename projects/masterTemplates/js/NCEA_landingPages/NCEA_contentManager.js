//---------- COURSE OUTLINE ----------//

//	Adds the backdrop
var $courseOutline = true
var $outlineContent = []
var $fullO = typeof $outlineFull
var $partO = typeof $outlinePartial


/*Daylight adds borders, margin and padding to all widgets, including the invisiable widgets that release conditions depend on!
The below code will loop thorugh ALL widgets on the landing page, ascertain whether the widget heading contains any of the keywords,
and then would removw the border, padding and margin if the keyword is present*/

/*Insert any new keywords in the widget heading into this array*/
 var widgetKeyWords = ['Unlock', 'UNLOCK', 'CSS', 'Activate', 'Show', 'diagnostic_completed'];

  /*Code that loops thorugh the widgets on each NCEA Landing Page*/
  $('.d2l-widget').each(function(){
    for(var i = 0; i < widgetKeyWords.length; i++) {
      if($(this).find('.d2l-heading:contains("' + widgetKeyWords[i] + '")').length) {
        $(this).css({'border-bottom':'none', 'margin-bottom':'0px', 'padding-bottom': '0px', 'height':'0px', 'overflow': 'hidden'})
      }
    }
  })



//	Populates category circles if required
if ($fullO === 'undefined' && $partO === 'undefined') {
	$courseOutline = false

} else if ($fullO != 'undefined') {
	//	Generates layer
	var $categoriesTop = generateLayerWindow('courseOutline', $course, 'noBack')

	//	Creates circles container and adds positioning based on .length
	var $outlineCircles = [
		'<div id="outlineCircles" circles="'+$outlineFull.length+'">',
		'</div>'
	]

	//	Used in the following loop to group all of the class="layerWindow" category windows
	
	//	Loops through each category
	for (var i = 0; i < $outlineFull.length; i++) {
		var $activator = 'outline'+i
		//	Creates the circle for each category
		var $category = [
			'<div activate="'+$activator+'" class="outlineCircle">',
			'	<p>'+$outlineFull[i].title+'</p>',
			'</div>'
		].join("")

		//	Inserts the circles html into their container
		$outlineCircles.splice($outlineCircles.length-1, 0, $category)

		//	Creates a class="layerWindow" for each category activated by the circle
		var $categoryLayer = generateLayerWindow($activator, $course+' &ndash; '+$outlineFull[i].title)
		
		//	Adds the standards to the layer
			$categoryLayer = populateStandards($categoryLayer, $outlineFull[i])
		
		//	Adds the content layer to the categories grouping
		$outlineContent.push($categoryLayer.join(""))
	}
	
	//	Insters the category circles into the top layer
	$categoriesTop.splice($categoriesTop.length-1, 0, $outlineCircles.join(""))
	
	//	Adds the top layer to the course outline activator
	$courseOutline = []
	$courseOutline.push($categoriesTop.join(""))
} else if ($partO != 'undefined') {
	var $outlineLayer = generateLayerWindow('courseOutline', $course, 'noBack')
	$outlineContent = populateStandards($outlineLayer, $outlinePartial)
	$courseOutline = []
}


if ($courseOutline) {
	//	Adds the content layers to the course outline activator
	$courseOutline.push($outlineContent.join(""))
}



//	Populates an array with standards information
//	$layerWindow: the layer that is being populated
//	$standardsObject: the object containing all of the standards information
function populateStandards($layerWindow, $standardsObject) {
	//	Text to display in the subheadings and used to activate related information
	var $internal = 'Internal'
	var $external = 'External'
	
	//	Creates the contaners for internal and external standards
	var	$internalWindow = outlineTopBar($internal)
	var	$externalWindow = outlineTopBar($external)
	
	// Used later on to grey out one of the subheadings if needed
	var $inactive = null
	//	Generates the internal tabs containing standards and module information
	var $internals = $standardsObject.internalStandards
	if (typeof $internals != 'undefined') {
			$internals = populateTabs($internals)
		$internalWindow.splice($internalWindow.length-1, 0, $internals)
	} else {
		$inactive = $internal
	}
	
	//	Generates the external tabs containing standards and module information
	var $externals = $standardsObject.externalStandards
	if (typeof $externals != 'undefined') {
			$externals = populateTabs($externals)
		$externalWindow.splice($externalWindow.length-1, 0, $externals)
	} else {
		$inactive = $external
	}

	//	Creates activatable/inactive subheadings
	var	$subheading = layerSubheadings($internal, $external, $inactive)
	
	//	groups the internal and external tabs then inserts them into their container (part of the $subheading)
	var $content = $internalWindow.join("") + $externalWindow.join("")
	$subheading.splice($subheading.length-1, 0, $content)
	
	//	Adds the subheading+content to the layer
	$layerWindow.splice($layerWindow.length-1, 0, $subheading.join(""))
	
	// Returns the adapted layer
	return $layerWindow

	//	Creates a container holding all the standard information for internals or externals
	function populateTabs($standards) {
		//	Used to group all the tabs together
		var $tabs = []

		//	Loops through the standards and creates a tab for each using the information in online.js
		for (var i = 0; i < $standards.length; i++) {
			var $standard = $standards[i]
			var $tab = [
				'<div class="tab">',
				'	<div class="tabHead">',
				'		<div class="standardNumber"><p>'+$standard.number+'</p></div>',
				'		<div class="standardDescription"><p>'+$standard.description+'</p></div>',
				'		<div class="standardCredits">',
				'			<p>'+$standard.credits+'</p>',
				'			<div class="chevron">',
				'				<img src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/baseFiles/images/chevron.png">',
				'			</div>',
				'		</div>',
				'	</div>',
				'	<div class="content">',
				'		<div class="subheading"><p>'+$standard.subheading+'</p></div>',
				'	</div>',
				'</div>',
			]

			//	Loops through each modules for the related standard
			var $modules = $standard.modules
			for (var j = 0; j < $modules.length; j++) {
				var $module = $modules[j]
					$module = [
						'<div class="module">',
						'	<div><p>'+$module.code+'</p></div>',
						'	<div><p>'+$module.title+'</p></div>',
						'</div>'
					]
				//	Insterts the modules below the subheading
				$tab.splice($tab.length-2, 0, $module.join(""))
			}

			//	Groups the tabs
			$tabs.push($tab.join(""))
		}
		// Returns the tabs for either internal or external standards
		return $tabs.join("")
	}

	//	Creates the top bar for the internal and external tabs
	function outlineTopBar($activator) {
		return [
			'<div listenFor="'+$activator+'" class="courseOutlineContent accordion">',
			'	<div class="outlineTopBar">',
			'		<div><p>Standard</p></div>',
			'		<div><p>Description</p></div>',
			'		<div><p>Credits</p></div>',
			'	</div>',
			'</div>'
		]
	}
}

//---------- END OF COURSE OUTLINE ----------//




//---------- NEED TO KNOW ----------//

//	Adds the backdrop
var $needToKnow = []
var $needToKnowLayer = generateLayerWindow('needToKnow', 'Welcome to ' + $course, 'noBack')
var $needToKnowFull = [
	'<div id="needToKnowContainer">',
		'<div listenFor="needToKnowWelcome" class="needToKnowContent">',
			$needToKnowContent.join(""),
		'</div>',
	'</div>'
]

if (typeof $needToKnowPartial === 'undefined') {
	$needToKnowFull = getGenericContent($needToKnowFull)
	var $needToKnowMenu = [
		'<div id="needToKnowMenu" class="accordion">',
			getGenericMenu(),
		'</div>',
	].join("")
	$needToKnowFull.splice($needToKnowFull.length-1, 0, $needToKnowMenu)
} else {
	$needToKnowFull.splice(1, 1, '<div listenFor="needToKnowWelcome" class="needToKnowContent needToKnowPartial">')
}


function getGenericMenu() {
	var $menu = []
	for (var i = 0; i < $needToKnowGeneric.length; i++) {
		var $button = $needToKnowGeneric[i]
		var $tab = [
			'<div class="tab">',
			'	<div class="tabHead">',
			'		<p>'+$button.text+'</p>',
			'	</div>',
			'	<div class="content">',
			'	</div>',
			'</div>',
		]

		if (i === 0) {
			$tab[1] = '<div activate="needToKnowWelcome" class="tabHead">'
		} else {
			var $chevron = '<img class="chevron" src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/baseFiles/images/chevron.png">'
			$tab.splice(3, 0, $chevron)
		}
		
		var $submenu = []
		var $activator = $button.activator
		if (typeof $button.menu != 'undefined') {
			for (var $key in $button.menu) {
				var $submenuItem = [
					'<div activate="'+$activator+'_'+$key+'" class="submenuItem">',
						'<p>'+eval('$button.menu.'+$key)+'</p>',
					'</div>'
				]
				$submenu.push($submenuItem.join(""))
			}
		}
		$tab.splice($tab.length-2, 0, $submenu.join(""))
		$menu.push($tab.join(""))
	}
	return $menu.join("")
}

function getGenericContent($content) {
	// Skipes 'Welcome to $course' button
	for (var i = 1; i < $needToKnowGeneric.length; i++) {
		var $activator = $needToKnowGeneric[i].activator
		var $obj = $needToKnowGeneric[i].content
		for (var $key in $obj) {
			var $contentItem = [
				'<div listenFor="'+$activator+'_'+$key+'" class="needToKnowContent">',
					eval('$obj.'+$key),
				'</div>'
			].join("")
			$content.splice($content.length-1, 0, $contentItem)
		}
	}
	return $content
}

$needToKnowLayer.splice($needToKnowLayer.length-1, 0, $needToKnowFull.join(""))
$needToKnow.push($needToKnowLayer.join(""))

//---------- END OF NEED TO KNOW ----------//





//---------- TOPICS/PATHWAYS/MODULES ---------- //

var $moduleContent = []

var $moduleLayerWindow = generateLayerWindow('getStarted', $courseCode + ' &ndash; ' + $course, 'noBack')
var $instructionsTitle = 'Instructions'
if ((typeof $noInstructions != 'undefined') && $noInstructions) {
	$instructionsTitle = false
}
var $moduleLayerContent = layerSubheadings($instructionsTitle, $tabType, $tabType)	

$moduleLayerContent = addInstructions($moduleLayerContent)

var $circlesContainer = [
	'<div listenFor="'+$tabType+'">',
	'</div>',
]

if ($tabType!='Modules' && typeof $courseTop != 'undefined') {
	var $totalGroups = 0
	for (var i in $courseTop) {
		$totalGroups++
	}
	for (var $grouping in $courseTop) {
		$groupingText = $grouping.replace('_', ' ')
		var $group = [
			'<div activate="'+$grouping+'" class="topicCircle">',
				'<img src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/circleImages/'+eval('$courseTop.'+$grouping+'["image"]')+'.png">',
				'<h3>'+$groupingText+'</h3>',
			'</div>',
		]
		// if ($tabType==='Pathways') {
			$group.splice($group.length-1, 0, '<p>'+eval('$courseTop.'+$grouping+'["text"]')+'</p>')
		// }
		if ($tabType==='Topics') {
			$group[0] = $group[0].replace('>', 'topics="'+$totalGroups+'">')
		}
		$circlesContainer.splice($circlesContainer.length-1, 0, $group.join(""))
		var $groupLayer = generateLayerWindow($grouping, $course + ' &ndash; ' + $groupingText)
		var $groupLayerContent = layerSubheadings($instructionsTitle, 'Modules')	
		$groupLayerContent = addInstructions($groupLayerContent)

		var $groupModules = {}
		for (var $module in $modules) {
			var $groups = eval('$modules.'+$module+'.groups')
			for (var i = 0; i < $groups.length; i++) {
				if ($grouping===$groups[i]) {
					eval('$groupModules.'+$module+' = $modules.'+$module)
				}
			}
		}

		$groupLayerContent = addModules($groupLayerContent, $groupModules)

		$groupLayer.splice($groupLayer.length-1, 0, $groupLayerContent.join(""))

		$moduleContent.push($groupLayer.join(""))
	}
} else {
	$circlesContainer = addModules($circlesContainer, $modules)
}

$moduleLayerContent.splice($moduleLayerContent.length-1, 0, $circlesContainer.join(""))

function addModules($layerContent, $layerModules) {
	var $moduleContent = [
		'<div listenFor="Modules" class="moduleContainer">',
		'</div>',
	]

	for (var $code in $layerModules) {

		if(typeof $diagnosticRequiredForModuleRelease === 'undefined') {

			// console.log('First iteration of loop activated.')

			var $module = [
				'<div>',
				'	<a href="'+eval('$layerModules.'+$code+'.link')+'" target="_self">',
				'		<img src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/circleImages/'+$code+'.png">',
				'		<div class="content">',
				'			<h2>'+$code+'</h2>',
				'			<h3>'+eval('$layerModules.'+$code+'.title')+'</h3>',
				'		</div>',
				'	</a>',
				'</div>',
			]

		} else if ($diagnosticRequiredForModuleRelease) {
			// console.log('Second iteration of loop activated.')

			var $module = [
				'<div>',
				'	<a class="inactiveModule" href="'+eval('$layerModules.'+$code+'.link')+'" target="_self">',
				'		<img src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/circleImages/'+$code+'.png">',
				'		<div class="content">',
				'			<h2>'+$code+'</h2>',
				'			<h3>'+eval('$layerModules.'+$code+'.title')+'</h3>',
				'		</div>',
				'	</a>',
				'</div>',
			]

		}

		
		if (typeof eval('$layerModules.'+$code+'.blurb') != 'undefined' && eval('$layerModules.'+$code+'.blurb') != '') {
			$module.splice($module.length-3, 0, '<p>'+eval('$layerModules.'+$code+'.blurb')+'</p>')
		} else {
			$module[2] = $module[2].replace('content', 'content noBlurb')
		}
		$moduleContent.splice($moduleContent.length-1, 0, $module.join(""))
	}
	$layerContent.splice($layerContent.length-1, 0, $moduleContent.join(""))

	return $layerContent
}


function checkCoursePath() {
	if (typeof $coursePath === 'undefined') {
		return false
	} else if ($tabType!='Modules') {
		return false
	} else {
		return true
	}
}

function addInstructions($layerContent) {
	var $instructionsContent = [
	'<div listenFor="Instructions" id="instructions">',
		'<div>',
			'<div class="buttons">',
				'<a href="'+$genericInstuctions.auth.sheet.link+'" target="blank">'+$genericInstuctions.auth.sheet.text+'</a>',
				'<a class="dropbox" href="'+$genericInstuctions.auth.dropBox.link+'" target="blank">'+$genericInstuctions.auth.dropBox.text+'</a>',
			'</div>',
			'<div class="content">',
				$genericInstuctions.auth.content.join(""),
			'</div>',
		'</div>',
	'</div>',
	]

	if (typeof $safetyDeclaration != 'undefined') {

		var $safetyContent = [
			'<div id="safety-declaration">',
				'<div class="buttons">',
					'<a href="'+$safetyDeclaration.sheet.link+'" target="blank">'+$safetyDeclaration.sheet.text+'</a>',
					'<a class="dropbox" href="'+$safetyDeclaration.dropBox.link+'" target="blank">'+$safetyDeclaration.dropBox.text+'</a>',
				'</div>',
				'<div class="content">',
					'<p>'+$safetyDeclaration.content.join("")+'</p>',
				'</div>',
			'</div>',
		]

		$instructionsContent.splice($instructionsContent.length-2, 0, $safetyContent.join(""))

	}


	if (typeof $diagnostic != 'undefined') {

		$instructionsContent.splice($instructionsContent.length-1, 0, $genericInstuctions.diag.content.join(""))

	}

	$layerContent.splice($layerContent.length-1, 0, $instructionsContent.join(""))

	return $layerContent
	
}




$moduleLayerWindow.splice($moduleLayerWindow.length-1, 0, $moduleLayerContent.join(""))
$moduleContent.splice(0, 0, $moduleLayerWindow.join(""))

//---------- END OF TOPICS/PATHWAYS/MODULES ----------//





//---------- WELCOME BANNER----------//

//	Creates the container for the welcome banner using banner.js
var $welcomeBanner = [
	'<div id="welcomeBanner">',
	'	<img id="bannerImage" src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/baseFiles/images/banner.jpg"><div id="bannerFade"></div>',
	'	<div id="courseWelcome">',
	'		<h1>'+$course+'</h1>',
	'		<h2>'+$welcomeContent.subheading+'</h2>',
	'	</div>',
	'</div>',
	// Adds curtains
	'<div id="curtains" class="zBg"></div>'
]

//	Generates the paragraphs for the banner
var $pTags = $welcomeContent.content
for (var i = 0; i <  $pTags.length; i++) {
	var $pTag = '<p>'+$welcomeContent.content[i]+'</p>'
	//	Insters the <p> tag below the <h2> tag
	$welcomeBanner.splice($welcomeBanner.length-3, 0, $pTag)
}

//---------- END OF WELCOME BANNER ----------//





//---------- GENERIC FUNCTIONS ----------//

//	Creates a template class="layerWindow" that displays when a button is pushed
//	$listenFor: what you want it to activate fromoptions
//	$layerTitle: text to display at the top of the window
//	$options: more than one option can be used when separated by ||
//		'noBack': for there to be no '<' button, used for the top layer
function generateLayerWindow($listenFor, $layerTitle, $options) {
	var $layerWindow = [
		'<div listenFor="'+$listenFor+'" class="layerWindow zBg">',
		'	<div class="heading">',
		'		<div class="backBox"></div>',
		'		<h1>'+$layerTitle+'</h1>',
		'		<div class="closeBox"></div>',
		'	</div>',
		'</div>'
	]
	if (typeof $options != 'undefined') {
		$options = $options.split('||')
		for (var i = 0; i < $options.length; i++) {
			switch ($options[i]) {
				case 'noBack':
					$layerWindow.splice(2, 1)
					break;
			}
		}
	}
	return $layerWindow
}

//	Creates the activatable subheadings in the layerwindows
//	$left and $right:
//		text to be displayed in respective boxes
//		used to activate related content
//		$left will be active unless countered in NCEA_LandingPage.js
//	Also creates a generic class="layerContentContainer"
function layerSubheadings($left, $right, $inactive) {
	//	Standard/template heading
	var $subheading = '<div activate="ACTIVATOR" class="active">'
	var $h1 = $subheading.replace('ACTIVATOR', $left)
	var $h2 = $subheading.replace('ACTIVATOR', $right)

	if (!$left) {
		$inactive = false
	}
	
	//	Checks if either subheading is unclickable
	switch ($inactive) {
		case $left:
			// Makes the $right heading active if the $left is inactive
			$h1 = $h1.replace('active', 'inactive')
			break;
		case $right:
			// Makes the $left heading active if the $right is inactive
			$h2 = $h2.replace('active', 'inactive')
			break;
		default:
			// Makes $left active if they are both clickable
			$h2 = $h2.replace('active', '')
	}

	// Creates subheadings with the above info
	var $subheadings = [
		'<div class="subheading">',
			$h1,
		'		<p>'+$left+'</p>',
		'	</div>',
			$h2,
		'		<p>'+$right+'</p>',
		'	</div>',
		'</div>',
		'<div class="layerContentContainer">',
		'</div>'
	] // Do not .join("") as info gets added to class="layerContentContainer"
	return $subheadings
}

//	Joins all the content from banner.js, outline.js, needToKnow.js and topcs.js
var $content = ''
var $welcomeButtons = [
	'<div id="buttonContainer">',
	'</div>'
]

if ($courseOutline) {
	$content += $courseOutline.join("")
	$welcomeButtons.splice($welcomeButtons.length-1, 0, [
	'<div activate="courseOutline" class="landingButton">',
	'	<img id="infoIcon" src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/baseFiles/images/info.png">',
	'	<h1>Course outline</h1>',
	'	<p>Standards and credits</p>',
	'</div>',
	].join(''))
}
if ($needToKnow) {
	$content += $needToKnow.join("")
	$n2nText = 'Need to know'
	$n2nSub = 'Study and assessment'
	if (typeof $needToKnowAltText != 'undefined') {
		$n2nText = $needToKnowAltText
	}
	if (typeof $needToKnowAltSub != 'undefined') {
		$n2nSub = $needToKnowAltSub
	}
	$welcomeButtons.splice($welcomeButtons.length-1, 0, [
	'<div activate="needToKnow" class="landingButton">',
	'	<img id="eyeIcon" src="https://tekura.desire2learn.com/shared/'+$nceaLevel+'/'+$courseCode+'/baseFiles/images/eye.png">',
	'	<h1>'+ $n2nText +'</h1>',
	'	<p>'+ $n2nSub +'</p>',
	'</div>',
	].join(''))
}
if ($moduleContent) {
	$content += $moduleContent.join("")
	$welcomeButtons.splice($welcomeButtons.length-1, 0, [
	'<div>',
	'	<div>',
	'		<div activate="getStarted" class="landingButton" secondary="'+$welcomeContent.startButton.secondary+'">'+$welcomeContent.startButton.initial+'</div>',
	'	</div>',
	'</div>',
	].join(''))
}
$welcomeBanner.splice($welcomeBanner.length-2, 0, $welcomeButtons.join(""))
$content = $welcomeBanner.join("") + $content
//	Insters content into the page once loaded
$(function() {
	$('#NCEA_container').html($content);
})

//---------- END OF GENERIC FUNCTIONS ----------//