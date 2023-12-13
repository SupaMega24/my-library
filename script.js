
const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function myBooks() {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = ",";

    for (const book of myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
    
        const bookTitleElement = document.createElement('h3');
        bookTitleElement.textContent = book.title;
    
        const bookAuthorElement = document.createElement('p');
        bookAuthorElement.textContent = `by ${book.author}`;
    
        const bookPagesElement = document.createElement('p');
        bookPagesElement.textContent = `${book.pages} pages`;
    
        bookCard.appendChild(bookTitleElement);
        bookCard.appendChild(bookAuthorElement);
        bookCard.appendChild(bookPagesElement);
    
        bookListElement.appendChild(bookCard);
      }
}

const addBookButton = document.getElementById('add-book-button');
const addBookDialog = document.getElementById('add-book-dialog');
const closeDialogButton = document.getElementById('close-dialog-button');

addBookButton.addEventListener('click', () => {
  addBookDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  addBookDialog.close();
});

const addBookFormButton = document.getElementById('add-book-button');

addBookFormButton.addEventListener('click', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = Number(pagesInput.value);

  if (!title || !author || !pages) {
    alert('Please fill in all fields.');
    return;
  }

  const book = new Book(title, author, pages);
  myLibrary.push(book);

  displayBooks();

  // Clear form fields after adding book
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';

  addBookDialog.close();
});
