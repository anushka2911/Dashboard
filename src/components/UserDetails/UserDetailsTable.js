import React, { useState } from 'react';
import data from '../../services/api';

function UserTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((user) =>
    Object.values(user).some(
      (value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto my-8">
      <div className="mb-4">
        <label htmlFor="search" className="mr-2">
          Search:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      <table className="min-w-full border border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">UserName</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="border">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
