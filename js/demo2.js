var hx=document.getElementById("box");
hx.innerText="xin chao cac ban";
hx.innerHTML="<i>xin chao cac sinh vien</i>";
hx.style.color="green";
hx.style.marginBottom="20px";
hx.classList.remove("xyz");
hx.classList.add("abc");
hx.classList.add("gik");

//var dv=document.getElementById("box1");
//dv.style.fontSize="50px";
//var f=14;
//var d=setInterval(function(){
    //dv.style.fontSize=f+"px";
    //f+=2
//},1000);

//cach lam quat quay
var fan = document.getElementById("fan");
var dg = 0;
var fanbox=setInterval(function(){
    fan.style.transform=`rotate(${dg}deg)`;
    dg+=2;
},1);