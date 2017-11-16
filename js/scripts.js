$(function() {
	$('#mobileMenu').on('touchstart', function() {
		$('#navItems').slideToggle('fast').css('display', 'inline-block')
	})
})

var scrollSpeed = 400
function winScroll(ele) {
	var top = $(ele.attr('rel')).offset().top
	$('html, body').animate({scrollTop: top}, scrollSpeed);
}