// Dashboard.js
import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTable from '../components/UserDetails/UserDetailsTable';
import AccountCreationTab from '../components/AccountCreation/Form';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center sticky top-0 bg-white z-10">
          <div className="mr-4">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          </div>
          <div className="flex">
            <div className="mr-4">
              <Link
                to="/userDetails"
                className={`${
                  activeTab === 'userDetails' ? 'bg-blue-500' : 'bg-gray-300'
                } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                onClick={() => handleTabChange('userDetails')}
              >
                User Details
              </Link>
            </div>
            <div>
              <Link
                to="/accountCreation"
                className={`${
                  activeTab === 'accountCreation' ? 'bg-blue-500' : 'bg-gray-300'
                } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                onClick={() => handleTabChange('accountCreation')}
              >
                Account Creation
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <Routes>
            <Route path="/userDetails" element={<UserTable />} />
            <Route path="/accountCreation" element={<AccountCreationTab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
