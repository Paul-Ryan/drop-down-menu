/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/setupDropdown.ts":
/*!******************************!*\
  !*** ./src/setupDropdown.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupDropdown": () => (/* binding */ setupDropdown)
/* harmony export */ });
/*
data:
const headers = [header1, header2, header3]
const listItems = {name: string, onClick: (e: event) => void}[]
*/
var setupDropdown = function () {
    var main = document.querySelector("#main");
    var setupPage = function () {
        if (main)
            main.innerHTML = "<h1>fart</h1>";
    };
    var buildDropdownContainer = function (header, listItems) {
        var dropdown = document.createElement("ol");
        dropdown.className = "dropdown";
        dropdown.innerText = header;
        dropdown.appendChild;
        if (main)
            main.appendChild(dropdown);
        listItems.forEach(function (_a) {
            var name = _a.name, onClick = _a.onClick;
            var newListItem = document.createElement("li");
            var itemName = document.createTextNode(name);
            newListItem.appendChild(itemName);
            dropdown.appendChild(newListItem);
        });
    };
    return { buildDropdownContainer: buildDropdownContainer, setupPage: setupPage };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setupDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupDropdown */ "./src/setupDropdown.ts");

var _a = (0,_setupDropdown__WEBPACK_IMPORTED_MODULE_0__.setupDropdown)(), buildDropdownContainer = _a.buildDropdownContainer, setupPage = _a.setupPage;
buildDropdownContainer('dropdown', [{ name: 'hello', onClick: function (e) { return console.log(e); } }]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0VBSUU7QUFPSyxJQUFNLGFBQWEsR0FBRztJQUMzQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdDLElBQU0sU0FBUyxHQUFHO1FBQ2hCLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO0lBQzdDLENBQUMsQ0FBQztJQUVGLElBQU0sc0JBQXNCLEdBQUcsVUFBQyxNQUFjLEVBQUUsU0FBcUI7UUFDbkUsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUdoQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM1QixRQUFRLENBQUMsV0FBVztRQUNwQixJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFlO2dCQUFkLElBQUksWUFBRSxPQUFPO1lBQy9CLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsT0FBTyxFQUFFLHNCQUFzQiwwQkFBRSxTQUFTLGFBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUM7Ozs7Ozs7VUNwQ0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nRDtBQUUxQyxTQUF3Qyw2REFBYSxFQUFFLEVBQXJELHNCQUFzQiw4QkFBRSxTQUFTLGVBQW9CLENBQUM7QUFFOUQsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQVEsSUFBSyxjQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3AtZG93bi1tZW51Ly4vc3JjL3NldHVwRHJvcGRvd24udHMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLW1lbnUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLW1lbnUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Ryb3AtZG93bi1tZW51L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLW1lbnUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcm9wLWRvd24tbWVudS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuZGF0YTogXG5jb25zdCBoZWFkZXJzID0gW2hlYWRlcjEsIGhlYWRlcjIsIGhlYWRlcjNdXG5jb25zdCBsaXN0SXRlbXMgPSB7bmFtZTogc3RyaW5nLCBvbkNsaWNrOiAoZTogZXZlbnQpID0+IHZvaWR9W11cbiovXG5cbmludGVyZmFjZSBsaXN0SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgb25DbGljazogKGU6IEV2ZW50KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBzZXR1cERyb3Bkb3duID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIGNvbnN0IHNldHVwUGFnZSA9ICgpID0+IHtcbiAgICBpZiAobWFpbikgbWFpbi5pbm5lckhUTUwgPSBcIjxoMT5mYXJ0PC9oMT5cIjtcbiAgfTtcblxuICBjb25zdCBidWlsZERyb3Bkb3duQ29udGFpbmVyID0gKGhlYWRlcjogc3RyaW5nLCBsaXN0SXRlbXM6IGxpc3RJdGVtW10gKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgZHJvcGRvd24uY2xhc3NOYW1lID0gXCJkcm9wZG93blwiO1xuXG5cbiAgICBkcm9wZG93bi5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGRcbiAgICBpZiAobWFpbikgbWFpbi5hcHBlbmRDaGlsZChkcm9wZG93bik7XG4gICAgXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKHtuYW1lLCBvbkNsaWNrfSkgPT4ge1xuICAgICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUpO1xuICAgICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIHsgYnVpbGREcm9wZG93bkNvbnRhaW5lciwgc2V0dXBQYWdlIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXR1cERyb3Bkb3duIH0gZnJvbSAnLi9zZXR1cERyb3Bkb3duJztcblxuY29uc3QgeyBidWlsZERyb3Bkb3duQ29udGFpbmVyLCBzZXR1cFBhZ2UgfSA9IHNldHVwRHJvcGRvd24oKTtcblxuYnVpbGREcm9wZG93bkNvbnRhaW5lcignZHJvcGRvd24nLCBbe25hbWU6ICdoZWxsbycsIG9uQ2xpY2s6IChlOiBFdmVudCkgPT4gY29uc29sZS5sb2coZSl9XSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9