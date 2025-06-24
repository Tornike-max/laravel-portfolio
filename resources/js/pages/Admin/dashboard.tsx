// resources/js/Pages/Admin/Dashboard.tsx

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from "@/types";
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
  },
];
interface StatsItem {
  label: string;
  value: number | string;
}

const AdminDashboard = ({stats}:{stats:StatsItem[]}) => {
  console.log(stats)
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Panel" />
      <section className="flex h-full flex-col gap-6 rounded-xl p-4">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Admin Panel</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((item: { label: string; value:string | number }) => (
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
            <Link
              href="/admin-secret/work"
              className="bg-blue-500 text-white rounded-xl p-4 hover:bg-blue-600 transition"
            >
              ➕ Manage Projects
            </Link>
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
      </section>
    </AppLayout>
  );
};

export default AdminDashboard;
