import {createContext,useState } from "react";
 
export const BooksContext = createContext({});

const BooksProvider=({children})=>{
    const booksData = [
        { id: 1, name: "Item One" },
        { id: 2, name: "Item Two" },
        { id: 3, name: "Item Three" },
      ];
    
      const [books, setBooks] = useState(booksData);

      return <BooksContext.Provider value={{ books, setBooks }}>
        {children}
      </BooksContext.Provider>
}
export default BooksProvider