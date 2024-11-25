import DashboardLayout from "./DashboardLayout";

import { Link } from "react-router-dom";
const ManagerDashboard = () => (
  <DashboardLayout title="Manager Dashboard">
    <p>Welcome, Manager! Manage users and roles here.</p>
    <Link
      to="/"
      className="block bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
    >
      Go to Homepage
    </Link>
  </DashboardLayout>
);

export default ManagerDashboard;