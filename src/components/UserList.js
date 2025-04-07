import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserList = () => {
    const[user,setUser] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });

    },[])
    if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>User List</h1>
      <ul data-testid="user-list">
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`} data-testid={`user-link-${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList