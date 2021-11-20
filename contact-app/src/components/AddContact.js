import React, { useState } from 'react';

const AddContact = ({addContactHandler}) => {
    const [ contact, setContact] = useState({name:"", email:""})

    const inputHandler = (event) => {
        setContact({...contact, [event.target.name]: event.target.value})
    }

    return (
        <>
        <form onSubmit={addContactHandler}>
           <div>
                <label>name:</label>
                <input type="text" name="name" value={contact.name} onChange={inputHandler} />
                <label>email:</label>
                <input type="text" name="email" value={contact.email} onChange={inputHandler} />
           </div>
            <button type="submit">submit</button>   
        </form>
        </>
    );
};

export default AddContact;