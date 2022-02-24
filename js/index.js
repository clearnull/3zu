var oajax = new XMLHttpRequest() || ActiveXObject('Microsoft.XMLHTTP')
oajax.open('get', 'http://192.168.31.110:3000/report/new', true)
oajax.send()
oajax.onreadystatechange = function () {
    if (oajax.readyState == 4) {
        if (oajax.status == 200) {
            var res = JSON.parse(oajax.responseText)
            // console.log(res, typeof res);
            var html = template("mo", {
                value: res
            })
            document.getElementById('out').innerHTML = html
        }
    }
}
//轮播图

