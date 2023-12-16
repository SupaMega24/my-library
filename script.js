
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

  // Add function to display book cards
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
      
      //delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');

      // Add a single event listener for the delete buttons
      bookListElement.addEventListener('click', function handleClick(event) {
        const deleteButton = event.target.closest('.delete-button');
        if (deleteButton) {
          const bookCard = deleteButton.parentElement;
          const currentBookIndex = Array.from(bookCard.parentNode.children).indexOf(bookCard);

          // Update based on the found index
          myLibrary.splice(currentBookIndex, 1);
          bookCard.parentNode.removeChild(bookCard);
        }
      });      

      // Create Elements and classes to build book card
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
      bookCard.appendChild(deleteButton);

      bookListElement.appendChild(bookCard);
    }
  }
  
  const addBookButton = document.getElementById('add-book-button');
  const addBookDialog = document.getElementById('add-book-dialog');
  const closeDialogButton = document.getElementById('close-dialog-button');
  const addBookForm = document.getElementById('add-book-form');  
  const body = document.body;

  addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
    body.classList.add('dialog-open');
    createBackdrop();
  });

  closeDialogButton.addEventListener('click', () => {
    addBookDialog.close();
    body.classList.remove('dialog-open');
    removeBackdrop();
  });

  // create a backdrop

  function createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add('dialog-backdrop');
    document.body.appendChild(backdrop);
  }
  
  function removeBackdrop() {
    const backdrop = document.querySelector('.dialog-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  }  

  // Event listeners for add book form
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
    removeBackdrop();
    displayBooks();

    // Clear form fields after adding book
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    addBookDialog.close();
  });

  // Display books on page load
  displayBooks();

  
  
