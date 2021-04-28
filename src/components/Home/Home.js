import React from 'react';
import Friends from '../Friends/Friends';
import { useEffect, useState } from 'react';

const Home = () => {

  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
    .then(data=>setFriends(data))
  },[]);

    return (
        <div>
            <h1>Total Friends {friends.length}</h1>
                {
                    friends.map(friend => <Friends friend={friend}></Friends>)
                }
        </div>
    );
};

export default Home;