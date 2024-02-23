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
  library.forEach(book => {
    let tr = document.createElement("tr");
    let attributes = ["title", "author", "pageCount", "read"];
    attributes.forEach(attribute => {
      let td = document.createElement("td")
      td.textContent = book[attribute];
      tr.appendChild(td)
    })
    tableBody.appendChild(tr)
  });
}

let book1 = new Book('Return of the King', 'Tolkien', '200')

addBookToLibrary(book1)
displayBooks(myLibrary)