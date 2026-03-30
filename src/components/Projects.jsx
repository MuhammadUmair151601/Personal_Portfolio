// 
import Card from "./Card";

const Projects = () => {
  const data = [
    {
      image: "/Screenshot 2026-02-25 000603.png",
      name: "Task Manager",
      paragraph: "A simple React task manager to manage daily tasks.",
      Demo_link: "https://todo-app-react-iota-wheat.vercel.app/",
      Code_link: "https://github.com/MuhammadUmair151601/Todo_App_react.git"
    },
    {
      image: "/Recipe.png",
      name: "Recipe Provider",
      paragraph: "Search for desired dish and get the recipe in detail",
      Demo_link: "https://react-recipe-app-git-main-mumairs-projects-75dd5089.vercel.app/",
      Code_link: "https://github.com/MuhammadUmair151601/react_recipe_App.git"
    },
    {
      image: "/Calculator.png",
      name: "React Calculator",
      paragraph: "A simple react daily use calculator",
      Demo_link: "https://react-calculator-tau-green.vercel.app/",
      Code_link: "https://github.com/MuhammadUmair151601/React_Calculator.git"
    },
    {
      image: "/FYP (1).png",
      name: "JobGenie",
      paragraph: "JobGenie an AI powered career assistant.",
      Demo_link: "http://job-genie-final.vercel.app/",
      Code_link: "https://github.com/MuhammadUmair151601/JobGenie_Final.git"
    },
    {
      image: "/BMI.png",
      name: "BMI calculatro",
      paragraph: "A simple react BMI calculator according to weight and height",
      Demo_link: "https://bmi-calculator-react-c3ng.vercel.app/",
      Code_link: "https://github.com/MuhammadUmair151601/BMI_calculator_react.git"
    }
  ];

  return (
    <div id="projects" className="min-h-screen bg-gray-900 text-gray-300 py-20">

 
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-400">PROJECTS</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        {data.map((elem, idx) => (
          <Card
            key={idx}
            image={elem.image}
            name={elem.name}
            paragraph={elem.paragraph}
            Demo_link={elem.Demo_link}
            Code_link={elem.Code_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;