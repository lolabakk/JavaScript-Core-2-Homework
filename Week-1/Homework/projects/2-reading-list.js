// The Reading List
// Keep track of which books you read and which books you want to read!

// =====
// Exercise 1
// =====
// Create an array of objects, where each object describes a book and has properties for:

// - The title (a string)
// - Author (a string)
// - and alreadyRead (a boolean indicating if you read it yet)

// Loop through the array of books. For each book, log the book title and book author like so: 

// "The Hobbit by J.R.R. Tolkien"

// =====
// Exercise 2
// =====
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let bookRead = [{
        bookName: "Make Yourself Unforgetable",
        author: "Dale Carnegie",
        printingDate: 2011,
        alreadyRead: true
    },
    {
        bookName: "The Purpose Driven Life",
        author: "Rick Warren",
        printingDate: 2002,
        alreadyRead: false
    },
    {
        bookName: "Think and Grow Rich",
        author: "Napoleon Hill",
        printingDate: 1999,
        alreadyRead: true
    },
];
bookRead.map((book) => {
    console.log(book.author);
    console.log(book.bookName);
    console.log(book.alreadyRead);
    console.log(book.printingDate);
    if (book.alreadyRead === true) {
        return `You already read ${book.bookName} by ${book.author}`
    } else if (book.alreadyread !== true) {
        return `You still need to read ${book.bookName} by ${book.author}`
    }
});