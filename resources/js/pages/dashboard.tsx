import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const icons = [
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Laravel',
        icon: <FaLaravel />
    },
    {
        name: 'Tailwind CSS',
        icon: <RiTailwindCssFill />
    },
    {
        name: 'MySQL',
        icon: <SiMysql />
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-col gap-4 rounded-xl p-4">
                <div className='w-full flex justify-center items-center my-8'>
                    <div className='w-full flex flex-col justify-start items-end gap-10 '>
                        <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} className="w-[320px] h-[120px] rounded-2xl bg-white shadow-md p-4 flex items-center gap-4">
                            <span className="text-4xl">👋</span>
                            <div className="flex flex-col justify-center">
                                <p className="text-base text-gray-500">Hello, I am</p>
                                <h1 className="font-bold text-4xl text-gray-800">Tornike</h1>
                            </div>
                        </motion.div>

                        <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }} className="w-[250px] h-[80px] rounded-2xl bg-white shadow-md p-4 flex flex-col justify-center">
                            <p className="text-base text-gray-600 font-medium">Full Stack Developer</p>
                            <p className="text-base text-gray-400">Freelancer</p>
                        </motion.div>

                    </div>
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.01, y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        className='max-w-[500px] object-cover' src='/avatar/avatar.webp'/>

                    <div className='w-full flex flex-col gap-8'>
                        {icons.map(({ name }) => (
                            <motion.div
                                key={name}
                                title={name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                className={`
                                    max-w-[170px] 
                                    ${name === 'Laravel' || name === 'Tailwind CSS' ? 'ml-4' : ''}
                                    flex items-center gap-3 
                                    bg-white rounded-2xl p-3 
                                    border border-gray-200
                                    cursor-default
                                `}
                            >
                                {name === 'React' && <FaReact className="text-2xl text-blue-500" />}
                                {name === 'Laravel' && <FaLaravel className="text-2xl text-red-600" />}
                                {name === 'Tailwind CSS' && <RiTailwindCssFill className="text-2xl text-cyan-500" />}
                                {name === 'MySQL' && <SiMysql className="text-2xl text-blue-700" />}
                                <span className="text-gray-700 font-semibold">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
