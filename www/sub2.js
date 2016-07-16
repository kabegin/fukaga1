var week = new Array("日","月","火","水","木","金","土"); 
//var ncmb = new NCMB("6ca2ff8ccaa6bf29a5f132fb86e855f54a053f6cb052ca6eb4cac54384344b92","8530ec559cbc8f3e173359c1a64a7e614249a8632a95f6cafdc8791dbaaaa813");     

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
    //alert(a);
    //alert(b);
    var num1=document.keisan.elements[0].value;
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1),10);
    var ad=new Date("2016/02/06");
    var add=new Date();
    var nana=0;
    add.setHours(0, 0, 0, 0);
    var k ='<input type="button" value="前のページへ戻る" onclick="location.reload(true)"><table class=thin id=hyo><caption style="background-color:green">個別予定表</caption>';
    k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>'; 
     //   k += '</table>';
   
//   document.write(ad);
//   document.write(add);
for (i=1;i<170;i++){
day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime,10);
      switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job="休み";
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job="休み";
               break;}
               var c="<tr bgcolor='aqua'>";
               //var job=doyo[aq];
               switch(a){
                 case 1:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 2:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==7){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 3:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==14){var job=doyo[aq];}else{var job="休み";}
                     break;
                 case 4:
                     if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==21){var job=doyo[aq];}else{var job="休み";}
                     break;
               }
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job="休み";
               break;
           　}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined){job="白";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +deban+maime+" "+job +'</td></tr>';
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=1){deban+=1;}else{deban=deban;}
      aday(add); 
      if (deban==8){deban=1};
      if(day.getDay()==1&&deban==7&&nana==1){if(b==2){b=1,nana=0;}else{b=2,nana=0;}}
      if(deban==7 && b==2 && parseInt(maime,10)%2==0){
          maime=(parseInt(maime,10)+2)+"";
      }
      if(deban==7 && b==1 && parseInt(maime,10)%2==1){
          maime=(parseInt(maime,10)+2)+"";
      }
      if (day.getDay()==0){
          if(parseInt(maime,10)%2==1){
          maime=parseInt(maime,10)+1+""}
          else
          {maime=parseInt(maime,10)-1+""}};
    if (maime==49){maime=1;}
    if (maime==50){maime=2;}
    if (maime<10){maime=("0"+maime).slice(-2);}
    if(day.getDay()==0&&deban==7){ nana=1;}
 //   if(day.getDay()==1&&deban==7&&nana==1){if(b==2){b=1,nana=0;}else{b=2,nana=0;}}
}
//if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=1){deban+=1;}else{deban=deban;}
      document.getElementById("all").innerHTML = k; 
}
$('td').live('click',function(){
    var $cur_td=$(this)[0];
    var $cur_tr=$(this).parent()[0];
   // var a=$(this).text();
    var a=$(this).parent("tr").css("background-color");
    alert(a);
})


