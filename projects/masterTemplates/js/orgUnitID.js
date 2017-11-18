
// Inject master .js and .css into parent document (OTLE)
var par = parent;
while (par !== par.parent) {
	par = par.parent;
}

var scr = par.document.createElement('script');
scr.setAttribute('type', 'text/javascript');
scr.setAttribute('src', '/shared/master-css-file/your-javascript-file.js');
par.document.head.appendChild(scr);

var lnk = par.document.createElement('link');
lnk.setAttribute('type', 'text/css');
lnk.setAttribute('rel', 'stylesheet');
lnk.setAttribute('href', '/shared/master-css-file/override-styles.css');
par.document.head.appendChild(lnk);

// var bodyContent = par.document.body;
// var title = bodyContent.find('.d2l-navigation-s-link');
// console.log(title);

// if($('.d2l-navigation-s-link:contains("NCEA Level 1")', parent.document)) {
// 	console.log($(this).html());
// }

// console.log($('.d2l-navigation-s-link:contains("NCEA Level 1")', parent.document));

$(document).ready(function() {

	$(function() {
		var pageURL = $(location).attr('href');
		if (pageURL.includes('ou=')) {
			var splitURL = pageURL.split('ou=');
			var secondSplitURL = splitURL[1].split('&');
			var ouID = secondSplitURL[0];
		}

		$('a').each(function() {
			var href = $(this).attr('href');
			if(href&&href.includes('{orgUnitId}')) {
				href = href.replace('{orgUnitId}', ouID);
				$(this).attr('href', href);
			}
		});
	});

	function isTouchDevice() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	}

	if (isTouchDevice()) {

		var testerSound;

		$('.audio-hover-trigger').on("click", function(){
			if(testerSound !== undefined) {
					testerSound.pause();
				}
	          var targID = $(this).attr("id");
			  testerSound = new Audio("audio/" + targID + ".mp3");   
			   testerSound.play();
		});

		$('.audio-trigger').on("click", function(){

			alert('.audio-trigger -> click function -> orgUnitId.js -> has been activated');
			var attr = $(this).attr('audioName');

			if (typeof attr !== typeof undefined && attr !== false) {

				if(testerSound !== undefined) {
					testerSound.pause();
				}
		          var targID = $(this).attr("audioName");
				  // testerSound = new Audio("audio/" + targID + ".mp3");
				  // console.log("audio/" + targID + ".mp3");
				  testerSound.play("audio/" + targID + ".mp3");

			    // ...
			} else {

				var targetID = '#' + $(this).attr('id') + '-audio';
				var audioTarget = $(targetID)[0];

				$(this).children('.icon').attr('src', 'images/icons/audio-trigger-playing.png');
				audioTarget.pause();
				audioTarget.play();

				audioTarget.onended = function() {
				    if ($(this).children('.icon').length > 0) {
						$(this).children('.icon').attr('src', 'images/icons/audio-trigger-static.png');
					}
				};

			}

		});

	}


});

// Links daylight override styles
var daylightStyles = document.createElement('link');
daylightStyles.setAttribute('type', 'text/css');
daylightStyles.setAttribute('rel', 'stylesheet');
daylightStyles.setAttribute('href', 'https://tekura.desire2learn.com/shared/masterTemplates/css/daylight000_styles.css');
document.head.appendChild(daylightStyles);

// radio button blanket fix for touch devices
$(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.radioContainer').on('touchstart', '.checkable', function() {
			var thisPos = $(this).attr('checkPos');
			$('[checkPos='+thisPos+']').removeClass('clickedCheck').children('.checkAns').remove();
			$(this).addClass('clickedCheck');

			var container = $(this).closest('.radioContainer');
			var j = $(container).find('.questionText p').length;
			var i = $(container).find('.clickedCheck').length;
			if (j===i) {
				container.find('.radioAnswers').removeClass('hidden');
			};
			return
		});
	}
})