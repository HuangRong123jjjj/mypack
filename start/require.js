let fs = require('fs');
let path = require('path');
//common.js同步方式加载
//AMD异步方法加载
function myrequire(moduleName){
    moduleName = path.join( __dirname,moduleName)
    let content = fs.readFileSync(moduleName,'utf8');
    //最后一个参数是函数体
    let fn = new Function('exports','module','require','__dirName','fileName',
        content+'\n return module.exports')
    let module = {
        exports:{}
    }
    return fn(module.exports,module,myrequire);
}
module.exports = myrequire;
