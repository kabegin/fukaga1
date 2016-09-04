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
for (i=1;i<220;i++){
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
 k += '</table><input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
      document.getElementById("all").innerHTML = k; 
save();
}
$(document).on('click','td',function(){
   // alert("123");
   var you=null;
    var $cur_td=$(this)[0];
    var $cur_tr=$(this).parent()[0];
   var b=$(this).text().substr(0,3);
    var a=$(this).parent("tr").css("background-color").toString();
    if(a=="rgb(255, 0, 0)"||a=="rgb(255, 192, 203)"){you="img/7"+b+".jpg";}else{
  //  if(a=="rgb(255, 192, 203)"){alert("祭");}
    if(a=="rgb(0, 255, 255)"){you="img/6"+b+".jpg";}else{you="img/"+b+".jpg";}}
//    var tmp = a.match(/rgb\((.*),(.*),(.*)\)/);
 //   var r = tmp[1];
  //  var g = tmp[2];
//    var b = tmp[3];
//キーボード操作などにより、オーバーレイが多重起動するのを防止する
    $( this ).blur() ;	//ボタンからフォーカスを外す
	if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "slow" ) ;

	//コンテンツをセンタリングする
	centeringModalSyncer() ;

	//コンテンツをフェードインする
	$( "#modal-content" ).fadeIn( "slow" ) ;

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modal-overlay,#modal-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;

		} ) ;

	} ) ;
//alert(you);
$("img").attr("src",you);
});
//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

    //センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}
$(document).ready(function(){
    $('img').error(function(){
        $(this).attr("src","img/100.jpg");
    });
});
function tasu(){
    var num1=document.keisan.elements[0].value;
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1));
    var ad=new Date();
    ad.setFullYear(2016, 2, 6);
    ad.setHours(0, 0, 0, 0);
    var add=new Date();
    add.setHours(0, 0, 0, 0);
    var nday=new Date(ad.getTime()+28*24*60*60*1000);
   
    var k = '<input type="button" value="前のページへ戻る" onclick="location.reload(true)"><table class=thin><caption style="background-color:green">個別予定表</caption>';
    //k +='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" defer="defer">\x3c/script><!-- fukagawa --><ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-5061506355151225"data-ad-slot="3920317659"data-ad-format="auto"></ins><script defer="defer">(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>');
   // k +='&nbsp;<script defer="defer">(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>'
    k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>'; 
     do{   
      day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime);
      switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;
           　}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined || deban=="7"){job="休み";}//or maime="7"
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +deban+maime+" "+job +'</td></tr>';
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
      maime=(parseInt(maime, 10))%48+1;
      if (maime<10){maime="0"+maime;}
     //k +="<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'>\x3c/script><!-- fukagawa --><ins class='adsbygoogle'style='display:block'data-ad-client='ca-pub-5061506355151225'data-ad-slot='3920317659'data-ad-format='auto'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>");
     for(j=1;j<30;j++){
     for (i=1;i<8;i++){
         day=new Date(hi(add));
         w=week[day.getDay()];
         
         if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){
             var aq=(""+i+maime);
             switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
              
           　if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
               if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
           if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
           
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      aday(add);
     }
     maime=(parseInt(maime, 10))%48+1;
     if (maime<10){maime="0"+maime;}
}
    k += '</table><input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
   document.getElementById("all").innerHTML = k;
}
function save(){
var tdStr2 = $("tr").eq(1).children().eq(2).text().substr(0,3);
var tdStr1 = $("tr").eq(1).children().eq(0).text();
alert("開発中"+"\n"
      +tdStr1 +"\n"
      +tdStr2 +"\n"    
);

}
function tase(){
   
     var num1=document.keisan.elements[0].value;
    var maime=String(num1.slice(-2));
    var deban=parseInt(num1.slice(0,1));
    var ad=new Date();
    ad.setFullYear(2016, 2, 6);
    ad.setHours(0, 0, 0, 0);
    var add=new Date();
    add.setHours(0, 0, 0, 0);
    var nday=new Date(ad.getTime()+28*24*60*60*1000);
   
   var k = '<input type="button" value="前のページへ戻る" onclick="location.reload(true)"><table class=thin><caption style="background-color:green">個別予定表</caption>';
    k += '<tr><th bgcolor="#3DF74A">年月日</th><th bgcolor="#3DF74A">曜</th><th bgcolor="#3DF74A">予定</th></tr>'; 
     do{   
      day = new Date(hi(add));//iには'2007/5/5':'PHP攻略完了'の形式の前の方の文字列が入っている。
      w = week[day.getDay()];//曜日を取得
        var aq=parseInt(deban+maime);
      switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
                if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
            if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
    //var aq=parseInt(deban+maime);
    if (job=="   "){job="白";}
    if (job==undefined || deban=="7"){job="休み";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +deban+maime+" "+job +'</td></tr>';
      if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28!=0){deban+=1;}else{deban=deban;}
      aday(add);
      }while(deban<8);
      if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10)+3)%48;}
      //maime=(parseInt(maime, 10))%48+1;
      if(maime==50){maime=2;}
      if (maime<10){maime="0"+maime;}
     for(j=1;j<30;j++){
     for (i=1;i<8;i++){
         day=new Date(hi(add));
         w=week[day.getDay()];
         
         if (((add.getTime()-ad.getTime())/(24*60*60*1000))%28==0){
             var aq=(""+i+maime);
             switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
                if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
            if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
              if (job=="   "){job="白";}
         if (job==undefined || i==7){job="休み";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      aday(add);
      day=new Date(hi(add));
         w=week[day.getDay()];
        
             } 
         var aq=(""+i+maime);
          switch(day.getDay()){
           case 0:
               var c="<tr bgcolor='red'>";
               var job=nichiyo[aq];
               break;
           case 6:
                if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='aqua'>";
               var job=doyo[aq];
               break;
           default:
            if(kyu.indexOf(hi(add))>0){
           　     var c="<tr bgcolor='pink'>";
               var job=nichiyo[aq];
               break;}
               var c="<tr bgcolor='white'>";
               var job=ar[aq];
               break;
       }
         if (job=="   "){job="白";}
         if (job==undefined ||i==7){job="休み";}
       k += c+'<th>' + hi(add) + '</th><td>' + w + '</td><td>' +i+maime+" "+job +'</td></tr>';
      aday(add);
     }
     if((parseInt(maime, 10))%2==0){maime=(parseInt(maime, 10)-1)%48;}else{maime=(parseInt(maime, 10))%48+3;}
    // maime=(parseInt(maime, 10))%48+1;
    if(maime==50){maime=2;}
     if (maime<10){maime="0"+maime;}
}
    k += '</table><input type="button" value="前のページへ戻る" onclick="location.reload(true)">';
   document.getElementById("all").innerHTML = k;
   
}   


