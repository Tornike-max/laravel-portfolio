import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

// ანიმაციის ვარიანტები
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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "დავით ქართველიშვილი",
      role: "CEO, TechSolutions GE",
      content: "ამ დეველოპერის მუშაობამ ჩვენი ვებ აპლიკაციის პროდუქტიულობა 40%-ით გაზარდა. განსაკუთრებით გამორჩეული იყო მათი ყურადღება დეტალებისადმი და პროფესიონალიზმი.",
      rating: 5,
      avatar: "/avatars/davit.webp"
    },
    {
      id: 2,
      name: "ანა მამულაშვილი",
      role: "პროდუქტის მენეჯერი, StartupGeo",
      content: "რეაქტისა და ლარაველის კომბინაცია ჩვენს პროექტზე ნამდვილად შთამბეჭდავი იყო. კოდის ხარისხი და დოკუმენტაცია გამორჩეული.",
      rating: 4,
      avatar: "/avatars/ana.webp"
    },
    {
      id: 3,
      name: "გიორგი ბერიძე",
      role: "CTO, DigitalAgency",
      content: "იშვიათად ვხვდები ისეთ ფრილანსერებს, ვინც ასეთი პასუხისმგებლობით უდგება პროექტებს. დროის დაცვა და კომუნიკაცია შესანიშნავი იყო.",
      rating: 5,
      avatar: "/avatars/giorgi.webp"
    }
  ];

  return (
    <div className="w-full m-auto px-4 py-12">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((testimonial) => (
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
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-indigo-500 dark:text-indigo-400">{testimonial.role}</p>
              </div>
            </div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              "{testimonial.content}"
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

      {/* გადართვის ღილაკები (მორგებული პროექტების გალერეის სტილზე) */}
      <motion.div 
        className="flex justify-center mt-12 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
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