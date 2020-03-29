let factories = {};
function define(moduleName,dependencies,fatory){
    factories[moduleName] = fatory;
    fatory.dependencies = dependencies;
}
function require(mods,fn){
    let result = mods.map(function (mod) {
        let factory = factories[mod];
        let exports ;
        require(factory.dependencies,function () {
            exports = factory.call(null,...arguments)
        })
        return exports;
    });
    fn.call(null,result)
}
define('name',[],function(){
    return 'hhrr';
});
define('age',['name'],function(name){
    return 25+name;
})
require(['age'],function (age) {
    console.log(age)
})
