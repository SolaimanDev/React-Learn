import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
 
    
  return (
    <div>
      <h1>Todo List</h1>
      { props.todos.map((todo,index)=>(
        <Todo key={index} todo={todo}/>
      ))}
    </div>
  )
}
