import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

const tapEffect = {
  scale: 0.98
};

const FilterProjects = () => {
  return (
    <div className="max-w-[1100px] w-full m-auto px-4 py-12">
            <motion.div 
                className="max-w-[700px] w-full m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {["Frontend Apps", "Backend Apps", "Full Stack Apps", "All"].map((filter, index) => (
                <motion.button
                    key={index}
                    className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md p-2 hover:shadow-lg cursor-pointer"
                    variants={item}
                    whileHover={hoverEffect}
                    whileTap={tapEffect}
                >
                    {filter}
                </motion.button>
                ))}
            </motion.div>

            {/* პროექტების ბოქსები */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* პროექტი 1 */}
                <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                variants={item}
                whileHover={{
                    y: -5,
                    transition: { duration: 0.3 }
                }}
                whileTap={tapEffect}
                >
                <motion.div 
                    className="relative h-60 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                    src="/types/databases.webp" 
                    alt="Modern UI/UX Portfolio Website" 
                    className="w-full h-full object-cover"
                    />
                    <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    >
                    <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">UI/UX</span>
                    </motion.div>
                </motion.div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Modern UI/UX Portfolio</h3>
                    <p className="text-gray-600 dark:text-gray-300">A sleek portfolio website with modern animations and interactions</p>
                </div>
                </motion.div>

                {/* პროექტი 2 */}
                <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                variants={item}
                whileHover={{
                    y: -5,
                    transition: { duration: 0.3 }
                }}
                whileTap={tapEffect}
                >
                <motion.div 
                    className="relative h-60 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                    src="/types/frontend.webp" 
                    alt="Gericht Restaurant Project" 
                    className="w-full h-full object-cover"
                    />
                    <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    >
                    <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">UI/UX</span>
                    </motion.div>
                </motion.div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gericht Restaurant</h3>
                    <p className="text-gray-600 dark:text-gray-300">Modern restaurant website with reservation system</p>
                </div>
                </motion.div>

                {/* პროექტი 3 */}
                <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                variants={item}
                whileHover={{
                    y: -5,
                    transition: { duration: 0.3 }
                }}
                whileTap={tapEffect}
                >
                <motion.div 
                    className="relative h-60 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                    src="/types/backend.webp" 
                    alt="Tinder Clone App" 
                    className="w-full h-full object-cover"
                    />
                    <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    >
                    <span className="bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">Mobile App</span>
                    </motion.div>
                </motion.div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tinder Clone</h3>
                    <p className="text-gray-600 dark:text-gray-300">Dating app built with React Native and Firebase</p>
                </div>
                </motion.div>
            </motion.div>
        </div>
  )
}

export default FilterProjects