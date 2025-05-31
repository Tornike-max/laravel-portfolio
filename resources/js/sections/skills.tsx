import { motion } from "framer-motion";
import { useState } from "react";

// ანიმაციის ვარიანტები
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

const tapEffect = {
  scale: 0.98
};

const Skills = () => {
  const skills = [
    { name: "React", category: "Frontend", icon: "react-icon.webp", color: "from-cyan-500 to-blue-500" },
    { name: "Laravel", category: "Backend", icon: "laravel-icon.webp", color: "from-red-500 to-pink-500" },
    { name: "Node.js", category: "Backend", icon: "nodejs-icon.webp", color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", category: "Frontend", icon: "typescript-icon.webp", color: "from-blue-500 to-indigo-500" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwind-icon.webp", color: "from-teal-500 to-cyan-500" },
    { name: "MongoDB", category: "Database", icon: "mongodb-icon.webp", color: "from-green-600 to-lime-500" },
    { name: "Framer Motion", category: "Animation", icon: "framer-icon.webp", color: "from-purple-500 to-pink-500" },
    { name: "Docker", category: "DevOps", icon: "docker-icon.webp", color: "from-blue-400 to-cyan-500" },
    { name: "GraphQL", category: "Backend", icon: "graphql-icon.webp", color: "from-pink-500 to-purple-600" }
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <div className=" w-full m-auto px-4 py-12">
      {/* ფილტრის ღილაკები */}
      <motion.div 
        className="max-w-[700px] w-full m-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 py-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {["All", "Frontend", "Backend", "Database", "DevOps"].map((filter, index) => (
          <motion.button
            key={index}
            className={`text-center text-sm sm:text-base rounded-2xl shadow-md p-2 sm:p-3 hover:shadow-lg cursor-pointer transition-all ${
              activeFilter === filter 
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
            variants={item}
            whileHover={hoverEffect}
            whileTap={tapEffect}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* უნარების ბოქსები */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group flex flex-col items-center p-6"
            variants={item}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
            whileTap={tapEffect}
          >
            <motion.div 
              className="relative w-16 h-16 mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={`/skills/${skill.icon}`} 
                alt={skill.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
              <motion.span 
                className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {skill.category}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;