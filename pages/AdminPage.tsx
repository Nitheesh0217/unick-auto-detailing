import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

interface AdminPageProps {
  onLogout?: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onLogout }) => {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <AdminDashboard onLogout={onLogout} />
    </main>
  );
};

export default AdminPage;
