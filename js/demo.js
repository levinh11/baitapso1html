var x;
x= 10;//number
console.log(x);
x="xin chao";//string
console.log(x);
x=true;//boolean
console.log(x);

var n=20;
var s="hello";
var t=n+n;
var k=n+s;
var m=s+n;  

if(t>30){

}else{

}
var xyz =t>30?"A":"B";//toan tu 3 ngoi

for(var i=0;i<10;i++){
    // var ab="i=";
    // var bc=ab+i;
    // console.log(bc);
    console.log("i="+i)
}

var arr=[];
var abc=[1,2,"xin chao"];

arr[0]=10;
arr[1]=15;
arr.push(18);//arr[2]=18;
arr.push(18);
arr.push(18);
arr.push(18);
arr.push(18);

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

function tinhtong(a,b){
    // return a+b;
    console.log(a+b);
}
tinhtong(5,7);
tinhtong("a"+5);

alert("cam nguoi duoi 18 tuoi!");
var check =confirm("ban da du 18 tuoi hay chua");//return true/fale
if(check==true){
    alert("ban da chon yes");
}else{
    alert("ban da tron no");
}

var age=prompt("ban bao nhieu tuoi?");//string
//alert(age);
age=parseInt(age);
//"20"=>20
//"20a"=>20
//"a20"=>NaN: not a number
var lk=Math.random();// tao 1 so thuc ngau nhien tu 0-1
lk=lk*100;
lk=parseInt(lk);
console.log(lk);
Lock//xem xem con so random la bao nhieu


var num=prompt("ban chon so nao");
num=parseInt(num);
if(num==lk){
    alert("chuc mung ban da trunh thuong");
}else{
    alert("chuc ban may man lan sau");
}