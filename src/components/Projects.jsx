// 
import Card from "./Card";

const Projects = () => {
  const data = [
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
    {
      image: "/Task manager.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      demo: "Demo",
      code: "View Code",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-gray-900 text-gray-300 py-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-400">PROJECTS</h1>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-10 px-10">
        {data.map((elem, idx) => (
          <Card
            key={idx}
            image={elem.image}
            name={elem.name}
            paragraph={elem.paragraph}
            demo={elem.demo}
            code={elem.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;