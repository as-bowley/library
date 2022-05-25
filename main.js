const bookDisplayContainer = document.querySelector(".book-display-container");
const openFormButton = document.querySelector(".add-book-button").addEventListener("click", openForm);
const closeFormButton = document.querySelector(".close-button").addEventListener('click', closeForm);
const formOverlay = document.getElementById("overlay");
const form = document.querySelector(".pop-up-form")
const formSubmit = document.querySelector(".submit").addEventListener('click', submitForm);


const myLibrary = [];
let bookCount = 1;          

function Book(title, author, length, read, indexNum) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
    this.indexNum = indexNum;
    this.info = function() {
      return title + ", " + author + ", " + length + ", " + read
    }
}

function addBook(obj) {
     myLibrary.push(obj);
     displayBook();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '500 Pages', "Not Read", 0);

addBook(theHobbit);

 /* Form elements */

 function openForm() {
    form.classList.add('active')
    formOverlay.classList.add('active')
}

function closeForm() {
    form.classList.remove('active');
    formOverlay.classList.remove('active');
}

function resetForm() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('length').value = "";
    //document.getElementById('read-status').value = "";
}

function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const length = document.getElementById('length').value;
    const readStatus = document.getElementById('read-status').value;
    
    
    newBook = new Book(title, author, length, readStatus, bookCount);

    myLibrary.push(newBook);
    bookCount++;
    resetDisplay()
    displayBook();
    resetForm();
    closeForm();
}

 /* Array display elements */

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.classList.add('book-entry-div')
        div.innerHTML = 
        `<p> <strong>Title:</strong> ${myLibrary[i].title} <br>
        <strong>Author:</strong> ${myLibrary[i].author} <br>
        <strong>Length:</strong> ${myLibrary[i].length} <br>
        <strong>Have read:</strong> <button class="toggleRead" onclick="toggleReadStatus(this.id)" id="${myLibrary[i].indexNum}">${myLibrary[i].read}</button> <br>
        <button class="remove" onclick="removeEntry(this.id)" id="${myLibrary[i].indexNum}">Delete</button>`;
        bookDisplayContainer.appendChild(div);
    }
}

function removeEntry(clicked_id) {
    const index = myLibrary.findIndex(object => {
        return object.indexNum == clicked_id;
    })
    myLibrary.splice(index, 1);
    resetDisplay()
    displayBook();
}

function resetDisplay() {
    const currentDivs = document.getElementById("book-container");
    currentDivs.innerHTML = "";
}

function toggleReadStatus(clicked_id) {
    const index = myLibrary.findIndex(object => {
        return object.indexNum == clicked_id;
    })

    console.log(index);

    if (myLibrary[index].read == "Read") {
        myLibrary[index].read = "Not read";
    } else {
        myLibrary[index].read = "Read"
    }
    resetDisplay()
    displayBook();
}

