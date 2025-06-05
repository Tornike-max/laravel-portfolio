import { Skill } from "@/types";
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

const Skills = ({skills}:{skills:Skill[]}) => {

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills = activeFilter.toLowerCase() === "All".toLowerCase() 
    ? skills 
    : skills.filter(skill => skill.type?.type.split(" ")[0].toLowerCase() === activeFilter.split(" ")[0].toLowerCase());


  console.log(skills.map(skill => skill.type?.type.split(" ")[0]))

  return (
    <div className=" w-full m-auto px-4 py-12">
      {/* ფილტრის ღილაკები */}
      <motion.div 
        className="max-w-[700px] w-full m-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 py-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {["All", "Frontend", "Backend", "Databases", "Full Stack"].map((filter, index) => (
          <motion.button
            key={index}
            className={`text-center text-sm sm:text-base rounded-2xl shadow-md p-2 sm:p-3 hover:shadow-lg cursor-pointer transition-all ${
              activeFilter.toLowerCase() === filter .toLowerCase()
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
            variants={item}
            whileHover={hoverEffect}
            whileTap={tapEffect}
            onClick={() => setActiveFilter(filter.toLowerCase())}
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
                src={`./skillIcons/${skill.icon}.webp`} 
                alt={skill.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
              <motion.span 
                className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r text-white`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {skill.type?.type}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;