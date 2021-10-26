/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/close-form.js":
/*!***************************!*\
  !*** ./src/close-form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm)\n/* harmony export */ });\nfunction closeForm(form) {\n  checkIfNull(form);\n  checkForCorrectInput(form);\n}\n\nfunction checkIfNull(form) {\n  let author = form[0];\n  let book = form[1];\n  let pages = form[2];\n  !author.validity.valid ? addText(author, form) : removeActive(author);\n  !book.validity.valid ? addText(book, form) : removeActive(book);\n  !pages.validity.valid ? addText(pages, form) : removeActive(pages);\n}\n\nfunction addText(input, form) {\n  const _target = input.nextSibling.nextSibling.nextSibling;\n  _target.textContent = `${input.placeholder}`;\n  _target.classList.add(\"active\");\n  listenForInput(form);\n}\n\nfunction listenForInput(form) {\n  for (let i = 0; i < 3; i++)\n    form[i].addEventListener(\"input\", callRemoveActive);\n}\n\nfunction callRemoveActive(e) {\n  return removeActive(e.target);\n}\n\nfunction removeActive(input) {\n  console.log(input);\n  const target = input.nextSibling.nextSibling.nextSibling;\n  target.classList.remove(\"active\");\n}\n\nfunction checkForCorrectInput(form) {\n  let flag = false;\n  for (let i = 0; i < 3; i++)\n    form[i].validity.valid ? (flag = true) : (flag = false);\n  flag === true ? submitForm(form) : console.log(flag);\n}\n\nfunction submitForm(form) {\n  form.classList.remove(\"active\");\n  overlay.classList.remove(\"active\");\n  let makeBook = new Book(\n    form.elements[0].value,\n    form.elements[1].value,\n    form.elements[2].value,\n    checkRadios()\n  );\n  myLibrary.push(makeBook);\n  console.log(myLibrary);\n}\n\nfunction checkRadios() {\n  let radios = document.getElementsByClassName(\"radio\");\n  for (let i = 0; i < radios.length; i++) {\n    if (radios[i].checked) radios[i].value.toString();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://mylibrary-addvalidation/./src/close-form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _close_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-form.js */ \"./src/close-form.js\");\n\n\nlet container = document.getElementById(\"container\");\n\nconst newDiv = document.createElement(\"div\");\nnewDiv.classList.add(\"book\");\nconst getForm = document.querySelector(\"form#form\");\nconst author = document.createElement(\"h3\");\nconst title = document.createElement(\"h3\");\nconst pages = document.createElement(\"h3\");\nconst read = document.createElement(\"h3\");\nconst removeBtn = document.createElement(\"button\");\nconst didReadImg = document.createElement(\"img\");\nconst didNotReadImg = document.createElement(\"img\");\ndidReadImg.classList.add(\"didReadImg\");\ndidNotReadImg.classList.add(\"didNotReadImg\");\ndidReadImg.src = \"checked.png\";\ndidNotReadImg.src = \"cancel-mark.png\";\nconsole.log({ didReadImg, didNotReadImg });\n\nlet removeImg = document.createElement(\"img\");\nremoveImg.classList.add(\"removeImgBtn\");\nremoveImg.setAttribute(\"src\", \"delete.png\");\n\n//check if user has entered value into title\nlet titleFlag = false;\nlet bookTitle = form.elements.namedItem(\"bookTitle\");\n\nbookTitle.addEventListener(\"input\", function () {\n  titleFlag = true;\n  console.log(titleFlag);\n});\n\nconsole.log(bookTitle);\n\nlet myLibrary = [];\nconst closeFormBtn = document.querySelectorAll(\"[data-close-form]\");\nconst overlay = document.getElementById(\"overlay\");\n\nconsole.log({ myLibrary });\n\n//add listener to add button\nconst button = document.getElementById(\"addBook\");\nconst openFormBtn = document.querySelectorAll(\"[data-form-target]\");\nopenFormBtn.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    const form = document.querySelector(button.dataset.formTarget);\n    openForm(form);\n    console.log({ form });\n  });\n});\n\n//closes form if you click anywhere on the screen\n// overlay.addEventListener(\"click\", () => {\n//   const forms = document.querySelectorAll(\"#form.active\");\n//   closeForm(forms);\n// });\n\n//when form closed, push entries into myLibrary[] destroy divs first as to not print same book twice\n//than print each object in myLibrary[] as its own div\n\ncloseFormBtn.forEach((button) => {\n  button.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    const form = button.closest(\"#form\");\n    (0,_close_form_js__WEBPACK_IMPORTED_MODULE_0__.closeForm)(form);\n    destroyExistingDivs();\n    printArray(myLibrary);\n    addListenersToRemovers();\n  });\n});\n\n// //================================================================\n// //================================================================\n// function closeForm(form) {\n//   checkIfNull(form);\n//   checkForCorrectInput(form);\n// }\n// //===========================================\n// function checkIfNull(form) {\n//   let author = form[0];\n//   let book = form[1];\n//   let pages = form[2];\n//   !author.validity.valid ? addText(author, form) : removeActive(author);\n//   !book.validity.valid ? addText(book, form) : removeActive(book);\n//   !pages.validity.valid ? addText(pages, form) : removeActive(pages);\n// }\n\n// function addText(input, form) {\n//   const _target = input.nextSibling.nextSibling.nextSibling;\n//   _target.textContent = `${input.placeholder}`;\n//   _target.classList.add(\"active\");\n//   listenForInput(form);\n// }\n\n// function listenForInput(form) {\n//   for (let i = 0; i < 3; i++)\n//     form[i].addEventListener(\"input\", callRemoveActive);\n// }\n\n// function callRemoveActive(e) {\n//   return removeActive(e.target);\n// }\n\n// function removeActive(input) {\n//   console.log(input);\n//   const target = input.nextSibling.nextSibling.nextSibling;\n//   target.classList.remove(\"active\");\n// }\n// //===========================================\n\n// function checkForCorrectInput(form) {\n//   let flag = false;\n//   for (let i = 0; i < 3; i++)\n//     form[i].validity.valid ? (flag = true) : (flag = false);\n//   flag === true ? submitForm(form) : console.log(flag);\n// }\n\n// function submitForm(form) {\n//   form.classList.remove(\"active\");\n//   overlay.classList.remove(\"active\");\n//   let makeBook = new Book(\n//     form.elements[0].value,\n//     form.elements[1].value,\n//     form.elements[2].value,\n//     checkRadios()\n//   );\n//   myLibrary.push(makeBook);\n//   console.log(myLibrary);\n// }\n\n// function checkRadios() {\n//   let radios = document.getElementsByClassName(\"radio\");\n//   for (let i = 0; i < radios.length; i++) {\n//     if (radios[i].checked) radios[i].value.toString();\n//   }\n// }\n// //===========================================\n\nfunction destroyExistingDivs() {\n  let getAllBooks = document.querySelectorAll(\".bookDiv\");\n  for (let i = 0; i < getAllBooks.length; i++) {\n    getAllBooks[i].remove();\n  }\n}\n\nfunction printArray(array) {\n  for (let i = 0; i < array.length; i++) {\n    author.classList.add(\"author\");\n    title.classList.add(\"title\");\n    pages.classList.add(\"pages\");\n    read.classList.add(\"read\");\n\n    author.innerHTML = array[i].author;\n    title.innerHTML = array[i].title;\n    pages.innerHTML = array[i].pages;\n    read.innerHTML = array[i].read;\n\n    newDiv.setAttribute(`data-book-name`, array[i].dataAttr);\n\n    removeBtn.appendChild(removeImg);\n    newDiv.classList.add(\"bookDiv\");\n    removeBtn.setAttribute(\"id\", \"removeBtn\");\n    removeBtn.classList.add(\"remover\");\n    removeBtn.setAttribute(\"data-remove-book\", `${array[i].dataAttr}`);\n    newDiv.appendChild(author);\n    newDiv.appendChild(title);\n    newDiv.appendChild(pages);\n    newDiv.appendChild(read);\n    newDiv.appendChild(removeBtn);\n\n    let getRead = document.querySelector(\".title\");\n\n    console.log(getRead);\n\n    container.appendChild(newDiv.cloneNode(true));\n    console.log(array[i].read);\n    didReadImg.setAttribute(`data-array-index`, `${i}`);\n\n    console.log(document.querySelector(`[data-array-index= '${i}'`));\n    console.log(document.querySelector(`[data-array-index= '${i}'`));\n  }\n}\n\nfunction addListenersToRemovers() {\n  const removeBookBtn = document.querySelectorAll(\".remover\");\n  removeBookBtn.forEach((button) => {\n    button.addEventListener(\"click\", () => {\n      let index = button.dataset.removeBook;\n      document.querySelector(`[data-book-name=${index}]`).remove();\n      console.log({ index });\n      removeBookFromArray(index);\n    });\n  });\n}\n\nfunction removeBookFromArray(index) {\n  for (let i = 0; i < myLibrary.length; i++) {\n    if (myLibrary[i].dataAttr === index) myLibrary.splice(i, 1);\n  }\n}\n\nfunction openForm(form) {\n  if (form !== null) {\n    form.classList.add(\"active\");\n    overlay.classList.add(\"active\");\n    form.reset();\n  }\n}\n\nfunction updateReadImg() {\n  for (let i = 0; i < myLibrary.length; i++) {\n    let readImg = document.querySelector(`[data-array-index='${i}'`);\n\n    if (readImg.read != \"Did Read\") {\n      readImg.src = \"cancel-mark.png\";\n    }\n  }\n}\n\n//closes form but also populates myLibrary[]\n\n//let newBook = new book('ofMiceAndMen', 'JohnSteinBeck', '100', 'have');\n\nfunction camelCase(string) {\n  string = string.toLowerCase();\n  string = string.split(\" \");\n  for (let i = 0; i < string.length; i++) {\n    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);\n  }\n  return string.join(\"\");\n}\n\nfunction titleCase(string) {\n  string = string.toLowerCase();\n  string = string.split(\" \");\n  for (let i = 0; i < string.length; i++) {\n    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);\n  }\n  return string.join(\" \");\n}\n\nfunction checkRadioBtns() {\n  let didRead = document.getElementById(\"didRead\");\n  let didNotRead = document.getElementById(\"didNotRead\");\n  if (didRead.checked === true) {\n    return \"Did Read\";\n  } else if (didNotRead.checked === true) {\n    return \"Did Not Read\";\n  }\n}\n\n//book constructor ------------ This was what I refactored for Odin Project Assignment\n//                 ------------ Take your book constructor and use class instead\n/*function book(author, title, pages, read, dataAttr){\n    this.author = `Author: ${titleCase(author)}`;\n\n    this.title = `Title: ${titleCase(title)}`;\n    \n    this.pages = `Pages: ${titleCase(pages)}`;\n\n    this.read = `Status: ${checkRadioBtns()}`;\n\n    this.dataAttr = camelCase(title);\n\n    this.sayBook = function(){\n        console.log(`${author} is a book written by ${title}, it has ${pages} pages. You ${read}\n         read the book`);\n    }\n}*/\n\n//This is the class refactor\nclass Book {\n  constructor(author, title, pages, read, dataAttr) {\n    this.author = `Author: ${titleCase(author)}`;\n\n    this.title = `Title: ${titleCase(title)}`;\n\n    this.pages = `Pages: ${titleCase(pages)}`;\n\n    this.read = `Status: ${checkRadioBtns()}`;\n\n    this.dataAttr = camelCase(title);\n  }\n  sayBook() {\n    console.log(`${author} is a book written by ${title}, it has ${pages} pages. You ${read}\n         read the book`);\n  }\n}\n\nfunction createBookDiv() {\n  for (let i = 0; i < myLibrary.length; i++) {\n    container.appendChild(newDiv.cloneNode(true));\n    console.log(myLibrary);\n  }\n}\n\n\n//# sourceURL=webpack://mylibrary-addvalidation/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;