import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/Multer/getAllUsers'); // Replace with your actual endpoint
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Name:</strong> {user.name}
              <br />
              <img src={`http://localhost:3001/images/${user.photo}`} alt="User" style={{ width: '100px', height: '100px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

