(function($, window, document, undefined){
	var winW = winH = cnt = z = setId = setId2 = count = 0;
	var wheelDelta;
	
	
		function resizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();
			
			$('.slide').css({ width:winW, height:winH });
			$('#moripCollection').css({ marginTop:winH });
			
			$('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },0); 
		}
		
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			resizeFn();
		});
		
		
		
		function mainSlideFn(){
			$('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },500, function(){
				if( cnt > 2 ){ cnt = 0; }
				if( cnt < 0 ){ cnt = 2; }
				$('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },0);
			});
			cnt > 2 ? z = 0 : z = cnt;
			pageEventFn();
		}
		
		
		function pageEventFn(){
			$('.mainSlidePageBtn').removeClass('addPage');
			$('.mainSlidePageBtn').eq(z).addClass('addPage');
		}
		
		
		$('.mainSlidePageBtn').each(function(idx){
			$(this).on({
				click: function(){
					cnt = idx;
					mainSlideFn();
					pauseTimerFn();
				}
			});
		});
		
		
		
		
		
	
		$('#mainSlide').on('mousewheel DOMMousescroll', function(event){
			event.preventDefault();
			if( event.detail ){
				wheelDelta = event.detail*-1;
			}
			else{
				wheelDelta = event.originalEvent.wheelDelta;
			}
			
			if( wheelDelta<0 ){		
				if( !$('.mainSlide-wrap').is(':animated') ){
					pauseTimerFn();
					nextCountFn();
					if( cnt>2 ){
						$('html,body').stop().animate({ scrollTop: $('#moripCollection').offset().top  },600);	
					}
				}
			}
			else{					
				if( !$('.mainSlide-wrap').is(':animated') ){
					pauseTimerFn();
					prevCountFn();
				}
			}
		});	
		
		
		
		
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		
		$('.mainSlideNextBtn').on({
			click: function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();
					pauseTimerFn();
				}
			}
		});
		
		$('.mainSlidePrevBtn').on({
			click: function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();	
					pauseTimerFn();
				}
			}
		});
		
		
		$('.mainSlide-container').swipe({
			swipeLeft: function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();	
					pauseTimerFn();
				}
			},
			swipeRight: function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();	
					pauseTimerFn();
				}
			}
		});
		
		
		function autoTimerFn(){
			setId = setInterval(nextCountFn,4000);
		}
		autoTimerFn();
		


		function pauseTimerFn(){
			count = 0;
			clearInterval(setId2);
			clearInterval(setId);
			
			setId2 = setInterval(function(){
				count++;
				if( count >= 5 ){
					nextCountFn();
					autoTimerFn();
					clearInterval(setId2);
					
				}
				
			},1000);
		}
		
		
		$('.nextBtn').on({
			click: function(event){
				event.preventDefault();
				url = $(this).attr('href');
				$('html,body').stop().animate({ scrollTop:$(url).offset().top },600);
			}
		});
		
		
		
		
	
})(jQuery, window, document);









