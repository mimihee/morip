(function($,window,document){
	
	var imgW = $('#TravelLounge .caption').innerWidth()*0.59450414;
	var winW = $(window).innerWidth();
	var conW = $('#TravelLounge .container').innerWidth();
	var col  = 3; 
	var s4SlideW = conW/col;
		$('.s4Slide-wrap').css({ width: (s4SlideW*12), marginLeft: -(s4SlideW*3) });
		$('.s4Slide').css({ width:s4SlideW });
		$('.s4Slide-content .image').css({ width: imgW, height: imgW });
	
	
	var s4Cnt = z = setId4 = 0;	
	
	
	function s4ResizeFn(){
		
		imgW = $('#TravelLounge .caption').innerWidth()*0.59450414;
		winW = $(window).innerWidth();
		conW = $('#TravelLounge .container').innerWidth();	

		if( winW > 1024 ){
			col  = 3;
		}
		else if( winW > 600 ){	
			col  = 2;
		}	
		else{
			col  = 1;
		}		
		s4SlideW = conW/col;
		$('.s4Slide').css({ width:s4SlideW  });
		$('.s4Slide-wrap').css({ width: (s4SlideW*12), marginLeft: -(s4SlideW*3) });
		$('.s4Slide-content .image').css({ width: imgW, height: imgW });
			
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
		
		}
		s4ResizeFn();
		setTimeout(s4ResizeFn,100);
		


		$(window).resize(function(){
			s4ResizeFn();
			setTimeout(s4ResizeFn,100);
		});


		
		//테두리 애니메이션
		$('.slideBtn').on({
			mouseenter:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(1).animate({ height:100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(2).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(3).animate({ height:100+'%'},300,'easeInOutQuint');
			},
			mouseleave:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0},0);
				$(this).prev().find('i').eq(1).animate({ height:0},0);
				$(this).prev().find('i').eq(2).animate({ width: 0},0);
				$(this).prev().find('i').eq(3).animate({ height:0},0);				
			},
			focusin:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(1).animate({ height:100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(2).animate({ width: 100+'%'},300,'easeInOutQuint');
				$(this).prev().find('i').eq(3).animate({ height:100+'%'},300,'easeInOutQuint');
			},
			focusout:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0},0);
				$(this).prev().find('i').eq(1).animate({ height:0},0);
				$(this).prev().find('i').eq(2).animate({ width: 0},0);
				$(this).prev().find('i').eq(3).animate({ height:0},0);				
			}
		});
		
		
		
		//메인 슬라이드 함수
		function s4MainSlideFn(){
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },600, function(){
				if( s4Cnt>5 ){ s4Cnt=0 }
				if( s4Cnt<0 ){ s4Cnt=5 }
				$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
			});
			pageEventFn(s4Cnt);
		}
		
		
		//다음 카운트 함수
		function nextCountFn(){
			s4Cnt++;
			s4MainSlideFn();
		}

		
		//이전 카운트 함수
		function prevCountFn(){
			s4Cnt--;
			s4MainSlideFn();
		}	
		
		
		//다음 이전 슬라이드 터치 이벤트
		$('.s4Slide-container').swipe({
			swipeLeft:	function(){

				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					nextCountFn();	
				}
			},
			swipeRight:	function(){
				
				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					prevCountFn();
				}
			}
		});
		
		
		//페이지 이벤트 함수
		function pageEventFn(z){
			if(z>5){z=0}
			$('.pageBtn').removeClass('addPages4');
			$('.pageBtn').eq(z).addClass('addPages4');
		}
		
		
		//페이지 버튼 클릭 이벤트 each()
		$('.pageBtn').each(function(idx){
			$(this).on({
				click:	function(){
					clearInterval(setId4);
					s4Cnt = idx;
					s4MainSlideFn();
				}
			});
		});
		
		
		
		function autoTimerS4Fn(){
			setId4 = setInterval(nextCountFn,4000)
		}
		autoTimerS4Fn();
		

		//마우스 휠 스크롤링 이벤트
		$('.s4Slide-container').on('mousewheel DOMMousescroll', function(event){
			event.preventDefault();
			if( event.detail ){
				s4Delta = event.detail*-1;
			}
			else{
				s4Delta = event.originalEvent.wheelDelta;
			}
			if( s4Delta < 0 ){
				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					nextCountFn();
					if( s4Cnt>5 ){
						$('html,body').stop().animate({ scrollTop: $('#footer').offset().top  },600);	
					}					
				}				
			}
			else{
				if( !$('.s4Slide-wrap').is(':animated') ){
					clearInterval(setId4);
					prevCountFn();				
				}
			}
		});
		
		
		
		
})(jQuery,window,document);