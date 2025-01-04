
import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';

export default function Home() {
    const dummyTodos=[];
    const [todos,setTodos]= useState(dummyTodos);
    const handleTodo=(newTodo)=>{
       setTodos([...todos,newTodo]);
    }
  return (
    <div>
      <h1>HOME</h1>

<Todos todos={todos}/>
<NewTodo onTodo={handleTodo}/>
    </div>
  )
}
