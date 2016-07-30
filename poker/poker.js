$(function(){
var poker=[];
var biao={};
while (poker.length<52) {
	var color=['c','h','d','s'];
	var	c=color[Math.floor(Math.random()*4)];
	var n=Math.ceil(Math.random()*13);
	if (!biao[c+'-'+n]) {
	poker.push({color:c,number:n});
	biao[c+'-'+n]=true;
	};
};

console.table(poker);
var dict={
	1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'T',11:'J',12:'Q',13:'K'
};
for (var i = 0,index=0; i < 7; i++) {
	for (var j = 0; j <i+1 ; j++) {
		index+=1;
	$('<div>')
    .addClass('pai shang')
    .attr('id',i+'-'+j)
    .data('num',poker[index].number)
    .delay(index*100)
    .css({backgroundImage:'url(img/'+dict[poker[index].number]+poker[index].color+'.jpeg)'})
    .animate({
    	top:50*i,
    	left:(6-i)*50+j*120,
    	opacity:1
    })
    .appendTo('.zhuozi')

	};	
};

for (; index < poker.length; index++) {
	$('<div>')
    .addClass('pai zuo')
    .data('num',poker[index].number)
    .delay(index*100)
    .css({backgroundImage:'url(img/'+dict[poker[index].number]+poker[index].color+'.jpeg)'})
    .animate({
    	top:550,
    	left:150,
    	opacity:1
    })
    .appendTo('.zhuozi')

};

var covered=function(el){
	var x=Number($(el).attr('id').split('-')[0]);
	var y=Number($(el).attr('id').split('-')[1]);
	return $('#'+(x+1)+'-'+y).length||$('#'+(x+1)+'-'+(y+1)).length;

}
var shangyizhang;
$('.zhuozi .pai').on('click',function(){
	if ($(this).hasClass('shang')&&covered(this)) {
		return;
	};

$(this).toggleClass('chulie');
if ($(this).hasClass('chulie')) {
	$(this).animate({top:'-=20'})
}else{
	$(this).animate({top:'+=20'})
}
//点第一张
if ($(this).data('num')===13) {
        $(this).animate({
			top:0,
			left:0,
			opacity:0
		}).queue(function(){
			$(this).remove();
		});
		shangyizhang=undefined;
		return;
};
if (!shangyizhang) {
	shangyizhang=$(this);
}else{
	if (shangyizhang.data('num')+$(this).data('num')===13) {
		shangyizhang.delay(400).animate({
			top:0,
			left:0,
			opacity:0
		}).queue(function(){
			$(this).remove();
		});
		$(this).animate({
			top:0,
			left:0,
			opacity:0
		}).queue(function(){
			$(this).remove();
		});
		shangyizhang=undefined;
	}else{
	shangyizhang.delay(400).animate({
			top:'+=20'
		}).removeClass('chulie');
		$(this).animate({
			top:'+=20'
		}).removeClass('chulie');
		shangyizhang=undefined;		
	}
}
});

var zIndex=0;
$('.left').on('click',function(){
	zIndex+=1;
	$('.zhuozi .zuo')
	.eq(-1)
	.removeClass('zuo')
	.addClass('you')
	.animate({
		top:550,
		left:530
	})
	.css({
		zIndex:zIndex
	})

});
var cishu=0;
$('.right').on('click',function(){	
	if($('.zuo').length){
		alert('神秘惊喜在后面')
		return;
	};
	cishu+=1;
	if(cishu>3){
		alert('游戏失败！')
		return;
	};
	$('.you').each(function(i,el){
		$(this)
		.delay(i*50)
		.animate({
			top:550,
			left:150
		})
		.css({
			zIndex:0
		})
		.removeClass('you')
		.addClass('zuo')
	})
}) 

 $('.cxks').on('click',function(){
 	location.reload()
 })

})