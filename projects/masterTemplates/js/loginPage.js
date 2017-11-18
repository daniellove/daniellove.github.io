$(function() {
		var topDisp = $('.d2l-navigation-s-no-login').outerHeight()
		topDisp += $('.d2l-page-main-padding').height()
		topDisp += +$('.d2l-page-main-padding').css('padding-top').replace('px', '')
		$('.bottomText').css('top', topDisp)
})