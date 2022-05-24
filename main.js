const bookDisplayContainer = document.querySelector(".book-display-container");
const openFormButton = document.querySelector(".add-book-button").addEventListener("click", openForm);
const closeFormButton = document.querySelector(".close-button").addEventListener('click', closeForm);
const formOverlay = document.getElementById("overlay");
const form = document.querySelector(".pop-up-form")
const formSubmit = document.querySelector(".submit").addEventListener('click', submitForm);

const myLibrary = [];

function Book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
    this.info = function() {
      return title + ", " + author + ", " + length + ", " + read
    }
}

function addBook(obj) {
     myLibrary.push(obj);
     displayBook();
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.classList.add('book-entry-div')
        div.innerHTML = 
        '<p>' + 'Title: ' + myLibrary[i].title + '<br>' +
        '<p>' + 'Author: ' + myLibrary[i].author + '<br>' +
        '<p>' + 'Length: ' + myLibrary[i].length + '<br>' +
        '<p>' + 'Have read: ' + myLibrary[i].read;
        bookDisplayContainer.appendChild(div);
    } 
}

function openForm() {
    form.classList.add('active')
    formOverlay.classList.add('active')
}

function closeForm() {
    form.classList.remove('active');
    formOverlay.classList.remove('active');
}

function resetDisplay() {
    const currentDivs = document.getElementById("book-container");
    currentDivs.innerHTML = "";
}

function resetForm() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('length').value = "";
    document.getElementById('read-status').value = "";
}

function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const length = document.getElementById('length').value;
    const readStatus = document.getElementById('read-status').value;
    
    newBook = new Book(title, author, length, readStatus);

    myLibrary.push(newBook);
    resetDisplay()
    displayBook();
    resetForm();
    closeForm();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '500 Pages', false);

addBook(theHobbit);