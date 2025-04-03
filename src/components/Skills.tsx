import SectionTitle from "./SectionTitle";
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MaterialUI",
  "TailwindCSS",
  "MongoDB",
  "MySQL",
  "Git",
];
const Skills = () => {
  return (
    <div id="skills" className="flex flex-col gap-6 w-full max-w-[400px]">
      <SectionTitle title="SKILLS" />
      <div className="flex gap-3 flex-wrap justify-center">
        {skills.map((skill) => (
          <p className="text-[15px] p-3 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
