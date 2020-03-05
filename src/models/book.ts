import mongoose from 'mongoose';

const uri: string = 'mongodb://0.0.0.0:27017/local';

mongoose.connect(
  uri,
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Successfully Connected to MongoDB');
    }
  },
);

export const BookSchema = new mongoose.Schema({
         title: {type: String, required: true},
         author: {type: String, required: true},
       });

const Book = mongoose.model('Book', BookSchema);
export default Book;