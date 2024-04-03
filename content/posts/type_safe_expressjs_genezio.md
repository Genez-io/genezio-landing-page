---
title: Type safe communication between multiple clients using ExpressJS and genezio
date: 2024-04-02
tags:
  - Tutorials
author: Bogdan Vlad 
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad
/thumbnail: /images/web_scrape.webp
preview: Maintaining an API across multiple clients can be a tedious task. Keeping the documentation in sync with the code, making sure that the data types passed in requests and response are the same in backend and frontend and handling errors in a consistent way are problems that any backend and frontend software engineer encountered at least once. What I want to present to you in this article, is a a zero config way using the genezio tool that can make things easier.
# meta data start
description: "Maintaining an API across multiple clients can be a tedious task. Keeping the documentation in sync with the code, making sure that the data types passed in requests and response are the same in backend and frontend and handling errors in a consistent way are problems that any backend and frontend software engineer encountered at least once. What I want to present to you in this article, is a a zero config way using the genezio tool that can make things easier."
meta_og_url: "https://genez.io/blog/web_scraping_app"
meta_og_image: "https://genez.io/images/web_scrape.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/express-genezio/
---

Maintaining an API across multiple clients can be a tedious task. The task of synchronizing documentation with the underlying code, maintaining consistent data types in requests and responses across the entire system, and managing errors consistently are common hurdles encountered by both backend and frontend software engineers. I want to present to you in this article, a very simple yet effective way to answer these questions.
We are going to use genezio to make the communication between server and clients easier to use, easier to maintain and less error prone.

## The Classic Way

To better illustrate the problem and its solution, I propose anchoring the discussion in a very simple example. Take a look at [this](https://github.com/Genez-io/adapter_examples/tree/express) repository. It is a mono repo project that contains a server written with ExpressJS and two clients: one written in React and another one in Flutter. The application keeps track of a list of books in memory.

Let's first explore a bit the backend. This is a very simple Express.JS applications that has a way to create books and retrieve a list of books from an in-memory store.

```ts
// Define a type for the book structure
type Book = {
  id: number;
  title: string;
  author: string;
}

// In-memory store for books
let books: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  // Add more book objects as needed
];

// GET route to fetch all books
app.get('/books', (req: Request, res: Response) => {
  res.json(books);
});

// POST route to create a new book
app.post('/books', (req: Request, res: Response) => {
  // Extracting book details from request body
  const { title, author } = req.body;

  if (!title || !author) {
	  res.status(400).json({ "error": "Missing parameter" })
	  return
  }

  // Creating a new book object
  const newBook: Book = {
    id: books.length + 1, // Simple ID generation strategy
    title,
    author,
  };

  // Adding the new book to our in-memory store
  books.push(newBook);

  // Responding with the newly created book
  res.status(201).json(newBook);
});
```

To call the two endpoints from a typescript React application, we would have to do something like this:

```dart
// Define the interface for a book
type Book = {
  id?: number;
  title: string;
  author: string;
}

// Function to fetch all books
const fetchBooks = async () => {
  try {
    const response = await axios.get<Book[]>('http://localhost:8881/books');
    console.log(response.data); // Logs the array of books
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Function to create a new book
const createBook = async (newBook: Book) => {
  try {
    const response = await axios.post<Book>('http://localhost:8881/books', newBook);
    console.log(response.data); // Logs the newly created book
  } catch (error) {
    console.error('Error creating book:', error);
  }
};
```

In Flutter, we have something similar: we define a Book class, we handle the serialisation, and we have two methods `fetchBooks` and `createBook`. You can explore the Flutter code [here](https://github.com/Genez-io/adapter_examples/blob/express/client-flutter/lib/main.dart).

Now, let's see what the problems we might get into:

1. How do we keep in sync the API in all of our clients? If we add a new request on the backend side, we have to implement the call on all clients. Even worse, if a new property is added to the  `Book` request model, this change has to be propagated and communicated to all clients. This can become tedious especially with larger teams.
2. How do we document the code? Of course, there are solutions: we could create a Swagger file or a Postman collection, but this adds one more item on the list of tasks that your have to do.
3. How do we perform error handling? This is tightly coupled to the previous point meaning that we have to document how we return errors (e.g: which ones are 400, which ones are 500 and what body they return).

## The Genezio Way

Let’s see how we can make our lives a little bit easier. Genezio is a platform that simplifies the development and deployment of full-stack applications.
However, you can also integrate the Genezio method of developing APIs into your existing Express.JS app.
What Genezio does for you is automatically generate type-safe client code—we will refer to this as an SDK from now on—that enables remote invocation of backend methods.
The generated code is fully documented and typed exactly as specified on the backend. You never have to worry about the clients being out of sync with the server.

To convert the book app to user genezio we have to do a couple of steps. First of all, we have to install genezio CLI:

```bash
npm install genezio -g
```

Next, we rewrite the 'books' business logic like this:

```ts
type Book = {
    id: number;
    title: string;
    author: string;
}

// genezio: deploy
export class BookService {
	books: Book[] = []

	/**
	* Retrieves all books from the store.
	* 
	* @returns {Promise<Book[]>} A promise that resolves with an array of Book objects.
	*/
	async getAllBooks(): Promise<Book[]> {
		return this.books;
	}
	
	/**
	* Creates a new book and adds it to the store. 
	* @param {string} title - The title of the book. 
	* @param {string} author - The author of the book.
	* @returns {Promise<Book>} A promise that resolves with the newly created Book object.
	*/
	async createBook(title: string, author: string): Promise<Book> {
	    if (!title || !author) {
            throw new Error('Title and author are required.');
        }

		const newBook: Book = {
		   id: this.books.length + 1, // Simple ID generation strategy
		   title,
		   author,
		};

		// Adding the new book to our in-memory store
		this.books.push(newBook);

		return newBook;
	}
}

```

We have to include this class in express using an adapter to make it available and waiting for requests on port "8881". Install the `@genezio/adapters` package in the server folder.
This adapter will take genezio classes and it will expose them publicly with express.

```bash
npm install @genezio/adapters
```

```ts
import  express from 'express';
import * as genezioAdapters from "@genezio/adapters";
import { BookService } from './bookService.ts';
import cors from 'cors';
const app = express();
const port = 8881;

app.use(cors())
app.use(express.json());
app.post('/genezio', genezioAdapters.createExpressRouter([BookService]));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

Excellent! But how do we call `BookService.getAllBooks` from our clients? This is where the genezio CLI comes into the picture. We will illustrate how to convert the TypeScript client to genezio. The process for Flutter is very similar. Run the following command in the `server/` folder to generate the SDK, which you can then use to invoke the backend methods:

```bash
genezio sdk --tarball --source local --packageName genezio-sdk  --output ../client-ts/sdk --language ts --url http://localhost:8881/genezio
```

If you're curious, take a look at what was generated. It’s a tarball NPM package, which means it can be installed locally just like any other NPM package. It could also be published to a public registry such as the NPM Registry, or to a private registry. You can also export the SDK as raw files by omitting the --tarball option. This allows you to use npm link if you wish, or to add a README, or modify the package.json before publishing it.

For the sake of this tutorial, we are going to install the SDK locally. In `./client-ts` folder, we can run `npm install ./sdk/genezio-sdk.tar.gz` which will install the SDK in your `node_modules` folder. 

```bash
npm install ./sdk/genezio-sdk.tar.gz
```

We are now ready to change the communication between React and the server to use genezio. Go to `src/views.tsx` and import the `BookService` and the `Book` model.

```ts
import { BookService, Book } from "genezio-sdk"
```

You can remove the `requests.ts` file from the project and you can uninstall `axios`. It feels great when you remove code, doesn't it? Now we just have to use `BookService.getAllBooks` and `BookService.createBook` from the genezio SDK to call our backend methods.

```ts
  // Fetch all books when the component mounts
  useEffect(() => {
    const loadBooks = async () => {
      const allBooks = await BookService.getAllBooks();
      setBooks(allBooks);
    };

    loadBooks();
  }, []);

  const handleCreateBook = async (e: any) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const newBook = await BookService.createBook(title, author);
    setBooks([...books, newBook]); // Add the new book to the local state

    // Reset the form fields
    setTitle('');
    setAuthor('');
  };
```

What is great now is that we can leverage the IDE capabilities. Hover over the `BookService.getAllBooks()` method and you can see: the documentation, the parameter types and the return type of the method. Pass a wrong parameter to `BookService.createBook()` and your IDE will shout that there is something wrong.

![Alt text](/posts/demo-express-genezio.gif)

Let's see one more thing: how do we handle errors. Easy! Just like you would normally do with Promises, you can either call `.catch` or wrap the `await` call around a `try catch`.

```ts
try {
    const newBook = await BookService.createBook(title, author);
    setBooks([...books, newBook]); // Add the new book to the local state

    // Reset the form fields
    setTitle('');
    setAuthor('');
} catch (error) {
    console.error('Failed to create book:', error);
    alert('Failed to create book');
}
```

## Conclusion

We now can write the backend code once and generate the code responsible with making the calls directly from it. We have a documented, typed safe API that is easy to use and keep in sync.

If you want the full code version to play around with it, check out [the repository](https://github.com/Genez-io/adapter_examples). It contains two branches: "express" and "genezio" and you can switch between them to compare the two approaches. I hope this was useful and if you have any feedback you can reach out at bogdan@genez.io.



