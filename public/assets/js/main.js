// $(".btn_delete").click(function() {
// 	if(confirm("削除しますか？")) return ture
// 	else return false
// });

// // $(document).load(function(){
// // // ページ読み込み完了時に実行したい処理
// // 	var color = document.getElementById("theme_color").value
// // switch(color){
// // case "red" : changeToRed(); break;
// // case "green" : changeColor(); break;
// // case "blue" : changeColor(); break;
// // case "yellow" : changeColor(); break;
// // case "purple" : changeColor(); break;
// // case "monochrome" : changeColor(); break;

// // default : alert("全部違います。"); break;
// // }

// // });


// $(".red").click(function() {
// 	var mainRed = 'rgba(255, 0, 0, 1)';
// 	var subRed1 = 'rgba(255, 0, 0, 0.7)';
// 	var subRed2 = 'rgba(255, 0, 0, 0.4)';
// 	$(".font_color").css('color', mainRed);
// 	$(".font_color:link").css('color', mainRed);
// 	$(".font_color:visited").css('color', mainRed);
// 	$(".font_color_sub").css('color', subRed1);
// 	$(".font_color_sub:link").css('color', subRed1);
// 	$(".font_color_sub:visited").css('color', subRed1);
// 	$(".border_color_bold").css('border-color', subRed2);
// 	$(".border_color").css('border-color', mainRed);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subRed2,
// 		'border-bottom-color': mainRed
// 	});
// 	$(".bg_color").css('background-color', 'rgba(245, 0, 0, 0.02)');
// });

// // $(".red").click(changeToRed());

// function changeToRed() {
// 	document.getElementById("theme_color").value = "red"
// 	// user.erb上のinputタグのvalueを"red"に変更
// 	var mainRed = 'rgba(255, 0, 0, 1)';
// 	var subRed1 = 'rgba(255, 0, 0, 0.7)';
// 	var subRed2 = 'rgba(255, 0, 0, 0.4)';
// 	$(".font_color").css('color', mainRed);
// 	$(".font_color:link").css('color', mainRed);
// 	$(".font_color:visited").css('color', mainRed);
// 	$(".font_color_sub").css('color', subRed1);
// 	$(".font_color_sub:link").css('color', subRed1);
// 	$(".font_color_sub:visited").css('color', subRed1);
// 	$(".border_color_bold").css('border-color', subRed2);
// 	$(".border_color").css('border-color', mainRed);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subRed2,
// 		'border-bottom-color': mainRed
// 	});
// 	$(".bg_color").css('background-color', 'rgba(245, 0, 0, 0.02)');
// }

// $(".green").click(function() {
// 	var mainGreen = 'rgba(0, 255, 0, 1)';
// 	var subGreen1 = 'rgba(0, 255, 0, 0.7)';
// 	var subGreen2 = 'rgba(0, 255, 0, 0.4)';
// 	$(".font_color").css('color', mainGreen);
// 	$(".font_color:link").css('color', mainGreen);
// 	$(".font_color:visited").css('color', mainGreen);
// 	$(".font_color_sub").css('color', subGreen1);
// 	$(".font_color_sub:link").css('color', subGreen1);
// 	$(".font_color_sub:visited").css('color', subGreen1);
// 	$(".border_color_bold").css('border-color', subGreen2);
// 	$(".border_color").css('border-color', mainGreen);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subGreen2,
// 		'border-bottom-color': mainGreen
// 	});
// 	$(".bg_color").css('background-color', 'rgba(0, 245, 0, 0.02)');
// });
// $(".blue").click(function() {
// 	var mainBlue = 'rgba(0, 0, 255, 1)';
// 	var subBlue1 = 'rgba(0, 0, 255, 0.7)';
// 	var subBlue2 = 'rgba(0, 0, 255, 0.4)';
// 	$(".font_color").css('color', mainBlue);
// 	$(".font_color:link").css('color', mainBlue);
// 	$(".font_color:visited").css('color', mainBlue);
// 	$(".font_color_sub").css('color', subBlue1);
// 	$(".font_color_sub:link").css('color', subBlue1);
// 	$(".font_color_sub:visited").css('color', subBlue1);
// 	$(".border_color_bold").css('border-color', subBlue2);
// 	$(".border_color").css('border-color', mainBlue);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subBlue2,
// 		'border-bottom-color': mainBlue
// 	});
// 	$(".bg_color").css('background-color', 'rgba(0, 0, 255, 0.02)');
// });
// $(".yellow").click(function() {
// 	var mainYellow = 'rgba(255, 255, 0, 1)';
// 	var subYellow1 = 'rgba(255, 255, 0, 0.7)';
// 	var subYellow2 = 'rgba(255, 255, 0, 0.4)';
// 	$(".font_color").css('color', mainYellow);
// 	$(".font_color:link").css('color', mainYellow);
// 	$(".font_color:visited").css('color', mainYellow);
// 	$(".font_color_sub").css('color', subYellow1);
// 	$(".font_color_sub:link").css('color', subYellow1);
// 	$(".font_color_sub:visited").css('color', subYellow1);
// 	$(".border_color_bold").css('border-color', subYellow2);
// 	$(".border_color").css('border-color', mainYellow);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subYellow2,
// 		'border-bottom-color': mainYellow
// 	});
// 	$(".bg_color").css('background-color', 'rgba(245, 255, 0, 0.02)');
// });
// $(".purple").click(function() {
// 	var mainPurple = 'rgba(255, 0, 255, 1)';
// 	var subPurple1 = 'rgba(255, 0, 255, 0.7)';
// 	var subPurple2 = 'rgba(255, 0, 255, 0.4)';
// 	$(".font_color").css('color', mainPurple);
// 	$(".font_color:link").css('color', mainPurple);
// 	$(".font_color:visited").css('color', mainPurple);
// 	$(".font_color_sub").css('color', subPurple1);
// 	$(".font_color_sub:link").css('color', subPurple1);
// 	$(".font_color_sub:visited").css('color', subPurple1);
// 	$(".border_color_bold").css('border-color', subPurple2);
// 	$(".border_color").css('border-color', mainPurple);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subPurple2,
// 		'border-bottom-color': mainPurple
// 	});
// 	$(".bg_color").css('background-color', 'rgba(245, 0, 255, 0.02)');
// });
// $(".monochrome").click(function() {
// 	var mainMonochrome = '#333';
// 	var subMonochrome1 = '#555';
// 	var subMonochrome2 = '#888';
// 	$(".font_color").css('color', mainMonochrome);
// 	$(".font_color:link").css('color', mainMonochrome);
// 	$(".font_color:visited").css('color', mainMonochrome);
// 	$(".font_color_sub").css('color', subMonochrome1);
// 	$(".font_color_sub:link").css('color', subMonochrome1);
// 	$(".font_color_sub:visited").css('color', subMonochrome1);
// 	$(".border_color_bold").css('border-color', subMonochrome2);
// 	$(".border_color").css('border-color', mainMonochrome);
// 	$(".border_color_mypage").css({
// 		'border-top-color': subMonochrome2,
// 		'border-bottom-color': mainMonochrome
// 	});
// 	$(".bg_color").css('background-color', 'rgba(254, 254, 254, 1)');
// });
$(".btn_delete").click(function() {
	if(confirm("この投稿を削除しますか？")) return true
	else return false
});


// subcolorは透明度なしにする
$(".red").click(function() {
	var mainRed = '#e60033';
	var subRed1 = '#d7003a';
	var subRed2 = '#ffa3a3';
	var subRed3 = '#fff9f9';
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
	$(".bg_color").css('background-color', subRed3);
	$(".bg_color_box").css('background-color', mainRed);
	$(".bg_color_main_box").css({
		'color': mainRed,
		'background-color': subRed3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subRed3,
				'background-color': mainRed
			});
		}, function() {
			$(this).css({
				'color': mainRed,
				'background-color': subRed3
		});
	});
});
$(".green").click(function() {
	var mainGreen = '#0f0';
	var subGreen1 = '#007b43';
	var subGreen2 = '#93ff93';
	var subGreen3 = '#f9fff9';
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
	$(".bg_color").css('background-color', subGreen3);
	$(".bg_color_box").css('background-color', mainGreen);
	$(".bg_color_main_box").css({
		'color': mainGreen,
		'background-color': subGreen3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subGreen3,
				'background-color': mainGreen
			});
		}, function() {
			$(this).css({
				'color': mainGreen,
				'background-color': subGreen3
		});
	});
});
$(".blue").click(function() {
	var mainBlue = '#00f';
	var subBlue1 = '#7fffff';
	var subBlue2 = '#a8ffff';
	var subBlue3 = '#f9ffff';
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
	$(".bg_color").css('background-color', subBlue3);
	$(".bg_color_box").css('background-color', mainBlue);
	$(".bg_color_main_box").css({
		'color': mainBlue,
		'background-color': subBlue3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subBlue3,
				'background-color': mainBlue
			});
		}, function() {
			$(this).css({
				'color': mainBlue,
				'background-color': subBlue3
		});
	});
});
$(".yellow").click(function() {
	var mainYellow = '#ffbf7f';
	var subYellow1 = '#ffff7f';
	var subYellow2 = '#ffd8b2';
	var subYellow3 = '#fffff9';
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
	$(".bg_color").css('background-color', subYellow3);
	$(".bg_color_box").css('background-color', mainYellow);
	$(".bg_color_main_box").css({
		'color': mainYellow,
		'background-color': subYellow3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subYellow3,
				'background-color': mainYellow
			});
		}, function() {
			$(this).css({
				'color': mainYellow,
				'background-color': subYellow3
		});
	});
});
$(".purple").click(function() {
	var mainPurple = '#f0f';
	var subPurple1 = '#ff7fff';
	var subPurple2 = '#ffa3ff';
	var subPurple3 = '#fff9ff';
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
	$(".bg_color").css('background-color', subPurple3);
	$(".bg_color_box").css('background-color', mainPurple);
	$(".bg_color_main_box").css({
		'color': mainPurple,
		'background-color': subPurple3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subPurple3,
				'background-color': mainPurple
			});
		}, function() {
			$(this).css({
				'color': mainPurple,
				'background-color': subPurple3
		});
	});
});
$(".monochrome").click(function() {
	var mainMonochrome = '#333';
	var subMonochrome1 = '#555';
	var subMonochrome2 = '#888';
	var subMonochrome3 = '#fdfdfd';
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
	$(".bg_color").css('background-color', subMonochrome3);
	$(".bg_color_box").css('background-color', mainMonochrome);
	$(".bg_color_main_box").css({
		'color': mainMonochrome,
		'background-color': subMonochrome3
	});
	$(".bg_color_main_box").hover
		(function() {
			$(this).css({
				'color': subMonochrome3,
				'background-color': mainMonochrome
			});
		}, function() {
			$(this).css({
				'color': mainMonochrome,
				'background-color': subMonochrome3
		});
	});
});



$(".draw_space_btn").click(function() {
	if ($(".draw_window").css('display') == 'none') {
		$(".draw_window").fadeIn('500');
		$(".draw_form").fadeIn('500');
	}
});
$(".draw_window").click(function() {
	if ($(this).css('display') !== 'none') {
		$(".draw_window").fadeOut('500');
		$(".draw_form").fadeOut('500');
	}
});




