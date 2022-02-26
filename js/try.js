$(function () {
    $('.find_r>ul>li').click(function () {
        var index = $(this).index()
        $('.find_r>ul>li').removeClass('change')
        $('.find_r>ul>li').eq(index).addClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
    })
    $('.find_t>ul>li').click(function () {
        var index = $(this).index()
        $('.find_t>ul>li').eq(index).addClass('change').siblings().removeClass('change')
        $('.all').eq(index).css('display', 'block').siblings('.all').css('display', 'none')
        // if (index == 0) {
        //     $('out').eq(index).css('display', 'block').siblings('out').css('display', 'none')
        // } else if (index == 1) {
        //     $('outq').eq(index).css('display', 'block').siblings('outq').css('display', 'none')
        // }
    })
})