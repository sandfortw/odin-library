function Book(title, author, pageCount, read=false){
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pageCount} pages, ${read ? 'read' : 'not read yet'}`;
  }
}
