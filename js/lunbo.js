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
    var left = document.getElementsByClassName('left')[0]
    var right = document.getElementsByClassName('right')[0]
    var width_ = all.scrollLeft
    left.onclick = function () {
        clearInterval(time1)
        all.scrollLeft = li_[0].scrollWidth * 3.5
    }
    right.onclick = function () {
        clearInterval(time1)
        all.scrollLeft = -(li_[0].scrollWidth * 3.5)
    }
})
