import deleteEntry from "./images/delete.png";

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
  removeImg.setAttribute("src", deleteEntry);

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

export { printArray, destroyExistingDivs };
