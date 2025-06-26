import { Type } from '@/types'
import { useForm } from '@inertiajs/react'
import { motion } from 'framer-motion'
import React from 'react'

const CreateSkill = ({types}:{types:Type[]}) => {
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
    post(route("admin.secret.skills.store"));
    reset();
  };
  
  return (
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
  )
}

export default CreateSkill