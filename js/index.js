function ajax(url, a, id) {
    var oajax = new XMLHttpRequest() || ActiveXObject('Microsoft.XMLHTTP')
    oajax.open('get', url, true)
    oajax.send()
    oajax.onreadystatechange = function () {
        if (oajax.readyState == 4) {
            if (oajax.status == 200) {
                var res = JSON.parse(oajax.responseText)
                // console.log(res, typeof res);
                var html = template(a, {
                    value: res
                })
                document.getElementById(id).innerHTML = html
            }
        }
    }
}
$(function () {
    $('.find_p>ul>li').click(function () {
        var index = $(this).index()
        $('.find_p>ul>li').eq(index).addClass('change').siblings().removeClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        if (index == 0) {
            ajax("http://192.168.31.110:3000/report/hot", "mo", "out")
        } else if (index == 1) {
            ajax("http://192.168.31.110:3000/report/new", "mo", "out")
        } else if (index == 2) {
            $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        }
    })
})


$(function () {
    $('.find_r>ul>li').click(function () {
        var index = $(this).index()
        $('.find_r>ul>li').removeClass('change')
        $('.find_r>ul>li').eq(index).addClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        if (index == 1) {
            ajax("http://192.168.31.110:3000/report/hot", "mo", "out")
        } else if (index == 0) {
            ajax("http://192.168.31.110:3000/report/new", "mo", "out")
        }
    })
    $('.find_t>ul>li').click(function () {
        var index = $(this).index()
        $('.find_t>ul>li').eq(index).addClass('change').siblings().removeClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        if (index == 1 || index == 3) {
            ajax("http://192.168.31.110:3000/report/hot", "mo", "out")
            $('out').eq(index).css('display', 'block').siblings('#out').css('display', 'none')
        } else if (index == 0 || index == 2) {
            ajax("http://192.168.31.110:3000/report/new", "mo", "out")
            $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        }
    })
})

// 轮播图
window.addEventListener('load', function () {
    var li_ = document.getElementsByClassName('lis')
    var all = document.getElementById('fat')
    var index = 0
    var time = null, time1 = null
    function fn() {
        time = setInterval(function () {
            index++
            if (index > 5) {
                index = 0
                all.scrollLeft = 0
            }
            move()
        }, 1000)
    }
    fn()
    function move() {
        var step = 0
        var stepmax = 20;
        var star = all.scrollLeft //0
        var end = li_[0].scrollWidth * 3.5 * index
        var everystep = (end - star) / stepmax
        time1 = setInterval(function () {
            step++
            if (step >= stepmax) {
                clearInterval(time1)
            }
            star += everystep
            all.scrollLeft = star
        }, 15)
    }
})
