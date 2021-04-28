import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friendDetail, setFriendDetail] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
        .then(data=>setFriendDetail(data))
    }, []);
    return (
        <div className="friend-details">
            <h3>Name:{friendDetail.name}</h3>
            <p>Username:{friendDetail.username}</p>
            <p>Username:{friendDetail.phone}</p>
            <p>Email:{friendDetail.email}</p>
            <p>Website:{friendDetail.website}</p>
            <Link to="/home">
                <button>Goto All friends</button>
            </Link>
        </div>
    );
};

export default FriendDetail;