import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
function User(props) {
    console.log("props",props.user);
   const user=props.user;

    const footer = (
        <>
            <Button  severity="secondary" icon="pi pi-trash" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={user.name}  footer={footer}  className="md:w-25rem">
                <p><b>Username</b> : {user.username}</p>
                <p><b>Email</b> : {user.email}</p>
                <hr />
                <p><b>Street</b> : {user.address.street}</p>
                <p><b>Suite</b> : {user.address.suite}</p>
                <p><b>City</b> : {user.address.city}</p>
                <p><b>Zipcode</b> : {user.address.zipcode}</p>
            </Card>
        </div>
    )
}

export default User
