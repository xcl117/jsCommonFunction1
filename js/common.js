/**
 * @Description: 公用，没有什么特性，经常使用的函数，放在common命名空间
 * @author xcl
 * @date 2019/4/18
 */

var MYAPP = MYAPP || {};

(function(window, MYAPP){
    MYAPP.common = {
        log: function(str){
            window.console.log(str);
        },
    }
    MYAPP.namespace = function (str) {
        let arrNames = str.split('.'),
            parent = MYAPP;
        arrNames.forEach((item)=>{
            if(parent[item] === undefined){
                parent[item] = {};
            }
            parent = parent[item];
        })
        return parent;
    }
})(window, MYAPP)
