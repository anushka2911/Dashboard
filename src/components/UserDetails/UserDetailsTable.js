import React, { useState } from 'react';
import data from '../../services/api';
import '../../styles/style.css';

function UserTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  const filteredData = data.filter((user) =>
    Object.values(user).some(
      (value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  function getUserReport(id) {
    console.log("User ID: " + id);
    setSelectedUserId(id);
  }

  const selectedUserData = selectedUserId ? data.find(user => user.id === selectedUserId) : null;

  return (
    <>
      <h1 className='user-details-heading'>User Details</h1>
      <div className="container mx-auto my-8">
        <div className="mb-4 search">
          <label htmlFor="search" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-1 search-bar"
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
              <tr
                key={user.id}
                className="border"
                id={`user` + user.id}
                onClick={() => getUserReport(user.id)}
              >
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

      {selectedUserId && selectedUserData && (
        <div className='user-detail-report bg-white p-4 rounded-md border border-gray-300'>
  <div className='user-detail-report-profile-photo mb-4'>
    <img
      src={selectedUserData.profile_photo}
      alt='profile-photo'
      className='rounded-full w-16 h-16 object-cover'
    />
    <h2 className='text-xl font-semibold'>{selectedUserData.username}</h2>
    <h3 className='text-gray-500'>{selectedUserData.occupation}</h3>
  </div>

  <div className='user-detail-report-profile-details'>
    <span
      className='close-report cursor-pointer text-gray-500 text-lg'
      onClick={() => setSelectedUserId(null)}
    >
      X
    </span>
    <h2 className='text-2xl font-semibold'>{selectedUserData.name}</h2>
    <p className='report-user-email'>
      <span className='user-detail-field font-semibold'>Email:</span>
      {selectedUserData.email}
    </p>
    <p className='report-user-phone'>
      <span className='user-detail-field font-semibold'>Phone:</span>
      {selectedUserData.phone}
    </p>
    <p className='report-user-address'>
      <span className='user-detail-field font-semibold'>Address:</span>
      {selectedUserData.address}
    </p>
  </div>
</div>

      )}
    </>
  );
}

export default UserTable;
