const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1948,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1967,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1933,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1961,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1968,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];


//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//sort books alphabetically

//Find who wrote War and Peace

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?

//print a list of books that "includes" the genre historical

function authorsAndBooks () {
  books.forEach((books) => console.log(books.authorFirst, books.authorLast +" wrote", books.name + " in", books.publishDate));
};
authorsAndBooks();

function oldestToRecent () {
  const oldestRecent = books.sort((book1, book2) => book1.publishDate - book2.publishDate);
  oldestRecent.forEach((oldestRecent) => console.log(oldestRecent.name, oldestRecent.publishDate));
};
oldestToRecent();

function alphabetically () {
  const alphabetical = books.sort((book1, book2) => {
    const nameBook1 = book1.name.toUpperCase(); 
    const nameBook2 = book2.name.toUpperCase(); 
    if (nameBook1 < nameBook2) {
      return -1;
    }
    if (nameBook1 > nameBook2) {
      return 1;
    }
  
    return 0;
  });
  alphabetical.forEach((alphabetical) => console.log(alphabetical.name));
};
alphabetically();

function warAndPeace() {
  const warPeace =books.filter((books) => books.name === "War and Peace");
  warPeace.forEach((warPeace) => console.log(warPeace.authorFirst, warPeace.authorLast));
};
warAndPeace();

function before1900() {
  const before = books.filter((books) => books.publishDate < 1900);
  console.log(before.length + " books were written before 1900");
};
before1900();

function last100 () {
  const recent = books.filter((books) => books.publishDate >= 1923);
  if (recent.length >= 1) {
    console.log("Yes there was at least one book.")
  }
  else {
    console.log("No there was not at least one book.")
  }
}
last100();

function everyLast100 () {
  const everyRecent = books.filter((books) => books.publishDate <= 1923);
  if (everyRecent.length >= 1) {
    console.log("No every book is not.")
  }
  else {
    console.log("Yes every book is.")
  }
}
everyLast100();

function booksHistorical() {
  const historical =books.filter((books) => books.genre = "historical");
  historical.forEach((historical) => console.log(historical.name, historical.genre));
};
booksHistorical();