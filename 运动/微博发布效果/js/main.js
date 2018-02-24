window.onload = function () {
    var oBtn1 = document.getElementById('btn1');
    var oUl = document.getElementsByTagName('ul')[0];
    var otxt = document.getElementById('txt');

    oBtn1.onclick = function () {
        var oli = document.createElement('li');
        oli.innerText = otxt.value;
        otxt.value = '';
        if (oUl.children.length > 0) {
            oUl.insertBefore(oli, oUl.childNodes[0]);
        }
        else {
            oUl.appendChild(oli);
        }
       
        var iheight=oli.offsetHeight;

       
        oli.style.height=0;
        oli.style.opacity=0;
        startmove(oli,{height:iheight},function(){
            startmove(oli,{opacity:100});
        });
    }

};