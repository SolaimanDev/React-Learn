import React, {useState} from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function NewTodo(props) {
    const [item ,setItem] = useState("");

    const addItemHandler=(e)=>{
        e.preventDefault();
        console.log(e.target.item.value);
        props.onTodo(item);
    }


  return (
    <div>
      <h3> Add New Todo</h3>
      <form action="" onSubmit={addItemHandler}>
      <div className="flex flex-column gap-2">
    <label htmlFor="item">Username</label>
    <InputText id="item" name="item" value={item}  aria-describedby="username-help" onChange={(e)=>setItem(e.target.value)}/>
  
    </div>
    <div className="flex flex-column gap-2 pt-2">
     <Button label="Add" type="submit" />
  
    </div>
      </form>
    </div>
  )
}
