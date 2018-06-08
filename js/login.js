$(function(){
	var my={
		"userName":/^[1-9][0-9]{5,11}$/,
		"userPass":/^\w{6,32}$/,
		"checName":function(name){
			if(this.userName.test(name)){
				return 1;
			}else{
				return 0;
			}
		},
		"checPass":function(pass){
			if(this.userPass.test(pass)){
				return 1; 
			}else{
				return 0;
			}
		}
	};
	
        $(".den").click(function(){
        	
        	var vaa=$(".zhang").val();
        	console.log(vaa);
        if(my.checName(vaa)==0){
			document.querySelector(".in>span").innerText="账号不符合规则 请重新输入";
			
		}else{
			document.querySelector(".in>span").innerText="";
			
		}
		var vaa2=$(".mi").val();
        	if(my.checName(vaa2)==0){
			document.querySelector(".in>font").innerText="密码是6~32位";
			
		}else{
			document.querySelector(".in>font").innerText="";
			
		}
		
		if(vaa==""){
			document.querySelector(".in>p").innerText="请输入账号";
		}else if(vaa2==""){
			document.querySelector(".in>font").innerText="请输入密码";
		}else if(vaa=="" && vaa2==""){
			document.querySelector(".in>p").innerText="请先输入账号";
		}
	})
		
})