var h3val= document.querySelector("h1");
var coloor1= document.querySelector(".coloor1");
var coloor2= document.querySelector(".coloor2");
var bodyy=document.getElementById("bodyy");
var btn=document.getElementById("btn");
    


function grad1() {
    bodyy.style.background = 
    "linear-gradient(to right, " 
    + coloor1.value 
    + ", " 
    + coloor2.value 
    + ")";
}

btn.addEventListener("click", grad1);

//coloor2.addEventListener("input", grad1);
