export function ProjectsSection() {
  const projects = [
    { title: "Bakery Website", stack: "HTML, CSS, JS", link: "#" },
    { title: "Task Management App", stack: "React + TS", link: "#" },
    { title: "UKS School Website", stack: "Laravel", link: "#" },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-emerald-700 dark:text-emerald-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border border-emerald-100 dark:border-emerald-700 shadow-md transition hover:scale-[1.02] bg-white dark:bg-gray-800 ${
              i === 0 ? "border-2 border-emerald-400 dark:border-emerald-500 shadow-lg" : ""
            }`}
          >
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.stack}</p>
            <a
              href={project.link}
              className="text-emerald-600 dark:text-emerald-300 underline text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
