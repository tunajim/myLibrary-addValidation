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

/***/ "./src/add-listeners.js":
/*!******************************!*\
  !*** ./src/add-listeners.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddBookListener": () => (/* binding */ createAddBookListener),
/* harmony export */   "addListenersToRemovers": () => (/* binding */ addListenersToRemovers),
/* harmony export */   "createSubmitListener": () => (/* binding */ createSubmitListener)
/* harmony export */ });
/* harmony import */ var _close_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-form.js */ "./src/close-form.js");
/* harmony import */ var _print_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-items.js */ "./src/print-items.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




const overlay = document.getElementById("overlay");

function createAddBookListener() {
    const openFormBtn = document.querySelector("#addBtn");
    openFormBtn.addEventListener("click", activateForm);
  }
  
  function activateForm(e) {
    const _addBtn = e.target.parentNode;
    const _formTarget = _addBtn.dataset.formTarget;
    const form = document.querySelector(_formTarget);
    return openForm(form);
  }
  
  function openForm(form) {
    if (form !== null) {
      form.classList.add("active");
      overlay.classList.add("active");
      form.reset();
    }
  }

  function createSubmitListener() {
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
  
    submitBtn.addEventListener("click", handleSubmit);
  }
  
  function handleSubmit(e) {
    return submitForm(e);
  }
  
  function submitForm(e) {
    e.preventDefault();
    (0,_close_form_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(form);
    (0,_print_items_js__WEBPACK_IMPORTED_MODULE_1__.destroyExistingDivs)();
    (0,_print_items_js__WEBPACK_IMPORTED_MODULE_1__.printArray)(_index__WEBPACK_IMPORTED_MODULE_2__.myLibrary);
    addListenersToRemovers();
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
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_2__.myLibrary.length; i++) {
      if (_index__WEBPACK_IMPORTED_MODULE_2__.myLibrary[i].dataAttr === index) _index__WEBPACK_IMPORTED_MODULE_2__.myLibrary.splice(i, 1);
    }
  }

  

/***/ }),

/***/ "./src/addImages.js":
/*!**************************!*\
  !*** ./src/addImages.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addImages": () => (/* binding */ addImages)
/* harmony export */ });
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _images_libraryImage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/libraryImage.png */ "./src/images/libraryImage.png");
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.png */ "./src/images/delete.png");




const addImages = () => {
    const libraryImg = document.getElementById("libraryImg");
    libraryImg.src = _images_libraryImage_png__WEBPACK_IMPORTED_MODULE_1__;

    const addBtn = document.getElementById("addBtn");
    addBtn.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_0__;

}



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
/* harmony import */ var _create_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-class */ "./src/create-class.js");



function closeForm(form) {
  console.log(form);
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
  let makeBook = new _create_class__WEBPACK_IMPORTED_MODULE_1__.Book(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value,
    checkRadios()
  );
  _index__WEBPACK_IMPORTED_MODULE_0__.myLibrary.push(makeBook);
  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.myLibrary);
}

function checkRadios() {
  let radios = document.getElementsByClassName("radio");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) radios[i].value.toString();
  }
}




/***/ }),

/***/ "./src/create-class.js":
/*!*****************************!*\
  !*** ./src/create-class.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
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



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myLibrary": () => (/* binding */ myLibrary)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addImages.js */ "./src/addImages.js");
/* harmony import */ var _add_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-listeners.js */ "./src/add-listeners.js");




let myLibrary = [];
const getForm = document.querySelector("form#form");
const closeFormBtn = document.querySelectorAll("[data-close-form]");
const button = document.getElementById("addBook");

(0,_addImages_js__WEBPACK_IMPORTED_MODULE_1__.addImages)();
(0,_add_listeners_js__WEBPACK_IMPORTED_MODULE_2__.createAddBookListener)();
(0,_add_listeners_js__WEBPACK_IMPORTED_MODULE_2__.createSubmitListener)();




/***/ }),

/***/ "./src/print-items.js":
/*!****************************!*\
  !*** ./src/print-items.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printArray": () => (/* binding */ printArray),
/* harmony export */   "destroyExistingDivs": () => (/* binding */ destroyExistingDivs)
/* harmony export */ });
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/delete.png */ "./src/images/delete.png");


function destroyExistingDivs() {
  let getAllBooks = document.querySelectorAll(".bookDiv");
  for (let i = 0; i < getAllBooks.length; i++) {
    getAllBooks[i].remove();
  }
}

function printArray(array) {
  const elements = createDivs();
  let container = document.getElementById("container");
  for (let i = 0; i < array.length; i++) {
    addClassToElements(elements);
    addTextContent(elements, array, i);
    setElementAttributes(elements, array, i);
    appendElements(elements);
  }
}

function createDivs() {
  const author = document.createElement("h3");
  const title = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("h3");
  const newDiv = document.createElement("div");
  newDiv.classList.add("book");

  const removeBtn = document.createElement("button");
  const didReadImg = document.createElement("img");
  didReadImg.classList.add("didReadImg");

  const didNotReadImg = document.createElement("img");
  didNotReadImg.classList.add("didNotReadImg");

  didReadImg.src = "checked.png";
  didNotReadImg.src = "cancel-mark.png";

  let removeImg = document.createElement("img");
  removeImg.classList.add("removeImgBtn");
  removeImg.setAttribute("src", _images_delete_png__WEBPACK_IMPORTED_MODULE_0__);

  return {
    author,
    title,
    pages,
    read,
    newDiv,
    removeBtn,
    didReadImg,
    didNotReadImg,
    removeImg,
  };
}

function addClassToElements(divs) {
  divs.author.classList.add("author");
  divs.title.classList.add("title");
  divs.pages.classList.add("pages");
  divs.read.classList.add("read");
  divs.newDiv.classList.add("bookDiv");
  divs.removeBtn.classList.add("remover");
}

function addTextContent(divs, arr, i) {
  divs.author.textContent = arr[i].author;
  divs.title.textContent = arr[i].title;
  divs.pages.textContent = arr[i].pages;
  divs.read.textContent = arr[i].read;
}

function setElementAttributes(divs, arr, i) {
  divs.newDiv.setAttribute(`data-book-name`, arr[i].dataAttr);
  divs.removeBtn.setAttribute("id", "removeBtn");
  divs.removeBtn.setAttribute("data-remove-book", `${arr[i].dataAttr}`);
  divs.didReadImg.setAttribute(`data-array-index`, `${i}`);
}

function appendElements(divs) {
  divs.removeBtn.appendChild(divs.removeImg);
  divs.newDiv.appendChild(divs.author);
  divs.newDiv.appendChild(divs.title);
  divs.newDiv.appendChild(divs.pages);
  divs.newDiv.appendChild(divs.read);
  divs.newDiv.appendChild(divs.removeBtn);
  container.appendChild(divs.newDiv.cloneNode(true));
}




/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9085726c3ec9ab7d30d6.svg";

/***/ }),

/***/ "./src/images/delete.png":
/*!*******************************!*\
  !*** ./src/images/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cf85250644be08b0e98.png";

/***/ }),

/***/ "./src/images/libraryImage.png":
/*!*************************************!*\
  !*** ./src/images/libraryImage.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e82ce9e9fffa2f8f23cf.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RjNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvYWRkLWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL3NyYy9hZGRJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvY2xvc2UtZm9ybS5qcyIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi8uL3NyYy9jcmVhdGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vLi9zcmMvcHJpbnQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWxpYnJhcnktYWRkdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXlsaWJyYXJ5LWFkZHZhbGlkYXRpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215bGlicmFyeS1hZGR2YWxpZGF0aW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LCAxNDcsIDEyNywgMC41NzUpO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTQsIDE5OCwgMTk5KTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjUzNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3BhY2l0eTogOTUlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgNDEsIDAuNzY3KTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3RpdGxlRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jbGlicmFyeUltZ3tcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxuICAgICNsaWJyYXJ5SW1ne1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIH1cXG4gICAgaDF7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhaW5lcntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxufVxcblxcblxcbiNhZGRCdG57XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwgMTk4LCAxOTkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTk4LCAxOTkpO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuXFxuI2FkZEJ0bjpob3ZlcntcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjI0LCA3OCwgMC41NzUpO1xcbiAgICB0cmFuc2l0aW9uOiA1MG1zO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IC0zcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgICAgICAgICAgIDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjUpLFxcbiAgICAgICAgICAgICAgICBpbnNldCAtM3B4IC0zcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXG4gICAgICAgICAgICAgICAgaW5zZXQgIDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG5cXG5cXG5cXG4jYWRkQm9va3tcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybXtcXG4gICAgYmFja2dyb3VuZDogZ3JheTsgICAgXFxuICAgIHBhZGRpbmc6ICAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZm9ybXtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMTQ0LCAxOTIsIDAuOTE4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAycHggYmxhY2s7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jZm9ybS5hY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICBcXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAycHggMXB4IHJnYig3MSwgMTU1LCAzOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcblxcblxcbiNuYW1lSW5wdXQsICNib29rSW5wdXQsICNwYWdlSW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuYW1lSW5wdXQuYWN0aXZlLCAjYm9va0lucHV0LmFjdGl2ZSwgI3BhZ2VJbnB1dC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3N1Ym1pdEJ0bntcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggYmxhY2sgO1xcbiAgICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxufVxcblxcbiNzdWJtaXRCdG46YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41MzQpXFxufVxcbiNyZWFkRGl2e1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBvcGFjaXR5OiA5MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI25vUmVhZERpdntcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgb3BhY2l0eTogOTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxufVxcblxcbiNtb2RhbEZvcm17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogIDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogIDhweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jb3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZle1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU0MSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmRpZFJlYWRJbWd7XFxuICAgIHdpZHRoOiAuOGVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwJSk7IFxcbiAgICBcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxNTIsIDE0MSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvb2tEaXZ7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgICBmbGV4LWJhc2lzOiAyNTBweDtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IC43ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDI4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDIxLCAxMjgsIDAuODQ5KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzAsIDIzMCwgNTUsIDAuODA4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrLFxcbiAgICAgICAgICAgICAgICBpbnNldCAycHggNHB4IDEwcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjgpO1xcbn1cXG5cXG4uYm9va0RpdiBoM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjQzLCAxNjkpO1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmJvb2tEaXYgaDMgaW1ne1xcbiAgICBcXG59XFxuXFxuXFxuI3JlbW92ZUJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMTIyLCAyNTMpO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzg4KTtcXG59XFxuXFxuLnJlbW92ZUltZ0J0bntcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNyZW1vdmVCdG46aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggMnB4IC41cHggcmdiYSgwLCAwLCAwLCAwLjU1NSk7XFxuICAgIHRyYW5zaXRpb246IDcwbXM7XFxufVxcblxcbiNyZW1vdmVCdG46YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDRweCAxcHggYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUo7OztBQUdBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCOzZDQUN5QztJQUN6QyxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCOzs7b0RBR2dEO0FBQ3BEOzs7O0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNEJB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cEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsIDE0NywgMTI3LCAwLjU3NSk7XFxufVxcblxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCwgMTk4LCAxOTkpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTM0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBvcGFjaXR5OiA5NSU7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTk3LCA0MSwgMC43NjcpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4jdGl0bGVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNsaWJyYXJ5SW1ne1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxufVxcbnB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXG4gICAgI2xpYnJhcnlJbWd7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgfVxcbiAgICBoMXtcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXG4gICAgfVxcblxcbiAgICAjY29udGFpbmVye1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuI2FkZEJ0bntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LCAxOTgsIDE5OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAtM3B4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgICAgICAgICAgICAgIDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0LCAxOTgsIDE5OSk7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG5cXG4jYWRkQnRuOmhvdmVye1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMjQsIDc4LCAwLjU3NSk7XFxuICAgIHRyYW5zaXRpb246IDUwbXM7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggLTNweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICAgM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAuNSksXFxuICAgICAgICAgICAgICAgIGluc2V0IC0zcHggLTNweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAgICAgICAgICAgICBpbnNldCAgM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcblxcblxcbiNhZGRCb29re1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3Jte1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5OyAgICBcXG4gICAgcGFkZGluZzogIDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNmb3Jte1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMjUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCAxNDQsIDE5MiwgMC45MTgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDJweCBibGFjaztcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbiNmb3JtLmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIFxcbn1cXG5cXG4uaW5wdXRDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDJweCAxcHggcmdiKDcxLCAxNTUsIDM4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG59XFxuXFxuXFxuI25hbWVJbnB1dCwgI2Jvb2tJbnB1dCwgI3BhZ2VJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25hbWVJbnB1dC5hY3RpdmUsICNib29rSW5wdXQuYWN0aXZlLCAjcGFnZUlucHV0LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc3VibWl0QnRue1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCBibGFjayA7XFxuICAgIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuI3N1Ym1pdEJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXG59XFxuXFxuI3N1Ym1pdEJ0bjphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjUzNClcXG59XFxuI3JlYWREaXZ7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIG9wYWNpdHk6IDkwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbm9SZWFkRGl2e1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBvcGFjaXR5OiA5MCU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG59XFxuXFxuI21vZGFsRm9ybXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiAgMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAgOHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNvdmVybGF5e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmV7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmZvb3RlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTQxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgb3BhY2l0eTogODAlO1xcbn1cXG5cXG4uZGlkUmVhZEltZ3tcXG4gICAgd2lkdGg6IC44ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjAlKTsgXFxuICAgIFxcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE1MiwgMTQxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYm9va0RpdntcXG4gICAgdHJhbnNpdGlvbjogNTAwbXM7XFxuICAgIGZsZXgtYmFzaXM6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogLjdlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMjglO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMjEsIDEyOCwgMC44NDkpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMCwgMjMwLCA1NSwgMC44MDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2ssXFxuICAgICAgICAgICAgICAgIGluc2V0IDJweCA0cHggMTBweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyOCk7XFxufVxcblxcbi5ib29rRGl2IGgze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAyNDMsIDE2OSk7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uYm9va0RpdiBoMyBpbWd7XFxuICAgIFxcbn1cXG5cXG5cXG4jcmVtb3ZlQnRue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxMjIsIDI1Myk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODgpO1xcbn1cXG5cXG4ucmVtb3ZlSW1nQnRue1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuI3JlbW92ZUJ0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCAycHggLjVweCByZ2JhKDAsIDAsIDAsIDAuNTU1KTtcXG4gICAgdHJhbnNpdGlvbjogNzBtcztcXG59XFxuXFxuI3JlbW92ZUJ0bjphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNHB4IDFweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL2Nsb3NlLWZvcm0uanNcIjtcbmltcG9ydCB7IHByaW50QXJyYXksIGRlc3Ryb3lFeGlzdGluZ0RpdnMgfSBmcm9tIFwiLi9wcmludC1pdGVtcy5qc1wiO1xuaW1wb3J0IHsgbXlMaWJyYXJ5IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcblxuZnVuY3Rpb24gY3JlYXRlQWRkQm9va0xpc3RlbmVyKCkge1xuICAgIGNvbnN0IG9wZW5Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRCdG5cIik7XG4gICAgb3BlbkZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFjdGl2YXRlRm9ybSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRm9ybShlKSB7XG4gICAgY29uc3QgX2FkZEJ0biA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgX2Zvcm1UYXJnZXQgPSBfYWRkQnRuLmRhdGFzZXQuZm9ybVRhcmdldDtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihfZm9ybVRhcmdldCk7XG4gICAgcmV0dXJuIG9wZW5Gb3JtKGZvcm0pO1xuICB9XG4gIFxuICBmdW5jdGlvbiBvcGVuRm9ybShmb3JtKSB7XG4gICAgaWYgKGZvcm0gIT09IG51bGwpIHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0blwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuICBcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Ym1pdCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgcmV0dXJuIHN1Ym1pdEZvcm0oZSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHN1Ym1pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgZGVzdHJveUV4aXN0aW5nRGl2cygpO1xuICAgIHByaW50QXJyYXkobXlMaWJyYXJ5KTtcbiAgICBhZGRMaXN0ZW5lcnNUb1JlbW92ZXJzKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVyc1RvUmVtb3ZlcnMoKSB7XG4gICAgY29uc3QgcmVtb3ZlQm9va0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlclwiKTtcbiAgICByZW1vdmVCb29rQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZUJvb2s7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJvb2stbmFtZT0ke2luZGV4fV1gKS5yZW1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2coeyBpbmRleCB9KTtcbiAgICAgICAgcmVtb3ZlQm9va0Zyb21BcnJheShpbmRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmVtb3ZlQm9va0Zyb21BcnJheShpbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobXlMaWJyYXJ5W2ldLmRhdGFBdHRyID09PSBpbmRleCkgbXlMaWJyYXJ5LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgeyBjcmVhdGVBZGRCb29rTGlzdGVuZXIsIGFkZExpc3RlbmVyc1RvUmVtb3ZlcnMsIGNyZWF0ZVN1Ym1pdExpc3RlbmVyIH07IiwiaW1wb3J0IGFkZCBmcm9tIFwiLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1hZ2VzL2xpYnJhcnlJbWFnZS5wbmdcIjtcbmltcG9ydCBkZWxldGVFbnRyeSBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnBuZ1wiO1xuXG5jb25zdCBhZGRJbWFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlicmFyeUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlicmFyeUltZ1wiKTtcbiAgICBsaWJyYXJ5SW1nLnNyYyA9IGxvZ287XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKTtcbiAgICBhZGRCdG4uc3JjID0gYWRkO1xuXG59XG5cbmV4cG9ydCB7IGFkZEltYWdlcyB9OyIsImltcG9ydCB7IG15TGlicmFyeSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vY3JlYXRlLWNsYXNzXCI7XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybShmb3JtKSB7XG4gIGNvbnNvbGUubG9nKGZvcm0pO1xuICBjaGVja0lmTnVsbChmb3JtKTtcbiAgY2hlY2tGb3JDb3JyZWN0SW5wdXQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZOdWxsKGZvcm0pIHtcbiAgbGV0IGF1dGhvciA9IGZvcm1bMF07XG4gIGxldCBib29rID0gZm9ybVsxXTtcbiAgbGV0IHBhZ2VzID0gZm9ybVsyXTtcbiAgIWF1dGhvci52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQoYXV0aG9yLCBmb3JtKSA6IHJlbW92ZUFjdGl2ZShhdXRob3IpO1xuICAhYm9vay52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQoYm9vaywgZm9ybSkgOiByZW1vdmVBY3RpdmUoYm9vayk7XG4gICFwYWdlcy52YWxpZGl0eS52YWxpZCA/IGFkZFRleHQocGFnZXMsIGZvcm0pIDogcmVtb3ZlQWN0aXZlKHBhZ2VzKTtcbn1cblxuZnVuY3Rpb24gYWRkVGV4dChpbnB1dCwgZm9ybSkge1xuICBjb25zdCBfdGFyZ2V0ID0gaW5wdXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gIF90YXJnZXQudGV4dENvbnRlbnQgPSBgJHtpbnB1dC5wbGFjZWhvbGRlcn1gO1xuICBfdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGxpc3RlbkZvcklucHV0KGZvcm0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Gb3JJbnB1dChmb3JtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKVxuICAgIGZvcm1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGNhbGxSZW1vdmVBY3RpdmUpO1xufVxuXG5mdW5jdGlvbiBjYWxsUmVtb3ZlQWN0aXZlKGUpIHtcbiAgcmV0dXJuIHJlbW92ZUFjdGl2ZShlLnRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShpbnB1dCkge1xuICBjb25zdCB0YXJnZXQgPSBpbnB1dC5uZXh0U2libGluZy5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQ29ycmVjdElucHV0KGZvcm0pIHtcbiAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAgZm9ybVtpXS52YWxpZGl0eS52YWxpZCA/IChmbGFnID0gdHJ1ZSkgOiAoZmxhZyA9IGZhbHNlKTtcbiAgZmxhZyA9PT0gdHJ1ZSA/IHN1Ym1pdEZvcm0oZm9ybSkgOiBjb25zb2xlLmxvZyhmbGFnKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybShmb3JtKSB7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBsZXQgbWFrZUJvb2sgPSBuZXcgQm9vayhcbiAgICBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgIGZvcm0uZWxlbWVudHNbMV0udmFsdWUsXG4gICAgZm9ybS5lbGVtZW50c1syXS52YWx1ZSxcbiAgICBjaGVja1JhZGlvcygpXG4gICk7XG4gIG15TGlicmFyeS5wdXNoKG1ha2VCb29rKTtcbiAgY29uc29sZS5sb2cobXlMaWJyYXJ5KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSYWRpb3MoKSB7XG4gIGxldCByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmFkaW9cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJhZGlvc1tpXS5jaGVja2VkKSByYWRpb3NbaV0udmFsdWUudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBjbG9zZUZvcm0gfTtcbiIsImNsYXNzIEJvb2sge1xuICBjb25zdHJ1Y3RvcihhdXRob3IsIHRpdGxlLCBwYWdlcywgcmVhZCwgZGF0YUF0dHIpIHtcbiAgICB0aGlzLmF1dGhvciA9IGBBdXRob3I6ICR7dGl0bGVDYXNlKGF1dGhvcil9YDtcblxuICAgIHRoaXMudGl0bGUgPSBgVGl0bGU6ICR7dGl0bGVDYXNlKHRpdGxlKX1gO1xuXG4gICAgdGhpcy5wYWdlcyA9IGBQYWdlczogJHt0aXRsZUNhc2UocGFnZXMpfWA7XG5cbiAgICB0aGlzLnJlYWQgPSBgU3RhdHVzOiAke2NoZWNrUmFkaW9CdG5zKCl9YDtcblxuICAgIHRoaXMuZGF0YUF0dHIgPSBjYW1lbENhc2UodGl0bGUpO1xuICB9XG4gIHNheUJvb2soKSB7XG4gICAgY29uc29sZS5sb2coYCR7YXV0aG9yfSBpcyBhIGJvb2sgd3JpdHRlbiBieSAke3RpdGxlfSwgaXQgaGFzICR7cGFnZXN9IHBhZ2VzLiBZb3UgJHtyZWFkfVxuICAgICAgICAgcmVhZCB0aGUgYm9va2ApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tEaXYoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdi5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgIHN0cmluZyA9IHN0cmluZy5zcGxpdChcIiBcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZ1tpXSA9IHN0cmluZ1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZ1tpXS5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKFwiXCIpO1xuICB9XG4gIFxuICBmdW5jdGlvbiB0aXRsZUNhc2Uoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nW2ldID0gc3RyaW5nW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nW2ldLnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCIgXCIpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjaGVja1JhZGlvQnRucygpIHtcbiAgICBsZXQgZGlkUmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlkUmVhZFwiKTtcbiAgICBsZXQgZGlkTm90UmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlkTm90UmVhZFwiKTtcbiAgICBpZiAoZGlkUmVhZC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJEaWQgUmVhZFwiO1xuICAgIH0gZWxzZSBpZiAoZGlkTm90UmVhZC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gXCJEaWQgTm90IFJlYWRcIjtcbiAgICB9XG4gIH1cblxuZXhwb3J0IHsgQm9vayB9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhZGRJbWFnZXMgfSBmcm9tIFwiLi9hZGRJbWFnZXMuanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUFkZEJvb2tMaXN0ZW5lcixcbiAgYWRkTGlzdGVuZXJzVG9SZW1vdmVycyxcbiAgY3JlYXRlU3VibWl0TGlzdGVuZXIsXG59IGZyb20gXCIuL2FkZC1saXN0ZW5lcnMuanNcIjtcblxubGV0IG15TGlicmFyeSA9IFtdO1xuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2Zvcm1cIik7XG5jb25zdCBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtZm9ybV1cIik7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJvb2tcIik7XG5cbmFkZEltYWdlcygpO1xuY3JlYXRlQWRkQm9va0xpc3RlbmVyKCk7XG5jcmVhdGVTdWJtaXRMaXN0ZW5lcigpO1xuXG5leHBvcnQgeyBteUxpYnJhcnkgfTtcbiIsImltcG9ydCBkZWxldGVFbnRyeSBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnBuZ1wiO1xuXG5mdW5jdGlvbiBkZXN0cm95RXhpc3RpbmdEaXZzKCkge1xuICBsZXQgZ2V0QWxsQm9va3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvb2tEaXZcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0QWxsQm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBnZXRBbGxCb29rc1tpXS5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludEFycmF5KGFycmF5KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gY3JlYXRlRGl2cygpO1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBhZGRDbGFzc1RvRWxlbWVudHMoZWxlbWVudHMpO1xuICAgIGFkZFRleHRDb250ZW50KGVsZW1lbnRzLCBhcnJheSwgaSk7XG4gICAgc2V0RWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudHMsIGFycmF5LCBpKTtcbiAgICBhcHBlbmRFbGVtZW50cyhlbGVtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2cygpIHtcbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiYm9va1wiKTtcblxuICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkaWRSZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGlkUmVhZEltZy5jbGFzc0xpc3QuYWRkKFwiZGlkUmVhZEltZ1wiKTtcblxuICBjb25zdCBkaWROb3RSZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGlkTm90UmVhZEltZy5jbGFzc0xpc3QuYWRkKFwiZGlkTm90UmVhZEltZ1wiKTtcblxuICBkaWRSZWFkSW1nLnNyYyA9IFwiY2hlY2tlZC5wbmdcIjtcbiAgZGlkTm90UmVhZEltZy5zcmMgPSBcImNhbmNlbC1tYXJrLnBuZ1wiO1xuXG4gIGxldCByZW1vdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByZW1vdmVJbWcuY2xhc3NMaXN0LmFkZChcInJlbW92ZUltZ0J0blwiKTtcbiAgcmVtb3ZlSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBkZWxldGVFbnRyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdXRob3IsXG4gICAgdGl0bGUsXG4gICAgcGFnZXMsXG4gICAgcmVhZCxcbiAgICBuZXdEaXYsXG4gICAgcmVtb3ZlQnRuLFxuICAgIGRpZFJlYWRJbWcsXG4gICAgZGlkTm90UmVhZEltZyxcbiAgICByZW1vdmVJbWcsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50cyhkaXZzKSB7XG4gIGRpdnMuYXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJhdXRob3JcIik7XG4gIGRpdnMudGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBkaXZzLnBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJwYWdlc1wiKTtcbiAgZGl2cy5yZWFkLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xuICBkaXZzLm5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiYm9va0RpdlwiKTtcbiAgZGl2cy5yZW1vdmVCdG4uY2xhc3NMaXN0LmFkZChcInJlbW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFRleHRDb250ZW50KGRpdnMsIGFyciwgaSkge1xuICBkaXZzLmF1dGhvci50ZXh0Q29udGVudCA9IGFycltpXS5hdXRob3I7XG4gIGRpdnMudGl0bGUudGV4dENvbnRlbnQgPSBhcnJbaV0udGl0bGU7XG4gIGRpdnMucGFnZXMudGV4dENvbnRlbnQgPSBhcnJbaV0ucGFnZXM7XG4gIGRpdnMucmVhZC50ZXh0Q29udGVudCA9IGFycltpXS5yZWFkO1xufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50QXR0cmlidXRlcyhkaXZzLCBhcnIsIGkpIHtcbiAgZGl2cy5uZXdEaXYuc2V0QXR0cmlidXRlKGBkYXRhLWJvb2stbmFtZWAsIGFycltpXS5kYXRhQXR0cik7XG4gIGRpdnMucmVtb3ZlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVtb3ZlQnRuXCIpO1xuICBkaXZzLnJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbW92ZS1ib29rXCIsIGAke2FycltpXS5kYXRhQXR0cn1gKTtcbiAgZGl2cy5kaWRSZWFkSW1nLnNldEF0dHJpYnV0ZShgZGF0YS1hcnJheS1pbmRleGAsIGAke2l9YCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzKGRpdnMpIHtcbiAgZGl2cy5yZW1vdmVCdG4uYXBwZW5kQ2hpbGQoZGl2cy5yZW1vdmVJbWcpO1xuICBkaXZzLm5ld0Rpdi5hcHBlbmRDaGlsZChkaXZzLmF1dGhvcik7XG4gIGRpdnMubmV3RGl2LmFwcGVuZENoaWxkKGRpdnMudGl0bGUpO1xuICBkaXZzLm5ld0Rpdi5hcHBlbmRDaGlsZChkaXZzLnBhZ2VzKTtcbiAgZGl2cy5uZXdEaXYuYXBwZW5kQ2hpbGQoZGl2cy5yZWFkKTtcbiAgZGl2cy5uZXdEaXYuYXBwZW5kQ2hpbGQoZGl2cy5yZW1vdmVCdG4pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2cy5uZXdEaXYuY2xvbmVOb2RlKHRydWUpKTtcbn1cblxuZXhwb3J0IHsgcHJpbnRBcnJheSwgZGVzdHJveUV4aXN0aW5nRGl2cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==