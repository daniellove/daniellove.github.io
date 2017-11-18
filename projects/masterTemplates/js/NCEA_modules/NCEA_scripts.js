var packages = [
	//Needs to match the folder name in masterTemplates/Packages/
	'dragAndDrop',
	'accordion',
	'tabs',
	'infoTrigger',
	'clickTrigger',
	'audioTrigger',
	'captionTrigger',
	'OTLEmodal',
	'wordHighlighter',
	'typing',
	'audiojs',
	'flipCard',
	'carousel',
	'toggleButton',
	'radioQuiz',
	'multiQuiz',
	'dropQuiz',
]

var baseURL = 'https://tekura.desire2learn.com/shared/masterTemplates/';
// var baseURL = '/shared/masterTemplates/';
var jsAnchor = document.head.getElementsByTagName('SCRIPT')[0];
var jqScript = document.createElement('script');
	jqScript.setAttribute('type', 'text/javascript');
	jqScript.setAttribute('src', baseURL + 'js/jquery-2.0.2.min.js');
	document.head.insertBefore(jqScript, jsAnchor);


var NCEA_cssFiles = [
	baseURL + 'css/bootstrap.min.css',
	baseURL + 'css/NCEA_modules/NCEA_bsReset.css',
	baseURL + 'css/NCEA_modules/NCEA_styles.css',
	// baseURL + 'css/font-awesome-4.7.0/css/font-awesome.min.css',
]

var NCEA_jsFiles = [
	baseURL + 'js/orgUnitID.js',
	baseURL + 'js/NCEA_colourSchemes/COLOURSCHEME.js',
	'https://use.fontawesome.com/ba852c32c2.js',
	baseURL + 'js/NCEA_modules/NCEA_colours.js',
	baseURL + 'js/NCEA_modules/NCEA_functions.js',
]

checkForJQuery();

function checkForJQuery() {
	if (typeof window.jQuery === 'undefined') {
		setTimeout(checkForJQuery, 100);
	} else {
		var anchor = $(document.head).find('script')[0]
		$(anchor).attr('id', 'headAnchor');
		injectFiles(NCEA_cssFiles, 'css');
		injectFiles(NCEA_jsFiles, 'javascript');
		var jsPackages = [];
		var cssPackages = [];
		for (var i = packages.length - 1; i >= 0; i--) {
			if ($('.'+packages[i]).length > 0) {
				var cssPackage = baseURL + 'packages/'+packages[i]+'/css/styles.css';
				cssPackages.push(cssPackage);
				var jsPackage = baseURL + 'packages/'+packages[i]+'/js/script.js';
				jsPackages.push(jsPackage);
			}
		}
		setTimeout(function() {
			injectFiles(cssPackages, 'css');
			injectFiles(jsPackages, 'javascript');
		}, 100)
	}
}

function injectFiles(filePaths, fileType) {
	for (var i = 0; i < filePaths.length; i++) {
		switch (fileType) {
			case 'css':
				injectCss();
				break;
			case 'javascript':
				injectJs();
				break;
		}
	}
	function injectCss() {
		var tempFile = document.createElement('link');
			tempFile.setAttribute('rel', 'stylesheet');
			tempFile = genericAttr(tempFile, 'href');
		var anchor = $(document.head).find('#headAnchor');
		$(tempFile).insertBefore(anchor);
	}

	function injectJs() {
		var tempFile = document.createElement('script');
			tempFile = genericAttr(tempFile, 'src');
		var anchor = $(document.head).find('#headAnchor');
		if ($(document.head).find('#jsAnchor').length>0) {
			anchor = $(document.head).find('#jsAnchor');
		}
		$(tempFile).insertBefore(anchor);
		$(document.head).find('#jsAnchor').removeAttr('id');
		anchor.next().attr('id', 'jsAnchor');
	}

	function genericAttr(tempFile, linking) {
		var colourScheme = thisCourse.toLowerCase().split('');
			colourScheme[0] = colourScheme[0].toUpperCase();
			colourScheme = colourScheme.join('');
			colourScheme = 'NCEA_colourScheme' + colourScheme;

		tempFile.setAttribute('type', 'text/'+fileType);
		tempFile.setAttribute(linking, filePaths[i].replace('COLOURSCHEME', colourScheme));
		return tempFile;
	}
}