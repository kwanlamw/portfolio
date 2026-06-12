const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold">Patient Appointment Tracker</h3>
                <p className="text-gray-500 text-xs mt-1">Healthcare Demo</p>
              </div>
              <span className="text-xs px-2 py-1 bg-orange-900/50 text-orange-400 rounded-md border border-orange-800">
                Live
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              A full-stack demo simulating a healthcare appointment management system. Built with
              React, TypeScript, and Node.js — inspired by real-world experience integrating private
              healthcare systems with government health portals.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Node.js', 'Zod', 'Tailwind CSS'].map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/kwanlamw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-orange-400 hover:text-orange-300 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
