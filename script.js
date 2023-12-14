
class Book {
    constructor(title, author, pages, read = false) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }

  const myLibrary = [];

  // Add a default example book
  const defaultBook = new Book('The Wizard of Oz', 'L. Frank Baum', 304);
  myLibrary.unshift(defaultBook);

  const defaultBook1 = new Book('Of Mice and Men', 'John Steinbeck', 107);
  myLibrary.unshift(defaultBook1);

  const defaultBook2 = new Book('Animal Farm', 'George Orwell', 112);
  myLibrary.unshift(defaultBook2); 


  function displayBooks() {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = '';

    for (const book of myLibrary) {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      const bookTitleElement = document.createElement('h3');
      bookTitleElement.textContent = book.title;

      const bookAuthorElement = document.createElement('p');
      bookAuthorElement.textContent = `by: ${book.author}`;

      const bookPagesElement = document.createElement('p');
      bookPagesElement.textContent = `${book.pages} pages`;

      const readContainer = document.createElement('div');
      readContainer.classList.add('read-container'); // Add a class for styling 

      const readCheckbox = document.createElement('input');
      readCheckbox.type = 'checkbox';
      readCheckbox.classList.add('read-toggle');
      readContainer.appendChild(readCheckbox);

      const readLabel = document.createElement('label');
      readLabel.textContent = 'Read';
      readLabel.for = readCheckbox.id;
      readLabel.classList.add('read-label')
      readContainer.appendChild(readLabel);

      bookCard.appendChild(readContainer);      

      bookCard.appendChild(bookTitleElement);
      bookCard.appendChild(bookAuthorElement);
      bookCard.appendChild(bookPagesElement);

      bookListElement.appendChild(bookCard);
    }
  }

  const addBookButton = document.getElementById('add-book-button');
  const addBookDialog = document.getElementById('add-book-dialog');
  const closeDialogButton = document.getElementById('close-dialog-button');
  const addBookForm = document.getElementById('add-book-form');

  addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
  });

  closeDialogButton.addEventListener('click', () => {
    addBookDialog.close();
  });

  addBookForm.addEventListener('submit', (event) => {
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
    myLibrary.unshift(book);

    displayBooks();

    // Clear form fields after adding book
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    addBookDialog.close();
  });

  // Display books on page load
  displayBooks();
