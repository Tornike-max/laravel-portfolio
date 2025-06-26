import UpdateSkill from '@/components/update-skill';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem, Skill } from '@/types';
import { Head } from '@inertiajs/react'
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Skills',
    href: '/admin-secret/skills-edit',
  },
];

const Edit = ({skill,types}:{skill:Skill,types:{type:string,id:number}[]}) => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Panel" />
    <section className="p-8 max-w-7xl w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Update {skill?.name}
        </span>
      </h1>

      <UpdateSkill skill={skill} types={types}/>
    </section>
</AppLayout>
  )
}

export default Edit