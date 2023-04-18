import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://github.com/malyaj1425" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/malyaj-singh-0917b522a/" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/zendasian/" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
