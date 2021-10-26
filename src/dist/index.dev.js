"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myLibrary = void 0;

var _closeForm = require("./close-form.js");

require("./style.css");

var _addImages = require("./addImages.js");

var _printItems = require("./print-items.js");

var _addListeners = require("./add-listeners.js");

var myLibrary = [];
exports.myLibrary = myLibrary;
var getForm = document.querySelector("form#form");
var closeFormBtn = document.querySelectorAll("[data-close-form]");
var button = document.getElementById("addBook");
(0, _addImages.addImages)();
(0, _addListeners.createAddBookListener)();
closeFormBtn.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var form = button.closest("#form");
    (0, _closeForm.closeForm)(form);
    (0, _printItems.destroyExistingDivs)();
    (0, _printItems.printArray)(myLibrary);
    addListenersToRemovers();
  });
});

function addListenersToRemovers() {
  var removeBookBtn = document.querySelectorAll(".remover");
  removeBookBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      var index = button.dataset.removeBook;
      document.querySelector("[data-book-name=".concat(index, "]")).remove();
      console.log({
        index: index
      });
      removeBookFromArray(index);
    });
  });
}

function removeBookFromArray(index) {
  for (var i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].dataAttr === index) myLibrary.splice(i, 1);
  }
}