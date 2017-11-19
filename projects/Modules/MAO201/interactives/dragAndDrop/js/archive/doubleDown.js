function doubleDownDrop(thisDrag, thisDrop, ui, isCorrect) {
	var dragType = thisDrag.attr('type')
	var alreadyDropped = thisDrop.attr('type')
	if (!alreadyDropped) {
		thisDrop.attr('type', dragType)
		thisDrop.attr(dragType, thisDrag.attr('option'))
		isCorrect.drag = checkDragResult(thisDrag, dragType, thisDrop)
		disableDrag(thisDrag, thisDrop)
	} else {
		if (dragType===alreadyDropped) {
			thisDrag.animate({
				'left': '0px',
				'top': '0px'
			});
		} else {
			thisDrop.attr('type', thisDrop.attr('type') + ' ' + dragType)
			thisDrop.attr(dragType, thisDrag.attr('option'))
			isCorrect.drag = checkDragResult(thisDrag, dragType, thisDrop)
			disableDrag(thisDrag, thisDrop)
			thisDrop.addClass('dropped')
			disableDrop(thisDrop)
			var thisOption = thisDrop.attr('option')
			dropTypes = thisDrop.attr('type').split(' ')
			var type1 = thisDrop.attr(dropTypes[0]).split(' ')
			var type2 = thisDrop.attr(dropTypes[1]).split(' ')

			for (var i = 0; i < type1.length; i++) {
				for (var j = 0; j < type2.length; j++) {
					if (thisOption===type1[i]&&thisOption===type2[j]) {
						isCorrect.drop = true
					}
				}
			}
		}
	}

	return isCorrect
}

function checkDragResult(thisDrag, dragType, thisDrop) {
	var dragOption = thisDrag.attr('option')
	var dragOption = thisDrag.attr('option').split(' ')
	var dropOption = thisDrop.attr('option')
	var dragResult = false
	for (var i = 0; i < dragOption.length; i++) {
		if (dropOption===dragOption[i]) {
			dragResult = true
		}
	}
	thisDrag.attr('dropOption', dropOption)
	thisDrop.attr(dragType, dragOption.join(' '))
	return dragResult
}

function resetdoubleDownDd(dd, dropInfo) {
	var drops = {}
	if ((dropInfo.numberShowing/2)===dropInfo.numberOfDrops) {
		drops.showingAnswers = true
	}
	if (dropInfo.numberCorrect===dropInfo.numberOfDrops) {
		drops.allCorrect = true
	}
	if (!drops.showingAnswers||drops.allCorrect) {
		var thisType = []
		dd.find('.dragBox').each(function() {
			enableDrag($(this))
			$(this).removeAttr('dropOption')
			if ($.inArray($(this).attr('type'),thisType)<0) {
				thisType.push($(this).attr('type'))
			}
		})
		dd.find('.dropBox').each(function() {
			enableDrop($(this))
			$(this).removeAttr('type')
			for (var i = 0; i < thisType.length; i++) {
				$(this).removeAttr(thisType[i])
			}
		})
	} else {
		var drags = dd.find('.dragBox').length
		dd.find('.dragBox').each(function(i) {
			if ($(this).attr('outcome')==='incorrect') {
				enableDrag($(this))
				var dragInfo = {
					type : $(this).attr('type'),
					dropOption : $(this).attr('dropOption')
				}
				$(this).removeAttr('dropOption')
			}
			if (dragInfo) {
				var thisDrop = dd.find('.dropBox[option="' + dragInfo.dropOption + '"]')
				enableDrop(thisDrop)
				thisDrop.removeAttr(dragInfo.type)
				var dropTypes = thisDrop.attr('type').split(' ')
				var typeIndex = dropTypes.indexOf(dragInfo.type)
				dropTypes.splice(typeIndex, 1)
				thisDrop.attr('type',dropTypes.join(' '))
				if (!thisDrop.attr('type')) {
					thisDrop.removeAttr('type')
				}
			}
		});
	}
}