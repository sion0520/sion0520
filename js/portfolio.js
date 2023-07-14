$(function() {
	$('#fullpage').fullpage({
	  // FullPage.js 옵션 설정
		autoScrolling: true,
		scrollHorizontally: true,
		keyboardScrolling: true,
		navigation: true,
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

	// 슬라이드
	$('.slider_p').slick({
        // 슬라이드 옵션 설정
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});