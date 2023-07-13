$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		KeyboardScrolling: true,
		navigation : true
	});


	// 스크롤이동
	$('.gnb li').click(function(){
		let num = $(this).index()
		console.log(num)

		if(num==0){
			$('body,html').animate({'scrollTop':0},800)
		}else if(num==1){
			$('body,html').animate({'scrollTop':1080},800)
		}
	})

    
})