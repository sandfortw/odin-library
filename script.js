const myLibrary = [];

function Book(title, author, pageCount, read=false){
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pageCount} pages, ${read ? 'read' : 'not read yet'}`;
  }
}


function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayBooks(library){
  tableBody = document.querySelector('tbody')
  tableBody.innerHTML = '';
  for (let index = 0; index < library.length; index++) {
    const book = library[index];
    if(book != undefined) {
      let tr = document.createElement("tr");
      let attributes = ["title", "author", "pageCount", "read"];
      attributes.forEach(attribute => {
        let td = document.createElement("td")
        td.textContent = book[attribute];
        tr.appendChild(td)
      })
      let deleteButton = document.createElement("button");
      deleteButton.value = index;
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', () =>{
        delete myLibrary[deleteButton.value]
        displayBooks(myLibrary)
      })
      tr.appendChild(deleteButton)
      tableBody.appendChild(tr)
    } 
  }
}

const bookButton = document.querySelector("#book-button")
const dialogForm = document.querySelector('dialog')
const submitButton = document.querySelector('#submit-button')

bookButton.addEventListener('click', () =>{
  dialogForm.showModal();
})

const closeButton = document.querySelector("#close-button");

closeButton.addEventListener("click", () => {
  dialogForm.close();
});

submitButton.addEventListener("click", (event) =>{
  event.preventDefault();
  const inputs = document.querySelectorAll("input")
  const radioSelection = document.querySelector('input[name="read"]:checked')
  const book = new Book(inputs[0].value, inputs[1].value, inputs[2].value, radioSelection.value)
  addBookToLibrary(book)
  displayBooks(myLibrary)
})

