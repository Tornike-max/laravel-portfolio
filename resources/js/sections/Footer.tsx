import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaHeart, FaLinkedin, FaMap, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="w-full py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full m-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* ლოგო და აღწერა */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Tornike Ozbetelashvili
            </h2>
            <p className="text-gray-400">
              ვებ დეველოპმენტი და დიზაინი. პროფესიონალური გადაწყვეტილებები თქვენი ბიზნესისთვის.
            </p>
          </motion.div>

          {/* სწრაფი ბმულები */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">სწრაფი ბმულები</h3>
            <ul className="space-y-2">
              {['მთავარი', 'პროექტები', 'უნარები', 'კონტაქტი'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* კონტაქტის ინფო */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">კონტაქტი</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="h-5 w-5 text-indigo-400 mt-1 mr-2" />
                <span className="text-gray-400">your.email@example.com</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="h-5 w-5 text-indigo-400 mt-1 mr-2" />
                <span className="text-gray-400">+995 123 45 67 89</span>
              </li>
              <li className="flex items-start">
                <FaMap className="h-5 w-5 text-indigo-400 mt-1 mr-2" />
                <span className="text-gray-400">თბილისი, საქართველო</span>
              </li>
            </ul>
          </motion.div>

          {/* სოციალური ქსელები */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">დამიკავშირდით</h3>
            <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'facebook'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-full transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social === 'github' && <FaGithub />}
                    {social === 'linkedin' && <FaLinkedin />}
                    {social === "twitter" && <FaTwitter />}
                    {social === 'facebook' && <FaFacebook />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* საავტორო უფლებები */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
            © {currentYear} ყველა უფლება დაცულია. გაკეთებულია 
            <FaHeart className="h-4 w-4 text-pink-500 mx-1" /> 
            საქართველოში
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
              პირობები
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
              კონფიდენციალობა
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;