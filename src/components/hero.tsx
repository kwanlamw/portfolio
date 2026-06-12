// src/components/hero.tsx
const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-4">
          Full Stack Developer
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight">Kwan Lam WONG</h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-8">
          5+ years of experience delivering scalable web applications across various sectors. Based
          in <span className="text-white">Yorkshire, UK</span>.
        </p>
        <div className="flex gap-4">
          <a
            href="#experience"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 rounded-lg transition-colors"
          >
            View experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
