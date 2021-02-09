(function($, window, document,undefined){
	var cnt = 0;
	var footBanner = $('.footBanner-wrap');
	var winW = $(window).innerWidth();
	var conW = $('.footBanner-container').innerWidth();
	var banN = 6;
		if( winW >1280 ){
			banN = 6;
		}
		else if( winW > 500 ){
			banN = 3;
		}
		else{
			banN =2;
		}
		
	var banW = conW/banN;
		$('.footBanner').css({width:banW});
		$('.footBanner-wrap').css({ width: banW*18, marginLeft: -banN*6 });
		

		function resizeFn(){
			winW = $(window).innerWidth();
			conW = $('.footBanner-container').innerWidth();
			banN = 6;
			if( winW >1280 ){
				banN = 6;
			}
			else if( winW > 500 ){
				banN = 3;
			}
			else{
				banN =2;
			}

			banW = conW/banN;
			$('.footBanner').css({width:banW});
			$('.footBanner-wrap').css({ width: banW*18, marginLeft: -banN*6 });
			
			footBanner.css({left: -cnt});
		}
		
		resizeFn();
	
				
		var autoPlayFn = function(){	
				setId = setInterval(function(){
					resizeFn();
					cnt+=1; 
					
					if( cnt > (banW*6) ){
						cnt = 0;
						footBanner.css({ left: -cnt });
					}
					else{
						footBanner.css({ left: -cnt });
					}
				},10);
			}
			autoPlayFn(); 
			
			$('.footBanner-wrap').on({
				mouseenter: function(){
					clearInterval(setId);
				},
				mouseleave: function(){
					autoPlayFn();
				}
			});
		
	
})(jQuery, window, document);