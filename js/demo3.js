function demoOne(){
    alert("one two three .. ");
}
function demoTwo(){
    alert("two to too..");
}

var flag=false;
var fanbox=null;
function demoThree(e){
    if (flag==false){
var fan = document.getElementById("fan");
var dg = 0;
fanbox=setInterval(function(){
    fan.style.transform=`rotate(${dg}deg)`;
    dg+=2;
},1);
var btn=document.getElementById("btn-fan");
btn.innerText="stop";
flag=true;
}else{
    clearInterval(fanbox);
    btn.innerText="start";
    flag=false;

    }
}