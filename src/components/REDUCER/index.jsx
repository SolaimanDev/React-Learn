import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import AddItem from "./AddItem";

import Tables from "./Tables";
import BooksProvider from "../Context/UsersContext";

function ReducerExample() {

  const [message, setMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  return (
    <BooksProvider>
      <div className="body">
        <AddItem setMessage={setMessage} setIsAlert={setIsAlert} />
        {isAlert && (
          <Alert variant="primary" onClose={() => setIsAlert(false)} dismissible>
            {message}
          </Alert>
        )}
        <Tables />
      </div>
      </BooksProvider>
    
  );
}

export default ReducerExample;
