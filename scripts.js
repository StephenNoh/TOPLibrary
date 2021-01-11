//event listeners
const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addBookToLibrary);

let myLibrary = [
];

//book constructor
// class Book {
//     constructor(title, author, pages, read="false") {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//         this.info = function() {
//             return (title + " by " + author + ", " + pages + " pages, " + (read ? "read" : "not yet read"))
//           }
//     }
// }

function Book(title, author, pages, read="false") {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return (title + " by " + author + ", " + pages + " pages, " + (read ? "read" : "not yet read"))
  }
}

function addBookToLibrary() {
    event.preventDefault();
    let title = document.getElementById("title").value 
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked 
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showBooks(myLibrary.slice(-1)[0]);
}

function showBooks(book) {
    const list = document.getElementById("book-list")
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? "read" : "not read"}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
    `;
    list.appendChild(row);
}