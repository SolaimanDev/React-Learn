
import Table from 'react-bootstrap/Table';
import Column from "./Column";
import { useBooksContext } from '../../HOOKS/BooksContext';

function Tables() {
  
  const {books}=useBooksContext();
   
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#ID</th>
        <th> Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book,index)=>{
          return <Column key={index} book={book}  />
      })}
    </tbody>
  </Table>
  )
}

export default Tables
