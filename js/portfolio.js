$(function() {
	$('#fullpage').fullpage({
	  // FullPage.js 옵션 설정
		autoScrolling: true,
		scrollHorizontally: true,
		keyboardScrolling: true,
		navigation: true,
		scrollBar: true
	});

	// 슬라이드
	$('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
		dots:true,
		centerMode: true,
		setPosition:0
		// centerPadding: '60px',
    });

	//탭메뉴-슬라이드 숨기기
	$('.slider_u, .slider_d').hide()
	//탭메뉴
	$('.tab li').click(function(){
		$('.tab li').removeClass('on')
		$(this).addClass('on')
		$('.slider'). resize();
		$('.slider'). slick('refresh');

		let filter = $(this).index()
		console.log(filter)

		if(filter==0){
			$('.slider_u, .slider_d').hide()
			$('.slider_p').show()
		}else if(filter==1){
			$('.slider_p, .slider_d').hide()
			$('.slider_u').show()
		}else if(filter==2){
			$('.slider_p, .slider_u, .slider_d').hide()
		}else if(filter==3){
			$('.slider_p, .slider_u').hide()
			$('.slider_d').show()
		}
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