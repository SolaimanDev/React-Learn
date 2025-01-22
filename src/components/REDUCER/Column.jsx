import React from 'react';
import Button from 'react-bootstrap/Button';
import { useBooksContext } from '../../HOOKS/BooksContext';

function Column({ book, dispatch }) {
  const { books, setBooks } = useBooksContext();

  const handleDelete = (id) => {
    const filteredBooks = books?.filter((book) => book.id !== id) || [];
    setBooks(filteredBooks);

    // Dispatch an alert message for deletion
    dispatch({
      type: 'SET_MESSAGE',
      payload: `Book with ID: ${id} has been deleted.`,
    });
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.name}</td>
      <td>
        <Button
          variant="outline-danger"
          onClick={() => handleDelete(book.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Column;
