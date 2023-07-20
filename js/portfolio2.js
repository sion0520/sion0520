$(function(){
    // 슬라이드
	$('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
		dots:true,
		centerMode: true,
		setPosition:0
		// centerPadding: '60px',
    });

    //슬라이드 숨기기
	$('.slider_u, .slider_d, .slider_pront').hide()
	//탭메뉴
	$('.tab li').click(function(){
		$('.tab li').removeClass('on')
		$(this).addClass('on')
		$('.slider'). resize();
		$('.slider'). slick('refresh');

		let filter = $(this).index()
		console.log(filter)

		if(filter==0){
			$('.slider_u, .slider_d, .slider_pront').hide()
			$('.slider_p').show()
		}else if(filter==1){
			$('.slider_p, .slider_d, .slider_pront').hide()
			$('.slider_u').show()
		}else if(filter==2){
			$('.slider_p, .slider_u, .slider_d').hide()
            $('.slider_pront').show()
		}else if(filter==3){
			$('.slider_p, .slider_u, .slider_pront').hide()
			$('.slider_d').show()
		}
	})

	// 구름 애니메이션
	AOS.init({
		duration: 1200,
	})

	// 페이지 내에서 링크위치로 스크롤바를 이동
    $('.gnb li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)

        $('body,html').animate({scrollTop:target-100},1000)
    })

	// 스크롤바의 위치정보 확인하기
	$(window).scroll(function(){
		let scroll = $(this).scrollTop()
		console.log(scroll)

		if(scroll==0 && scroll<2156){    // home 구간
			$('.gnb li a').css({color:'#fff'}) 
            $('.gnb li:eq(0) a').css({color:'red'})
			$('.skill span').css({width:0})
		}else if(scroll >= 2156 && scroll<3848){   // about 구간
			$('.gnb li a').css({color:'#fff'}) 
            $('.gnb li:eq(1) a').css({color:'red'})
			$('.stick_html span').css({width:'90%'})
			$('.stick_js span').css({width:'40%'})
			$('.stick_jq span').css({width:'50%'})
			$('.stick_vue span').css({width:'60%'})
		}else if(scroll >= 3848 && scroll<4284){  // work 구간
			$('.gnb li a').css({color:'#fff'}) 
            $('.gnb li:eq(2) a').css({color:'red'})
			$('.skill span').css({width:0})
		}else if(scroll >= 4284){    // contact 구간
			$('.gnb li a').css({color:'#fff'}) 
            $('.gnb li:eq(3) a').css({color:'red'})
			$('.skill span').css({width:0})
		}

	})


})