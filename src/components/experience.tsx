import { chocoUp, bupa, ringus, greenTomato, teamC } from '../experiences';

const experiences = [chocoUp, bupa, ringus, greenTomato, teamC];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((job) => (
            <div key={job.company} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-orange-400 text-sm mt-0.5">
                    {job.company} <span className="text-gray-600">·</span> {job.type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">{job.period}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
