import React, { useReducer, useState } from 'react'

const Modal=({modalText})=>{
return  <p>{modalText}</p>
}

function UseReducer() {
  const booksData=[
    { id:1, name: 'Book 1'},
    { id:2, name: 'Book 2'},
    { id:3, name: 'Book 3'},
    { id:4, name: 'Book 4'},
  ];
  const [bookName, setBookName] = useState('');
  const reducer=(state,action)=>{
    switch(action.type){
      case 'ADD':
        return {...state, books: [...state.books, action.payload]};
      case 'REMOVE':
        return {...state, books: state.books.filter((book)=>book.id !== action.payload)};
      default:
        return state;
    }
  }
  // const [books, setBooks] = useState(booksData);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalText,setModalText]=useState('');
  const [bookState,dispatch]=useReducer(reducer,{
    books: booksData,
    isModalOpen: false,
    modalText: ''
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newBook={
      id: new Date().getTime().toString(),
      name: bookName
    };
   dispatch({type: 'ADD', payload: newBook});

    setBookName('');
    //   setBooks((prevState)=>{
    //   return [...prevState, newBook];
    // })
    // setIsModalOpen(true);
    // setModalText('Book added successfully');
     
  }
  return (
    <div>
       <h3>UseReducer</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={bookName} id="" onChange={(e)=>setBookName(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <div>
          {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        {bookState.books.map((book)=>{
          return <ul key={book.id}>{book.name} <button onClick={()=>dispatch({type: 'REMOVE', payload: book.id})}>Remove</button></ul>
        })}
    </div>

    </div>
  )
}

export default UseReducer
