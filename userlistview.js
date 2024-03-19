// UserListView.js
import React, { useState } from 'react';

function UserListView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Mocked user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h1>User List</h1>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by employee name" />
      <div>
        {filteredUsers.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserListView;