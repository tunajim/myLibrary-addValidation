/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    font-family: 'Courier New', Courier, monospace;\n}\n\nbody{\n    margin: 0;\n    width: 100%;\n    background-color: rgba(155, 147, 127, 0.575);\n}\n\nheader{\n    background-color: rgb(154, 198, 199);\n    height: 150px;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.534);\n    display: flex;\n    justify-content: space-between;\n    opacity: 95%;\n}\n\nh1{\n    font-size: large;\n    width: 150px;\n    text-align: center;\n    //background-color: rgba(197, 197, 41, 0.767);\n    border: 3px solid black;\n    border-radius: 3px;\n}\n\n#titleDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#libraryImg{\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 120px;\n    height: 120px;\n}\np{\n    text-align: center;\n}\n\n@media (max-width: 500px){\n    #libraryImg{\n        width: 80px;\n        height: 80px;\n    }\n    h1{\n        width: 120px;\n    }\n\n    #container{\n        justify-content: center;\n    }\n\n}\n\n\n#addBtn{\n    width: 50px;\n    background-color: aquamarine;\n    border: 1px solid rgba(154, 198, 199);\n    border-radius: 30%;\n    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),\n                3px 3px 5px rgba(0, 0, 0, .5);\n    padding: 10px;\n    background-color: rgb(154, 198, 199);\n    transition: 300ms;\n}\n\n\n#addBtn:hover{\n    //background-color: rgba(250, 224, 78, 0.575);\n    transition: 50ms;\n    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),\n                 3px 3px 5px rgba(0, 0, 0, .5),\n                inset -3px -3px 3px rgba(255, 255, 255, 0.5),\n                inset  3px 3px 3px rgba(0, 0, 0, .5);\n}\n\n\n\n#addBook{\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-right: 5%;\n    background: none;\n    border: none;\n}\n\n.form{\n    background: gray;    \n    padding:  10px;\n    border: 2px solid aquamarine;\n    border-radius: 8px;\n    width: 25%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10%;\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n#form{\n    transition: 300ms;\n    position: fixed;\n    left: 50%;\n    top: 25%;\n    transform: translate(-50%, -50%) scale(0);\n    width: 300px;\n    background-color: rgba(71, 144, 192, 0.918);\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 7px;\n    padding: 10px;\n    gap: 10px;\n    box-shadow: 0px 0px 7px 2px black;\n    z-index: 10;\n}\n\n#form.active{\n    transform: translate(-50%, -50%) scale(1);\n    \n}\n\n.inputContainer {\n    width: 100%;\n}\n\n.input{\n    border-radius: 5px;\n    box-shadow: inset 0px -1px 2px 1px rgb(71, 155, 38);\n    width: 100%;\n    margin-left: 50%;\n    margin-right: 50%;\n    transform: translate(-50%);\n}\n\n\n#nameInput, #bookInput, #pageInput {\n    display: inline-block;\n    width: 100%;\n    background-color: #900;\n    border-radius: 5px;\n    display: none;\n}\n\n#nameInput.active, #bookInput.active, #pageInput.active {\n    display: block;\n}\n\n#submitBtn{\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 18px;\n    border: 2px solid black;\n    border-radius: 8px;\n    box-shadow: 0px 0px 3px 0px black ;\n    opacity: 90%;\n}\n\n#submitBtn:hover{\n    box-shadow: inset 1px 0 3px 0px rgba(0, 0, 0, 0.527);\n}\n\n#submitBtn:active{\n    box-shadow: inset 1px 0 3px 2px rgba(0, 0, 0, 0.534)\n}\n#readDiv{\n    width: 55%;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: yellow;\n    opacity: 90%;\n    box-shadow: 0px 0px 2px;\n    margin-right: auto;\n    margin-left: auto;\n    font-weight: bold;\n}\n\n#noReadDiv{\n    width: 55%;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: yellow;\n    opacity: 90%;\n    box-shadow: 0px 0px 2px;\n    margin-right: auto;\n    margin-left: auto;\n    font-weight: bold;\n\n}\n\n#modalForm{\n    position: fixed;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border:  1px solid black;\n    border-radius:  8px;\n    z-index: 10;\n    background-color: green;\n    width: 400px;\n    max-width: 50%;\n    padding: 10px;\n}\n\n#overlay{\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active{\n    pointer-events: all;\n    opacity: 1;\n}\n\nfooter{\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(128, 128, 128, 0.541);\n    width: 100%;\n    text-align: end;\n    opacity: 80%;\n}\n\n.didReadImg{\n    width: .8em;\n    align-items: center;\n    align-content: center;\n    transform: translate(0, 20%); \n    \n}\n\n#container{\n    //background-color: rgb(245, 152, 141);\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.bookDiv{\n    transition: 500ms;\n    flex-basis: 250px;\n    max-height: 250px;\n    margin-top: 10px;\n    margin-left: 10px;\n    font-size: .7em;\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 28%;\n    background-color: rgba(128, 21, 128, 0.849);\n    padding-bottom: 1em;\n    border: 1px solid rgba(230, 230, 55, 0.808);\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px black,\n                inset 2px 4px 10px 1px rgba(255, 255, 255, 0.828);\n}\n\n.bookDiv h3{\n    background-color: rgb(169, 243, 169);\n    left: 10px;\n    border-radius: 5px;\n    text-align: center;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.bookDiv h3 img{\n    \n}\n\n\n#removeBtn{\n    background-color: rgb(212, 122, 253);\n    margin-left: 200px;\n    padding-top: 3px;\n    border: 2px solid purple;\n    border-radius: 50%; \n    box-shadow: inset 1px 1px 5px 0 rgba(255, 255, 255, 0.788);\n}\n\n.removeImgBtn{\n    width: 20px;\n}\n\n#removeBtn:hover{\n    box-shadow: inset 1px 2px 2px .5px rgba(0, 0, 0, 0.555);\n    transition: 70ms;\n}\n\n#removeBtn:active{\n    box-shadow: inset 1px 2px 4px 1px black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    font-family: 'Courier New', Courier, monospace;\n}\n\nbody{\n    margin: 0;\n    width: 100%;\n    background-color: rgba(155, 147, 127, 0.575);\n}\n\nheader{\n    background-color: rgb(154, 198, 199);\n    height: 150px;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.534);\n    display: flex;\n    justify-content: space-between;\n    opacity: 95%;\n}\n\nh1{\n    font-size: large;\n    width: 150px;\n    text-align: center;\n    //background-color: rgba(197, 197, 41, 0.767);\n    border: 3px solid black;\n    border-radius: 3px;\n}\n\n#titleDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#libraryImg{\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 120px;\n    height: 120px;\n}\np{\n    text-align: center;\n}\n\n@media (max-width: 500px){\n    #libraryImg{\n        width: 80px;\n        height: 80px;\n    }\n    h1{\n        width: 120px;\n    }\n\n    #container{\n        justify-content: center;\n    }\n\n}\n\n\n#addBtn{\n    width: 50px;\n    background-color: aquamarine;\n    border: 1px solid rgba(154, 198, 199);\n    border-radius: 30%;\n    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),\n                3px 3px 5px rgba(0, 0, 0, .5);\n    padding: 10px;\n    background-color: rgb(154, 198, 199);\n    transition: 300ms;\n}\n\n\n#addBtn:hover{\n    //background-color: rgba(250, 224, 78, 0.575);\n    transition: 50ms;\n    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),\n                 3px 3px 5px rgba(0, 0, 0, .5),\n                inset -3px -3px 3px rgba(255, 255, 255, 0.5),\n                inset  3px 3px 3px rgba(0, 0, 0, .5);\n}\n\n\n\n#addBook{\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-right: 5%;\n    background: none;\n    border: none;\n}\n\n.form{\n    background: gray;    \n    padding:  10px;\n    border: 2px solid aquamarine;\n    border-radius: 8px;\n    width: 25%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10%;\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n#form{\n    transition: 300ms;\n    position: fixed;\n    left: 50%;\n    top: 25%;\n    transform: translate(-50%, -50%) scale(0);\n    width: 300px;\n    background-color: rgba(71, 144, 192, 0.918);\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    border-radius: 7px;\n    padding: 10px;\n    gap: 10px;\n    box-shadow: 0px 0px 7px 2px black;\n    z-index: 10;\n}\n\n#form.active{\n    transform: translate(-50%, -50%) scale(1);\n    \n}\n\n.inputContainer {\n    width: 100%;\n}\n\n.input{\n    border-radius: 5px;\n    box-shadow: inset 0px -1px 2px 1px rgb(71, 155, 38);\n    width: 100%;\n    margin-left: 50%;\n    margin-right: 50%;\n    transform: translate(-50%);\n}\n\n\n#nameInput, #bookInput, #pageInput {\n    display: inline-block;\n    width: 100%;\n    background-color: #900;\n    border-radius: 5px;\n    display: none;\n}\n\n#nameInput.active, #bookInput.active, #pageInput.active {\n    display: block;\n}\n\n#submitBtn{\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 18px;\n    border: 2px solid black;\n    border-radius: 8px;\n    box-shadow: 0px 0px 3px 0px black ;\n    opacity: 90%;\n}\n\n#submitBtn:hover{\n    box-shadow: inset 1px 0 3px 0px rgba(0, 0, 0, 0.527);\n}\n\n#submitBtn:active{\n    box-shadow: inset 1px 0 3px 2px rgba(0, 0, 0, 0.534)\n}\n#readDiv{\n    width: 55%;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: yellow;\n    opacity: 90%;\n    box-shadow: 0px 0px 2px;\n    margin-right: auto;\n    margin-left: auto;\n    font-weight: bold;\n}\n\n#noReadDiv{\n    width: 55%;\n    border-radius: 10px;\n    border: 1px solid black;\n    background-color: yellow;\n    opacity: 90%;\n    box-shadow: 0px 0px 2px;\n    margin-right: auto;\n    margin-left: auto;\n    font-weight: bold;\n\n}\n\n#modalForm{\n    position: fixed;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border:  1px solid black;\n    border-radius:  8px;\n    z-index: 10;\n    background-color: green;\n    width: 400px;\n    max-width: 50%;\n    padding: 10px;\n}\n\n#overlay{\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active{\n    pointer-events: all;\n    opacity: 1;\n}\n\nfooter{\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(128, 128, 128, 0.541);\n    width: 100%;\n    text-align: end;\n    opacity: 80%;\n}\n\n.didReadImg{\n    width: .8em;\n    align-items: center;\n    align-content: center;\n    transform: translate(0, 20%); \n    \n}\n\n#container{\n    //background-color: rgb(245, 152, 141);\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.bookDiv{\n    transition: 500ms;\n    flex-basis: 250px;\n    max-height: 250px;\n    margin-top: 10px;\n    margin-left: 10px;\n    font-size: .7em;\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 28%;\n    background-color: rgba(128, 21, 128, 0.849);\n    padding-bottom: 1em;\n    border: 1px solid rgba(230, 230, 55, 0.808);\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px black,\n                inset 2px 4px 10px 1px rgba(255, 255, 255, 0.828);\n}\n\n.bookDiv h3{\n    background-color: rgb(169, 243, 169);\n    left: 10px;\n    border-radius: 5px;\n    text-align: center;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.bookDiv h3 img{\n    \n}\n\n\n#removeBtn{\n    background-color: rgb(212, 122, 253);\n    margin-left: 200px;\n    padding-top: 3px;\n    border: 2px solid purple;\n    border-radius: 50%; \n    box-shadow: inset 1px 1px 5px 0 rgba(255, 255, 255, 0.788);\n}\n\n.removeImgBtn{\n    width: 20px;\n}\n\n#removeBtn:hover{\n    box-shadow: inset 1px 2px 2px .5px rgba(0, 0, 0, 0.555);\n    transition: 70ms;\n}\n\n#removeBtn:active{\n    box-shadow: inset 1px 2px 4px 1px black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ }),

/***/ "./src/close-form.js":
/*!***************************!*\
  !*** ./src/close-form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function closeForm(form) {
  checkIfNull(form);
  checkForCorrectInput(form);
}

function checkIfNull(form) {
  let author = form[0];
  let book = form[1];
  let pages = form[2];
  !author.validity.valid ? addText(author, form) : removeActive(author);
  !book.validity.valid ? addText(book, form) : removeActive(book);
  !pages.validity.valid ? addText(pages, form) : removeActive(pages);
}

function addText(input, form) {
  const _target = input.nextSibling.nextSibling.nextSibling;
  _target.textContent = `${input.placeholder}`;
  _target.classList.add("active");
  listenForInput(form);
}

function listenForInput(form) {
  for (let i = 0; i < 3; i++)
    form[i].addEventListener("input", callRemoveActive);
}

function callRemoveActive(e) {
  return removeActive(e.target);
}

function removeActive(input) {
  console.log(input);
  const target = input.nextSibling.nextSibling.nextSibling;
  target.classList.remove("active");
}

function checkForCorrectInput(form) {
  let flag = false;
  for (let i = 0; i < 3; i++)
    form[i].validity.valid ? (flag = true) : (flag = false);
  flag === true ? submitForm(form) : console.log(flag);
}

function submitForm(form) {
  form.classList.remove("active");
  overlay.classList.remove("active");
  let makeBook = new _index__WEBPACK_IMPORTED_MODULE_0__.Book(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value,
    checkRadios()
  );
  myLibrary.push(makeBook);
  console.log(myLibrary);
}

function checkRadios() {
  let radios = document.getElementsByClassName("radio");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) radios[i].value.toString();
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
/* harmony import */ var _close_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-form.js */ "./src/close-form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");





console.log(_close_form_js__WEBPACK_IMPORTED_MODULE_0__.closeForm);
let container = document.getElementById("container");

const newDiv = document.createElement("div");
newDiv.classList.add("book");
const getForm = document.querySelector("form#form");
const author = document.createElement("h3");
const title = document.createElement("h3");
const pages = document.createElement("h3");
const read = document.createElement("h3");
const removeBtn = document.createElement("button");
const didReadImg = document.createElement("img");
const didNotReadImg = document.createElement("img");
didReadImg.classList.add("didReadImg");
didNotReadImg.classList.add("didNotReadImg");
didReadImg.src = "checked.png";
didNotReadImg.src = "cancel-mark.png";
console.log({ didReadImg, didNotReadImg });

let removeImg = document.createElement("img");
removeImg.classList.add("removeImgBtn");
removeImg.setAttribute("src", "delete.png");

//check if user has entered value into title
let titleFlag = false;
let bookTitle = form.elements.namedItem("bookTitle");

bookTitle.addEventListener("input", function () {
  titleFlag = true;
  console.log(titleFlag);
});

console.log(bookTitle);

let myLibrary = [];
const closeFormBtn = document.querySelectorAll("[data-close-form]");
const overlay = document.getElementById("overlay");

console.log({ myLibrary });

//add listener to add button
const button = document.getElementById("addBook");
const openFormBtn = document.querySelectorAll("[data-form-target]");
openFormBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const form = document.querySelector(button.dataset.formTarget);
    openForm(form);
    console.log({ form });
  });
});

//closes form if you click anywhere on the screen
// overlay.addEventListener("click", () => {
//   const forms = document.querySelectorAll("#form.active");
//   closeForm(forms);
// });

//when form closed, push entries into myLibrary[] destroy divs first as to not print same book twice
//than print each object in myLibrary[] as its own div

closeFormBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const form = button.closest("#form");
    (0,_close_form_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(form);
    destroyExistingDivs();
    printArray(myLibrary);
    addListenersToRemovers();
  });
});

// //================================================================
// //================================================================
// function closeForm(form) {
//   checkIfNull(form);
//   checkForCorrectInput(form);
// }
// //===========================================
// function checkIfNull(form) {
//   let author = form[0];
//   let book = form[1];
//   let pages = form[2];
//   !author.validity.valid ? addText(author, form) : removeActive(author);
//   !book.validity.valid ? addText(book, form) : removeActive(book);
//   !pages.validity.valid ? addText(pages, form) : removeActive(pages);
// }

// function addText(input, form) {
//   const _target = input.nextSibling.nextSibling.nextSibling;
//   _target.textContent = `${input.placeholder}`;
//   _target.classList.add("active");
//   listenForInput(form);
// }

// function listenForInput(form) {
//   for (let i = 0; i < 3; i++)
//     form[i].addEventListener("input", callRemoveActive);
// }

// function callRemoveActive(e) {
//   return removeActive(e.target);
// }

// function removeActive(input) {
//   console.log(input);
//   const target = input.nextSibling.nextSibling.nextSibling;
//   target.classList.remove("active");
// }
// //===========================================

// function checkForCorrectInput(form) {
//   let flag = false;
//   for (let i = 0; i < 3; i++)
//     form[i].validity.valid ? (flag = true) : (flag = false);
//   flag === true ? submitForm(form) : console.log(flag);
// }

// function submitForm(form) {
//   form.classList.remove("active");
//   overlay.classList.remove("active");
//   let makeBook = new Book(
//     form.elements[0].value,
//     form.elements[1].value,
//     form.elements[2].value,
//     checkRadios()
//   );
//   myLibrary.push(makeBook);
//   console.log(myLibrary);
// }

// function checkRadios() {
//   let radios = document.getElementsByClassName("radio");
//   for (let i = 0; i < radios.length; i++) {
//     if (radios[i].checked) radios[i].value.toString();
//   }
// }
// //===========================================

function destroyExistingDivs() {
  let getAllBooks = document.querySelectorAll(".bookDiv");
  for (let i = 0; i < getAllBooks.length; i++) {
    getAllBooks[i].remove();
  }
}

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    author.classList.add("author");
    title.classList.add("title");
    pages.classList.add("pages");
    read.classList.add("read");

    author.innerHTML = array[i].author;
    title.innerHTML = array[i].title;
    pages.innerHTML = array[i].pages;
    read.innerHTML = array[i].read;

    newDiv.setAttribute(`data-book-name`, array[i].dataAttr);

    removeBtn.appendChild(removeImg);
    newDiv.classList.add("bookDiv");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.classList.add("remover");
    removeBtn.setAttribute("data-remove-book", `${array[i].dataAttr}`);
    newDiv.appendChild(author);
    newDiv.appendChild(title);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);
    newDiv.appendChild(removeBtn);

    let getRead = document.querySelector(".title");

    console.log(getRead);

    container.appendChild(newDiv.cloneNode(true));
    console.log(array[i].read);
    didReadImg.setAttribute(`data-array-index`, `${i}`);

    console.log(document.querySelector(`[data-array-index= '${i}'`));
    console.log(document.querySelector(`[data-array-index= '${i}'`));
  }
}

function addListenersToRemovers() {
  const removeBookBtn = document.querySelectorAll(".remover");
  removeBookBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.dataset.removeBook;
      document.querySelector(`[data-book-name=${index}]`).remove();
      console.log({ index });
      removeBookFromArray(index);
    });
  });
}

function removeBookFromArray(index) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].dataAttr === index) myLibrary.splice(i, 1);
  }
}

function openForm(form) {
  if (form !== null) {
    form.classList.add("active");
    overlay.classList.add("active");
    form.reset();
  }
}

function updateReadImg() {
  for (let i = 0; i < myLibrary.length; i++) {
    let readImg = document.querySelector(`[data-array-index='${i}'`);

    if (readImg.read != "Did Read") {
      readImg.src = "cancel-mark.png";
    }
  }
}

//closes form but also populates myLibrary[]

//let newBook = new book('ofMiceAndMen', 'JohnSteinBeck', '100', 'have');

function camelCase(string) {
  string = string.toLowerCase();
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join("");
}

function titleCase(string) {
  string = string.toLowerCase();
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(" ");
}

function checkRadioBtns() {
  let didRead = document.getElementById("didRead");
  let didNotRead = document.getElementById("didNotRead");
  if (didRead.checked === true) {
    return "Did Read";
  } else if (didNotRead.checked === true) {
    return "Did Not Read";
  }
}

//book constructor ------------ This was what I refactored for Odin Project Assignment
//                 ------------ Take your book constructor and use class instead
/*function book(author, title, pages, read, dataAttr){
    this.author = `Author: ${titleCase(author)}`;

    this.title = `Title: ${titleCase(title)}`;
    
    this.pages = `Pages: ${titleCase(pages)}`;

    this.read = `Status: ${checkRadioBtns()}`;

    this.dataAttr = camelCase(title);

    this.sayBook = function(){
        console.log(`${author} is a book written by ${title}, it has ${pages} pages. You ${read}
         read the book`);
    }
}*/

//This is the class refactor
class Book {
  constructor(author, title, pages, read, dataAttr) {
    this.author = `Author: ${titleCase(author)}`;

    this.title = `Title: ${titleCase(title)}`;

    this.pages = `Pages: ${titleCase(pages)}`;

    this.read = `Status: ${checkRadioBtns()}`;

    this.dataAttr = camelCase(title);
  }
  sayBook() {
    console.log(`${author} is a book written by ${title}, it has ${pages} pages. You ${read}
         read the book`);
  }
}

function createBookDiv() {
  for (let i = 0; i < myLibrary.length; i++) {
    container.appendChild(newDiv.cloneNode(true));
    console.log(myLibrary);
  }
}



/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9085726c3ec9ab7d30d6.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVB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QUFDQSwyQkFBMkIsaUJBQWlCOztBQUU1QywyQkFBMkIsaUJBQWlCOztBQUU1Qzs7QUFFQTtBQUNBLHVCQUF1QixRQUFRLHVCQUF1QixNQUFNLFdBQVcsT0FBTyxhQUFhO0FBQzNGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7O0FBRS9DLDJCQUEyQixpQkFBaUI7O0FBRTVDLDJCQUEyQixpQkFBaUI7O0FBRTVDLDJCQUEyQixpQkFBaUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRLHVCQUF1QixNQUFNLFdBQVcsT0FBTyxhQUFhO0FBQ3ZGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vc3JjL2Nsb3NlLWZvcm0uanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNDcsIDEyNywgMC41NzUpO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDE5OCwgMTk5KTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjUzNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3BhY2l0eTogOTUlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgNDEsIDAuNzY3KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3RpdGxlRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jbGlicmFyeUltZ3tcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgICNsaWJyYXJ5SW1ne1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIH1cXG4gICAgaDF7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxufVxcblxcblxcbiNhZGRCdG57XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwgMTk4LCAxOTkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTk4LCAxOTkpO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuXFxuI2FkZEJ0bjpob3ZlcntcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjI0LCA3OCwgMC41NzUpO1xcbiAgICB0cmFuc2l0aW9uOiA1MG1zO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgICAgICAgICAgIDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjUpLFxcbiAgICAgICAgICAgICAgICBpbnNldCAtM3B4IC0zcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgICAgICAgICAgaW5zZXQgIDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG5cXG5cXG5cXG4jYWRkQm9va3tcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybXtcXG4gICAgYmFja2dyb3VuZDogZ3JheTsgICAgXFxuICAgIHBhZGRpbmc6ICAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybXtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMTQ0LCAxOTIsIDAuOTE4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggYmxhY2s7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jZm9ybS5hY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICBcXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAycHggMXB4IHJnYig3MSwgMTU1LCAzOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcblxcblxcbiNuYW1lSW5wdXQsICNib29rSW5wdXQsICNwYWdlSW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuYW1lSW5wdXQuYWN0aXZlLCAjYm9va0lucHV0LmFjdGl2ZSwgI3BhZ2VJbnB1dC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3N1Ym1pdEJ0bntcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggYmxhY2sgO1xcbiAgICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxufVxcblxcbiNzdWJtaXRCdG46YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41MzQpXFxufVxcbiNyZWFkRGl2e1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBvcGFjaXR5OiA5MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25vUmVhZERpdntcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgb3BhY2l0eTogOTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxufVxcblxcbiNtb2RhbEZvcm17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogIDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogIDhweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jb3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZle1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU0MSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmRpZFJlYWRJbWd7XFxuICAgIHdpZHRoOiAuOGVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwJSk7IFxcbiAgICBcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNTIsIDE0MSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvb2tEaXZ7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICBmbGV4LWJhc2lzOiAyNTBweDtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IC43ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDI4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDIxLCAxMjgsIDAuODQ5KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzAsIDIzMCwgNTUsIDAuODA4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrLFxcbiAgICAgICAgICAgICAgICBpbnNldCAycHggNHB4IDEwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjgpO1xcbn1cXG5cXG4uYm9va0RpdiBoM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjQzLCAxNjkpO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmJvb2tEaXYgaDMgaW1ne1xcbiAgICBcXG59XFxuXFxuXFxuI3JlbW92ZUJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMTIyLCAyNTMpO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzg4KTtcXG59XFxuXFxuLnJlbW92ZUltZ0J0bntcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNyZW1vdmVCdG46aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggMnB4IC41cHggcmdiYSgwLCAwLCAwLCAwLjU1NSk7XFxuICAgIHRyYW5zaXRpb246IDcwbXM7XFxufVxcblxcbiNyZW1vdmVCdG46YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDRweCAxcHggYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUo7OztBQUdBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCOzZDQUN5QztJQUN6QyxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCOzs7b0RBR2dEO0FBQ3BEOzs7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixn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QUM5RDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE0NywgMTI3LCAwLjU3NSk7XFxufVxcblxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTk4LCAxOTkpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTM0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBvcGFjaXR5OiA5NSU7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTk3LCA0MSwgMC43NjcpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jdGl0bGVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNsaWJyYXJ5SW1ne1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxufVxcbnB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXG4gICAgI2xpYnJhcnlJbWd7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgfVxcbiAgICBoMXtcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXG4gICAgfVxcblxcbiAgICAjY29udGFpbmVye1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuI2FkZEJ0bntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LCAxOTgsIDE5OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAtM3B4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICAgICAgICAgIDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxOTgsIDE5OSk7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG5cXG4jYWRkQnRuOmhvdmVye1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMjQsIDc4LCAwLjU3NSk7XFxuICAgIHRyYW5zaXRpb246IDUwbXM7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICAgM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAuNSksXFxuICAgICAgICAgICAgICAgIGluc2V0IC0zcHggLTNweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICBpbnNldCAgM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcblxcblxcbiNhZGRCb29re1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3Jte1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5OyAgICBcXG4gICAgcGFkZGluZzogIDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNmb3Jte1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMjUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCAxNDQsIDE5MiwgMC45MTgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCBibGFjaztcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbiNmb3JtLmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIFxcbn1cXG5cXG4uaW5wdXRDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDJweCAxcHggcmdiKDcxLCAxNTUsIDM4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XFxuXFxuXFxuI25hbWVJbnB1dCwgI2Jvb2tJbnB1dCwgI3BhZ2VJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25hbWVJbnB1dC5hY3RpdmUsICNib29rSW5wdXQuYWN0aXZlLCAjcGFnZUlucHV0LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc3VibWl0QnRue1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCBibGFjayA7XFxuICAgIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuI3N1Ym1pdEJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuI3N1Ym1pdEJ0bjphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjUzNClcXG59XFxuI3JlYWREaXZ7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIG9wYWNpdHk6IDkwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbm9SZWFkRGl2e1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBvcGFjaXR5OiA5MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG59XFxuXFxuI21vZGFsRm9ybXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiAgMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAgOHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNvdmVybGF5e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmV7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmZvb3RlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTQxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uZGlkUmVhZEltZ3tcXG4gICAgd2lkdGg6IC44ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjAlKTsgXFxuICAgIFxcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE1MiwgMTQxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYm9va0RpdntcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICAgIGZsZXgtYmFzaXM6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogLjdlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMjEsIDEyOCwgMC44NDkpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMCwgMjMwLCA1NSwgMC44MDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2ssXFxuICAgICAgICAgICAgICAgIGluc2V0IDJweCA0cHggMTBweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyOCk7XFxufVxcblxcbi5ib29rRGl2IGgze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAyNDMsIDE2OSk7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uYm9va0RpdiBoMyBpbWd7XFxuICAgIFxcbn1cXG5cXG5cXG4jcmVtb3ZlQnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxMjIsIDI1Myk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODgpO1xcbn1cXG5cXG4ucmVtb3ZlSW1nQnRue1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuI3JlbW92ZUJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCAycHggLjVweCByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgdHJhbnNpdGlvbjogNzBtcztcXG59XFxuXFxuI3JlbW92ZUJ0bjphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNHB4IDFweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJvb2sgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZm9ybSkge1xuICBjaGVja0lmTnVsbChmb3JtKTtcbiAgY2hlY2tGb3JDb3JyZWN0SW5wdXQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZOdWxsKGZvcm0pIHtcbiAgbGV0IGF1dGhvciA9IGZvcm1bMF07XG4gIGxldCBib29rID0gZm9ybVsxXTtcbiAgbGV0IHBhZ2VzID0gZm9ybVsyXTtcbiAgIWF1dGhvci52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQoYXV0aG9yLCBmb3JtKSA6IHJlbW92ZUFjdGl2ZShhdXRob3IpO1xuICAhYm9vay52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQoYm9vaywgZm9ybSkgOiByZW1vdmVBY3RpdmUoYm9vayk7XG4gICFwYWdlcy52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQocGFnZXMsIGZvcm0pIDogcmVtb3ZlQWN0aXZlKHBhZ2VzKTtcbn1cblxuZnVuY3Rpb24gYWRkVGV4dChpbnB1dCwgZm9ybSkge1xuICBjb25zdCBfdGFyZ2V0ID0gaW5wdXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gIF90YXJnZXQudGV4dENvbnRlbnQgPSBgJHtpbnB1dC5wbGFjZWhvbGRlcn1gO1xuICBfdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGxpc3RlbkZvcklucHV0KGZvcm0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Gb3JJbnB1dChmb3JtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKVxuICAgIGZvcm1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGNhbGxSZW1vdmVBY3RpdmUpO1xufVxuXG5mdW5jdGlvbiBjYWxsUmVtb3ZlQWN0aXZlKGUpIHtcbiAgcmV0dXJuIHJlbW92ZUFjdGl2ZShlLnRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShpbnB1dCkge1xuICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIGNvbnN0IHRhcmdldCA9IGlucHV0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JDb3JyZWN0SW5wdXQoZm9ybSkge1xuICBsZXQgZmxhZyA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcbiAgICBmb3JtW2ldLnZhbGlkaXR5LnZhbGlkID8gKGZsYWcgPSB0cnVlKSA6IChmbGFnID0gZmFsc2UpO1xuICBmbGFnID09PSB0cnVlID8gc3VibWl0Rm9ybShmb3JtKSA6IGNvbnNvbGUubG9nKGZsYWcpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGxldCBtYWtlQm9vayA9IG5ldyBCb29rKFxuICAgIGZvcm0uZWxlbWVudHNbMF0udmFsdWUsXG4gICAgZm9ybS5lbGVtZW50c1sxXS52YWx1ZSxcbiAgICBmb3JtLmVsZW1lbnRzWzJdLnZhbHVlLFxuICAgIGNoZWNrUmFkaW9zKClcbiAgKTtcbiAgbXlMaWJyYXJ5LnB1c2gobWFrZUJvb2spO1xuICBjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JhZGlvcygpIHtcbiAgbGV0IHJhZGlvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyYWRpb1wiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmFkaW9zW2ldLmNoZWNrZWQpIHJhZGlvc1tpXS52YWx1ZS50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNsb3NlRm9ybSB9O1xuIiwiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSBcIi4vY2xvc2UtZm9ybS5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYWRkIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCJcblxuXG5jb25zb2xlLmxvZyhjbG9zZUZvcm0pO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG5jb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJib29rXCIpO1xuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2Zvcm1cIik7XG5jb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgcmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBkaWRSZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmNvbnN0IGRpZE5vdFJlYWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGlkUmVhZEltZy5jbGFzc0xpc3QuYWRkKFwiZGlkUmVhZEltZ1wiKTtcbmRpZE5vdFJlYWRJbWcuY2xhc3NMaXN0LmFkZChcImRpZE5vdFJlYWRJbWdcIik7XG5kaWRSZWFkSW1nLnNyYyA9IFwiY2hlY2tlZC5wbmdcIjtcbmRpZE5vdFJlYWRJbWcuc3JjID0gXCJjYW5jZWwtbWFyay5wbmdcIjtcbmNvbnNvbGUubG9nKHsgZGlkUmVhZEltZywgZGlkTm90UmVhZEltZyB9KTtcblxubGV0IHJlbW92ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5yZW1vdmVJbWcuY2xhc3NMaXN0LmFkZChcInJlbW92ZUltZ0J0blwiKTtcbnJlbW92ZUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJkZWxldGUucG5nXCIpO1xuXG4vL2NoZWNrIGlmIHVzZXIgaGFzIGVudGVyZWQgdmFsdWUgaW50byB0aXRsZVxubGV0IHRpdGxlRmxhZyA9IGZhbHNlO1xubGV0IGJvb2tUaXRsZSA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwiYm9va1RpdGxlXCIpO1xuXG5ib29rVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgdGl0bGVGbGFnID0gdHJ1ZTtcbiAgY29uc29sZS5sb2codGl0bGVGbGFnKTtcbn0pO1xuXG5jb25zb2xlLmxvZyhib29rVGl0bGUpO1xuXG5sZXQgbXlMaWJyYXJ5ID0gW107XG5jb25zdCBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtZm9ybV1cIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuXG5jb25zb2xlLmxvZyh7IG15TGlicmFyeSB9KTtcblxuLy9hZGQgbGlzdGVuZXIgdG8gYWRkIGJ1dHRvblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCb29rXCIpO1xuY29uc3Qgb3BlbkZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZm9ybS10YXJnZXRdXCIpO1xub3BlbkZvcm1CdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0LmZvcm1UYXJnZXQpO1xuICAgIG9wZW5Gb3JtKGZvcm0pO1xuICAgIGNvbnNvbGUubG9nKHsgZm9ybSB9KTtcbiAgfSk7XG59KTtcblxuLy9jbG9zZXMgZm9ybSBpZiB5b3UgY2xpY2sgYW55d2hlcmUgb24gdGhlIHNjcmVlblxuLy8gb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZm9ybS5hY3RpdmVcIik7XG4vLyAgIGNsb3NlRm9ybShmb3Jtcyk7XG4vLyB9KTtcblxuLy93aGVuIGZvcm0gY2xvc2VkLCBwdXNoIGVudHJpZXMgaW50byBteUxpYnJhcnlbXSBkZXN0cm95IGRpdnMgZmlyc3QgYXMgdG8gbm90IHByaW50IHNhbWUgYm9vayB0d2ljZVxuLy90aGFuIHByaW50IGVhY2ggb2JqZWN0IGluIG15TGlicmFyeVtdIGFzIGl0cyBvd24gZGl2XG5cbmNsb3NlRm9ybUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBidXR0b24uY2xvc2VzdChcIiNmb3JtXCIpO1xuICAgIGNsb3NlRm9ybShmb3JtKTtcbiAgICBkZXN0cm95RXhpc3RpbmdEaXZzKCk7XG4gICAgcHJpbnRBcnJheShteUxpYnJhcnkpO1xuICAgIGFkZExpc3RlbmVyc1RvUmVtb3ZlcnMoKTtcbiAgfSk7XG59KTtcblxuLy8gLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGZ1bmN0aW9uIGNsb3NlRm9ybShmb3JtKSB7XG4vLyAgIGNoZWNrSWZOdWxsKGZvcm0pO1xuLy8gICBjaGVja0ZvckNvcnJlY3RJbnB1dChmb3JtKTtcbi8vIH1cbi8vIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gZnVuY3Rpb24gY2hlY2tJZk51bGwoZm9ybSkge1xuLy8gICBsZXQgYXV0aG9yID0gZm9ybVswXTtcbi8vICAgbGV0IGJvb2sgPSBmb3JtWzFdO1xuLy8gICBsZXQgcGFnZXMgPSBmb3JtWzJdO1xuLy8gICAhYXV0aG9yLnZhbGlkaXR5LnZhbGlkID8gYWRkVGV4dChhdXRob3IsIGZvcm0pIDogcmVtb3ZlQWN0aXZlKGF1dGhvcik7XG4vLyAgICFib29rLnZhbGlkaXR5LnZhbGlkID8gYWRkVGV4dChib29rLCBmb3JtKSA6IHJlbW92ZUFjdGl2ZShib29rKTtcbi8vICAgIXBhZ2VzLnZhbGlkaXR5LnZhbGlkID8gYWRkVGV4dChwYWdlcywgZm9ybSkgOiByZW1vdmVBY3RpdmUocGFnZXMpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhZGRUZXh0KGlucHV0LCBmb3JtKSB7XG4vLyAgIGNvbnN0IF90YXJnZXQgPSBpbnB1dC5uZXh0U2libGluZy5uZXh0U2libGluZy5uZXh0U2libGluZztcbi8vICAgX3RhcmdldC50ZXh0Q29udGVudCA9IGAke2lucHV0LnBsYWNlaG9sZGVyfWA7XG4vLyAgIF90YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbi8vICAgbGlzdGVuRm9ySW5wdXQoZm9ybSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGxpc3RlbkZvcklucHV0KGZvcm0pIHtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4vLyAgICAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2FsbFJlbW92ZUFjdGl2ZSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNhbGxSZW1vdmVBY3RpdmUoZSkge1xuLy8gICByZXR1cm4gcmVtb3ZlQWN0aXZlKGUudGFyZ2V0KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKGlucHV0KSB7XG4vLyAgIGNvbnNvbGUubG9nKGlucHV0KTtcbi8vICAgY29uc3QgdGFyZ2V0ID0gaW5wdXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4vLyAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuLy8gfVxuLy8gLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGZ1bmN0aW9uIGNoZWNrRm9yQ29ycmVjdElucHV0KGZvcm0pIHtcbi8vICAgbGV0IGZsYWcgPSBmYWxzZTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4vLyAgICAgZm9ybVtpXS52YWxpZGl0eS52YWxpZCA/IChmbGFnID0gdHJ1ZSkgOiAoZmxhZyA9IGZhbHNlKTtcbi8vICAgZmxhZyA9PT0gdHJ1ZSA/IHN1Ym1pdEZvcm0oZm9ybSkgOiBjb25zb2xlLmxvZyhmbGFnKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc3VibWl0Rm9ybShmb3JtKSB7XG4vLyAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuLy8gICBsZXQgbWFrZUJvb2sgPSBuZXcgQm9vayhcbi8vICAgICBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlLFxuLy8gICAgIGZvcm0uZWxlbWVudHNbMV0udmFsdWUsXG4vLyAgICAgZm9ybS5lbGVtZW50c1syXS52YWx1ZSxcbi8vICAgICBjaGVja1JhZGlvcygpXG4vLyAgICk7XG4vLyAgIG15TGlicmFyeS5wdXNoKG1ha2VCb29rKTtcbi8vICAgY29uc29sZS5sb2cobXlMaWJyYXJ5KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY2hlY2tSYWRpb3MoKSB7XG4vLyAgIGxldCByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmFkaW9cIik7XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgaWYgKHJhZGlvc1tpXS5jaGVja2VkKSByYWRpb3NbaV0udmFsdWUudG9TdHJpbmcoKTtcbi8vICAgfVxuLy8gfVxuLy8gLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFeGlzdGluZ0RpdnMoKSB7XG4gIGxldCBnZXRBbGxCb29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9va0RpdlwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRBbGxCb29rcy5sZW5ndGg7IGkrKykge1xuICAgIGdldEFsbEJvb2tzW2ldLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50QXJyYXkoYXJyYXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGF1dGhvci5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBwYWdlcy5jbGFzc0xpc3QuYWRkKFwicGFnZXNcIik7XG4gICAgcmVhZC5jbGFzc0xpc3QuYWRkKFwicmVhZFwiKTtcblxuICAgIGF1dGhvci5pbm5lckhUTUwgPSBhcnJheVtpXS5hdXRob3I7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYXJyYXlbaV0udGl0bGU7XG4gICAgcGFnZXMuaW5uZXJIVE1MID0gYXJyYXlbaV0ucGFnZXM7XG4gICAgcmVhZC5pbm5lckhUTUwgPSBhcnJheVtpXS5yZWFkO1xuXG4gICAgbmV3RGl2LnNldEF0dHJpYnV0ZShgZGF0YS1ib29rLW5hbWVgLCBhcnJheVtpXS5kYXRhQXR0cik7XG5cbiAgICByZW1vdmVCdG4uYXBwZW5kQ2hpbGQocmVtb3ZlSW1nKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImJvb2tEaXZcIik7XG4gICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlQnRuXCIpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlclwiKTtcbiAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1yZW1vdmUtYm9va1wiLCBgJHthcnJheVtpXS5kYXRhQXR0cn1gKTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwYWdlcyk7XG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHJlYWQpO1xuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgbGV0IGdldFJlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuXG4gICAgY29uc29sZS5sb2coZ2V0UmVhZCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgY29uc29sZS5sb2coYXJyYXlbaV0ucmVhZCk7XG4gICAgZGlkUmVhZEltZy5zZXRBdHRyaWJ1dGUoYGRhdGEtYXJyYXktaW5kZXhgLCBgJHtpfWApO1xuXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYXJyYXktaW5kZXg9ICcke2l9J2ApKTtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hcnJheS1pbmRleD0gJyR7aX0nYCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyc1RvUmVtb3ZlcnMoKSB7XG4gIGNvbnN0IHJlbW92ZUJvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZXJcIik7XG4gIHJlbW92ZUJvb2tCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBidXR0b24uZGF0YXNldC5yZW1vdmVCb29rO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYm9vay1uYW1lPSR7aW5kZXh9XWApLnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coeyBpbmRleCB9KTtcbiAgICAgIHJlbW92ZUJvb2tGcm9tQXJyYXkoaW5kZXgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9va0Zyb21BcnJheShpbmRleCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChteUxpYnJhcnlbaV0uZGF0YUF0dHIgPT09IGluZGV4KSBteUxpYnJhcnkuc3BsaWNlKGksIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Gb3JtKGZvcm0pIHtcbiAgaWYgKGZvcm0gIT09IG51bGwpIHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVSZWFkSW1nKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGxldCByZWFkSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYXJyYXktaW5kZXg9JyR7aX0nYCk7XG5cbiAgICBpZiAocmVhZEltZy5yZWFkICE9IFwiRGlkIFJlYWRcIikge1xuICAgICAgcmVhZEltZy5zcmMgPSBcImNhbmNlbC1tYXJrLnBuZ1wiO1xuICAgIH1cbiAgfVxufVxuXG4vL2Nsb3NlcyBmb3JtIGJ1dCBhbHNvIHBvcHVsYXRlcyBteUxpYnJhcnlbXVxuXG4vL2xldCBuZXdCb29rID0gbmV3IGJvb2soJ29mTWljZUFuZE1lbicsICdKb2huU3RlaW5CZWNrJywgJzEwMCcsICdoYXZlJyk7XG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdChcIiBcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyaW5nW2ldID0gc3RyaW5nW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nW2ldLnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gdGl0bGVDYXNlKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBzdHJpbmdbaV0gPSBzdHJpbmdbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmdbaV0uc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSYWRpb0J0bnMoKSB7XG4gIGxldCBkaWRSZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWRSZWFkXCIpO1xuICBsZXQgZGlkTm90UmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlkTm90UmVhZFwiKTtcbiAgaWYgKGRpZFJlYWQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBcIkRpZCBSZWFkXCI7XG4gIH0gZWxzZSBpZiAoZGlkTm90UmVhZC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIFwiRGlkIE5vdCBSZWFkXCI7XG4gIH1cbn1cblxuLy9ib29rIGNvbnN0cnVjdG9yIC0tLS0tLS0tLS0tLSBUaGlzIHdhcyB3aGF0IEkgcmVmYWN0b3JlZCBmb3IgT2RpbiBQcm9qZWN0IEFzc2lnbm1lbnRcbi8vICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0gVGFrZSB5b3VyIGJvb2sgY29uc3RydWN0b3IgYW5kIHVzZSBjbGFzcyBpbnN0ZWFkXG4vKmZ1bmN0aW9uIGJvb2soYXV0aG9yLCB0aXRsZSwgcGFnZXMsIHJlYWQsIGRhdGFBdHRyKXtcbiAgICB0aGlzLmF1dGhvciA9IGBBdXRob3I6ICR7dGl0bGVDYXNlKGF1dGhvcil9YDtcblxuICAgIHRoaXMudGl0bGUgPSBgVGl0bGU6ICR7dGl0bGVDYXNlKHRpdGxlKX1gO1xuICAgIFxuICAgIHRoaXMucGFnZXMgPSBgUGFnZXM6ICR7dGl0bGVDYXNlKHBhZ2VzKX1gO1xuXG4gICAgdGhpcy5yZWFkID0gYFN0YXR1czogJHtjaGVja1JhZGlvQnRucygpfWA7XG5cbiAgICB0aGlzLmRhdGFBdHRyID0gY2FtZWxDYXNlKHRpdGxlKTtcblxuICAgIHRoaXMuc2F5Qm9vayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2F1dGhvcn0gaXMgYSBib29rIHdyaXR0ZW4gYnkgJHt0aXRsZX0sIGl0IGhhcyAke3BhZ2VzfSBwYWdlcy4gWW91ICR7cmVhZH1cbiAgICAgICAgIHJlYWQgdGhlIGJvb2tgKTtcbiAgICB9XG59Ki9cblxuLy9UaGlzIGlzIHRoZSBjbGFzcyByZWZhY3RvclxuY2xhc3MgQm9vayB7XG4gIGNvbnN0cnVjdG9yKGF1dGhvciwgdGl0bGUsIHBhZ2VzLCByZWFkLCBkYXRhQXR0cikge1xuICAgIHRoaXMuYXV0aG9yID0gYEF1dGhvcjogJHt0aXRsZUNhc2UoYXV0aG9yKX1gO1xuXG4gICAgdGhpcy50aXRsZSA9IGBUaXRsZTogJHt0aXRsZUNhc2UodGl0bGUpfWA7XG5cbiAgICB0aGlzLnBhZ2VzID0gYFBhZ2VzOiAke3RpdGxlQ2FzZShwYWdlcyl9YDtcblxuICAgIHRoaXMucmVhZCA9IGBTdGF0dXM6ICR7Y2hlY2tSYWRpb0J0bnMoKX1gO1xuXG4gICAgdGhpcy5kYXRhQXR0ciA9IGNhbWVsQ2FzZSh0aXRsZSk7XG4gIH1cbiAgc2F5Qm9vaygpIHtcbiAgICBjb25zb2xlLmxvZyhgJHthdXRob3J9IGlzIGEgYm9vayB3cml0dGVuIGJ5ICR7dGl0bGV9LCBpdCBoYXMgJHtwYWdlc30gcGFnZXMuIFlvdSAke3JlYWR9XG4gICAgICAgICByZWFkIHRoZSBib29rYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va0RpdigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgY29uc29sZS5sb2cobXlMaWJyYXJ5KTtcbiAgfVxufVxuXG5leHBvcnQgeyBCb29rIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==