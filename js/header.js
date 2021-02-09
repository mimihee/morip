(function($, window, document, undefined){
	
	var scr = t = app = winW = r = gnbH = 0;
		gnbH = $('.gnb').innerHeight();
	
		setTimeout(resizeFn,100);
	
		$(window).resize(function(){ 	
			
			resizeFn();
			
		});
	
	
	  
		function resizeFn(){
			gnbH = $('.gnb').innerHeight();	
			winW = $(window).innerWidth();

			if( winW > 900 ){
				if( r==0 ){ 	
					r=1;
					$('.sub').stop().slideUp(0);
					
					$('.mainBtn').on({
						mouseenter: function(){		
							$('.sub').slideUp(300);
							$(this).next().stop().slideDown(300);
						}
					});
					
					
					$('.gnb').on({		
						mouseleave: function(event){
							$('.sub').stop().slideUp(300);
							
						}
					});
				}			
			}
			else{
				if( r==1 ){
					r=0;
					$('.sub').stop().slideDown(0);
					
					$('.mainBtn').off('mouseenter');
					$('.gnb').off('mouseleave');
				}
				
			}
		
		}
		
		
	
		
		$('#header').on({
			mouseenter: function(){
				$('#header').addClass('addFixed');
			},
			click: function(){  
				$('#header').addClass('addFixed');
			},
			mouseleave: function(){
				if(scr==0 && app==0 ){  
					$('#header').removeClass('addFixed');
					$('.gnb').hide();
				}
				
			}
		});
		
		
		$('.appBarBtn').on({
			click: function(){
				$(this).toggleClass('addAppbar');
				if( app==0 ){
					app=1;
					$('.gnb').stop().show().animate({top:-2},300);
					$('.header-row1').css({ boxShadow:'none' });
				}
				else{
					app=0;
					$('.gnb').stop().animate({top:-gnbH},300, function(){
						$('.gnb').hide();
						$('.header-row1').css({ boxShadow:'0 3px 10px rgba(0,0,0, .25)' });
					});
				}
				
			}
		});
		
		
		
		$(window).scroll(function(){
			if( $(window).scrollTop()>=10 ){
				scr=1;
				$('#header').addClass('addFixed');
				if(t==0){
				t=1;
				$('html,body').stop().animate({ scrollTop:$('#moripCollection').offset().top-65 },800 );
				}
				
			}
			else{
				scr=0;
				t=0;
				if(app==0){
				$('#header').removeClass('addFixed');
				}
			}
		});
		
		
		
	
})(jQuery, window, document);//header.js