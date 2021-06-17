//grab the form and the button
var frm = document.getElementById("form");

var btn = document.getElementById("btn");



//addevent listener

btn.addEventListener("click", findIt);

function findIt(){
	var num = document.getElementById("number").value;
	var result = document.getElementById("result");
	var i, mult = 1;
	for (i = 1; i<=num; i++){
		mult = mult*i;
	}

	result.innerHTML = mult;
	return false;
}
	
