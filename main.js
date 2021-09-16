var count=0;
var x;
function search(x){
	if(x == 1){
		count=count+1;
	}
	if(count == 1){
		document.getElementByClassName("search-box").style.background="#fff";
	}
}
