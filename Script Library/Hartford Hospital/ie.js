$(document).ready(function () {
	if (window.document.documentMode) {
		$('.main-content').prepend('<div id="alerts" style="background-color: #D2B52A !important;" class=""><div class="outerlayer"><div class="alert-item"><h2 class="alert" style="font-size: 1rem;">Warning: <span style="font-size:18px;">You are using an unsupported browser. The supported browsers are Google Chrome, Mozillia Firefox, Safari, and Microsoft Edge.</span></h2></div></div></div>');
	}
});