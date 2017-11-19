$(document).ready(function(){
	// if (isTouchDevice()) {
		$('.click-flip').on('click', function(){
			$(this).toggleClass('toss');
		})
	// } else {
	// 	$('.click-flip:not([lesson="2_1"])').hover(function(){
	// 		$(this).addClass('toss');
	// 	}, function() {
	// 		$(this).removeClass('toss');
	// 	})
	// }
	// $('.click-flip[lesson="2_1"]').on('click', function(){
	// 	$(this).toggleClass('toss');
	// })
});