$(function(){
    // 슬라이드
	$('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
		dots:true,
		centerMode: true,
		setPosition:0,
		// centerPadding: '60px',

		responsive:[{
			breakpoint: 768,
			settings: {
				arrows: true,
				dots:true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
			},]
    });

    //슬라이드 숨기기
	$('.slider_u, .slider_d, .front').hide()
	//탭메뉴
	$('.tab li').click(function(){
		$('.tab li').removeClass('on')
		$(this).addClass('on')
		$('.slider'). resize();
		$('.slider'). slick('refresh');

		let filter = $(this).index()
		console.log(filter)

		if(filter==0){
			$('.slider_u, .slider_d, .front').hide()
			$('.slider_p').show()
		}else if(filter==1){
			$('.slider_p, .slider_d, .front').hide()
			$('.slider_u').show()
		}else if(filter==2){
			$('.slider_p, .slider_u, .slider_d').hide()
			$('.front').show()
		}else if(filter==3){
			$('.slider_p, .slider_u, .front').hide()
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

        $('body,html').animate({scrollTop:target-150},1000)
    })

	// 스크롤바의 위치정보 확인하기
	$(window).scroll(function(){
		let scroll = $(this).scrollTop()
		console.log(scroll)

		if(scroll==0 && scroll<2115){    // home 구간
			$('.gnb li a').css({fontWeight:'300'}) 
            $('.gnb li:eq(0) a').css({fontWeight:'900'})
			$('.skill span').css({width:0})
		}else if(scroll >= 2116 && scroll<3797){   // about 구간
			$('.gnb li a').css({fontWeight:'300'}) 
            $('.gnb li:eq(1) a').css({fontWeight:'900'})
		}else if(scroll >= 3798 && scroll<4284){  // work 구간
			$('.gnb li a').css({fontWeight:'300'}) 
            $('.gnb li:eq(2) a').css({fontWeight:'900'})
			$('.skill span').css({width:0})
		}else if(scroll >= 4284){    // contact 구간
			$('.gnb li a').css({fontWeight:'300'}) 
            $('.gnb li:eq(3) a').css({fontWeight:'900'})
			$('.skill span').css({width:0})
		}
	})

	// about섹션 skill stick
	window.addEventListener('scroll', () => {
		// 뷰포트 크기에 따라 요소의 너비 동적으로 조정
		const viewportWidth = window.innerWidth;

		if (viewportWidth <= 768) { // 예시: 뷰포트 가로 크기가 768px 이하일 때
			$('.stick_html span').css({ width: '80%' });
			$('.stick_js span').css({ width: '30%' });
			$('.stick_jq span').css({ width: '40%' });
			$('.stick_vue span').css({ width: '50%' });
		} else if (viewportWidth <= 1024) { // 예시: 뷰포트 가로 크기가 1024px 이하일 때
			$('.stick_html span').css({ width: '90%' });
			$('.stick_js span').css({ width: '40%' });
			$('.stick_jq span').css({ width: '50%' });
			$('.stick_vue span').css({ width: '60%' });
		} else { // 예시: 그 외의 경우
			$('.stick_html span').css({ width: '100%' });
			$('.stick_js span').css({ width: '50%' });
			$('.stick_jq span').css({ width: '60%' });
			$('.stick_vue span').css({ width: '70%' });
		}
	});


	// popup
	$('.popup').hide()
	$('.page_dining').click(function(){
		$('.popup_dining').show()
	})
	$('.page_spiderman').click(function(){
		$('.popup_spiderman').show()
	})
	$('.page_elemental').click(function(){
		$('.popup_elemental').show()
	})
	$('.page_cardnews').click(function(){
		$('.popup_krill').show()
	})
	$('.page_menu').click(function(){
		$('.popup_menu').show()
	})

	$('.btn_close').click(function(){
		$('.popup').hide()
	})
	



})