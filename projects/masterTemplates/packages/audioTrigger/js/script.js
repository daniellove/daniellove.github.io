$(function(){
	// Preloads audio files for audioTriggers
	var audioTriggerBank = $('.audioTrigger')
	for (var i = 0; i < audioTriggerBank.length; i++) {
		var thisThing = $(audioTriggerBank[i])
		// Preloads audio track
		var thisTrack = thisThing.attr('audioName')
		var tempAudio = new Audio
		tempAudio.src = 'audio/' + thisTrack + '.mp3'
		// Generates unique ID
		var audioTriggerID = 'audioTriggerID_'+i
		// Replaces file name with unique ID
		thisThing.attr('audioName', audioTriggerID)
		// Stores track as global variable
		eval(audioTriggerID + ' = tempAudio')
	}

	// Clears the audioFile variable
	var audioFile = null;
	if (isTouchDevice()) {
		// Listens for a trigger element touch/click
		$(document).on('click', '.audioTrigger', function() {
			// Plays the audio file
			audioFile = playAudioFile($(this))
		});
	} else {
		// Listens for the mouse entering the trigger element
		$(document).on('mouseenter', '.audioTrigger', function() {
			// Plays the audio file
			audioFile = playAudioFile($(this))
		});
	}
	
	function playAudioFile(thisThing) {
		// Resets existing audio
		if (audioFile) {
			audioFile.pause()
			audioFile.currentTime = 0
		}
		// Finds global variable trigger based on unique ID
		audioFile = eval(thisThing.attr('audioName'))
		audioFile.play();
		// Stores the audio file in case it needs to be paused
		return audioFile
	}
});