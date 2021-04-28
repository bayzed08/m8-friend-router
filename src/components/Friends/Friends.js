import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    const {name, email,id } = props.friend;
    //console.log(props);
    const history = useHistory();
    console.log(history);

    const handleFriendDetails = (id) => {
        history.push(`/friend/${id}`);
     }
    return (
        <div className='friend-style'>
            <h1>{name}</h1>
            <p>{email}</p>
            {/* link to go friendDetail component or page */}
            <Link to={`/friend/${id}`}>
                <button>show details of {id}</button>
            </Link>
            {/* lAnother way using eventHandler to go friend details components*/}
            <button onClick={() => handleFriendDetails(id)}> Click me </button>

        </div>
    );
};

export default Friends;