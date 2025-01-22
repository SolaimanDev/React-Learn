import React, { useState, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useBooksContext } from "../../HOOKS/BooksContext";
function AddItem({ dispatch }) {
  const { setBooks } = useBooksContext();
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookName.trim() === "") {
      dispatch({ type: "SET_MESSAGE", payload: "Please enter an item name." });
      return;
    }

    const newBook = { id: new Date().getTime().toString(), name: bookName };
    setBooks((prevState) => [...prevState, newBook]);
    dispatch({ type: "SET_MESSAGE", payload: "Item is added!" });
    setBookName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Item"
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <Button variant="outline-primary" type="submit">
          ADD
        </Button>
      </InputGroup>
    </form>
  );
}

export default AddItem;