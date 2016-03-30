var week = new Array("日","月","火","水","木","金","土"); 
function getToday(){
var now = new Date();
var yyyy = now.getFullYear();
var mm = now.getMonth() + 1;
var dd = now.getDate();
//if(mm < 10) mm = "0" + mm;
//if(dd < 10) dd = "0" + dd;
return "" + yyyy +"/"+ mm+"/"+ + dd;
}
function aday(ab){
 //   alert(ab);
    var dayOfMonth=ab.getDate();
ab.setDate(dayOfMonth+1);
//alert(ab);
return ab;
}
function hi(af){
var yyyy = af.getFullYear();
var mm = af.getMonth() + 1;
var dd = af.getDate();
return ""+yyyy+"/"+mm+"/"+dd;    
}
function getExpires(dd){
var now = new Date();
var expires = new Date(now.getTime()+24*60*60*1000*dd);
return(expires.toGMTString());
}
function a1(){
    var a=1,b=1;
    ni(a,b);
}
function b1(){
     var a=2,b=1;
    ni(a,b);
}
function c1(){
     var a=3,b=1;
    ni(a,b);
}
function d1(){
     var a=4,b=1;
    ni(a,b);
}
function a2(){
     var a=1,b=2;
    ni(a,b);
}
function b2(){
     var a=2,b=2;
    ni(a,b);
}
function c2(){
     var a=3,b=2;
    ni(a,b);
}
function d2(){
     var a=4,b=2;
    ni(a,b);
}
function ni(a,b){
    alert(a);
    alert(b);
}


