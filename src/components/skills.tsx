const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MS SQL', 'TypeORM', 'Drizzle ORM'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Terraform', 'CI/CD', 'Git'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
