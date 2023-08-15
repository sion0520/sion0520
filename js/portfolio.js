$(function(){

	// 모바일인지 확인하는 함수
	function isMobile() {
		return window.innerWidth <= 768;
	}

	// 팝업
	$(".dining").click(function () {
        Swal.fire({
			imageUrl: './images/popup/diningoption.png',
			imageHeight: 1500,
			imageAlt: '다이닝옵션'
		})
    });
	$(".krill").click(function () {
        Swal.fire({
			imageUrl: './images/popup/krillwrap.png',
			imageHeight: 450,
			imageAlt: '다이닝옵션'
		})
    });

	// header gnb 스크롤 이동
    $('.gnb li a').click(function(){
        let name = $($(this).attr('href'));
        let target = $($(this).attr('href')).offset().top
        $('body,html').animate({scrollTop:target-150},1000);
    });

	// 화살표 클릭시 이동
	$('.arrow').click(function() {
		if ($(window).width() <= 768) {
			$('body, html').animate({ scrollTop: 500 }, 1200);
		} else {
			$('body, html').animate({ scrollTop: 1120 }, 1200);
		}
	});

	// 구름 애니메이션
	AOS.init({
		duration: 1200,
	});

	// 스크롤바 위치 확인
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
			$('.stick_90 span').css({ width: '90%' });
			$('.stick_40 span').css({ width: '40%' });
			$('.stick_50 span').css({ width: '50%' });
		}else{
			$('.stick span').css({ width: '0%' });
		}
	});

	// 스킬스틱 모바일버전
	window.addEventListener('scroll', () => {
		let viewportWidth = window.innerWidth;
	
		if (viewportWidth <= 768 && window.scrollY >= 1025) {
			$('.stick_90 span').css({ width: '90%' });
			$('.stick_40 span').css({ width: '40%' });
			$('.stick_50 span').css({ width: '50%' });
		}
	});

	//탭메뉴(작업물 필터)
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

    // 슬라이드
	$('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
		dots:true,
		centerMode: true,
		setPosition:0,

		// 슬라이드 반응형 : 모바일
		responsive:[{
			breakpoint: 768,
			settings: {
				arrows: true,
				dots:true,
				centerMode: true,
				slidesToShow: 1
			}
		},]
    });

	// motion
	$(function(){

		let pTag1 = document.querySelector('.first-parallel');
		let pTag2 = document.querySelector('.second-parallel');
	
		let textArr1 = 'ZIONS PORTFOLIO ZIONS PORTFOLIO'.split(' ');
		let textArr2 = 'ZIONS PORTFOLIO ZIONS PORTFOLIO'.split(' ');
	
		// 같은 내용을 맨 뒤에 반복해서 push하는 함수
		function initTexts(element, textArray){
			textArray.push(...textArray);
			for(let i = 0; i < textArray.length; i++){
				element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`;
			}
		}

		//pTag에 textArr를 삽입
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
	
		// motion 애니메이션
		function animate(){
			count1++;
			count2++;
	
			count1 = marqueeText(count1, pTag1, -0.2);
			count2 = marqueeText(count2, pTag2, 0.2);
	
			window.requestAnimationFrame(animate);
		}
		animate();

	});
});
