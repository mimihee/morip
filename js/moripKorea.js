(function($,window,document,undefined){
	
	var s3Cnt = 0;
	var s3z   = 0;
	var s3winW = 1360;
	var rate   = 0.411764706; 
	var s3conH = s3winW*rate;	
	
	var pagW = $('.pageImageBtn-wrap').innerWidth();
	var pagH = pagW*0.421875;

	
		$('#moripKorea .content').css({ height:s3conH });		
		$('.pageImageBtn-wrap').css({ height: pagH });
		
	
	
	function s3ResizeFn(){
		if($(window).innerWidth() <=1360 ){
			 s3winW = $(window).innerWidth();
		}
		else{
			s3winW=1360;
		}
		
		s3conH = s3winW*rate;	
		$('#moripKorea .content').css({ height:s3conH });	

		pagW = $('.pageImageBtn-wrap').innerWidth();
		pagH = pagW*0.421875;
		$('.pageImageBtn-wrap').css({ height: pagH });
		
	}
	
	
	setTimeout(s3ResizeFn,100);
	
	
	$(window).resize(function(){
		s3ResizeFn();
	});
	
	
	
	function s3nextSlideFn(){		
		imagepageEventFn();	
		$('.s3Slide')						  .css({ zIndex:1 }).stop().animate({ opacity:0 },0);
		$('.s3Slide').eq( s3Cnt==0?2:s3Cnt-1 ).css({ zIndex:2 }).stop().animate({ opacity:1 },0);
		$('.s3Slide').eq( s3Cnt )			  .css({ zIndex:3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 },1000);
		
	}
	
	
	function s3prevSlideFn(){	
		imagepageEventFn();	
		$('.s3Slide')						  .css({ zIndex:1 }).stop().animate({ opacity:0 },0);
		$('.s3Slide').eq( s3Cnt )	          .css({ zIndex:2 }).stop().animate({ opacity:1 },0);
		$('.s3Slide').eq( s3Cnt==2?0:s3Cnt+1 ).css({ zIndex:3 }).stop().animate({ opacity:1 },0).animate({ opacity:0 },1000);

	}
		
	
	
	function s3nextCountFn(){
		s3Cnt++;
		if(s3Cnt>2){s3Cnt=0;}
		s3nextSlideFn();
	}
	
	
	function s3prevCountFn(){
		s3Cnt--;
		if(s3Cnt<0){s3Cnt=2;}
		s3prevSlideFn();
	}

	
	
	$('.arrRBtn').on({
		click: function(){
			s3nextCountFn();
		}
	});
	
	
	
	$('.arrLBtn').on({
		click: function(){
			s3prevCountFn();
		}
	});
		
	
	function imagepageEventFn(){
		if( s3Cnt==0 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide1.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}
		else if( s3Cnt==1 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}
		else if( s3Cnt==2 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide1.jpg)'});
		}
	}
	
	
	
	$('.pageImageBtn').each(function(idx){
		$(this).on({
			click: function(){
				if( s3Cnt==0 && idx==0 ){
					s3Cnt=1;
					s3nextSlideFn();
				}
				else if( s3Cnt==0 && idx==1 ){
					s3Cnt=2;
					s3nextSlideFn();
				}
				else if( s3Cnt==1 && idx==0 ){
					s3Cnt=0;
					s3prevSlideFn();
				}
				else if( s3Cnt==1 && idx==1 ){
					s3Cnt=2;
					s3nextSlideFn();
				}
				else if( s3Cnt==2 && idx==0 ){
					s3Cnt=0;
					s3prevSlideFn();
				}				
				else if( s3Cnt==2 && idx==1 ){
					s3Cnt=1;
					s3prevSlideFn();
				}				
			}
		});
	});

	
	
	$('.s3Slide-container').on('mousewheel DOMMousescroll', function(event){
		event.preventDefault();
		if( event.detail ){
			s3Delta = event.detail*-1;
		}
		else{
			s3Delta = event.originalEvent.wheelDelta;
		}
		if( s3Delta < 0 ){
			if( !$('.s3Slide-wrap').is(':animated') ){
				s3nextCountFn();
			}
		}
		else{
			if( !$('.s3Slide-wrap').is(':animated') ){
				s3prevCountFn();
			}			
		}
		
	});
		
	
	
})(jQuery,window,document);


