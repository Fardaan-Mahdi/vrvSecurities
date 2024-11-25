// src/components/Dashboard/DashboardLayout.jsx
import { Link } from "react-router-dom";

const DashboardLayout = ({ title, children }) => (
  <div className="min-h-screen bg-gray-100">
    <div className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl">{title}</h1>
    </div>
    <div className="p-6">{children}</div>
    <footer className="text-center p-4 bg-blue-600 text-white">
      RBAC System © 2024
    </footer>
  </div>
);

export default DashboardLayout;
