// src/Pages/Admin/Dashboard.tsx
import AppHeaderLayout from "@/layouts/app/app-header-layout";
import AppSidebarLayout from "@/layouts/app/app-sidebar-layout";
import React from "react";

const stats = [
  { label: "Projects", value: 12 },
  { label: "Skills", value: 20 },
  { label: "Technologies", value: 10 },
  { label: "Testimonials", value: 8 },
];

const AdminDashboard = () => {
  return (
    <AppSidebarLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Admin Panel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center"
          >
            <div className="text-4xl font-bold text-blue-600">{item.value}</div>
            <div className="text-gray-700 mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="/admin/projects"
            className="bg-blue-500 text-white rounded-xl p-4 hover:bg-blue-600 transition"
          >
            ➕ Manage Projects
          </a>
          <a
            href="/admin/skills"
            className="bg-green-500 text-white rounded-xl p-4 hover:bg-green-600 transition"
          >
            🛠️ Manage Skills
          </a>
          <a
            href="/admin/testimonials"
            className="bg-purple-500 text-white rounded-xl p-4 hover:bg-purple-600 transition"
          >
            💬 Manage Testimonials
          </a>
        </div>
      </div>
    </AppSidebarLayout>
  );
};

export default AdminDashboard;
