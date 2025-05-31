import { Skill } from '@/types'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaFacebook, FaReact, FaLaravel } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'

const FirstSection = ({ skills }: { skills: Skill[] }) => {
  // ანიმაციის ვარიანტები
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  }

  const hoverEffect = {
    y: -4,
    scale: 1.03,
    transition: { duration: 0.3 }
  }

  return (
    <section className="flex h-full flex-col gap-6 rounded-xl p-4">
      <motion.div 
        className="w-full flex flex-col lg:flex-row justify-center items-center my-8 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* მარცხენა კოლონა - გამოძახება და სოციალური ბმულები */}
        <motion.div 
          className="flex flex-col justify-start items-end gap-6 lg:gap-8"
          variants={container}
        >
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            className="w-full max-w-[320px] h-[120px] rounded-2xl bg-white dark:bg-gray-800 shadow-md p-4 flex items-center gap-4"
          >
            <span className="text-4xl">👋</span>
            <div className="flex flex-col justify-center">
              <p className="text-base text-gray-500 dark:text-gray-400">Hello, I am</p>
              <h1 className="font-bold text-3xl sm:text-4xl text-gray-800 dark:text-white">Tornike</h1>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={hoverEffect}
            className="w-full max-w-[250px] h-[80px] rounded-2xl bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col justify-center"
          >
            <p className="text-base text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
            <p className="text-base text-gray-400 dark:text-gray-500">Freelancer</p>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-4"
            variants={item}
          >
            {[
              { icon: <FaInstagram />, href: 'https://www.instagram.com/ozbeta_25/' },
              { icon: <FaGithub />, href: 'https://github.com/Tornike-max' },
              { icon: <FaFacebook />, href: 'https://www.facebook.com/tornike.ozbetelashvili/' }
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ ...hoverEffect, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-3 text-center text-xl'
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ცენტრალური სურათი */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="order-first lg:order-none"
        >
          <img 
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] object-cover rounded-2xl shadow-xl"
            src='/avatar/avatar.webp'
            alt="Tornike Ozbetelashvili"
          />
        </motion.div>

        {/* მარჯვენა კოლონა - უნარები */}
        <motion.div 
          className="flex flex-col gap-4 sm:gap-6 w-full max-w-[200px]"
          variants={container}
        >
          {skills.map((skill, i) => {
            const icons = {
              'React': <FaReact className="text-2xl text-blue-500" />,
              'Laravel': <FaLaravel className="text-2xl text-red-600" />,
              'Tailwind CSS': <RiTailwindCssFill className="text-2xl text-cyan-500" />,
              'MySQL': <SiMysql className="text-2xl text-blue-700" />
            }
            
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={hoverEffect}
                className={`
                  w-full 
                  ${skill.name === 'React' || skill.name === 'Tailwind CSS' ? 'ml-4' : ''}
                  flex items-center gap-3 
                  bg-white dark:bg-gray-800 rounded-2xl p-3 
                  border border-gray-200 dark:border-gray-700
                  cursor-default
                  shadow-sm
                `}
              >
                {icons[skill.name as keyof typeof icons]}
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      
      {/* ციტატა */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.01, y: -2 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-6 text-center"
      >
        <h2 className="text-xl font-semibold mb-2">Step by step, line by line. 👨‍💻</h2>
        <p className="text-sm opacity-90">"Discipline is the bridge between goals and accomplishment."</p>
      </motion.div>
    </section>
  )
}

export default FirstSection