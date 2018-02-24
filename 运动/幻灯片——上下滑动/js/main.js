window.onload = function () {
    var oDiv = document.getElementById('div1');
    var smallul = oDiv.getElementsByTagName('ul')[0];
    var ali = smallul.getElementsByTagName('li');
    var bigul = document.getElementById('bigul');

    for (var i = 0; i < ali.length; i++) {
        ali[i].index = i;
        var now = 0
        ali[i].onmouseover = function () {
            now = this.index;
            tab();
        }
    }
    function tab() {
        for (var i = 0; i < ali.length; i++) {
            ali[i].className = '';
        }
        ali[now].className = 'select';

        startmove(bigul, { top: now * -426 });
    }
    function next() {

        now++;

        if (now == ali.length) {
            now = 0;
        }
        tab();

    }
    var timer = setInterval(next, 3000);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    }
    oDiv.onmouseout = function () {
        timer = setInterval(next, 3000);
    }

};