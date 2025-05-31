import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMap, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // აქ დაამატეთ თქვენი ფორმის სუბმიტის ლოგიკა
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

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
    y: -3,
    transition: { duration: 0.2 }
  };

  return (
    <div id="contact" className="w-full m-auto px-4 py-12">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact<span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"> Me</span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="space-y-6"
          variants={item}
        >
          <motion.div 
            className="flex items-start"
            whileHover={hoverEffect}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md">
              <FaEnvelope className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
              <a href="ozbetelashvilitornike2@gmail.com" className="text-indigo-500 dark:text-indigo-400 hover:underline">
                ozbetelashvilitornike2@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start"
            whileHover={hoverEffect}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md">
              <FaPhone className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ტელეფონი</h3>
              <a href="tel:+995123456789" className="text-indigo-500 dark:text-indigo-400 hover:underline">
                +995 577 38 41 06
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start"
            whileHover={hoverEffect}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md">
              <FaMap className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ადგილმდებარეობა</h3>
              <p className="text-gray-600 dark:text-gray-300">თბილისი, საქართველო</p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">სოციალური ქსელები</h3>
            <div className="flex space-x-4">
              {[
                {label:'linkedin',path:'https://github.com/Tornike-max'},
                {label:'github',path:"https://github.com/Tornike-max"}, 
                {label:'instagram',path:"https://github.com/Tornike-max"}
            ].map((social) => (
                <motion.a
                  key={social.path}
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {`linkedin` === social.label ? <FaLinkedin /> : social.label === 'github' ? <FaGithub /> : social.label === 'instagram' ? <FaInstagram /> : ""}   
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* კონტაქტის ფორმა */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          variants={item}
        >
          {submitSuccess ? (
            <motion.div
              className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <p>თქვენი შეტყობინება წარმატებით გაიგზავნა! მალე დაგიკავშირდებით.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  სახელი
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ელ. ფოსტა
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  შეტყობინება
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    იგზავნება...
                  </span>
                ) : (
                  "გაგზავნა"
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;