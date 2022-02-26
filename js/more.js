
var jia = document.getElementById('more');//加载
var xia = document.getElementsByClassName('fa-angle-down')[0];//下箭头
var zhuan = document.getElementsByClassName('fa-spinner')[0];//转圈
var list = document.getElementsByClassName('lise')[0];//页面第三个list
var kuang = document.getElementsByClassName('user')[0];//框
jia.onclick = function () {
    console.log(1);
    xia.style.display = 'none';
    zhuan.style.display = 'block';
    setTimeout(function () {
        jia.style.display = 'none'
        list.style.height = 2000 + 'px';
        kuang.style.height = 2000 + 'px';
    }, 5000)
}