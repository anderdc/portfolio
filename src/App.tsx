import React, { useState, useEffect } from "react";
import {
  Code2,
  Book,
  Github,
  Linkedin,
  Mail,
  Database,
  Cloud,
  Globe,
  Code,
  Pen,
  Weight,
  Music,
} from "lucide-react";

// Separate data into its own constant
const HOBBIES = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Reading",
    description:
      "Psychology, Classical Literature, History, Self-Help, Science Fiction, Philosophy to name a few favorite genres.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Pen className="w-8 h-8" />,
    title: "Writing",
    description: "Journaling, Short stories, Poetry (mostly haikus).",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Weight className="w-8 h-8" />,
    title: "Fitness",
    description: "Weightlifting, Running, Boxing, Calisthenics.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Other",
    description:
      "Tea fanatic, Rocketry, Electronics tinkering, Meditation, Playing guitar, ",
    color: "from-orange-500 to-amber-500",
  },
];

const SKILLS = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend",
    description: "Modern web technologies.",
    technologies: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend",
    description: "Services & database architecture.",
    technologies: [
      "Node.js",
      "Nest.js",
      "Python",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "RabbitMQ",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud",
    description: "Cloud infrastructure.",
    technologies: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Data Science",
    description: "CI/CD, deployment automation.",
    technologies: [
      "Pytorch",
      "LLM's",
      "Deep neural networks",
      "Classical ML models",
      "Onyx",
      "Airflow",
      "Weights & Biases (WandB)",
    ],
  },
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Section with Interactive Grid */}
      <section className="min-h-[90vh] relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Dynamic grid background */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 border border-purple-500/20"
                style={{
                  left: `${(i % 5) * 25}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  transform: `rotate(${mousePosition.x * 5}deg) scale(${
                    1 + Math.abs(mousePosition.y) * 0.1
                  })`,
                  transition: "transform 0.3s ease-out",
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Alexander Daniel Castaneda
                </div>
                <div className="flex gap-8">
                  <a
                    href="#work"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Work
                  </a>
                  <a
                    href="#about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 pt-20">
            <div className="min-h-[90vh] flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left Column */}
                <div className="space-y-8">
                  <h1 className="text-6xl font-bold leading-tight hero-text">
                    Crafting
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      Digital Magic
                    </span>
                    One Line at a Time
                  </h1>
                  <p className="text-gray-400 text-lg">
                    Advanced Technologist specializing in creating immersive
                    digital experiences that blend creativity with cutting-edge
                    technology.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#work"
                      className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors flex items-center gap-2"
                    >
                      Explore Work
                      <Code2 className="w-4 h-4" />
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-500/10 transition-colors"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative flex items-center justify-center">
                  <div className="w-100 h-120 relative overflow-hidden rounded-2xl">
                    <img
                      src="https://adcbucket01.s3.us-east-2.amazonaws.com/grad+pic.jpg"
                      alt="Abstract purple geometric pattern"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Interactive Hobbies */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Beyond the
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ml-3">
              Code
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOBBIES.map((hobby) => (
              <div
                key={hobby.title}
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${hobby.color} opacity-0 absolute inset-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="p-6 rounded-2xl bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800/50 transition-all relative border border-gray-700/50">
                  <div className="mb-4">{hobby.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-gray-400 transform transition-all duration-300">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Technical
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ml-3">
              Arsenal
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill) => (
              <div
                key={skill.title}
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-6 rounded-2xl bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800/50 transition-all relative border border-gray-700/50">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-700/50 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Static Circuit Effect */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="bg-gray-800/50 backdrop-blur-xl p-12 rounded-3xl border border-purple-500/20">
            <h2 className="text-4xl font-bold mb-8">Let's Create Together</h2>
            <p className="text-gray-400 mb-12">
              Whether you want to discuss a project, share ideas, or just chat
              about our shared interests, I'm always excited to connect with
              fellow creators and enthusiasts.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/anderdc"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-500 transition-all group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/castaneda-alexander/"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-500 transition-all group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:alexanderdcastaneda@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20there!"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-purple-500 transition-all group"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © 2024 Alexander Castaneda. All rights reserved.
            </p>
            <div className="text-gray-400">
              Made with passion and creativity
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
