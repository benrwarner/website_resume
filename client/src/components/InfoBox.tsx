import Tags from "./Tags";

export default function InfoBox() {
  return (
    <div className="infoBox">
      <p className="greet">Hello,</p>
      <p className="info">
        My name is Ben Warner, I am a 3rd year Computer Science student
        attending Ontario Tech University. Currently working as a Computer
        Science Co-Op student at Ontario Power Generation, I have a strong
        understanding in data analytics, Microsoft Power services, and data
        solutions.
      </p>
      <p className="qSkills">Quick Skills:</p>
      <Tags></Tags>
    </div>
  );
}
