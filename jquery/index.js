$(document).ready(function(){
//	lunbotu
 	var middle=$(".middle")
	var imgs=$("img",$(".middle"))
	var btns=$(".btn",$(".anniu"))
	var left=$(".btnleft");
	var right=$(".btnright")
    imgs.eq(0).css({"opacity":1,"zIndex":1})
    btns.eq(0).css("background","#b61b1f")
    var now=0;
    var next=0;
    var t=setInterval(move,2000)
    function move(){
    	next=now+1;
		  if(next==imgs.length)
		  {
		  	next=0;
		  }
          for(var i=0;i<imgs.length;i++)
          {
          	imgs.eq(i).css({"opacity":0,"zIndex":0})
          	btns.eq(i).css("background","#3E3E3E")
           }
          imgs.eq(next).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0})
          btns.eq(now).css("background","#3E3E3E").end().eq(next).css("background","#b61b1f")
          now=next;
    }
    function movel(){
    	next=now-1;
		  if(next<0)
		  {
		  	next=imgs.length-1;
		  }
          for(var i=0;i<imgs.length;i++)
          {
          	imgs.eq(i).css({"opacity":0,"zIndex":0})
          	btns.eq(i).css("background","#3E3E3E")
           }
          imgs.eq(next).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0})
          btns.eq(now).css("background","#3E3E3E").end().eq(next).css("background","#b61b1f")
          now=next;
    }
    middle.hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(move,2000)
    })
    left.click(function(){
    	movel()
    })
    right.click(function(){
    	move()
    })
    btns.click(function(){
    	var index=btns.index($(this))
    	if(index==now){
    		return;
    	}
    	else if(index<now){
    	for(var i=0;i<imgs.length;i++){
          	imgs.eq(i).css({"opacity":0,"zIndex":0})
          	btns.eq(i).css("background","#3E3E3E")
             }
          imgs.eq(index).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0})
          btns.eq(now).css("background","#3E3E3E").end().eq(index).css("background","#b61b1f")
    	}
    	else if(index>now){
    		for(var i=0;i<imgs.length;i++){
          	imgs.eq(i).css({"opacity":0,"zIndex":0})
          	btns.eq(i).css("background","#3E3E3E")
           }
          imgs.eq(index).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0})
          btns.eq(now).css("background","#3E3E3E").end().eq(index).css("background","#b61b1f")
    	}
    	now=index;
    })
//  jiedianlunbo
       var tuijian=$(".jiedian")
       var tuijian1=$(".jiedian1")
       var tuijian2=$("a",tuijian1)
       var tuil=$(".tuil")
       var tuir=$(".tuir")
       var flag2=true;
       tuijian.hover(
       	function(){tuil.css("display","block");
       	          tuir.css("display","block");
       },function(){tuil.css("display","none");
                   tuir.css("display","none");
       })
       var ww=tuijian2.width();
       function tremove(){
				 tuijian1.animate({left:-ww*4},function(){
				 for(var i=0;i<4;i++)
				 {
				 $(this).append(tuijian1.children().eq(0))
				}
				 tuijian1.css("left",0);
				 flag2=true;
				 })}
        function tremovel(){
	  	        for(var i=0;i<4;i++)
				 {var first=tuijian1.children().first();
				  var last=tuijian1.children().last();
				  last.insertBefore(first);}
				 tuijian1.css("left",-ww*4);
				 tuijian1.animate({left:0},function(){flag2=true})}
      tuil.click(function(){
	  	if(flag2)
             {
            tremovel(); 	
             }
           flag2=false;
	  })
      tuir.click(function(){
	  	if(flag2)
             {
            tremove(); 	
             }
           flag2=false;
	  })
      
//    猜你喜欢
    var like=$(".like");
    var likehx=$(".hx",like);
    like.hover(function(){
     likehx.css("right",1210).animate({right:-1})
    },function(){
    	return;
    })
    var hyp=$("#hyp");
    var liker=$(".liker");
    liker.eq(0).css("display","block")
    var likenow=0
    hyp.click(function(){
      likenow++;
      if(likenow==liker.length)
      {
        likenow=0;
      }
       liker.css("display","none").eq(likenow).css("display","block")
    })
    
    //楼层
    var floor=$(".floor_0");
    for(var i=0;i<11;i++){
    	navsty(floor.eq(i))
    }
    function navsty(obj){
     var mt1=$(".mt1",obj)
     var main=$("[class^=main][class!='main3t'][class!='main3t1'][class!='main3t2'][class!='main3b']",obj)
	 var bar=$("a",mt1);
     main.eq(0).css("display","block")
	  	bar.mouseover(function(){
	  		    var index=bar.index($(this))
	  		    console.log(main.length)
               	bar.removeClass("style2").eq(index).addClass("style2").end().eq(0).addClass("style1")
                main.css("display","none").eq(index).css("display","block")
	  	})
	   
  }
    
    
//  楼层轮播
 	  var floor_2=$(".floor_2")
      var first2=$(".mt1",floor_2)
      var main=$(".content2",floor_2);
      var mianban2=$(".content2l");
      play(mianban2,".lunbo2")
     function play(obj,obj1)
	 {
	 var lunbo_2=$(obj1,obj);
	 var btn_2=$(".btn",obj); 
	 var left2=$(".tuil",obj);
	 var right2=$(".tuir",obj);
	 var now2=0;
	 var next2=0;
	 var flag1=true;
	 btn_2.eq(0).css("background","#b61b1f")
	 var ww2=lunbo_2.width()
	 var tl=setInterval(move2,3000);
	 lunbo_2.slice(1).css("left",ww2)
	 
	 function move2()
	 {
         next2=now2+1;
         if(next2==lunbo_2.length)
         {
         	next2=0
         }
         lunbo_2.eq(next2).css("left",ww2).animate({"left":0}).end().eq(now2)
         .animate({"left":-ww2},function(){flag1=true})
          btn_2.eq(now2).css("background","#3e3e3e").end().eq(next2).css("background","#b61b1f")
          now2=next2;
	 }
	 function move2l()
	 {
         next2=now2-1;
         if(next2<0)
         {
         	next2=lunbo_2.length-1
         }
		lunbo_2.eq(next2).css("left",-ww2).animate({"left":0}).end().eq(now2)
         .animate({"left":ww2},function(){flag1=true})
        btn_2.eq(now2).css("background","#3e3e3e").end().eq(next2).css("background","#b61b1f")
        now2=next2;
	 }
	 obj.mouseover(function(){
	 	clearInterval(tl)
        left2.css("display","block")
        right2.css("display","block")
	 })
	  obj.mouseout(function(){
	 	tl=setInterval(move2,3000)
	 	left2.css("display","none")
        right2.css("display","none")
	 }) 
	btn_2.mouseover(function(){
		
		if(flag1){
		  
	 	  var index=btn_2.index($(this))
	
          if(now2==index)
          {
          now2=index;
          return;    
          }
          else if(now2>index)
          {
         lunbo_2.eq(index).css("left",-ww2).animate({"left":0}).end().eq(now2)
         .animate({"left":ww2},function(){flag1=true})
         btn_2.eq(now2).css("background","#3e3e3e")
         btn_2.eq(index).css("background","#b61b1f")
		 now2=index;
          }
          else if(now2<index)
           {
          lunbo_2.eq(index).css("left",ww2).animate({"left":0}).end().eq(now2)
         .animate({"left":-ww2},function(){flag1=true})
          btn_2.eq(now2).css("background","#3e3e3e")
          btn_2.eq(index).css("background","#b61b1f")
          now2=index;
           }
           }
		flag1=false;
	 	})
	 left2.click(function(){
	 	if(flag1)
	 	{move2l()}
	 	flag1=false
	 })
	 right2.click(function(){
	 	if(flag1)
	 	{move2()}
	 	flag1=false
	 })
   }
	 
	//  第三层
	  var floor_3=$(".floor_3").eq(0)
      var first3=$(".mt1",floor_3).eq(0)  
      var main3=$(".main3",floor_3).eq(0);
      var mianban3=$(".main3t1")
     for(var i=0;i<mianban3.length;i++)
   {
    play(mianban3.eq(i),"a")
  }
   //  第六层
     var floor_6=$(".floor_5").eq(0)
     var first6=$(".mt1",floor_6).eq(0) 
     var main6=$(".main5",floor_6);
  	var mianban6=$(".list52");
  for(var i=0;i<mianban6.length;i++)
   {
    play(mianban6.eq(i),".list521")
  }
   
   //第10层
   	  var floor_10=$(".floor_5").eq(4)
      var first10=$(".mt1",floor_10).eq(0) 
      var main10=$(".main5",floor_10);
      
      
     var mianban10=$(".ten_021").eq(0)
     play(mianban10,"a");
   
   //第12层
   var mianban12=$(".gg1");
   for(var i=0;i<mianban12.length;i++)
   {
    play(mianban12.eq(i),"a")
   }
  //楼层跳转
  var louceng=$(".louceng");
  var num=$(".num");
  var num1=$(".num4");
  var num2=$(".num2");
  var floor_0=$(".floor_0");
  var xnow=0;
  var sflag=true;
  $(window).scroll(function(){
  	if(sflag){
  	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(floor_0.eq(0).offset().top<=obj.scrollTop+800)
        {
            louceng.css("display","block")
        }
        else 
        {
           louceng.css("display","none")

        }
	   for(var i=0;i<floor_0.length;i++)
        {    
          if(floor_0.eq(i).offset().top<=obj.scrollTop+200)
          {  
            
             num2.css("display","block").eq(i).css("display","none")
             num1.css("display","none").addClass("num4 num1").eq(i)
             .css("display","block").removeClass("num1").addClass("num3")
             xnow=i;
          }   

        }
       
  	}
  })
     num.click(function(){
        	var index=num.index($(this))
        	sflag=false;
        	$("body").animate({"scrollTop":floor_0.eq(index).offset().top-200},function(){sflag=true})
        })
     num.hover(function(){
      var index=num.index($(this))
       if(index==xnow){
     		num1.eq(index).removeClass("num3").addClass("num1").css("display","block");
     		num2.eq(index).css("display","none")
     	}
     	
     	else{
     	num1.eq(index).removeClass("num3").css("display","block");
     	num2.eq(index).css("display","none")
     	}
     	
     },function(){
     	var index=num.index($(this))
     	if(index==xnow){
     	num1.eq(index).removeClass("num1").addClass("num3").css("display","block");
     	num2.eq(index).css("display","one")
     	}else{
     	num2.eq(index).css("display","block")
     	num1.eq(index).css("display","none")
     	}
     	
     })
   
  
    //cheap
   var readall=$(".read")
   var reads=$(".read1");
   reads.eq(0).css("top",0).end().eq(1).css("top","123")
  reads.slice(2).css("top",-123)
  var nowday=0;
  var front;
  var nextday=0;
  var ct=setInterval(xiabo,2000)
  readall.mouseover(function(){
    clearInterval(ct)
  })
  readall.mouseout(function(){
    ct=setInterval(xiabo,2000)
  })
  function xiabo(){
    front=nowday-1
    nextday=nowday+1
    if(front<0)
    {
      front=reads.length-1
    }
    if(nextday==reads.length)
    {
      nextday=0;
    }
    reads.eq(front).css("top",-123).animate({"top":0}).end().eq(nowday).
    animate({"top":123}).end().eq(nextday).animate({"top":246})
    nowday=front;
    nextday=nowday;
  }
  $("img").lazyload({effect:"fadeIn"})  
    
//  youxiajiao
    $(".fixR-box1").css("display","block");
//	$(".fixR-box").each(function(index,obj){
//		$(this).on({
//			mouseover:function(){
//				$(this).children(".fixR-img").css("background-color","#c81623");
//				$(this).children(".fixR-box3").css("display","block");
//				$(this).children(".fixR-box3").animate({left:-60},100);
//				$(this).children(".fixR-box1").css("display","none");
//			},
//			mouseout:function(){
//				$(this).children(".fixR-img").css("background-color","#7a6e6e");
//				$(this).children(".fixR-box3").animate({left:0},100);
//				$(this).children(".fixR-box3").css("display","none");
//				$(this).children(".fixR-box1").css("display","block");
//			}
//		})
//	}
  $(".fixR-box").hover(function(){
  	var index=$(".fixR-box").index($(this))
  	$(".fixR-box").eq(index).children(".fixR-img").css("background-color","#c81623").end().children(".fixR-box3").css("display","block")
  	.end().children(".fixR-box3").animate({left:-60},100).end().children(".fixR-box1").css("display","none");
  	
  },function(){
  	var index=$(".fixR-box").index($(this))
  	$(".fixR-box").eq(index).children(".fixR-img").css("background-color","#7a6e6e").end().
  	children(".fixR-box3").animate({left:0},100).css("display","none").
  	end().children(".fixR-box1").css("display","block")
  })
    
    
    
    
    
    
})
