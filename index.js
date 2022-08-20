let myLibrary = [];
let bookElement = document.getElementById("bookname");
let authorname = document.getElementById("author");
let readstatusitem = document.querySelector('input[name="readornot"]:checked').value;
let errorText = document.getElementById("errortext");
let libraryDisplay = document.getElementById("libraryDisplay");

let bookname = "empty";


function addBookToLibrary() {
    console.log(readstatusitem);
    //checkInputs();

    //define values
    let title = bookElement.value;
    let author = authorname.value;
    let readstatus = readstatusitem.value;

    //add to library array
    const addedBook = new Book(title, author, readstatus);

    //create div to hold book elements
    let newBookGridElement = document.createElement('div');
    newBookGridElement.className = 'book';

    let newBookTitle = document.createElement("p");
        newBookTitle.textContent = addedBook.title;
    let newBookAuthor = document.createElement("p");
        newBookAuthor.textContent = addedBook.author;
    let newBookReadStatus = document.createElement("p");
        newBookReadStatus.textContent = addedBook.readstatus;

    libraryDisplay.appendChild(newBookGridElement);
    newBookGridElement.appendChild(newBookTitle);
    newBookGridElement.appendChild(newBookAuthor);
    newBookGridElement.appendChild(newBookReadStatus);

    myLibrary.push(addedBook);

    console.log(myLibrary);

  }



function checkInputs(){
  //get name of book from input field and make sure it's populated
  booklengthcheck = bookElement.value;

  if (booklengthcheck.length < 1) {
    errorText.style.visibility = "visible";
    exit;
  } else {
    errorText.style.visibility = "hidden";
  }
}

function eraseLibrary() {
  myLibrary = [];
  let allbooks = document.querySelectorAll(".book");
  allbooks.forEach((book) => book.remove());
}

function Book(title, author, readstatusin) {
  //the constructor
    this.title = title;
    this.author = author;
    if (readstatusin == 'true') {
        this.readstatus = "Read";
    } else {
        this.readstatus = "Not Read";
    }

}

function defaultLibraryPopulate() {
  myLibrary = [
    "The Catcher and the Rye",
    "The Great Gatsby",
    "American Killer",
    "When Jobs Go Overseas",
    "The New Beginning",
    "The Bible",
    "Cosmos",
  ];
  myLibrary.forEach((book) => {
    let newBook = document.createElement("p");
    newBook.textContent = book.toString();
    newBook.className = "book";
    libraryDisplay.appendChild(newBook);
  });
}
