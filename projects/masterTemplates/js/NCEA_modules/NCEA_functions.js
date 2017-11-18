// Dropdown menu
// Located in the header
$(function() {
	var closeDropdown = true;
	$('button[data-toggle="dropdown-menu"]').on('click', function() {
		var targEle = $($(this).attr('data-target'));
		var showEle = false;
		if (targEle.css('display')==='none') {
			showEle = true;
		}
		$('.dropdown-menu').hide();
		if (showEle) {
			targEle.show();
			holdDropdown(100);
		}
	})
	$('.dropdown-menu').on('click', function() {
		holdDropdown(100);
	})

	function holdDropdown(delay) {
		closeDropdown = false;
		setTimeout(function() {
			closeDropdown = true;
		}, delay)
	}

	var par = parent;
	while (par !== par.parent) {
		par = par.parent;
	}

	$(par).on('click', function() {
		if (window!=par) {
			$('.dropdown-menu').hide();
		}
	})
	$(document).on('click', function() {
		if (closeDropdown) {
			$('.dropdown-menu').hide();
		}
	})
});

// Progress bar
// Located in the footer
$(function() {
	if (typeof thisLesson !== 'undefined') {
		var progressPercentage = (thisLesson/totalLessons*100).toFixed(0);
		$('.progress-bar')
			.text(progressPercentage+'%')
			.css({'width':progressPercentage+'%'})
			.attr('aria-valuenow', progressPercentage);
	}
});

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}