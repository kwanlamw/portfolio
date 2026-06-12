import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-gray-600 text-sm">
          Kwan Lam WONG · Full Right to Work · United Kingdom 🇬🇧 · Hong Kong 🇭🇰
        </p>
        <div className="flex gap-3">
          <a
            href="mailto:kwanlamw@gmail.com"
            className="p-3 text-red-500 hover:bg-red-500 hover:text-white border border-transparent hover:border-red-500 rounded-lg transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kwanlamw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-blue-700 hover:bg-blue-700 hover:text-white border border-transparent hover:border-blue-700 rounded-lg transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
