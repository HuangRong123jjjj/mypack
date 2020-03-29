/******/ (function(modules) {
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		var module = {
            /******/ 			exports: {}
            /******/ 		};
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/ 		return module.exports;
        /******/ 	}
    /******/ 	return __webpack_require__( '<%-entry%>');
    /******/ })
/******/ ({

    /***/
    /***/ '<%-entry%>':
    /***/ (function(module, exports, __webpack_require__) {
             eval(`<%-script%>`);
          })
           <%for(let i =0;i<modules.length;i++){
                let module = modules[i];%>,
                '<%-module.name%>':
               (function(module, exports, __webpack_require__) {
               eval(`<%-module.content%>`);
                })
          <%}%>
});
