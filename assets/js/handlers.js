
var topPos;

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
	
	globalObservers();
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

function globalObservers() {
	
	topPos = [
		$("#welcome").offset().top,
		$("#getting-started").offset().top,
		$("#anims").offset().top,
		$("#puffanim").offset().top,
		$("#floatanim").offset().top,
		$("#creditsanim").offset().top
	];
	
	$("#logo").unbind('click').on('click', function() {
		location.reload()
	});
	
	$("#github").unbind('click').on('click', function() {
		var win = window.open('https://github.com/samrith-s/AnimaniaJS', '_blank');
		if(win)
			win.focus();
		else
			alert('Please allow popups for this site');
	});
	
	$("#download").unbind('click').on('click', function() {
		$("iFrame.no-show").attr("src",'https://github.com/samrith-s/AnimaniaJS/archive/v1.0.1.zip');
	});
	
	$("welcome_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[0]
		}, 650);
	});
	
	$("#getting-started_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[1]
		}, 650);
	});
	
	$("#anims_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[2]
		}, 650);
	});
	
	$("#puffanim_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[3]
		}, 650);
	});
	
	$("#floatanim_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[4] - 25
		}, 650);
	});
	
	$("#creditsanim_").unbind('click').on('click', function() {
		$(".main-wrapper").animate({
			scrollTop: topPos[5] - 35
		}, 650);
	});
}