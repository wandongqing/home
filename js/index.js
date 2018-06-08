$(function(){
	var count=0;
	$(function(){
		
			 $(document).scroll(function(){
        			var top = $(document).scrollTop();
      				  if(top>400)
           				 	$(".top>.jiantou").show();
       					 else
           					 $(".top>.jiantou").hide();
  			  });
			$(".top>.jiantou").click(function(){
				$(document).scrollTop(0);
				
			});
		
		
		
		$(".top-img>ul>li>p").eq(4).stop().slideDown(1000);
		setInterval(function(){
		
			count++;
				if(count==5){
					count=0;
				}
				$(".top-img>ul>li").eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
				$(".top-img>ul>li>p").eq(count).stop().slideDown(3000).delay(5000).slideUp();
		},8000);	
		
			$(".left").click(function(){
				count--;
				if(count==-1){
					count=4;
				}
				$(".top-img>ul>li").eq(count).stop().fadeIn(1).siblings().stop().fadeOut(10);
				$(".top-img>ul>li>p").eq(count).stop().slideDown(2000).delay(3000).slideUp();
			})
			$(".right").click(function(){
				count++;
				if(count==5){
					count=0;
				}
				$(".top-img>ul>li").eq(count).stop().fadeIn(10).siblings().stop().fadeOut(10);
				$(".top-img>ul>li>p").eq(count).stop().slideDown(2000).delay(3000).slideUp();
			})
	
			
		$(".navigation>ul>li").mouseenter(function(){
				$(this).children().eq(1).stop().slideDown(1000);
		}).mouseleave(function(){
				$(this).children().eq(1).stop().slideUp(1000);
		})	
		
		var cnt=0;
//		$(".left-right>.aaleft").click(function(){
//				cnt--;
//				if(cnt==-1){
//					cnt=2;
//				}
//			$(".NewArrival>div").eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//			$(".circle>ul>li").eq(count).css({"background":"#DCDCDC","width":"60px"}).siblings().css({"background":"#666","width":"20px"})
//		})
//		
//		$(".left-right>.aaright").click(function(){
//				
//				cnt++;
//				if(cnt==3){
//					cnt=0;
//				}
//				
//			$(".NewArrival>div").eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//			$(".circle>ul>li").eq(count).css({"background":"#DCDCDC","width":"60px"}).siblings().css({"background":"#666","width":"20px"})
//		})
			
		
		
		setInterval(function(){
		
			cnt++;
				if(cnt==3){
					cnt=0;
				}
				$(".NewArrival>div").eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
				$(".circle>ul>li").eq(count).css({"background":"#DCDCDC","width":"60px"}).siblings().css({"background":"#666","width":"20px"})
		},7000);	
			
		$(".circle>ul>li").mouseenter(function(){
			$(".circle>ul>li").eq($(this).index()).css({"background":"#DCDCDC","width":"60px"}).siblings().css({"background":"#666","width":"20px"})
			$(".NewArrival>div").eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		})
			
			
			
			
	})
})