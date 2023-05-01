/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  transition: all 0.2s ease-in-out;\r\n  background: linear-gradient(90deg, #000000,#8a8a8a);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.keyboard-wrapper {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  background: linear-gradient(90deg, #006666,#006666,#b4fed9);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-radius: 10%;\r\n  overflow: hidden;\r\n  order: 2;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.key {\r\n  width: 60px;\r\n  height: 60px;\r\n  background: linear-gradient(90deg, #1d3844,#2e485f,#1d3844);\r\n  color: rgb(158, 97, 186);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 2px;\r\n  transition: all 0.2s ease-in-out;\r\n  border-radius: 0 20% 20%;\r\n  cursor: pointer;\r\n}\r\n\r\n.key:hover {\r\n  background: linear-gradient(90deg, #0a4f5f,#66a8b8);\r\n  color: azure;\r\n}\r\n.key.active {\r\n   background: linear-gradient(90deg, #9c4ab1,#e775d9,#d893ce);\r\n   color: rgb(7, 0, 0);\r\n   border-radius: 0 50%;\r\n}\r\n\r\n.key.removed {\r\n   animation: key-animation 0.2s ease-in-out;\r\n}\r\n\r\n@keyframes key-animation {\r\n   0% {\r\n      background-color: #dbe2dd;\r\n      color: aqua;\r\n   }\r\n\r\n   100% {\r\n      background-color: #1892ad;\r\n      color: rgb(15, 3, 3);\r\n   }\r\n}\r\n\r\n.keyboard-keys {\r\n  padding: 20px;\r\n}\r\n\r\n.backspace {\r\n  width: 120px;\r\n}\r\n\r\n.backspace::after {\r\n  content: \"Backspace\";\r\n}\r\n\r\n.tab {\r\n  width: 124px;\r\n}\r\n\r\n.tab::after {\r\n  content: \"Tab\";\r\n}\r\n\r\n.enter {\r\n  width: 130px;\r\n}\r\n\r\n.enter::after {\r\n  content: \"Enter\";\r\n}\r\n\r\n.caps-lock {\r\n  width: 124px;\r\n}\r\n\r\n.caps-lock::after {\r\n  content: \"Caps Lock\";\r\n}\r\n\r\n.delete::after {\r\n  content: \"Del\";\r\n}\r\n\r\n.ctrl::after {\r\n  content: \"Ctrl\";\r\n}\r\n\r\n.alt::after {\r\n  content: \"Alt\";\r\n}\r\n\r\n.shift {\r\n  width: 124px;\r\n}\r\n\r\n.shift::after {\r\n  content: \"Shift\";\r\n}\r\n\r\n.space {\r\n  max-width: 380px;\r\n  width: 100%;\r\n}\r\n\r\n.lang::after {\r\n  content: \"Lang\";\r\n}\r\n\r\n.input {\r\n   background-color: rgb(187, 112, 187);\r\n   color: #1709ae;\r\n   font-weight: 700;\r\n   margin-bottom: 30px;\r\n   padding: 12px;\r\n   max-width: 1100px;\r\n   width: 100%;\r\n   height: 120px;\r\n   border: 4px solid black;\r\n   font-size: 20px;\r\n   transition: 0.2s ease-in-out;\r\n}\r\n\r\n.uppercase {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.language {\r\n  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\r\n}\r\n\r\n.info {\r\n  font-size: 22px;\r\n  padding: 20px;\r\n  color: #ff2111;\r\n}", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,gCAAgC;EAChC,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,2DAA2D;EAC3D,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2DAA2D;EAC3D,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,gCAAgC;EAChC,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,mDAAmD;EACnD,YAAY;AACd;AACA;GACG,2DAA2D;GAC3D,mBAAmB;GACnB,oBAAoB;AACvB;;AAEA;GACG,yCAAyC;AAC5C;;AAEA;GACG;MACG,yBAAyB;MACzB,WAAW;GACd;;GAEA;MACG,yBAAyB;MACzB,oBAAoB;GACvB;AACH;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;GACG,oCAAoC;GACpC,cAAc;GACd,gBAAgB;GAChB,mBAAmB;GACnB,aAAa;GACb,iBAAiB;GACjB,WAAW;GACX,aAAa;GACb,uBAAuB;GACvB,eAAe;GACf,4BAA4B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qFAAqF;AACvF;;AAEA;EACE,eAAe;EACf,aAAa;EACb,cAAc;AAChB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  transition: all 0.2s ease-in-out;\r\n  background: linear-gradient(90deg, #000000,#8a8a8a);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.keyboard-wrapper {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  background: linear-gradient(90deg, #006666,#006666,#b4fed9);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-radius: 10%;\r\n  overflow: hidden;\r\n  order: 2;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.key {\r\n  width: 60px;\r\n  height: 60px;\r\n  background: linear-gradient(90deg, #1d3844,#2e485f,#1d3844);\r\n  color: rgb(158, 97, 186);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 2px;\r\n  transition: all 0.2s ease-in-out;\r\n  border-radius: 0 20% 20%;\r\n  cursor: pointer;\r\n}\r\n\r\n.key:hover {\r\n  background: linear-gradient(90deg, #0a4f5f,#66a8b8);\r\n  color: azure;\r\n}\r\n.key.active {\r\n   background: linear-gradient(90deg, #9c4ab1,#e775d9,#d893ce);\r\n   color: rgb(7, 0, 0);\r\n   border-radius: 0 50%;\r\n}\r\n\r\n.key.removed {\r\n   animation: key-animation 0.2s ease-in-out;\r\n}\r\n\r\n@keyframes key-animation {\r\n   0% {\r\n      background-color: #dbe2dd;\r\n      color: aqua;\r\n   }\r\n\r\n   100% {\r\n      background-color: #1892ad;\r\n      color: rgb(15, 3, 3);\r\n   }\r\n}\r\n\r\n.keyboard-keys {\r\n  padding: 20px;\r\n}\r\n\r\n.backspace {\r\n  width: 120px;\r\n}\r\n\r\n.backspace::after {\r\n  content: \"Backspace\";\r\n}\r\n\r\n.tab {\r\n  width: 124px;\r\n}\r\n\r\n.tab::after {\r\n  content: \"Tab\";\r\n}\r\n\r\n.enter {\r\n  width: 130px;\r\n}\r\n\r\n.enter::after {\r\n  content: \"Enter\";\r\n}\r\n\r\n.caps-lock {\r\n  width: 124px;\r\n}\r\n\r\n.caps-lock::after {\r\n  content: \"Caps Lock\";\r\n}\r\n\r\n.delete::after {\r\n  content: \"Del\";\r\n}\r\n\r\n.ctrl::after {\r\n  content: \"Ctrl\";\r\n}\r\n\r\n.alt::after {\r\n  content: \"Alt\";\r\n}\r\n\r\n.shift {\r\n  width: 124px;\r\n}\r\n\r\n.shift::after {\r\n  content: \"Shift\";\r\n}\r\n\r\n.space {\r\n  max-width: 380px;\r\n  width: 100%;\r\n}\r\n\r\n.lang::after {\r\n  content: \"Lang\";\r\n}\r\n\r\n.input {\r\n   background-color: rgb(187, 112, 187);\r\n   color: #1709ae;\r\n   font-weight: 700;\r\n   margin-bottom: 30px;\r\n   padding: 12px;\r\n   max-width: 1100px;\r\n   width: 100%;\r\n   height: 120px;\r\n   border: 4px solid black;\r\n   font-size: 20px;\r\n   transition: 0.2s ease-in-out;\r\n}\r\n\r\n.uppercase {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.language {\r\n  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\r\n}\r\n\r\n.info {\r\n  font-size: 22px;\r\n  padding: 20px;\r\n  color: #ff2111;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* eslint-disable linebreak-style */


const body = document.querySelector('body');
const container = document.createElement('div');
const keyboardWrapp = document.createElement('div');
const keyboardKeys = document.createElement('div');
const input = document.createElement('textarea');
const numberArr = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', ''];
const tabArr = ['', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', ''];
const capsArr = ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', ''];
const shiftArr = ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', ''];
const ctrlArr = ['', '', '', '', '', '', '←', '↓', '→'];

function createHtml() {
  container.classList.add('container');
  keyboardWrapp.classList.add('keyboard-wrapper');
  keyboardKeys.classList.add('keyboard-keys');
  input.classList.add('input');
  input.setAttribute('type', 'text');
  body.appendChild(container);
  container.appendChild(input);
  container.appendChild(keyboardWrapp);
  keyboardWrapp.appendChild(keyboardKeys);
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboardKeys.appendChild(row);
  }
  const rows = document.querySelectorAll('.row');
  rows[0].classList.add('row-1');
  const row1 = rows[0];
  for (let i = 0; i < numberArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = numberArr[i];
    row1.appendChild(key);
  }
  rows[1].classList.add('row-2');
  const row2 = rows[1];
  for (let i = 0; i < tabArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = tabArr[i];
    row2.appendChild(key);
  }
  rows[2].classList.add('row-3');
  const row3 = rows[2];
  for (let i = 0; i < capsArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = capsArr[i];
    row3.appendChild(key);
  }
  rows[3].classList.add('row-4');
  const row4 = rows[3];
  for (let i = 0; i < shiftArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = shiftArr[i];
    row4.appendChild(key);
  }
  rows[4].classList.add('row-5');
  const row5 = rows[4];
  for (let i = 0; i < ctrlArr.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = ctrlArr[i];
    row5.appendChild(key);
  }
  const keys = document.querySelectorAll('.key', 'option');
  keys[13].classList.add('backspace', 'option');
  keys[14].classList.add('tab', 'option');
  keys[27].classList.add('slash', 'option');
  keys[28].classList.add('delete', 'option');
  keys[29].classList.add('caps-lock', 'option');
  keys[41].classList.add('enter', 'option');
  keys[42].classList.add('shift', 'shift-left', 'option');
  keys[54].classList.add('shift', 'shift-right', 'option');
  keys[53].classList.add('arrow-top', 'option');
  keys[55].classList.add('ctrl', 'ctrl-left', 'option');
  keys[56].classList.add('lang', 'option');
  keys[57].classList.add('alt', 'alt-left', 'option');
  keys[58].classList.add('space', 'option');
  keys[59].classList.add('alt', 'alt-right', 'option');
  keys[60].classList.add('ctrl', 'ctrl-right', 'option');
  keys[61].classList.add('arrow-left', 'option');
  keys[62].classList.add('arrow-bottom', 'option');
  keys[63].classList.add('arrow-right', 'option');
  const p = document.createElement('p');
  p.classList.add('info');
  keyboardWrapp.appendChild(p);
  p.innerText = 'Клавиатура создана в операционной системе Windows Для переключения языка используйте клавишу "Lang"';
}

createHtml();

const keys = document.querySelectorAll('.key');
const space = document.querySelector('.space');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');
const capsLock = document.querySelector('.caps-lock');
const arrowTop = document.querySelector('.arrow-top');
const arrowRight = document.querySelector('.arrow-right');
const arrowBottom = document.querySelector('.arrow-bottom');
const arrowLeft = document.querySelector('.arrow-left');
const enter = document.querySelector('.enter');
const tab = document.querySelector('.tab');
const backspace = document.querySelector('.backspace');
const del = document.querySelector('.delete');
const ctrlLeft = document.querySelector('.ctrl-left');
const ctrlRight = document.querySelector('.ctrl-right');
const altLeft = document.querySelector('.alt-left');
const altRight = document.querySelector('.alt-right');
const lang = document.querySelector('.lang');
const phisicalKeyboard = () => {
  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('LowerCaseName')) {
        keys[i].classList.add('active');
        input.value += keys[i].innerText;
      }
    }
    if (e.code === 'Space') {
      space.classList.add('active');
      input.value += '';
    }
    if (e.code === 'ShiftLeft') {
      shiftLeft.classList.add('active');
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftRight.classList.add('active');
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.toggle('active');
      keyboardWrapp.classList.toggle('uppercase');
      e.preventDefault();
    }
    if (e.code === 'ArrowUp') {
      arrowTop.classList.add('active');
      input.value += '↑';
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
      input.value += '→';
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.add('active');
      input.value += '↓';
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
      input.value += '←';
    }
    if (e.code === 'Enter') {
      enter.classList.add('active');
      input.value += '\n';
    }
    if (e.code === 'Tab') {
      tab.classList.toggle('removed');
      input.value += '\t';
      e.preventDefault();
    }
    if (e.code === 'Backspace') {
      backspace.classList.add('active');
    }
    if (e.code === 'Delete') {
      del.classList.add('active');
      input.value += '';
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.add('active');
    }
    if (e.code === 'AltRight') {
      altRight.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
  });

  window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('LowerCaseName')) {
        keys[i].classList.remove('active');
        keys[i].classList.toggle('removed');
      }
    }

    if (e.code === 'Space') {
      space.classList.remove('active');
      space.classList.toggle('removed');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.remove('active');
      capsLock.classList.add('removed');
    }
    if (e.code === 'ShiftLeft') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ArrowUp') {
      arrowTop.classList.remove('active');
      arrowTop.classList.toggle('removed');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.toggle('removed');
    }
    if (e.code === 'ArrowDown') {
      arrowBottom.classList.remove('active');
      arrowBottom.classList.toggle('removed');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.toggle('removed');
    }
    if (e.code === 'Enter') {
      enter.classList.remove('active');
      enter.classList.toggle('removed');
    }
    if (e.code === 'Backspace') {
      backspace.classList.remove('active');
      backspace.classList.toggle('removed');
    }
    if (e.code === 'Delete') {
      del.classList.remove('active');
      del.classList.toggle('removed');
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.remove('active');
      altLeft.classList.toggle('removed');
    }
    if (e.code === 'AltRight') {
      altRight.classList.remove('active');
      altRight.classList.toggle('removed');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      ctrlLeft.classList.toggle('removed');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      ctrlRight.classList.toggle('removed');
    }
  });
};

phisicalKeyboard();

function virtualKeyboard() {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('LowerCaseName', keys[i].innerText.toLowerCase());
    keys[i].addEventListener('mousedown', () => {
      input.value += keys[i].innerText;
      keys[i].classList.add('active');
    });
    keys[i].addEventListener('mouseup', () => {
      keys[i].classList.remove('active');
    });
  }
  space.addEventListener('click', () => {
    input.value += ' ';
  });

  keys.forEach((key) => {
    key.addEventListener('click', function q() {
      if (this.classList.contains('caps-lock')) {
        keyboardWrapp.classList.toggle('uppercase');
      }
    });
  });

  tab.addEventListener('click', () => {
    input.value += '\t';
    input.focus();
  });

  enter.addEventListener('click', () => {
    input.value += '\n';
    input.focus();
  });

  backspace.addEventListener('click', () => {
    input.setRangeText('', input.selectionStart - 1, input.selectionEnd);
    input.focus();
  });

  del.addEventListener('click', () => {
    input.setRangeText('', input.selectionStart, input.selectionEnd + 1);
    input.focus();
  });
}

virtualKeyboard();

function changeLanguage() {
  const key = document.querySelectorAll('.key');
  key.forEach((item) => {
    if (!item.classList.contains('option')) {
      item.classList.add('symbol');
    }
  });
  const symbol = document.querySelectorAll('.symbol');
  const arrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
  const arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
  keyboardWrapp.classList.toggle('language');
  if (keyboardWrapp.classList.contains('language')) {
    for (let i = 0; i < arrRu.length; i += 1) {
      symbol[i].innerText = arrRu[i];
      localStorage.setItem(symbol[i].innerText, arrRu[i]);
    }
  } else {
    for (let i = 0; i < arrEng.length; i += 1) {
      symbol[i].innerText = arrEng[i];
      localStorage.setItem(symbol[i].innerText, arrEng[i]);
    }
  }
}

lang.addEventListener('click', changeLanguage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3N0eWxlLmNzcz8wZDQzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMCwjOGE4YThhKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmtleWJvYXJkLXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDY2NjYsIzAwNjY2NiwjYjRmZWQ5KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmtleSB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFkMzg0NCwjMmU0ODVmLCMxZDM4NDQpO1xcclxcbiAgY29sb3I6IHJnYigxNTgsIDk3LCAxODYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDIwJSAyMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5rZXk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGE0ZjVmLCM2NmE4YjgpO1xcclxcbiAgY29sb3I6IGF6dXJlO1xcclxcbn1cXHJcXG4ua2V5LmFjdGl2ZSB7XFxyXFxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOWM0YWIxLCNlNzc1ZDksI2Q4OTNjZSk7XFxyXFxuICAgY29sb3I6IHJnYig3LCAwLCAwKTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAwIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS5yZW1vdmVkIHtcXHJcXG4gICBhbmltYXRpb246IGtleS1hbmltYXRpb24gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBrZXktYW5pbWF0aW9uIHtcXHJcXG4gICAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTJkZDtcXHJcXG4gICAgICBjb2xvcjogYXF1YTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgMTAwJSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTJhZDtcXHJcXG4gICAgICBjb2xvcjogcmdiKDE1LCAzLCAzKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbi5rZXlib2FyZC1rZXlzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrc3BhY2Uge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NwYWNlOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiQmFja3NwYWNlXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICB3aWR0aDogMTI0cHg7XFxyXFxufVxcclxcblxcclxcbi50YWI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJUYWJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXIge1xcclxcbiAgd2lkdGg6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJFbnRlclxcXCI7XFxyXFxufVxcclxcblxcclxcbi5jYXBzLWxvY2sge1xcclxcbiAgd2lkdGg6IDEyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fwcy1sb2NrOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiQ2FwcyBMb2NrXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkRlbFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5jdHJsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiQ3RybFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5hbHQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJBbHRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpZnQge1xcclxcbiAgd2lkdGg6IDEyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpZnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJTaGlmdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZSB7XFxyXFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sYW5nOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiTGFuZ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTEyLCAxODcpO1xcclxcbiAgIGNvbG9yOiAjMTcwOWFlO1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgIG1heC13aWR0aDogMTEwMHB4O1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51cHBlcmNhc2Uge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5sYW5ndWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIzOCwxNzQsMjAyLDEpIDAlLCByZ2JhKDE0OCwxODcsMjMzLDEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZjIxMTE7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJEQUEyRDtFQUMzRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyREFBMkQ7RUFDM0Qsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsWUFBWTtBQUNkO0FBQ0E7R0FDRywyREFBMkQ7R0FDM0QsbUJBQW1CO0dBQ25CLG9CQUFvQjtBQUN2Qjs7QUFFQTtHQUNHLHlDQUF5QztBQUM1Qzs7QUFFQTtHQUNHO01BQ0cseUJBQXlCO01BQ3pCLFdBQVc7R0FDZDs7R0FFQTtNQUNHLHlCQUF5QjtNQUN6QixvQkFBb0I7R0FDdkI7QUFDSDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtHQUNHLG9DQUFvQztHQUNwQyxjQUFjO0dBQ2QsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixhQUFhO0dBQ2IsaUJBQWlCO0dBQ2pCLFdBQVc7R0FDWCxhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLGVBQWU7R0FDZiw0QkFBNEI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxRkFBcUY7QUFDdkY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwMDAsIzhhOGE4YSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5rZXlib2FyZC13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA2NjY2LCMwMDY2NjYsI2I0ZmVkOSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5rZXkge1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZDM4NDQsIzJlNDg1ZiwjMWQzODQ0KTtcXHJcXG4gIGNvbG9yOiByZ2IoMTU4LCA5NywgMTg2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAyMCUgMjAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ua2V5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBhNGY1ZiwjNjZhOGI4KTtcXHJcXG4gIGNvbG9yOiBhenVyZTtcXHJcXG59XFxyXFxuLmtleS5hY3RpdmUge1xcclxcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzljNGFiMSwjZTc3NWQ5LCNkODkzY2UpO1xcclxcbiAgIGNvbG9yOiByZ2IoNywgMCwgMCk7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMCA1MCU7XFxyXFxufVxcclxcblxcclxcbi5rZXkucmVtb3ZlZCB7XFxyXFxuICAgYW5pbWF0aW9uOiBrZXktYW5pbWF0aW9uIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMga2V5LWFuaW1hdGlvbiB7XFxyXFxuICAgMCUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmUyZGQ7XFxyXFxuICAgICAgY29sb3I6IGFxdWE7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIDEwMCUge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODkyYWQ7XFxyXFxuICAgICAgY29sb3I6IHJnYigxNSwgMywgMyk7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ua2V5Ym9hcmQta2V5cyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NwYWNlIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzcGFjZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkJhY2tzcGFjZVxcXCI7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgd2lkdGg6IDEyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiVGFiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyIHtcXHJcXG4gIHdpZHRoOiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiRW50ZXJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fwcy1sb2NrIHtcXHJcXG4gIHdpZHRoOiAxMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcHMtbG9jazo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkNhcHMgTG9ja1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJEZWxcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uY3RybDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkN0cmxcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWx0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiQWx0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaWZ0IHtcXHJcXG4gIHdpZHRoOiAxMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaWZ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiU2hpZnRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2Uge1xcclxcbiAgbWF4LXdpZHRoOiAzODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkxhbmdcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDExMiwgMTg3KTtcXHJcXG4gICBjb2xvcjogIzE3MDlhZTtcXHJcXG4gICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgcGFkZGluZzogMTJweDtcXHJcXG4gICBtYXgtd2lkdGg6IDExMDBweDtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udXBwZXJjYXNlIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2Uge1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmYyMTExO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGtleWJvYXJkV3JhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3Qga2V5Ym9hcmRLZXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuY29uc3QgbnVtYmVyQXJyID0gWydgJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMCwgJy0nLCAnPScsICcnXTtcclxuY29uc3QgdGFiQXJyID0gWycnLCAncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCcsICdbJywgJ10nLCAnXFxcXCcsICcnXTtcclxuY29uc3QgY2Fwc0FyciA9IFsnJywgJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJywgJzsnLCAnXFwnJywgJyddO1xyXG5jb25zdCBzaGlmdEFyciA9IFsnJywgJ3onLCAneCcsICdjJywgJ3YnLCAnYicsICduJywgJ20nLCAnLCcsICcuJywgJy8nLCAn4oaRJywgJyddO1xyXG5jb25zdCBjdHJsQXJyID0gWycnLCAnJywgJycsICcnLCAnJywgJycsICfihpAnLCAn4oaTJywgJ+KGkiddO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHRtbCgpIHtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAga2V5Ym9hcmRXcmFwcC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC13cmFwcGVyJyk7XHJcbiAga2V5Ym9hcmRLZXlzLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleXMnKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleWJvYXJkV3JhcHApO1xyXG4gIGtleWJvYXJkV3JhcHAuYXBwZW5kQ2hpbGQoa2V5Ym9hcmRLZXlzKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcbiAgICBrZXlib2FyZEtleXMuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbiAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKTtcclxuICByb3dzWzBdLmNsYXNzTGlzdC5hZGQoJ3Jvdy0xJyk7XHJcbiAgY29uc3Qgcm93MSA9IHJvd3NbMF07XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJBcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xyXG4gICAga2V5LmlubmVySFRNTCA9IG51bWJlckFycltpXTtcclxuICAgIHJvdzEuYXBwZW5kQ2hpbGQoa2V5KTtcclxuICB9XHJcbiAgcm93c1sxXS5jbGFzc0xpc3QuYWRkKCdyb3ctMicpO1xyXG4gIGNvbnN0IHJvdzIgPSByb3dzWzFdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcclxuICAgIGtleS5pbm5lckhUTUwgPSB0YWJBcnJbaV07XHJcbiAgICByb3cyLmFwcGVuZENoaWxkKGtleSk7XHJcbiAgfVxyXG4gIHJvd3NbMl0uY2xhc3NMaXN0LmFkZCgncm93LTMnKTtcclxuICBjb25zdCByb3czID0gcm93c1syXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcHNBcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xyXG4gICAga2V5LmlubmVySFRNTCA9IGNhcHNBcnJbaV07XHJcbiAgICByb3czLmFwcGVuZENoaWxkKGtleSk7XHJcbiAgfVxyXG4gIHJvd3NbM10uY2xhc3NMaXN0LmFkZCgncm93LTQnKTtcclxuICBjb25zdCByb3c0ID0gcm93c1szXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaWZ0QXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGtleS5jbGFzc0xpc3QuYWRkKCdrZXknKTtcclxuICAgIGtleS5pbm5lckhUTUwgPSBzaGlmdEFycltpXTtcclxuICAgIHJvdzQuYXBwZW5kQ2hpbGQoa2V5KTtcclxuICB9XHJcbiAgcm93c1s0XS5jbGFzc0xpc3QuYWRkKCdyb3ctNScpO1xyXG4gIGNvbnN0IHJvdzUgPSByb3dzWzRdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3RybEFyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XHJcbiAgICBrZXkuaW5uZXJIVE1MID0gY3RybEFycltpXTtcclxuICAgIHJvdzUuYXBwZW5kQ2hpbGQoa2V5KTtcclxuICB9XHJcbiAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXknLCAnb3B0aW9uJyk7XHJcbiAga2V5c1sxM10uY2xhc3NMaXN0LmFkZCgnYmFja3NwYWNlJywgJ29wdGlvbicpO1xyXG4gIGtleXNbMTRdLmNsYXNzTGlzdC5hZGQoJ3RhYicsICdvcHRpb24nKTtcclxuICBrZXlzWzI3XS5jbGFzc0xpc3QuYWRkKCdzbGFzaCcsICdvcHRpb24nKTtcclxuICBrZXlzWzI4XS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1syOV0uY2xhc3NMaXN0LmFkZCgnY2Fwcy1sb2NrJywgJ29wdGlvbicpO1xyXG4gIGtleXNbNDFdLmNsYXNzTGlzdC5hZGQoJ2VudGVyJywgJ29wdGlvbicpO1xyXG4gIGtleXNbNDJdLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0JywgJ3NoaWZ0LWxlZnQnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1s1NF0uY2xhc3NMaXN0LmFkZCgnc2hpZnQnLCAnc2hpZnQtcmlnaHQnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1s1M10uY2xhc3NMaXN0LmFkZCgnYXJyb3ctdG9wJywgJ29wdGlvbicpO1xyXG4gIGtleXNbNTVdLmNsYXNzTGlzdC5hZGQoJ2N0cmwnLCAnY3RybC1sZWZ0JywgJ29wdGlvbicpO1xyXG4gIGtleXNbNTZdLmNsYXNzTGlzdC5hZGQoJ2xhbmcnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1s1N10uY2xhc3NMaXN0LmFkZCgnYWx0JywgJ2FsdC1sZWZ0JywgJ29wdGlvbicpO1xyXG4gIGtleXNbNThdLmNsYXNzTGlzdC5hZGQoJ3NwYWNlJywgJ29wdGlvbicpO1xyXG4gIGtleXNbNTldLmNsYXNzTGlzdC5hZGQoJ2FsdCcsICdhbHQtcmlnaHQnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1s2MF0uY2xhc3NMaXN0LmFkZCgnY3RybCcsICdjdHJsLXJpZ2h0JywgJ29wdGlvbicpO1xyXG4gIGtleXNbNjFdLmNsYXNzTGlzdC5hZGQoJ2Fycm93LWxlZnQnLCAnb3B0aW9uJyk7XHJcbiAga2V5c1s2Ml0uY2xhc3NMaXN0LmFkZCgnYXJyb3ctYm90dG9tJywgJ29wdGlvbicpO1xyXG4gIGtleXNbNjNdLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXJpZ2h0JywgJ29wdGlvbicpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcbiAga2V5Ym9hcmRXcmFwcC5hcHBlbmRDaGlsZChwKTtcclxuICBwLmlubmVyVGV4dCA9ICfQmtC70LDQstC40LDRgtGD0YDQsCDRgdC+0LfQtNCw0L3QsCDQsiDQvtC/0LXRgNCw0YbQuNC+0L3QvdC+0Lkg0YHQuNGB0YLQtdC80LUgV2luZG93cyDQlNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGP0LfRi9C60LAg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQutC70LDQstC40YjRgyBcIkxhbmdcIic7XHJcbn1cclxuXHJcbmNyZWF0ZUh0bWwoKTtcclxuXHJcbmNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Jyk7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlJyk7XHJcbmNvbnN0IHNoaWZ0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlmdC1sZWZ0Jyk7XHJcbmNvbnN0IHNoaWZ0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpZnQtcmlnaHQnKTtcclxuY29uc3QgY2Fwc0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fwcy1sb2NrJyk7XHJcbmNvbnN0IGFycm93VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXRvcCcpO1xyXG5jb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXJpZ2h0Jyk7XHJcbmNvbnN0IGFycm93Qm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWJvdHRvbScpO1xyXG5jb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctbGVmdCcpO1xyXG5jb25zdCBlbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcicpO1xyXG5jb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiJyk7XHJcbmNvbnN0IGJhY2tzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrc3BhY2UnKTtcclxuY29uc3QgZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xyXG5jb25zdCBjdHJsTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdHJsLWxlZnQnKTtcclxuY29uc3QgY3RybFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN0cmwtcmlnaHQnKTtcclxuY29uc3QgYWx0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHQtbGVmdCcpO1xyXG5jb25zdCBhbHRSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHQtcmlnaHQnKTtcclxuY29uc3QgbGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5nJyk7XHJcbmNvbnN0IHBoaXNpY2FsS2V5Ym9hcmQgPSAoKSA9PiB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ2tleW5hbWUnKSB8fCBlLmtleSA9PT0ga2V5c1tpXS5nZXRBdHRyaWJ1dGUoJ0xvd2VyQ2FzZU5hbWUnKSkge1xyXG4gICAgICAgIGtleXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgKz0ga2V5c1tpXS5pbm5lclRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGlucHV0LnZhbHVlICs9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NoaWZ0TGVmdCcpIHtcclxuICAgICAgc2hpZnRMZWZ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBzaGlmdFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKSB7XHJcbiAgICAgIHNoaWZ0UmlnaHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHNoaWZ0TGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdDYXBzTG9jaycpIHtcclxuICAgICAgY2Fwc0xvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIGtleWJvYXJkV3JhcHAuY2xhc3NMaXN0LnRvZ2dsZSgndXBwZXJjYXNlJyk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBhcnJvd1RvcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgaW5wdXQudmFsdWUgKz0gJ+KGkSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgaW5wdXQudmFsdWUgKz0gJ+KGkic7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBhcnJvd0JvdHRvbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgaW5wdXQudmFsdWUgKz0gJ+KGkyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICBhcnJvd0xlZnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGlucHV0LnZhbHVlICs9ICfihpAnO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBlbnRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgaW5wdXQudmFsdWUgKz0gJ1xcbic7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnVGFiJykge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgICBpbnB1dC52YWx1ZSArPSAnXFx0JztcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgYmFja3NwYWNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0RlbGV0ZScpIHtcclxuICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBpbnB1dC52YWx1ZSArPSAnJztcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdBbHRMZWZ0Jykge1xyXG4gICAgICBhbHRMZWZ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0FsdFJpZ2h0Jykge1xyXG4gICAgICBhbHRSaWdodC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdDb250cm9sTGVmdCcpIHtcclxuICAgICAgY3RybExlZnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQ29udHJvbFJpZ2h0Jykge1xyXG4gICAgICBjdHJsUmlnaHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgna2V5bmFtZScpIHx8IGUua2V5ID09PSBrZXlzW2ldLmdldEF0dHJpYnV0ZSgnTG93ZXJDYXNlTmFtZScpKSB7XHJcbiAgICAgICAga2V5c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBrZXlzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3JlbW92ZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgc3BhY2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC50b2dnbGUoJ3JlbW92ZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdDYXBzTG9jaycpIHtcclxuICAgICAgY2Fwc0xvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGNhcHNMb2NrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdTaGlmdExlZnQnKSB7XHJcbiAgICAgIHNoaWZ0TGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICBzaGlmdFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGFycm93VG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBhcnJvd1RvcC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYXJyb3dSaWdodC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBhcnJvd0JvdHRvbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYXJyb3dCb3R0b20uY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgYXJyb3dMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBhcnJvd0xlZnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBlbnRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZW50ZXIuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgYmFja3NwYWNlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBiYWNrc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0RlbGV0ZScpIHtcclxuICAgICAgZGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBkZWwuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0FsdExlZnQnKSB7XHJcbiAgICAgIGFsdExlZnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGFsdExlZnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0FsdFJpZ2h0Jykge1xyXG4gICAgICBhbHRSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgYWx0UmlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0NvbnRyb2xMZWZ0Jykge1xyXG4gICAgICBjdHJsTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgY3RybExlZnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0NvbnRyb2xSaWdodCcpIHtcclxuICAgICAgY3RybFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBjdHJsUmlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgncmVtb3ZlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxucGhpc2ljYWxLZXlib2FyZCgpO1xyXG5cclxuZnVuY3Rpb24gdmlydHVhbEtleWJvYXJkKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAga2V5c1tpXS5zZXRBdHRyaWJ1dGUoJ2tleW5hbWUnLCBrZXlzW2ldLmlubmVyVGV4dCk7XHJcbiAgICBrZXlzW2ldLnNldEF0dHJpYnV0ZSgnTG93ZXJDYXNlTmFtZScsIGtleXNbaV0uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAga2V5c1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlICs9IGtleXNbaV0uaW5uZXJUZXh0O1xyXG4gICAgICBrZXlzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBrZXlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgIGtleXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnB1dC52YWx1ZSArPSAnICc7XHJcbiAgfSk7XHJcblxyXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBxKCkge1xyXG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcHMtbG9jaycpKSB7XHJcbiAgICAgICAga2V5Ym9hcmRXcmFwcC5jbGFzc0xpc3QudG9nZ2xlKCd1cHBlcmNhc2UnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlucHV0LnZhbHVlICs9ICdcXHQnO1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICB9KTtcclxuXHJcbiAgZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnB1dC52YWx1ZSArPSAnXFxuJztcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGJhY2tzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlucHV0LnNldFJhbmdlVGV4dCgnJywgaW5wdXQuc2VsZWN0aW9uU3RhcnQgLSAxLCBpbnB1dC5zZWxlY3Rpb25FbmQpO1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICB9KTtcclxuXHJcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5wdXQuc2V0UmFuZ2VUZXh0KCcnLCBpbnB1dC5zZWxlY3Rpb25TdGFydCwgaW5wdXQuc2VsZWN0aW9uRW5kICsgMSk7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG52aXJ0dWFsS2V5Ym9hcmQoKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXknKTtcclxuICBrZXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3B0aW9uJykpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzeW1ib2wnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ltYm9sJyk7XHJcbiAgY29uc3QgYXJyUnUgPSBbJ9GRJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzAnLCAnLScsICc9JywgJ9C5JywgJ9GGJywgJ9GDJywgJ9C6JywgJ9C1JywgJ9C9JywgJ9CzJywgJ9GIJywgJ9GJJywgJ9C3JywgJ9GFJywgJ9GKJywgJ9GEJywgJ9GLJywgJ9CyJywgJ9CwJywgJ9C/JywgJ9GAJywgJ9C+JywgJ9C7JywgJ9C0JywgJ9C2JywgJ9GNJywgJ9GPJywgJ9GHJywgJ9GBJywgJ9C8JywgJ9C4JywgJ9GCJywgJ9GMJywgJ9CxJywgJ9GOJywgJy4nXTtcclxuICBjb25zdCBhcnJFbmcgPSBbJ2AnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLCAncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCcsICdbJywgJ10nLCAnYScsICdzJywgJ2QnLCAnZicsICdnJywgJ2gnLCAnaicsICdrJywgJ2wnLCAnOycsICdcXCcnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICcsJywgJy4nLCAnLyddO1xyXG4gIGtleWJvYXJkV3JhcHAuY2xhc3NMaXN0LnRvZ2dsZSgnbGFuZ3VhZ2UnKTtcclxuICBpZiAoa2V5Ym9hcmRXcmFwcC5jbGFzc0xpc3QuY29udGFpbnMoJ2xhbmd1YWdlJykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyUnUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgc3ltYm9sW2ldLmlubmVyVGV4dCA9IGFyclJ1W2ldO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzeW1ib2xbaV0uaW5uZXJUZXh0LCBhcnJSdVtpXSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyRW5nLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHN5bWJvbFtpXS5pbm5lclRleHQgPSBhcnJFbmdbaV07XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN5bWJvbFtpXS5pbm5lclRleHQsIGFyckVuZ1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlTGFuZ3VhZ2UpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=