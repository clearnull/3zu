$(function () {
    $('.find_p>ul>li').click(function () {
        var index = $(this).index()
        $('.find_p>ul>li').eq(index).addClass('change').siblings().removeClass('change')
        $('.father').eq(index).css('display', 'block').siblings('.father').css('display', 'none')
    })
})