/*
用于添加页面onload后立刻执行的函数。
参数为需要立刻执行的函数。
*/

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}