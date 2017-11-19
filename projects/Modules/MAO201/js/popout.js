// Popout - vocablist
var vocabList = null;
function openVocabList(url, pageName) {
	vocabList = window.open(
	url,pageName,'width=950,height=544,left=10,top=10')
}
$(window).focus(function() {
	if (vocabList != null) {
		vocabList.close();
		vocabList = null;
	};
});
// Popout - trigger icon
$(function() {
	$('.languageIcon a').hover(function() {
		$(this).closest('.languageIcon').find('p').show();
	}, function() {
		$(this).closest('.languageIcon').find('p').hide();
	});
});