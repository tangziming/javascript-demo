function ajax(url,fnS,fnF) {
     //1.创建ajax对象
     if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    } else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器
    //open（方法，文件名，异步传输）
    oAjax.open('GET',url,true);
    //3.发送请求
    oAjax.send();
    //4.接受返回
    oAjax.onreadystatechange=function(){
        //oAjax.readyState //浏览器和服务器，进行到哪一步
        if(oAjax.readyState==4){//读取完成
            if(oAjax.status==200){//成功
                fnS(oAjax.responseText);
            }else{
                if(fnF){
                    fnF();
                }
            }
        }
    }
}