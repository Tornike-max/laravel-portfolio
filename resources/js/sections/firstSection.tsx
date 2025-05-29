import { Skill } from '@/types'
import { motion } from 'framer-motion'
import { Link } from 'lucide-react'
import React from 'react'
import { FaInstagram, FaGithub, FaFacebook, FaReact, FaLaravel } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'

const FirstSection = ({skills}:{skills:Skill[]}) => {
  return (
    <section className="flex h-full flex-col gap-4 rounded-xl p-4">
                <div className='w-full flex justify-center items-center my-8'>
                    <div className='w-full flex flex-col justify-start items-end gap-10 '>
                        <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -4, }} className="w-[320px] h-[120px] rounded-2xl bg-white shadow-md p-4 flex items-center gap-4">
                            <span className="text-4xl">👋</span>
                            <div className="flex flex-col justify-center">
                                <p className="text-base text-gray-500">Hello, I am</p>
                                <h1 className="font-bold text-4xl text-gray-800">Tornike</h1>
                            </div>
                        </motion.div>

                        <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -4, }} className="w-[250px] h-[80px] rounded-2xl bg-white shadow-md p-4 flex flex-col justify-center">
                            <p className="text-base text-gray-600 font-medium">Full Stack Developer</p>
                            <p className="text-base text-gray-400">Freelancer</p>
                        </motion.div>

                        <div className="flex items-center justify-center gap-4">
                            <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -4, }} className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-2 text-center text-2xl'>
                                <Link href='https://www.instagram.com/ozbeta_25/'>
                                    <FaInstagram />
                                </Link>
                            </motion.div>
                            <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -4, }} className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-2 text-center text-2xl'>
                                <Link href='https://github.com/Tornike-max'>
                                    <FaGithub />
                                </Link>
                            </motion.div>
                            <motion.div                            
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -4, }} className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-2 text-center text-2xl'>
                                <Link href='https://www.facebook.com/tornike.ozbetelashvili/'>
                                    <FaFacebook />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        whileHover={{ scale: 1.01, y: -4,  }}
                        className='max-w-[500px] object-cover' src='/avatar/avatar.webp'
                    />

                    <div className='w-full flex flex-col gap-8'>
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                title={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05, y: -4, }}
                                className={`
                                    max-w-[170px] 
                                    ${skill.name === 'React' || skill.name === 'Tailwind CSS' ? 'ml-4' : ''}
                                    flex items-center gap-3 
                                    bg-white rounded-2xl p-3 
                                    border border-gray-200
                                    cursor-default
                                `}
                            >
                                {skill.name === 'React' && <FaReact className="text-2xl text-blue-500" />}
                                {skill.name === 'Laravel' && <FaLaravel className="text-2xl text-red-600" />}
                                {skill.name === 'Tailwind CSS' && <RiTailwindCssFill className="text-2xl text-cyan-500" />}
                                {skill.name === 'MySQL' && <SiMysql className="text-2xl text-blue-700" />}
                                <span className="text-gray-700 font-semibold">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                
                </div>
                
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-6 text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">Step by step, line by line. 👨‍💻</h2>
                        <p className="text-sm">"Discipline is the bridge between goals and accomplishment."</p>
                    </motion.div>            
            </section>
  )
}

export default FirstSection