window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//加载更多
$(function () {
    $('.gengduo').on('click', function () {
        $('#otq').css('height', '970')
        $('.gengduo').css('display', 'none')
    })
    //登录
    $('#jsone').on('click', function () {
        console.log(1);
        $('#denglujs').css('display', 'block')
    })
    $('#quxiao').on('click', function () {
        $('#denglujs').css('display', 'none')
    })
})


