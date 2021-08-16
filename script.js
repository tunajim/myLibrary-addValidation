const openFormBtn = document.querySelectorAll('[data-form-target]');
let container = document.getElementById('container');
const newDiv  = document.createElement('div');
newDiv.classList.add('book');
const getForm = document.querySelector('form#form');
const author = document.createElement('h3');
const title = document.createElement('h3');
const pages = document.createElement('h3');
const read = document.createElement('h3');
const removeBtn = document.createElement('button');
const didReadImg = document.createElement('img');
const didNotReadImg = document.createElement('img');
didReadImg.classList.add('didReadImg');
didNotReadImg.classList.add('didNotReadImg');
didReadImg.src = 'checked.png'
didNotReadImg.src = 'cancel-mark.png'
console.log({didReadImg, didNotReadImg})


let removeImg = document.createElement('img');
removeImg.classList.add('removeImgBtn');
removeImg.setAttribute('src', 'delete.png');


let titleFlag = false;
let bookTitle = form.elements.namedItem('bookTitle');

bookTitle.addEventListener('input', function(){
    titleFlag = true;
    console.log(titleFlag);
});


const button = document.getElementById('addBook');
let example = new book('John Steinbeck', 'Of Mice And Men', '107', 'Did Read', 'OfMiceAndMen');
let myLibrary = [];
const closeFormBtn = document.querySelectorAll('[data-close-form]');
const overlay = document.getElementById('overlay');

function removeBook(){
    let activeBooks = document.querySelectorAll('[data-book-name]');
    activeBooks.remove();
}

console.log({myLibrary});

openFormBtn.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.querySelector(button.dataset.formTarget);
        openForm(form);
        console.log({form});
    })
})

overlay.addEventListener('click', () => {
    const forms = document.querySelectorAll('#form.active');
    form.forEach(forms);
    closeForm(forms);
})

//when form closed, push entries into myLibrary[] destroy divs first as to not print same book twice
//than print each object in myLibrary[] as its own div  
closeFormBtn.forEach(button => {
    button.addEventListener('click', event => {
            event.preventDefault();
            const form = button.closest('#form')
            closeForm(form);
            destroyExistingDivs();
            printArray(myLibrary);
            const removeBookBtn = document.querySelectorAll('.remover');
            removeBookBtn.forEach(button => {
                button.addEventListener('click', () => {
                    let index = button.dataset.removeBook;
                    document.querySelector(`[data-book-name=${index}]`).remove();
                    console.log({index});
                    removeBookFromArray(index);
                })
            })
   })
})

function removeBookFromArray(index){
    for(let i=0; i<myLibrary.length; i++){
        if(myLibrary[i].dataAttr === index){
            myLibrary.splice(i, 1);
            console.log({myLibrary});
        }
    }
}

function destroyExistingDivs(){
    let getAllBooks = document.querySelectorAll('.bookDiv');
    for(let i=0;i<getAllBooks.length;i++){
        getAllBooks[i].remove();
    }
}



function openForm(form){
    if(form === null) return
    form.classList.add('active');
    overlay.classList.add('active');
    form.reset();
}


function updateReadImg(){
    for(let i=0;i<myLibrary.length;i++){
        let readImg = document.querySelector(`[data-array-index='${i}'`);

        if(readImg.read != 'Did Read'){
            readImg.src = 'cancel-mark.png';
        }
    }
}

function printArray(array){
    for(let i=0;i<array.length;i++){
        author.classList.add('author');
        title.classList.add('title');
        pages.classList.add('pages');
        read.classList.add('read');
        
        author.innerHTML = array[i].author;
        title.innerHTML = array[i].title;
        pages.innerHTML = array[i].pages;
        read.innerHTML = array[i].read;
        
        newDiv.setAttribute(`data-book-name`, array[i].dataAttr);

        removeBtn.appendChild(removeImg);
        newDiv.classList.add('bookDiv');
        removeBtn.setAttribute('id', 'removeBtn');
        removeBtn.classList.add('remover');
        removeBtn.setAttribute('data-remove-book', `${array[i].dataAttr}`); 
        newDiv.appendChild(author);
        newDiv.appendChild(title);
        newDiv.appendChild(pages);
        newDiv.appendChild(read);
        newDiv.appendChild(removeBtn);

        let getRead = document.querySelector('.title');
    

        console.log(getRead); 

        container.appendChild(newDiv.cloneNode(true));
        console.log(array[i].read);
        didReadImg.setAttribute(`data-array-index`, `${i}`);

 

       console.log(document.querySelector(`[data-array-index= '${i}'`));
        console.log(document.querySelector(`[data-array-index= '${i}'`));
     
    }
}


//closes form but also populates myLibrary[]

function closeForm(form){

    if(titleFlag === false){
        console.log(this.title);
        alert('Please make sure all fields are completed!');
      
    }else if(titleFlag === true){
        form.classList.remove('active');
        form.classList.remove('active');
        overlay.classList.remove('active');
        let makeBook = new book(form.elements[0].value, form.elements[1].value, form.elements[2].value, checkRadios())
        myLibrary.push(makeBook);
        console.log(myLibrary);
        titleFlag = false;
    }
    
    function checkRadios(){
        let radios = document.getElementsByClassName('radio');
            for(let i=0;i<radios.length;i++){
                if(radios[i].checked){
                    return radios[i].value.toString();
                }
         
            }
        }
}


//let newBook = new book('ofMiceAndMen', 'JohnSteinBeck', '100', 'have');

function camelCase(string){
    string = string.toLowerCase();
    string = string.split(' ');
    for(let i=0; i<string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
    }
    return string.join('');
}

function titleCase(string){
    string = string.toLowerCase();
    string = string.split(' ');
    for(let i=0;i<string.length; i++){
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}

function checkRadioBtns(){
    let didRead = document.getElementById('didRead');
    let didNotRead = document.getElementById('didNotRead');
    if(didRead.checked === true){
        return 'Did Read';
    }else if(didNotRead.checked === true){
        return 'Did Not Read';
    }
}


//book constructor
function book(author, title, pages, read, dataAttr){
    this.author = `Author: ${titleCase(author)}`;

    this.title = `Title: ${titleCase(title)}`;
    
    this.pages = `Pages: ${titleCase(pages)}`;

    this.read = `Status: ${checkRadioBtns()}`;

    this.dataAttr = camelCase(title);

    this.sayBook = function(){
        console.log(`${author} is a book written by ${title}, it has ${pages} pages. You ${read}
         read the book`);
    }
}

function validateForm(){

}






function createBookDiv(){
    for(let i=0;i<myLibrary.length;i++){
        container.appendChild(newDiv.cloneNode(true));
        console.log(myLibrary)
    }
}





