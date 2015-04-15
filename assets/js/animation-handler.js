
$(function() {
	if($(".puffanimselect").val()==="entry")
		$("#puffanimdiv").fadeOut();
	else
		$("#puffanimdiv").fadeIn();
	
	$(".puffanimselect").on('change', function() {
		if($(this).val()==="entry")
			$("#puffanimdiv").fadeOut();
		else
			$("#puffanimdiv").fadeIn();
	});
	
	if($(".floatanimselect1").val()==="entry")
		$("#floatanimdiv").fadeOut();
	else
		$("#floatanimdiv").fadeIn();
	
	$(".floatanimselect1").on('change', function() {
		if($(this).val()==="entry")
			$("#floatanimdiv").fadeOut();
		else
			$("#floatanimdiv").fadeIn();
	});
	
	$("#creditsanimdiv").hide();
});

function execPuffAnim() {
	$("#puffanimdiv").animania("puff", {
		duration: 2000,
		transition: $(".puffanimselect").val(),
		puff: {
			offset: 100
		}
	});
}

function execFloatAnim() {
	$("#floatanimdiv").animania("float", {
		duration: 2000,
		transition: $(".floatanimselect1").val(),
		float: {
			direction: $(".floatanimselect2").val(),
			offset: 50
		}
	});
}

function execCreditsAnim() {
	$("#creditsanimdiv").animania("credits", {
		duration: 2000,
		credits: {
			direction: $(".creditsanimselect").val(),
			offset: 100
		}
	});
}