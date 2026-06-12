// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6 text-sm text-gray-400 ml-auto">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
