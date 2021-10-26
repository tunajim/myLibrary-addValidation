import "./style.css";
import { addImages } from "./addImages.js";
import {
  createAddBookListener,
  addListenersToRemovers,
  createSubmitListener,
} from "./add-listeners.js";

let myLibrary = [];
const getForm = document.querySelector("form#form");
const closeFormBtn = document.querySelectorAll("[data-close-form]");
const button = document.getElementById("addBook");

addImages();
createAddBookListener();
createSubmitListener();

export { myLibrary };
