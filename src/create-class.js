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

export { Book };