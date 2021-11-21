import React from 'react';
import { Link } from 'react-router-dom';

const UserInformation = ({location}) => {
    // console.log(location.state.name)
    return (
        <div>
            <div>        
                <p>name: {location.state.name}</p>
                <p>email: {location.state.email}</p>
            </div>
            <Link to="/contact-list">contact list</Link>
        </div>

    );
};

export default UserInformation;