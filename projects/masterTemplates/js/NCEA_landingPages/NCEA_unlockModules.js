$lockedCourses = [
	'MX2000',
	'MP2000',
	'SC1000'
]

$(function() {
	if ($.inArray($courseCode, $lockedCourses) != -1) {
		$('.moduleContainer').children('div').each(function() {
			var $unlockCode = $(this).find('h2').text()
			var $widget = false
			var $always = false
			if ($('#unlock_'+$unlockCode).length > 0) {
				$widget = true
			}
			if ($.inArray($unlockCode, $alwaysUnlocked) != -1) {
				$always = true
			}
			if (!$widget&&!$always) {
				$(this).addClass('unclick')
			}
		})
	}

	$('.unclick').on('click', function() {
		return false
	})
})