const myLibrary = [];
const bookButton = document.querySelector("#book-button");
const dialogBox = document.querySelector("dialog");
const dialogForm = document.querySelector("dialog form");
const submitButton = document.querySelector("#submit-button");
const closeButton = document.querySelector("#close-button");

function Book(title, author, pageCount, read = false) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.toggleRead = () => {
    this.read = !this.read;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const createBookRow = (object) => {
  object.tr = document.createElement("tr");
  const tr = generateRowContent(object);
  tableBody.appendChild(tr);
};

//Helper methods for createBookRow:

const generateRowContent = (object) => {
  object.tr = addBookDetails(object);
  object.tr = addDeleteButton(object);
  object.tr = addReadButton(object);
  return object.tr;
};

const addBookDetails = (object) => {
  const attributes = ["title", "author", "pageCount", "read"];
  attributes.forEach((attribute) => {
    let td = document.createElement("td");
    td.textContent = object.book[attribute];
    object.tr.appendChild(td);
  });
  return object.tr;
};

const addDeleteButton = (object) => {
  let deleteButton = document.createElement("button");
  deleteButton.value = object.index;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    delete myLibrary[deleteButton.value];
    displayBooks(myLibrary);
  });
  object.tr.appendChild(deleteButton);
  return object.tr;
};

const addReadButton = (object) => {
  let readButton = document.createElement("button");
  readButton.value = object.index;
  readButton.textContent = "Toggle Read";
  readButton.addEventListener("click", () => {
    const libraryBook = myLibrary[readButton.value];
    libraryBook.toggleRead();
    displayBooks(myLibrary);
  });
  object.tr.appendChild(readButton);
  return object.tr;
};
//^^^End helper methods for createBookRow^^^

function displayBooks(library) {
  tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  for (let index = 0; index < library.length; index++) {
    const book = library[index];
    if (book != undefined) {
      createBookRow({ book: book, index: index });
    }
  }
}

bookButton.addEventListener("click", () => {
  dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
  dialogBox.close();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  const radioSelection = document.querySelector('input[name="read"]:checked');
  const book = new Book(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    radioSelection.value
  );
  addBookToLibrary(book);
  displayBooks(myLibrary);
  dialogForm.reset();
  dialogBox.close();
});
