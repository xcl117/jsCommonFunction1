/**
 * @Description: 进行了封装的一些函数，含有（curry等）放在packageF命名空间中
 * @author xcl
 * @date 2019/4/18
 */

var MYAPP = MYAPP || {};

(function (window, MYAPP) {
    MYAPP.packageF = {
        /**
         * @Description: 让函数柯里化，分成两次传值，第一次可以传一些固定的值，返回一个新的函数2，以后用函数2传其他参数即可
         * @author: xcl
         * @date: 2019/4/18 14:37
         * @pram: fn->需要进行柯里化的函数  curry(fn)(1,2,3) 或者 let newFn = curry(fn, 1,2)  newFn(3,4)
         * @res: fn函数的最终结果
         **/
        curry: function (fn) {
            let args1 = [].slice.call(arguments, 1);
            return function () {
                let args2 = [].slice.call(arguments);
                args2 = args1.concat(args2);
                return fn.apply(null, args2);
            }
        }
    }
})(window, MYAPP)

