//define an empty list of array that store books details in future
var books=[];
//get reference of book-form
var bookform = document.getElementById("book-form");
//add eventlistner to book-form
bookform.addEventListener("submit",function(event){
    //prevent default behavior of the form submission
    event.preventDefault();


    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var year = document.getElementById("year").value;
    year = Number(year);

        //validate input values
        if(title === "" || author === "" || year === ""){
            alert("Please enter all the fields");
            return;
        }

    // create a new book object with the input value

    var book = {title: title, author: author, year: year};
    // push object in books array
    books.push(book);
    // now filter the array with his condition

    /*const newbooks = book.filter((h) => {
        return h.year>=2010
    })*/
   // create new array with condition
   // books.push(newbooks)
    // clear input filed
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";

    function isafter2010(book){
        return book.year >= 2010;
       }
    
       var filterbooks = books.filter(isafter2010);

    //display the book list
    console.log("Book list: ");
    for(var i = 0; i<filterbooks.length; i++){
        console.log((i+1)+". " + filterbooks[i].title + "by" + filterbooks[i].author + "("+filterbooks[i].year + ")");
    }
})
