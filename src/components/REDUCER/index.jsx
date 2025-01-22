import React, { useReducer } from "react";
import Alert from "react-bootstrap/Alert";
import AddItem from "./AddItem";
import Tables from "./Tables";
import BooksProvider from "../Context/BooksContext";

function ReducerExample() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MESSAGE":
        return {
          ...state,
          message: action.payload,
          isAlert: true,
        };
      case "DISMISS_ALERT":
        return {
          ...state,
          message: "",
          isAlert: false,
        };
      default:
        return state;
    }
  };

  const [messageState, dispatch] = useReducer(reducer, {
    message: "",
    isAlert: false,
  });

  return (
    <BooksProvider>
      <div className="body">
        <AddItem dispatch={dispatch} />
        {messageState.isAlert && (
          <Alert
            variant="primary"
            onClose={() => dispatch({ type: "DISMISS_ALERT" })}
            dismissible
          >
            {messageState.message}
          </Alert>
        )}
        <Tables dispatch={dispatch} />
      </div>
    </BooksProvider>
  );
}

export default ReducerExample;
