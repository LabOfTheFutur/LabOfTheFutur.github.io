let stpbl1 = document.getElementById("stpbl1");
let stpbrdr1 = document.getElementById("stpbrdr1");

stpbl1.onmouseover = function(){
	stpbrdr1.style.border-bottom = "3px solid white";
}
stpbl1.onmouseout = function(){
	stpbrdr1.style.border-bottom = "3px solid black";
}