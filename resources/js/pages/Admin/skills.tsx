import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';

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

  const { post, processing, setData, errors, data, reset } = useForm<{
        name: string
        slug: string
        icon: File | null
        type_id: number
    }>({
        name: '',
        slug: '',
        icon: null,
        type_id: types.length > 0 ? types[0].id : 0,
    })

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data)
    post(route("admin.secret.skills.store"));
    reset();
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Panel" />
    <section className="p-8 max-w-7xl w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Manage Your Skills
        </span>
      </h1>

      {/* Add Skill Form */}
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow mb-12"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Skill Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="w-full px-4 py-2 rounded text-white border-2 border-white"
            />
            {errors.name && <span className='text-red-500 text-sn text-start'>{errors.name}</span>}
          </div>
          <div>
            <label className="block mb-1">Slug</label>
            <input
              type="text"
              value={data.slug}
              onChange={(e) => setData('slug', e.target.value)}
              className="w-full px-4 py-2 rounded text-white border-2 border-white"
            />
            {errors.slug && <span className='text-red-500 text-sn text-start'>{errors.slug}</span>}
          </div> 
          <div>
            <label className="block mb-1">Type ID</label>
            <select value={data.type_id} onChange={(e) => setData('type_id', Number(e.target.value))}
                className="w-full px-4 py-2 rounded text-white border-2 border-white">
                {types.map(item=>(
                    <option key={item.id} value={item.id} className='text-black'>{item.type}</option>
                ))}
            </select>
            {errors.type_id && <span className='text-red-500 text-sn text-start'>{errors.type_id}</span>}
          </div>
          <div>
            <label className="block mb-1">Icon (e.g. 💻)</label>
            <input
              type="file"
              onChange={(e) => setData('icon', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
              className="w-full px-4 py-2 rounded text-white border-2 border-white"
            />
            {errors.icon && <span className='text-red-500 text-sn text-start'>{errors.icon}</span>}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-white text-indigo-700 font-semibold py-2 rounded-xl hover:bg-gray-100 transition"
          disabled={processing}
        >
          Add Skill
        </button>
      </motion.form>

      {/* Skill List */}
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
                src={`/skillIcons/${skill.icon}.webp`}
                alt={skill.name}
                className="w-16 h-16 object-contain mx-auto mb-3"
            />
            <h3 className="text-xl font-bold text-indigo-600">{skill.name}</h3>
            <p className="text-gray-600 text-sm">Slug: {skill.slug}</p>
            <p className="text-gray-500 text-sm">Type ID: {skill.type.type}</p>

            <div className="mt-4 flex justify-center gap-2">
                <button className="px-4 py-1 bg-yellow-400 rounded hover:bg-yellow-500 transition text-white text-sm">
                Edit
                </button>
                <button className="px-4 py-1 bg-red-500 rounded hover:bg-red-600 transition text-white text-sm">
                Delete
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
