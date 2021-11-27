/* js document*/
var leng = document.getElementsByTagName('input').length;
console.log(leng);
var one = document.getElementsByTagName('input')[0];

for(var i=1;i<=leng;i++){
	console.log(i);
	
	
	document.getElementsByTagName('input')[i].onclick=function(){
		console.log(this);
		one.value = this.value;
		
	}
	
	
}



