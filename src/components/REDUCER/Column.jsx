
import Button from 'react-bootstrap/Button';

import { useBooksContext } from '../../HOOKS/BooksContext';

function Column({book}) {
  //  const {books,setBooks}= useContext(UsersContext);
  const {books,setBooks}=useBooksContext()

   const handleDelete = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
    
  };
  return (
    <>
      <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>
            
            <Button variant="outline-danger" onClick={() => handleDelete(book.id)}>Delete</Button>
            </td>
        </tr>
    </>
  )
}

export default Column
