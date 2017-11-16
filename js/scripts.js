
// $(function() {
// 	$('body')
// 		.addClass('docLoading')
// 		.append('\
// 		<div class="loading">\
// 			<div>\
// 				<img src="img/gears.gif">\
// 				<p>Loading<br>Please wait</p>\
// 			</div>\
// 		</div>\
// 	')
// })

// $(window).on('load',function() {
// 	$(document).find('.loading').remove()
// 	$('body').removeClass('docLoading')
// })



var scrollTop = $(window).scrollTop() ;

$(function() {
	$('#mobileMenu').on('touchstart', function() {
		$('#navItems').slideToggle('fast').css('display', 'inline-block')
	})
})