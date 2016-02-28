$(".btn_delete").click(function() {
	if(confirm("削除しますか？")) return ture
	else return false
});

$(".red").click(function() {
	var mainRed = 'rgba(255, 0, 0, 1)';
	var subRed1 = 'rgba(255, 0, 0, 0.7)';
	var subRed2 = 'rgba(255, 0, 0, 0.4)';
	$(".font_color").css('color', mainRed);
	$(".font_color:link").css('color', mainRed);
	$(".font_color:visited").css('color', mainRed);
	$(".font_color_sub").css('color', subRed1);
	$(".font_color_sub:link").css('color', subRed1);
	$(".font_color_sub:visited").css('color', subRed1);
	$(".border_color_bold").css('border-color', subRed2);
	$(".border_color").css('border-color', mainRed);
	$(".border_color_mypage").css({
		'border-top-color': subRed2,
		'border-bottom-color': mainRed
	});
	$(".bg_color").css('background-color', 'rgba(245, 0, 0, 0.1)');
});
$(".green").click(function() {
	var mainGreen = 'rgba(0, 255, 0, 1)';
	var subGreen1 = 'rgba(0, 255, 0, 0.7)';
	var subGreen2 = 'rgba(0, 255, 0, 0.4)';
	$(".font_color").css('color', mainGreen);
	$(".font_color:link").css('color', mainGreen);
	$(".font_color:visited").css('color', mainGreen);
	$(".font_color_sub").css('color', subGreen1);
	$(".font_color_sub:link").css('color', subGreen1);
	$(".font_color_sub:visited").css('color', subGreen1);
	$(".border_color_bold").css('border-color', subGreen2);
	$(".border_color").css('border-color', mainGreen);
	$(".border_color_mypage").css({
		'border-top-color': subGreen2,
		'border-bottom-color': mainGreen
	});
	$(".bg_color").css('background-color', 'rgba(0, 245, 0, 0.1)');
});
$(".blue").click(function() {
	var mainBlue = 'rgba(0, 0, 255, 1)';
	var subBlue1 = 'rgba(0, 0, 255, 0.7)';
	var subBlue2 = 'rgba(0, 0, 255, 0.4)';
	$(".font_color").css('color', mainBlue);
	$(".font_color:link").css('color', mainBlue);
	$(".font_color:visited").css('color', mainBlue);
	$(".font_color_sub").css('color', subBlue1);
	$(".font_color_sub:link").css('color', subBlue1);
	$(".font_color_sub:visited").css('color', subBlue1);
	$(".border_color_bold").css('border-color', subBlue2);
	$(".border_color").css('border-color', mainBlue);
	$(".border_color_mypage").css({
		'border-top-color': subBlue2,
		'border-bottom-color': mainBlue
	});
	$(".bg_color").css('background-color', 'rgba(0, 0, 255, 0.1)');
});
$(".yellow").click(function() {
	var mainYellow = 'rgba(255, 255, 0, 1)';
	var subYellow1 = 'rgba(255, 255, 0, 0.7)';
	var subYellow2 = 'rgba(255, 255, 0, 0.4)';
	$(".font_color").css('color', mainYellow);
	$(".font_color:link").css('color', mainYellow);
	$(".font_color:visited").css('color', mainYellow);
	$(".font_color_sub").css('color', subYellow1);
	$(".font_color_sub:link").css('color', subYellow1);
	$(".font_color_sub:visited").css('color', subYellow1);
	$(".border_color_bold").css('border-color', subYellow2);
	$(".border_color").css('border-color', mainYellow);
	$(".border_color_mypage").css({
		'border-top-color': subYellow2,
		'border-bottom-color': mainYellow
	});
	$(".bg_color").css('background-color', 'rgba(245, 255, 0, 0.1)');
});
$(".purple").click(function() {
	var mainPurple = 'rgba(255, 0, 255, 1)';
	var subPurple1 = 'rgba(255, 0, 255, 0.7)';
	var subPurple2 = 'rgba(255, 0, 255, 0.4)';
	$(".font_color").css('color', mainPurple);
	$(".font_color:link").css('color', mainPurple);
	$(".font_color:visited").css('color', mainPurple);
	$(".font_color_sub").css('color', subPurple1);
	$(".font_color_sub:link").css('color', subPurple1);
	$(".font_color_sub:visited").css('color', subPurple1);
	$(".border_color_bold").css('border-color', subPurple2);
	$(".border_color").css('border-color', mainPurple);
	$(".border_color_mypage").css({
		'border-top-color': subPurple2,
		'border-bottom-color': mainPurple
	});
	$(".bg_color").css('background-color', 'rgba(245, 0, 255, 0.1)');
});
$(".monochrome").click(function() {
	var mainMonochrome = '#333';
	var subMonochrome1 = '#555';
	var subMonochrome2 = '#888';
	$(".font_color").css('color', mainMonochrome);
	$(".font_color:link").css('color', mainMonochrome);
	$(".font_color:visited").css('color', mainMonochrome);
	$(".font_color_sub").css('color', subMonochrome1);
	$(".font_color_sub:link").css('color', subMonochrome1);
	$(".font_color_sub:visited").css('color', subMonochrome1);
	$(".border_color_bold").css('border-color', subMonochrome2);
	$(".border_color").css('border-color', mainMonochrome);
	$(".border_color_mypage").css({
		'border-top-color': subMonochrome2,
		'border-bottom-color': mainMonochrome
	});
	$(".bg_color").css('background-color', 'rgba(245, 245, 245, 1)');
});