$(function(){
    // 슬라이드
	$('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
		dots:true,
		centerMode: true,
		setPosition:0,

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


    //탭메뉴
	$('.slider_u, .slider_d, .front').hide();  //슬라이드 숨기기
	$('.tab li').click(function(){
		$('.tab li').removeClass('on');
		$(this).addClass('on');
		$('.slider'). resize();
		$('.slider'). slick('refresh');

		let filter = $(this).index();

		if(filter==0){
			$('.slider_u, .slider_d, .front').hide();
			$('.slider_p').show();
		}else if(filter==1){
			$('.slider_p, .slider_d, .front').hide();
			$('.slider_u').show();
		}else if(filter==2){
			$('.slider_p, .slider_u, .slider_d').hide();
			$('.front').show();
		}else if(filter==3){
			$('.slider_p, .slider_u, .front').hide();
			$('.slider_d').show();
		}
	});

	// 구름 애니메이션
	AOS.init({
		duration: 1200,
	});

	// 페이지 내에서 링크위치로 스크롤바를 이동
    $('.gnb li a').click(function(){
        let name = $($(this).attr('href'));
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target-150},1000);
    });

	// 스크롤바의 위치정보 확인하기
	$(window).scroll(function(){
		let scroll = $(this).scrollTop();

		if(scroll==0 && scroll<2115){    // home 구간
			$('.gnb li a').css({fontWeight:'300'});
            $('.gnb li:eq(0) a').css({fontWeight:'900'});
			$('.skill span').css({width:0});
		}else if(scroll >= 2116 && scroll<3797){   // about 구간
			$('.gnb li a').css({fontWeight:'300'});
            $('.gnb li:eq(1) a').css({fontWeight:'900'});
		}else if(scroll >= 3798 && scroll<4284){  // work 구간
			$('.gnb li a').css({fontWeight:'300'}); 
            $('.gnb li:eq(2) a').css({fontWeight:'900'});
			$('.skill span').css({width:0});
		}else if(scroll >= 4284){    // contact 구간
			$('.gnb li a').css({fontWeight:'300'}); 
            $('.gnb li:eq(3) a').css({fontWeight:'900'});
			$('.skill span').css({width:0});
		}

		// 스킬스틱 pc버전
		if(scroll>=1896 && scroll<3599){
			$('.stick_html span').css({ width: '90%' });
			$('.stick_js span').css({ width: '40%' });
			$('.stick_jq span').css({ width: '50%' });
			$('.stick_vue span').css({ width: '60%' });
		}else{
			$('.stick span').css({ width: '0%' });
		}
	});

	// 스킬스틱 모바일버전
	window.addEventListener('scroll', () => {
		// 뷰포트 크기에 따라 스킬스틱 길이를 동적으로 조정
		const viewportWidth = window.innerWidth;

		if (viewportWidth <= 768) { // 가로 768px 이하일 때
			$('.stick_html span').css({ width: '90%' });
			$('.stick_js span').css({ width: '40%' });
			$('.stick_jq span').css({ width: '50%' });
			$('.stick_vue span').css({ width: '60%' });
		} 
	});


	// 모바일인지 확인하는 함수
	function isMobile() {
		return window.innerWidth <= 768;
	}

	// 팝업
	$('.popup').hide();                 // 팝업 숨기기
	$('.btn_close').click(function(){    // 팝업 닫기 버튼
		$('.popup').hide();
	});
	$('.page_dining').click(function(){
		if (!isMobile()) {
			$('.popup_dining').show();
		}
	});
	$('.page_spiderman').click(function(){
		if (!isMobile()) {
			$('.popup_spiderman').show();
		}
	});
	$('.page_elemental').click(function(){
		if (!isMobile()) {
			$('.popup_elemental').show();
		}
	});
	$('.page_cardnews').click(function(){
		if (!isMobile()) {
			$('.popup_krill').show();
		}
	});
	$('.page_menu').click(function(){
		if (!isMobile()) {
			$('.popup_menu').show();
		}
	});


	// motion
	$(function(){

		const pTag1 = document.querySelector('.first-parallel');
		const pTag2 = document.querySelector('.second-parallel');
	
		const textArr1 = 'ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO'.split(' ');
		const textArr2 = 'ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO ZIONS PORTFOLIO'.split(' ');
	
		function initTexts(element, textArray){
			for(let i = 0; i < textArray.length; i++){
				element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`;
			}
		}
	
		initTexts(pTag1, textArr1);
		initTexts(pTag2, textArr2);
	
		let count1 = 0;
		let count2 = 0;
	
		function marqueeText(count, element, direction){
			if(count > element.scrollWidth / 2){
				element.style.transform = 'translateX(0)';
				count = 0;
			}
			element.style.transform = `translateX(${count * direction}px)`; 
			return count;
		}
	
		function animate(){
			count1++;
			count2++;
	
			count1 = marqueeText(count1, pTag1, -1);
			count2 = marqueeText(count2, pTag2, 1);
	
			window.requestAnimationFrame(animate);
		}
	
		animate();
	
		window.addEventListener('scroll',() => {
			count1 += 15;
			count2 += 15;
		});
	
	});

});