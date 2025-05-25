import "/src/components/Styles/Tags.css";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Express",
  "SQL Server",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Power BI",
  "Power Apps",
  "Power Automate",
  "AWS Lambda",
];


export default function Tags() {
  return (
    <div className="container">
      {skills.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
  );
}
