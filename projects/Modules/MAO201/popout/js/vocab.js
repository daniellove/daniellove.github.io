//-------------------- Table search --------------------//
$(function(){

	// Run search when keyup or if the radio buttons are changed
	$('.searchInput').on('keyup', searchFunction);
	$('.searchOption').on('change', searchFunction);

	function searchFunction() {
		// Get search text
		var searchVal = $('.searchInput').val().toLowerCase();
		if (searchVal.length > 0) {
			// Hide all rows if searching
			$(".searchTable tbody tr").addClass('hidden')
		} else {
			// Shows all rows if not searching
			$(".searchTable tbody tr").removeClass('hidden')
		}
		// Find which column to search using radio options
		var tableCol = $('.searchOption:checked').attr('tableCol')
		$(".searchTable tbody tr:not(.subheading)").each(function() {
			// Get the text from each entry in that column
			var thisComparison = $(this).find('td:nth-child('+tableCol+')').text().toLowerCase();
			// If the searched value is in an entry from the column the show it
			if(thisComparison.indexOf(searchVal) >= 0){
				$(this).removeClass('hidden')
			}
		})
		return
	};
});

//-------------------- Table click audio --------------------//
$(function() {

	var playingAudio = null;

	$(".searchTable tbody tr:not(.subheading)").on("click", function(){
		// When a row is clicked
		playingAudio = playplaying($(this), playingAudio)
	});

	function playplaying(thisThing, playingAudio) {

		if (playingAudio == null) {
			// If nothing is currently playing
			playAudio()
			return playingAudio
		} else if (!thisThing.hasClass('playingAudio')) {
			// if something is currently playing and it's not the same thing
			stopAudio()
			playAudio()
			return playingAudio
		} else {
			// If this is currently playing
			stopAudio()
			return null
		}

		function playAudio() {
			// Play new audio
			thisThing.addClass('playingAudio');
			var newAudio = new Audio('../audio/vocab/' + thisThing.attr("audio") + '.mp3');
			newAudio.play();
			playingAudio = newAudio;
			playingAudio.addEventListener('ended', function(){
				// Listen for the end of an audio track
				stopAudio();
			});
		}

		function stopAudio() {
			// Stop the audio
			$('.playingAudio').removeClass('playingAudio');
			playingAudio.pause();
		}
	}
})