import { Navbar, Hero, Skills, Experience, Footer } from './components';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      {/* <PROJECTS />*/}
      <Footer />
    </div>
  );
}

export default App;
