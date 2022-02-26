window.onload = function () {
    //获取验证码
    var yzm = document.getElementsByClassName('auth-code')[0]
    yzm.onclick = function () {
        console.log('a');
        var a = 60
        var time = setInterval(function () {
            yzm.style.pointerEvents = 'none'
            yzm.style.userSelect = 'none'
            a--
            yzm.innerHTML = a
            if (a < 0) {
                clearInterval(time)
                yzm.style.pointerEvents = ''
                yzm.innerHTML = '获取验证码'//4位数字
                a = 60
            }
        }, 1000)
    }
    //验证手机号
    var phone_ = document.getElementById('phone')//手机号
    var imgCode_ = document.getElementById('imgCode')//图片验证码
    var num_ = document.getElementById('num')//验证码
    var user_ = document.getElementById('userName')//用户名
    var psd_ = document.getElementById('psw1')//密码
    var pasd_ = document.getElementById('psw2')//确认密码
    var ss = document.getElementsByClassName('register-div')[0]
    var sp = ss.querySelectorAll('span')
    var btn_ = document.getElementById('promptlyRegister')//注册
    var res_pho = /^1[3578]\d{9}$/
    var res_num = /^\w{6,10}$/
    var res_user = /^[a-zA-Z0-9_-]{4,16}$/
    btn_.onclick = function () {
        if (!res_pho.test(phone_.value)) {
            sp[0].innerHTML = '*请输入正确手机号!'
        } else if (imgCode_.value != 'r2B7') {
            sp[1].innerHTML = '*验证码错误!'
        } else if (!res_user.test(user_.value)) {
            sp[3].innerHTML = '*用户名输入不合法!'
        } else if (!res_num.test(psd_.value)) {
            sp[4].innerHTML = '*密码输入不合法!'
        } else if (psd_.value != pasd_.value) {
            sp[5].innerHTML = '*两次密码不一致!'
        }
    }

}
$(function () {
    //登录
    $('#jsone').on('click', function () {
        console.log(1);
        $('#denglujs').css('display', 'block')
    })
    $('#quxiao').on('click', function () {
        $('#denglujs').css('display', 'none')
    })
})