$(function() {
	playingAudio = null;
	// Create a bank of all audio files on the page
	var audioBank = $('.audioTable td:not(.blank):not(.head):not(.greyed):not(.noClick)')
	for (var i = 0; i < audioBank.length; i++) {
		// Identify element
		var thisThing = $(audioBank[i])
		// Generate ID
		var audioID = 'audioID'+i
		thisThing.attr('audioID', audioID)
		// Create file path
		var folder = thisThing.closest('table').attr('folder')||''
		if (folder!='') {folder+='/'}
		var thisTrack = thisThing.attr('audioName')||thisThing.text()
		//Create audio element
		var tempAudio = new Audio
		var tempSrc = 'audio/' + folder + thisTrack + '.mp3'
		console.log('tempSrc = ' + tempSrc)
		// Store audio as a global variable
		eval(audioID + ' = tempAudio')
		eval(audioID + '.src = tempSrc')
	}

	$(document).on("click", ".audioTable td:not(.blank):not(.head):not(.greyed):not(.noClick)", function(){
		// When a row is clicked
		playingAudio = playAudioTable($(this), playingAudio)
	});
	
	function playAudioTable(thisThing, playingAudio) {
		if (playingAudio == null) {
			// If nothing is currently playing
			playThisAudioTable()
			return playingAudio
		} else if (!thisThing.hasClass('tdActive')) {
			// if something is currently playing and it's not the same thing
			stopThisAudioTable()
			$('audio').each(function(){
				this.pause(); // Stop playing
				this.currentTime = 0; // Reset time
			}); 
			playThisAudioTable()
			return playingAudio
		} else {
			// If this is currently playing
			stopThisAudioTable()
			return null
		}
		function playThisAudioTable() {
			// Change state
			thisThing.addClass('tdActive');
			// Find the audio file (stored as a global variable)
			var thisAudio = eval(thisThing.attr('audioID'))
			// Play audio
			playingAudio = thisAudio;
			playingAudio.play()

			playingAudio.addEventListener('ended', function(){
				// Listen for the end of an audio track
				stopThisAudioTable();
			});
		}
		function stopThisAudioTable() {
			// Stop the audio
			$('.tdActive').removeClass('tdActive');
			playingAudio.pause();
			playingAudio.currentTime = 0
		}
	}
})