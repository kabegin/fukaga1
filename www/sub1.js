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
function hi(ad){
var yyyy = ad.getFullYear();
var mm = ad.getMonth() + 1;
var dd = ad.getDate();
return ""+yyyy+"/"+mm+"/"+dd;    
}
function getExpires(dd){
var now = new Date();
var expires = new Date(now.getTime()+24*60*60*1000*dd);
return(expires.toGMTString());
}
function setCookie(key, value, limit){
var cValue = key + "=" + escape(value) + "END;expires=" + getExpires(limit) + ";";
document.cookie = cValue;
}
function getCookie(key){
var cValue = document.cookie;
var sIndex= cValue.indexOf(key,0);
if(sIndex > -1){
sIndex = cValue.indexOf("=", sIndex) + 1;
eIndex = cValue.indexOf("END", sIndex);
return unescape(cValue.substring(sIndex, eIndex));
}else{
return "";
}
}

function setYotei(dst) {
  //  document.write(ore["2016/1/28"]);
    var k = '<table class=thin>';
    k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>';
    for (var i in ore){//Dataのメンバ？の個数回繰り返す。
       day = new Date(i);//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
       w = week[day.getDay()];//曜日を取得
       //k += '<tr><td>' + i + '</td><td>' + w + '</td><td>' + ore[i] + '</td></tr>';
       if(ar[ore[i]]==undefined){ar[ore[i]]="休み";}
       k += '<tr><th>' + i + '</th><td>' + w + '</td><td>' +ore[i]+" "+ ar[ore[i]] +'</td></tr>';
       // 値はDataオブジェクトのメンバ(i)の値はData[i]で取得できる。
    }
    k += '</table>';
    document.body.innerHTML = k;
}



function check(){
       document.write("GO");
    myTbl = new Array("日","月","火","水","木","金","土");

var myYear = myDate.getFullYear();
var myMonth = myDate.getMonth() + 1;
var myDate = myDate.getDate();
var myDay = myDate.getDay();
var or="20160131";
document.write("GO1");
  document.write(myDate.getMonth());
  document.write("</BR>");
  var Month=myDate.getMonth()+1;
for (i=0;i<40;i++){
    myA.setDate(myDate.getDate()+1);
    
    
//var Month=myA.getMonth();
var Date=myDate.getDate();
var Day=myDate.getDay();
//document.write(myMonth);
 document.write(Month);
 document.write("月");
    document.write(Date);
    document.write("日");
    document.write(myTbl[Day]);
    document.write(" ",ore[20160128]);
    document.write(ar[ore[20160128]]);
    document.write("</BR>");

   }}