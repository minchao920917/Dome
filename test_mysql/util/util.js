/**
 * @type module
 * @author minchao
 * @time 2018-01-16
 * @desc desc util.js
 */
var fs  = require('fs')//引入文件模块
    , sys = require('util');//引入常用工具模块
/**
 * 获取json文件中的key的
 * @param fileName 文件路径+文件名
 * @param key 属性名key
 * @returns {*}
 */
exports.get = function(fileName, key){
    var configJson = {};
    try{
        var str = fs.readFileSync(fileName,'utf8');//读取json文件
        configJson = JSON.parse(str);//将字符转成对象类型
    }catch(e){
        sys.debug("JSON 解析错误")
    }
    return configJson[key];
}