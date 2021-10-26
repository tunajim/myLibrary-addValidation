"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Book = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Book =
/*#__PURE__*/
function () {
  function Book(author, title, pages, read, dataAttr) {
    _classCallCheck(this, Book);

    this.author = "Author: ".concat(titleCase(author));
    this.title = "Title: ".concat(titleCase(title));
    this.pages = "Pages: ".concat(titleCase(pages));
    this.read = "Status: ".concat(checkRadioBtns());
    this.dataAttr = camelCase(title);
  }

  _createClass(Book, [{
    key: "sayBook",
    value: function sayBook() {
      console.log("".concat(author, " is a book written by ").concat(title, ", it has ").concat(pages, " pages. You ").concat(read, "\n         read the book"));
    }
  }]);

  return Book;
}();

exports.Book = Book;

function createBookDiv() {
  for (var i = 0; i < myLibrary.length; i++) {
    container.appendChild(newDiv.cloneNode(true));
    console.log(myLibrary);
  }
}