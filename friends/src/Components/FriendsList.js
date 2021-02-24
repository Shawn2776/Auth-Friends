import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

function FriendsList() {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    getFriendsList();
  }, [])

  const getFriendsList = () => {
    // const token = JSON.parse(localStorage.getItem("token"));
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        setFriends(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <div className="Friends">
    {friends.map((friend) => {
      return (
        
          <Friend friend={friend} key={friend.id}/>
        
      );
    })}
  </div>
  )
}
export default FriendsList