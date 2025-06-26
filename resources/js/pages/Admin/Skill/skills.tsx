import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import CreateSkill from '@/components/create-skill';
import toast from 'react-hot-toast';

export interface Skill {
  id: number;
  name: string;
  slug: string;
  icon: string;
  type_id:number;
  created_at: string;
  type: Type;
}


export interface Type {
    id: number;
    type: string;
    description: string;
    created_at: string;
    updated_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Skills',
    href: '/admin-secret/skills',
  },
];

const AdminSkills = ({ skills,types }: { skills: Skill[],types:Type[] }) => {
 const {delete:destroy,processing} = useForm();

 const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      destroy(route("admin.secret.skills.delete",id),{
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Skill deleted successfully!');
        },
        onError: () => {
          toast.error('Failed to delete skill');
        },
      })
    }
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Panel" />
    <section className="p-8 max-w-7xl w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Manage Your Skills
        </span>
      </h1>

      <CreateSkill types={types}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
            <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-4 shadow hover:shadow-md transition text-center"
            >
            <img
                src={`${!skill?.icon?.includes("skillIcons") ? `/storage/skillIcons/${skill.icon}.webp` : `/storage/${skill.icon}`}`}
                alt={skill.name}
                className="w-16 h-16 object-contain mx-auto mb-3"
            />
            <h3 className="text-xl font-bold text-indigo-600">{skill.name}</h3>
            <p className="text-gray-600 text-sm">Slug: {skill.slug}</p>
            <p className="text-gray-500 text-sm">Type ID: {skill.type.type}</p>

            <div className="mt-4 flex justify-center gap-2">
                <Link href={`/admin-secret/skills-edit/${skill.id}`} className="px-4 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition text-white text-sm">
                Edit
                </Link>
                <button disabled={processing} onClick={()=>handleDelete(skill.id)} className="px-4 py-1 bg-red-500 rounded hover:bg-red-600 transition text-white text-sm">
                  {processing ? 'Deleting...' : "Delete"}
                </button>
            </div>
            </motion.div>
        ))}
        </div>

    </section>
    </AppLayout>
  );
};

export default AdminSkills;
