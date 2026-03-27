import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ManufacturerDashboard from '../pages/Dashboard/ManufacturerDashboard/ManufacturerDashboard';
import CustomerDashboard from '../pages/Dashboard/CustomerDashboard/CustomerDashboard';
import VendorDashboard from '../pages/Dashboard/VendorDashboard/VendorDashboard';
import StaffDashboard from '../pages/Dashboard/StaffDashboard/StaffDashboard';
import SovereignLedgerDashboard from '../pages/Dashboard/SovereignLedgerDashboard/SovereignLedgerDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard/manufacturer" element={<ManufacturerDashboard />} />
      <Route path="/dashboard/customer" element={<CustomerDashboard />} />
      <Route path="/dashboard/vendor" element={<VendorDashboard />} />
      <Route path="/dashboard/staff" element={<StaffDashboard />} />
      <Route path="/dashboard/sovereign-ledger" element={<SovereignLedgerDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
