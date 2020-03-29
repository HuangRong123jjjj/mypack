#! /usr/bin/env node
let fs = require('fs');
let ejs =require('ejs')
let path = require('path')
let entry = './src/index.js';
let bundle = './myPack/bundle2.js';
let output = './dist/main.js';
let script = fs.readFileSync(entry,'utf8');
let modules = [];
script = script.replace(/require\(['"](.+?)['"]\)/g,function(){
    let name = path.join('./src',arguments[1]);
    let content = fs.readFileSync(name,'utf8');
    modules.push({
        name,
        content
    })
    return `__webpack_require__('${name}')`;
})
let template = fs.readFileSync(bundle,'utf8');
let result =ejs.render(template,{
    entry,
    script,
    modules
})
console.log(result)
fs.writeFileSync(output,result);
console.log('成功')

