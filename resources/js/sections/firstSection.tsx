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
      {/* მთავარი კონტენტი - დესკტოპის დიზაინი იგივე რჩება */}
      <motion.div 
        className="w-full flex flex-col lg:flex-row justify-center items-center my-4 lg:my-8 gap-6 lg:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* მარცხენა კოლონა - მხოლოდ დესკტოპზე ჩანს */}
        <motion.div 
          className="hidden lg:flex flex-col justify-start items-end gap-6 lg:gap-8"
          variants={container}
        >
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            className="w-[280px] lg:w-[320px] h-[100px] lg:h-[120px] rounded-2xl bg-white dark:bg-gray-800 shadow-md p-4 flex items-center gap-4"
          >
            <span className="text-3xl lg:text-4xl">👋</span>
            <div className="flex flex-col justify-center">
              <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">Hello, I am</p>
              <h1 className="font-bold text-2xl lg:text-3xl text-gray-800 dark:text-white">Tornike</h1>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={hoverEffect}
            className="w-[220px] lg:w-[250px] h-[70px] lg:h-[80px] rounded-2xl bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col justify-center"
          >
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
            <p className="text-xs lg:text-base text-gray-400 dark:text-gray-500">Freelancer</p>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-3 lg:gap-4"
            variants={item}
          >
            {[
              { icon: <FaInstagram className="text-xl lg:text-2xl" />, href: 'https://www.instagram.com/ozbeta_25/' },
              { icon: <FaGithub className="text-xl lg:text-2xl" />, href: 'https://github.com/Tornike-max' },
              { icon: <FaFacebook className="text-xl lg:text-2xl" />, href: 'https://www.facebook.com/tornike.ozbetelashvili/' }
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ ...hoverEffect, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl lg:rounded-2xl shadow-md p-2 lg:p-3'
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ცენტრალური სურათი - რესპონსიული ზომები */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="order-first lg:order-none"
        >
          <img 
            className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[500px] object-cover rounded-2xl shadow-xl"
            src='/avatar/avatar.webp'
            alt="Tornike Ozbetelashvili"
          />
        </motion.div>

        {/* მარჯვენა კოლონა - უნარები */}
        <motion.div 
          className="hidden lg:flex flex-col gap-4 sm:gap-6 w-full max-w-[170px] lg:max-w-[200px]"
          variants={container}
        >
          {skills.map((skill, i) => {
            const icons = {
              'React': <FaReact className="text-xl lg:text-2xl text-blue-500" />,
              'Laravel': <FaLaravel className="text-xl lg:text-2xl text-red-600" />,
              'Tailwind CSS': <RiTailwindCssFill className="text-xl lg:text-2xl text-cyan-500" />,
              'MySQL': <SiMysql className="text-xl lg:text-2xl text-blue-700" />
            }
            
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={hoverEffect}
                className={`
                  flex items-center gap-2 lg:gap-3 
                  bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-3 
                  border border-gray-200 dark:border-gray-700
                  cursor-default
                  shadow-sm
                `}
              >
                {icons[skill.name as keyof typeof icons]}
                <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* მობილურის ვერსია - ჩანს მხოლოდ პატარა ეკრანებზე */}
        <motion.div 
          className="lg:hidden w-full flex flex-col items-center gap-4 mt-4"
          variants={container}
        >
          {/* პროფილის ინფო მობილურისთვის */}
          <motion.div
            variants={item}
            whileHover={hoverEffect}
            className="w-full max-w-[280px] h-[90px] rounded-2xl bg-white dark:bg-gray-800 shadow-md p-4 flex items-center gap-4"
          >
            <span className="text-3xl">👋</span>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Hello, I am</p>
              <h1 className="font-bold text-xl text-gray-800 dark:text-white">Tornike</h1>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* სოციალური ბმულები მობილურისთვის */}
          <motion.div 
            className="flex justify-center gap-3"
            variants={item}
          >
            {[
              { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/ozbeta_25/' },
              { icon: <FaGithub size={18} />, href: 'https://github.com/Tornike-max' },
              { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/tornike.ozbetelashvili/' }
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ ...hoverEffect, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-sm p-2'
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* უნარები მობილურისთვის */}
          <motion.div 
            className="grid grid-cols-2 gap-3 w-full max-w-[280px] mt-2"
            variants={container}
          >
            {skills.map((skill, i) => {
              const icons = {
                'React': <FaReact className="text-lg text-blue-500" />,
                'Laravel': <FaLaravel className="text-lg text-red-600" />,
                'Tailwind CSS': <RiTailwindCssFill className="text-lg text-cyan-500" />,
                'MySQL': <SiMysql className="text-lg text-blue-700" />
              }
              
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={hoverEffect}
                  className={`
                    flex items-center gap-2 
                    bg-white dark:bg-gray-800 rounded-xl p-2
                    border border-gray-200 dark:border-gray-700
                    cursor-default
                    shadow-xs
                    text-xs
                  `}
                >
                  {icons[skill.name as keyof typeof icons]}
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* ციტატა - რესპონსიული ზომები */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl lg:rounded-2xl shadow-md p-4 lg:p-6 text-center"
      >
        <h2 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Step by step, line by line. 👨‍💻</h2>
        <p className="text-xs lg:text-sm opacity-90">"Discipline is the bridge between goals and accomplishment."</p>
      </motion.div>
    </section>
  )
}

export default FirstSection