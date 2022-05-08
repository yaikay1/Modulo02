

let lis = document.querySelectorAll (".profesores > li");
for (let i = 0; i < lis.length; i++) {
 lis[i].addEventListener ("click", function ()
{
 this.style.color = "red";
 });
}
var target = document.querySelector("#target")
target.addEventListener("mouseover", function(){
	this.classList.add("highlight")
})
target.addEventListener("mouseleave", function(){
	this.classList.remove("highlight")
})

document.body.addEventListener("click", function(infoEvento){
    console.log(infoEvento);
})