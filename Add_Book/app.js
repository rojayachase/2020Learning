//Book constructor
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element(table row)
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x<a></td>
    `;

list.appendChild(row);
}
//show alert 
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add className
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    //timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

//delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
//clear fields 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

//Event listeners for add book
document.getElementById('book-form').addEventListener('submit',
//get form values
function(e){
const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

//instantiate book
const book = new Book(title,author,isbn);

//instantiate UI
const ui = new UI();

ui.deleteBook(e.target);


//validate
if(title === '' || author === '' || isbn === '') {
ui.showAlert('Please fill in all fields', 'error');
} else {
        //Add book to list
ui.addBookToList(book);

//show success
ui.showAlert('Book Added!', 'success')

//clear fields

ui.clearFields();
    }
e.preventDefault();
}); 

//Event Listener for delete
document.getElementById('book-list').addEventListener
('click', function(e){
    const ui = new UI();

    //delete book
ui.deleteBook(e.target);

//show message
ui.showAlert('Book removed!', 'success')


    e.preventDefault();
});