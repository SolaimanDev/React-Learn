import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import User from './User';
function Users(props) {
  console.log("props",props.users);
  
  return (
    <div>
       {props.users.map((user)=>{
        const userNew={user,id:uuidv4()}
       return <User {...userNew} key={userNew.id}/>
      })}
    </div>
  )
}

export default Users
