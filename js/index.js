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
            ajax("http://192.168.31.110:3000/guid/new", "mo", "out")
        } else if (index == 1) {
            ajax("http://192.168.31.110:3000/report/hot", "mo", "out")
        }
    })
})