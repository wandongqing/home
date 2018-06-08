$(function(){
$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top > 400)
			$(".top>.jiantou").show();
		else
			$(".top>.jiantou").hide();
		if(top>4500){
			$(".left").hide();
		}else{
			$(".left").show();
		}
	});
	$(".top>.jiantou").click(function() {
		$(document).scrollTop(0);
	});

	$(".navigation>ul>li").mouseenter(function() {
		$(this).children().eq(1).stop().slideDown(1000);
	}).mouseleave(function() {
		$(this).children().eq(1).stop().slideUp(1000);
	})
	
	var op=0;
	
	$(".left>ul>li>span").click(function(){
		$(this).nextAll().slideToggle();
		$(this).parent().siblings().find("ul").slideUp();
			
	})
	$(".left>ul>li>ul>li").click(function(){
		 var div=$(this).text();
		 $(".de").text(div);
	})
	$(".left>ul>li>ul>li").mouseenter(function(){
		$(this).css("color","black")
	}).mouseleave(function(){
		$(this).css("color","gray")
	})
	
	
	
	$(".im").click(function(){
			if(op==0){
				$(".im>img").css("transform","rotateZ(180deg)");
				op=1;
			}else{
				$(".im>img").css("transform","rotateZ(0deg)")
				op=0;
			}
				
	})
	$(".im1").click(function(){
			if(op==0){
				$(".im1>img").css("transform","rotateZ(180deg)");
				op=1;
			}else{
				$(".im1>img").css("transform","rotateZ(0deg)")
				op=0;
			}
	})
	
	
//	$(".dei>div>a").mouseenter(function(){
//		$(this).css({"color":"#F5BA5D","font-size":"40px"})
//	}).mouseleave(function(){
//		$(this).css({"color":"whitesmoke","font-size":"30px"})
//	})
	
	$(".dei>img").click(function(){
		$(".dei").hide();
	})
//	$(".left>.nv>span").click(function(){
//		$(".dei").css("display","block");
//	})
	
	$(".miz").click(function(){
		$(".right>div").eq(0).show().siblings().hide()
	})
	$(".new").click(function(){
		$(".right>div").eq(1).show().siblings().hide()
	})
	$(".min").click(function(){
		$(".right>div").eq(2).show().siblings().hide()
	})
	$(".max").click(function(){
		$(".right>div").eq(3).show().siblings().hide()
	})
})