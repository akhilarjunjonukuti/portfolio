import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "EcoRide",
    description:
      "An eco-friendly ride-booking platform, streamlining the way users book their rides",
    stack: ["React", "Node.js"],
    links: {
      github: "Link 1",
      preview: "https://electric-keke-frontend.vercel.app",
    },
  },
  {
    name: "FitClub",
    description:
      "A platform that highlights gym facilities, professional trainers, and various workout sessions.",
    stack: ["React", "Node.js"],
    links: {
      github: "Link 1",
      preview: "https://fit-club-eight.vercel.app/",
    },
  },
  {
    name: "Stacist",
    description:
      "All-in-one platform to automate tasks, boost collaboration, and drive productivity",
    stack: ["React", "Node.js"],
    links: {
      github: "Link 1",
      preview: "https://stacist.vercel.app/",
    },
  },
];
const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-6">
      <SectionTitle title="PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
