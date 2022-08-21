let myLibrary = [];
let bookElement = document.getElementById("bookname");
let authorname = document.getElementById("author");
let isRead = document.getElementById('thecheckbox').checked;
let errorText = document.getElementById("errortext");
let libraryDisplay = document.getElementById("libraryDisplay");

let bookname = "empty";
let readstatus = false;

function addBookToLibrary() {

    //checkInputs();

    //define values & see if book has been read
    let title = bookElement.value;
    let author = authorname.value;
    checkRead()

    //add to library array
    const addedBook = new Book(title, author, readstatus);

    //create div to hold book elements
    let newBookGridElement = document.createElement('div');
    newBookGridElement.className = 'book';

    //set data info on element
    newBookGridElement.dataset.info = `${author}${title}${readstatus}`;

    //create p elements and button
    let newBookTitle = document.createElement("p");
        newBookTitle.textContent = addedBook.title;
    let newBookAuthor = document.createElement("p");
        newBookAuthor.textContent = addedBook.author;
    let newBookReadStatus = document.createElement("p");
        newBookReadStatus.textContent = addedBook.readstatus;

    let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.dataset.info = `${author}${title}${readstatus}`;
      deleteButton.addEventListener('click', deleteBook);

    libraryDisplay.appendChild(newBookGridElement);
    newBookGridElement.appendChild(newBookTitle);
    newBookGridElement.appendChild(newBookAuthor);
    newBookGridElement.appendChild(newBookReadStatus);
    newBookGridElement.appendChild(deleteButton);

    myLibrary.push(addedBook);

    console.log(myLibrary);

  }



//get name of book from input field and make sure it's populated
function checkInputs(){
  booklengthcheck = bookElement.value;

  if (booklengthcheck.length < 1) {
    errorText.style.visibility = "visible";
    exit;
  } else {
    errorText.style.visibility = "hidden";
  }
}

//erase all books and start with a fresh library
function eraseLibrary() {
  myLibrary = [];
  let allbooks = document.querySelectorAll(".book");
  allbooks.forEach((book) => book.remove());
}

//THE BIG CONSTRUCTOR
function Book(title, author, readstatusin) {

    this.title = title;
    this.author = author;
    if (readstatusin == true) {
        this.readstatus = "Read";
    } else {
        this.readstatus = "Not Read";
    }

}

//see if the READ checkbox is checked or not
function checkRead(){
  if (document.getElementById('thecheckbox').checked == true) {
    return readstatus = true;
  }else {
    return readstatus = false;
  }
}

function deleteBook(e){
  //get ID of button -> delete all elements with that ID
  let buttonID = e.target.dataset.info;
  let itemsToDelete = document.querySelectorAll(`[data-info="${buttonID}"]`);
  itemsToDelete.forEach(element => element.remove());

}
