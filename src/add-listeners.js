import { closeForm } from "./close-form.js";
import { printArray, destroyExistingDivs } from "./print-items.js";
import { myLibrary } from "./index";

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
    closeForm(form);
    destroyExistingDivs();
    printArray(myLibrary);
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
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].dataAttr === index) myLibrary.splice(i, 1);
    }
  }

  export { createAddBookListener, addListenersToRemovers, createSubmitListener };