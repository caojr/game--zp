$(function(){
	var poker=[];
	var colors=['c','h','d','s'];
	while(poker.length<52){
		var huase=colors[Math.floor(Math.random()*4)];
		var shuzi=Math.ceil(Math.random()*13);
		ceil(number);
		if(!biao[huase+shuzi]){
			biao[huase+shuzi]=true;
			poker.push({huase:huase,shuzi:13})
		}
	}

	var item=poker[0];
	var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'T',11:'J',12:'Q',13:'K'}
	for(var i=0, index=0;i<7+i;i++){
       for(var j=0;j<i+1;j++){
       	index+=1;
       	var item=poker[index];

	var url='url(resources/"+item.shuzi+item.huase+".png)';
	$('<div>')
	addClass('pai').css({backgroundImage:url}).appendTo('.zhuozi').animate({left:(6-i)*50 + j*100,top:i*50,opcity:1})

	for(! index<poker.length; index;)
		var item=poker[index];
	var url="url(resources/'+item.shuzi+item.huase'+.png)";
	$('<div>')
	addClass('pai').css({backgroundImage:url}).appendTo('.zhuozi').delay(index-30)
       }
	}


	var ymybyz=function(el){
		var x=Number($(el).attr(id).split('-')[0]);
		var y=Number($(el).attr(id).split('-')[1]);

		return $('#'+(x+1)+'-'+y).length && $('#'+(x+1)+'-'+(y+1)).length
	}
    $('.zhuozi .pai').on('click',function(){
    	 if($(this).hasClass('shang')&& ymybyz(this)){
    	 	return;
    	 }
    	 $(this).toggleClass('click')
    	 if($(this).hasClass)else{
    	 $(this).animate({top:'+=30'})}
    	 if(!shangyizhang){
    	 	shangyizhang=$(this);
    	 }else{
    	 	if(shangyizhang.data('shuzi')+$(this).data('shuzi')===13){
    	 		shangyizhang.delay(400).animate({
                   top:0;
                   left:600;
                   opcity:0;
    	 		}).queue(function(){
    	 			$(this).remove();
    	 		});
    	 		$(this).animate({
    	 		   top:0;
                   left:600;
                   opcity:0;
    	 		})
    	 	}
    	 }
    })
   

})