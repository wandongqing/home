$(function(){
		
		$(".right>div>div>div").click(function(){

			$(".dei").show();
			$(".dei>.img").append($(this).children().clone());
			$(".dei>.font").append($(this).siblings().clone());
		})
		
		$(".dei>.font>.cima>button").click(function(){
			$(this).css("background","orange").siblings().css("background","white");
			p=1;
		})
		var count=0;
		var op=0;
		var p=0;
		$(".cnt>button:nth-of-type(1)").click(function(){
			count--;
			if(count<=0){
				count=0;
			}
			if(count>0){
				op=1;
			}else{
				op=0;
			}
			$(".cnt>font").text(count);
		})
		$(".cnt>button:nth-of-type(2)").click(function(){
			count++;
			$(".cnt>font").text(count);
			op=1;
		})
		
		$(".dei>.font>.jia").click(function(){
			if(op==1 && p==1){
				alert("成功加入购物车");
			}else {
				alert("请先选择尺码或数量");
			}
		})
		
		$(".dei>img").click(function(){
		$(".dei").hide();
		$(".dei>.img").children().remove();
		$(".dei>.font").children("p,span").remove();
		$(".dei>.font>.cima>button").css("background","white");
	})
})