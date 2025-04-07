import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 mb-4"
          >
            <a
              href="https://github.com/kaifali1122"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-100 flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 8px rgba(145, 94, 255, 0.2)',
              }}
            >
              <img
                src={github}
                alt="github"
                className="w-3/5 h-3/5 object-contain hover:brightness-150"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kaif-ali-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-100 flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 8px rgba(145, 94, 255, 0.2)',
              }}
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-3/5 h-3/5 object-contain hover:brightness-150"
              />
            </a>
            <a
              href="https://www.instagram.com/kaif_ali_1.12/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-100 flex justify-center items-center cursor-pointer hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 8px rgba(145, 94, 255, 0.2)',
              }}
            >
              <svg
                className="w-3/5 h-3/5 text-white hover:brightness-150"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary text-[14px]"
          >
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 