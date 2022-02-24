//匀速动画就是盒子当前的位置+固定的值10
//缓动动画就是盒子当前的位置-变化的值[(目标值-现在的位置)/10]
//封装动画函数 obj目标移动对象，target目标移动距离  callback回调函数，在计时器结束时执行
function animate(obj, target, callback) {
    //防止点击多次加快速度，只保留一个计时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        //style赋值  offset获取值
        obj.style.left = obj.offsetLeft + step + 'px'
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            // if (callback) {
            //     callback()
            // }
            callback && callback()
        }
    }, 15)
}
