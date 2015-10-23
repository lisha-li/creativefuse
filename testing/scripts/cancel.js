jQuery(document).ready(function(){
	$("#cancel").click(function() {
		setTimeout(function () {
			$('#seriously').get(0).play();
		}, 200);
		$("#popupCancel").fadeIn();
		$("body").append('<div id="fade"></div>');
		$("#fade").css({'filter' : 'alpha(opacity=80)'}).fadeIn();
		
		var popuptopmargin = ($("#popupCancel").height() + 10) / 2;
		var popupleftmargin = ($("#popupCancel").width() + 10) / 2;
		
		$("#popupCancel").css({
			'margin-top' : -popuptopmargin,
			'margin-left' : -popupleftmargin
		});
					
		$("#popupNo,#fade").click(function() {
			$("#fade , #popupCancel").fadeOut()
			return false;
		});
	});
});