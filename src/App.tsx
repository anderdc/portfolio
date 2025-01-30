import {
  Code2,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Book,
  Pen,
  Weight,
  Music2,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Header */}
      <header className="p-6 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl">Alexander</span>
          </div>
          <nav className="flex gap-6">
            <a
              href="#skills"
              className="hover:text-green-300 transition-colors"
            >
              {">"} skills
            </a>
            <a
              href="#hobbies"
              className="hover:text-green-300 transition-colors"
            >
              {">"} hobbies
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-6">
              <div className="inline-block">
                <Code2 className="w-12 h-12 mb-4" />
              </div>
              <h1 className="text-4xl mb-4">
                Hello, I'm{" "}
                <span className="text-green-300">
                  Alexander Daniel Castaneda
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Advanced Technologist, Software Engineer, Fullstack Developer,
                Data Scientist, Data Engineer.
                <br /> Passionate about learning and implementing new skills.
              </p>
              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/anderdc"
                  className="hover:text-green-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/castaneda-alexander/"
                  className="hover:text-green-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:alexanderdcastaneda@gmail.com"
                  className="hover:text-green-300 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-green-500/10 rounded-lg -rotate-6"></div>
              <div className="absolute inset-0 bg-gray-800 rounded-lg rotate-3"></div>
              <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-green-500/20">
                <img
                  src="https://adcbucket01.s3.us-east-2.amazonaws.com/grad+pic.jpg"
                  alt="Developer Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl mb-8">$ ls ~/skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Nest.js",
                  "Python",
                  "PostgreSQL",
                  "MySQL",
                  "SQL",
                  "RabbitMQ",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps Card */}
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl mb-4">Cloud Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "Supabase"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-xl mb-4">Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Pytorch",
                  "LLM's",
                  "Deep neural networks",
                  "Classical ML models",
                  "Onyx",
                  "Airflow",
                  "Weights & Biases (WandB)",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-900/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="space-y-6">
          <h2 className="text-2xl mb-8">$ cat ~/hobbies.txt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20 flex items-start gap-4">
              <Book className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Reading</h3>
                <p className="text-gray-400">
                  Psychology, Classical Literature, History, Self-Help, Science
                  Fiction, Philosophy to name a few favorite genres.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20 flex items-start gap-4">
              <Pen className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Writing</h3>
                <p className="text-gray-400">
                  Journaling, Short stories, Poetry (mostly haikus).
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20 flex items-start gap-4">
              <Weight className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Fitness</h3>
                <p className="text-gray-400">
                  Weightlifting, Running, Boxing, Calisthenics.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-green-500/20 flex items-start gap-4">
              <Music2 className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Other</h3>
                <p className="text-gray-400">
                  Tea fanatic, Rocketry, Electronics tinkering, Meditation,
                  Playing guitar
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/20 mt-20 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
