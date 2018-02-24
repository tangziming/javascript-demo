function getStyle(obj,attr){ //兼容获取css的属性 （对象，属性）
	if(obj.currentStyle){
		return obj.currentStyle[attr];  //IE下获取css的属性
	}else{
		return getComputedStyle(obj,false)[attr];//其他浏览器
	}
}

function startmove(obj,json,fn){//（对象，json{属性：目标位置}，后续函数）
clearInterval(obj.timer); //关闭对象原有定时器
obj.timer=setInterval(function(){  //设置当前对象的定时器
	var stop=true; //假设所有值都到目标；
	for(var attr in json){
	var cur=0;
	if(attr=='opacity'){ //如果attr（属性）为透明度
		var cur=Math.round(parseFloat(getStyle(obj,attr))*100);//math.round方法为 四舍五入
	}else{
		var cur=parseInt(getStyle(obj,attr));//
	}
   //json[attr] 为目标位置 target
	var speed=(json[attr]-cur)/5;//速度为（目标位置-对象当前属性值）/系数
	if(speed>0){
		speed=Math.ceil(speed);//数值向上取整 0.9->1
	}else{
		speed=Math.floor(speed);//数值向下取整 -0.9->-1
	}
	if(cur!=json[attr]){
		stop=false;
	}
	if(attr=='opacity'){//如果attr（属性）为透明度
		obj.style[attr]=(cur+speed)/100;  //透明度为（当前透明度+速度）/100
	}else{
		obj.style[attr]=cur+speed+'px'; //设置位置；
	}
	if(stop){
		clearInterval(this.timer);
		if(fn)fn();
	}
}
},30);

}