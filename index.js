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
function authorsAndBooks () {
  books.forEach((books) => console.log(books.authorFirst, books.authorLast + " wrote", books.name + " in", books.publishDate));
};
authorsAndBooks();

 function oldestRecent () {
  const orderedDates = books.sort(function (book1, book2) {
    return book1.publishDate - book2.publishDate;
  });
  orderedDates.forEach(el => {
    console.log(el);
  })
}
oldestRecent();

 function alphabetical () {
  const alphabetically = books.sort(function (book1, book2) {
    const nameBook1 = book1.name.toUpperCase(); // ignore upper / lower case
    const nameBook2 = book2.name.toUpperCase();
    if (nameBook1 < nameBook2) {
      return -1;
    }
    if (nameBook1 > nameBook2) {
      return 1;
    }
    return 0;
  })
  alphabetically.forEach(el => {
    console.log(el);
  });
}
alphabetical(); 

function warAndPeace () {
  const warPeace = books.filter(
    (books) => books.name === "War and Peace"
  );
  warPeace.forEach((warPeace) => console.log(warPeace.authorFirst, warPeace.authorLast));
}
warAndPeace();

function historicalBooks () {
  const historical = books.filter(
    (books) => books.genre = "historical" // put one equal sign if there are multiple values in genre and u want to print books that include historical regardless whether they have other genres
  );
  historical.forEach((historical) => console.log(historical.name, historical.genre));
}
historicalBooks();

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//sort books alphabetically

//Find who wrote War and Peace

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?

//print a list of books that "includes" the genre historical

function before1900 () {
  const before = books.filter(
    (books) => books.publishDate <= 1900,
  );
  function compare1() {
    if (before.length >= 1) {
      console.log(before.length + " books were written before 1900.");
    }
    else {
      console.log("None");
    }
  }
  compare1();
}

function last100 () {
  const recent = books.filter(
    (books) => books.publishDate >= 1923,
  );
  function compare2() {
    if (recent.length >= 1) {
      console.log("Yes there was at least one book published within the last 100 years.");
    }
    if (recent.length == 0) {
      return("No books were published within the last 100 years.");
    }
  }
  compare2();
}
function everyLast100 () {
  const everyRecent = books.filter(
    (books) => books.publishDate <= 1923,
  );
  function compare3() {
    if (everyRecent.length >= 1) {
      console.log("No, every book was not published within the last 100 years.");
    }
    else {
      console.log("Yes, every book was published within the last 100 years.");
    }
  }
  compare3();
}
before1900();
last100();
everyLast100();