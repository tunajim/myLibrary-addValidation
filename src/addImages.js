import add from "./images/add.svg";
import logo from "./images/libraryImage.png";
import deleteEntry from "./images/delete.png";

const addImages = () => {
    const libraryImg = document.getElementById("libraryImg");
    libraryImg.src = logo;

    const addBtn = document.getElementById("addBtn");
    addBtn.src = add;

}

export { addImages };