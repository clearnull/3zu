$(function () {
    $('.find_r>ul>li').click(function () {
        var index = $(this).index()
        $('.find_r>ul>li').removeClass('change')
        $('.find_r>ul>li').eq(index).addClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        if (index == 1 || index == 3) {
            ajax("http://192.168.31.110:3000/useing/master", "mo", "out")
        } else if (index == 0 || index == 2) {
            ajax("http://192.168.31.110:3000/useing/public", "mo", "out")
        }
    })
    $('.find_t>ul>li').click(function () {
        var index = $(this).index()
        $('.find_t>ul>li').eq(index).addClass('change').siblings().removeClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        if (index == 1 || index == 3) {
            ajax("http://192.168.31.110:3000/useing/master", "mo", "out")
        } else if (index == 0 || index == 2) {
            ajax("http://192.168.31.110:3000/useing/public", "mo", "out")
        }
    })
})