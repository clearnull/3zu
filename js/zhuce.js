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
    var user_ = document.getElementById('phone')
    var sp_ = document.getElementsByTagName('span')
    user_.onblur = function () {
        var us_ = user_.value.trim()
        if (us_.length == 0) {
            sp_[0].style.display = 'inline-block'
            sp_[0].innerHTML = '手机号不能为空！'
        } else {
            sp_[0].innerHTML = ''
            user_.style.border = 'green solid 1px'
        }
    }
    user_.onfocus = function () {
        user_.style.border = 'red solid 1px'
    }
    var ph_ = document.getElementById('userName')
    ph_.onblur = function () {
        var us_ = ph_.value.trim()
        if (us_.length == 0) {
            sp_[1].style.display = 'inline-block'
            sp_[1].innerHTML = '用户名不能为空！'
        } else {
            sp_[1].innerHTML = ''
            ph_.style.border = 'green solid 1px'
        }
    }
    ph_.onfocus = function () {
        ph_.style.border = 'red solid 1px'
    }
}