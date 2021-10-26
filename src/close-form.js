import { myLibrary } from "./index";
import { Book } from "./create-class";

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
  let makeBook = new Book(
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

export { closeForm };
