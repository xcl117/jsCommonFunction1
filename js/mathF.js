/**
 * @Description: 进行了计算的一些函数，放在mathF命名空间中
 * @author xcl
 * @date 2019/4/18
 */

var MYAPP = MYAPP || {};

(function (window, MYAPP) {
    MYAPP.mathF = {
        /**
         * @Description: 求和
         * @author: xcl
         * @date: 2019/4/18 14:35
         * @res: 多个数的和
         **/
        sum: function() {
            let arr = [...arguments];
            return arr.reduce(function (a,b) {
                return a + b;
            })
        }
    }
})(window, MYAPP)

