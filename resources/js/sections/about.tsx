import React from 'react'
import { motion } from 'framer-motion'

type Type = {
  type: string
  description: string
}

const About = ({ types }: { types: Type[] }) => {
 
  return (
    <section className="flex h-full flex-col gap-4 rounded-xl p-4">
      <div className="flex items-center justify-center h-full">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4 flex flex-col gap-3">
            <span>
              I Know That{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Good Apps
              </span>
            </span>
            <span>
              Means{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Good Business
              </span>
            </span>
          </h1>
          <p className="text-gray-700 mb-6">
            This application is a simple demonstration of a React-based web app that showcases user profiles,
            skills, and other features.
          </p>
          <p className="text-gray-600">
            It is built using modern web technologies and aims to provide a clean and user-friendly interface.
          </p>
        </div>
      </div>

      <div className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {types.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={
                item.type === 'Backend Development' 
                  ? '/types/backend.webp' 
                : item.type === 'Frontend Development' 
                  ? '/types/frontend.webp' 
                : item.type === "Devops" 
                  ? '/types/devops.webp' 
                : item.type === 'Mobile Development' 
                  ? '/types/mobile.webp' 
                : ''}
              alt={item.type}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.type}</h3>
            <p className="text-sm text-gray-100">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
