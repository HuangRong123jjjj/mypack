#! /usr/bin/env node
function cssLoader(source){
   return  `let style = document.createElement('style');
    style.innerText = ${JSON.stringify(source).replace(/\\r\\n/g,'')};
    document.head.appendChild(style);`
}
module.exports = cssLoader

