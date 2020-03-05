// import express from 'express';

// const app: express.Application = express();

// const add = (a: number, b: number): number => a + b; 

// app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log(add(5,'5'));
//   res.send('Hello');
// });

// app.listen(5000, ()=> console.log("Server running"));


import express from 'express';
import * as bookController from './controllers/book';
import bodyParser from 'body-parser';

const app = express();
app.set("PORT", process.env.PORT || 5000);

app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.send('Hello Lucian!');
});

app.get('/api/books', bookController.allBooks);
app.get('/api/books/:id', bookController.getBook);
app.post('/api/books', bookController.addBook);
app.put('/api/books/:id', bookController.updateBook);
app.delete('/api/books/:id', bookController.deleteBook);

app.listen( app.get("PORT"), () => console.log(`Server running at port: ${app.get("PORT")}`) )
