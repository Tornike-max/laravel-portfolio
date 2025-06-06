import Modal from "@/components/modal";
import { TestimonialPaginatedResponse } from "@/types";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67]
    } 
  }
};

const hoverEffect = {
  y: -8,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

const Testimonials = ({ testimonials }: { testimonials: TestimonialPaginatedResponse }) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="w-full m-auto px-4 py-12">
      <motion.h2 
        className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Testimonials
        </span>
      </motion.h2>

      <motion.div 
        className="flex justify-center mt-4 mb-10 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="px-6 py-2 cursor-pointer rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md transition"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>setOpen(open => !open)}
        >
          დაამატე რეკომენდაცია
        </motion.button>
        {open && (
          <Modal setOpen={setOpen} open={open}/>
        )}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.data.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col"
            variants={item}
            whileHover={hoverEffect}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-400">{testimonial.position}</p>
              </div>
            </div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonial.testimonial}"
            </motion.p>

            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                ({testimonial.rating}.0/5.0)
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* პაგინაცია */}
      <motion.div 
        className="flex justify-center mt-12 flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {testimonials.links.map((link, index) => (
          <Link
            key={index}
            href={link.url ?? '#'}
            preserveScroll={true}
            className={`px-4 py-2 rounded-full text-sm transition ${
              link.active 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold' 
                : 'bg-gray-100 hover:bg-gradient-to-r from-indigo-500 to-purple-500 text-white dark:bg-gray-700 dark:text-white dark:hover:bg-indigo-700'
            } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </motion.div>

      {/* ყველა რეკომენდაციის ღილაკი */}
      <motion.div 
        className="flex justify-center mt-12 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="px-6 py-2 cursor-pointer rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          ყველა რეკომენდაცია
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Testimonials;
