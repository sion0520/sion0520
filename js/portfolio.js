$(function() {
	$('#fullpage').fullpage({
	  // FullPage.js 옵션 설정
		autoScrolling: true,
		scrollHorizontally: true,
		keyboardScrolling: true,
		navigation: true,

		afterLoad: function(origin, destination, direction) {
		let sectionId = destination.anchor;
		if (sectionId == 'about') {
			$('.stick_html span').css('animation-play-state', 'running');
			$('.stick_js span').css('animation-play-state', 'running');
			$('.stick_jq span').css('animation-play-state', 'running');
			$('.stick_vue span').css('animation-play-state', 'running');
			}
		}
	});

	//tab
	$('.tab li').click(function(){
		$('.tab li').removeClass('on')
		$(this).addClass('on')
	})

	// 헤더 스크롤
	$('.gnb li').click(function(){
		let num = $(this).index()
		console.log(num)

		if(num==0){
			$('body,html').animate({'scrollTop':0},800)
		}
	})

});