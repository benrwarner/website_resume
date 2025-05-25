import "./Home.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DisplaySpotify from "../components/DisplaySpotify";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="mainContainer">
      <div className="headerInfo">
        <h1 data-aos="fade-up">Ben Warner</h1>
      </div>
      <div data-aos="fade-up" className="overview">
        <h2 style={{ color: "white" }}>Overview</h2>
      </div>
      <div className="conatinUnderHead" data-aos="fade-up">
        <div className="underHead">
          <div className="infoBox">
            <p className="greet">Hello,</p>
            <p className="info">
              My name is Ben Warner, I am a 3rd year Computer Science student at
              Ontario Tech University. Currently working as a Co-Op student at
              Ontario Power Generation, I have had a strong passion for anything
              computers since elementary school. Strong in data analytics,
              Microsoft Power services, and
            </p>
            {/* <div className="githubChart">
              <img
                src="https://ghchart.rshah.org/007acc/benrwarner"
                alt="GitHub chart"
              />
            </div> */}
          </div>

          <div className="sideBar" data-aos="fade-up">
            <img
              className="me"
              alt="ben_warner.png"
              src="/src/assets/ben_warne.png"
            />
            <div className="links">
              <a
                href="https://www.linkedin.com/in/ben-warner-565597257/"
                target="_blank"
              >
                <img alt="linkedin.png" src="/src/assets/linkedin.png" />
              </a>
              <a href="https://github.com/benrwarner" target="_blank">
                <img alt="github.png" src="/src/assets/github.png" />
              </a>
            </div>
            <div>
              <ul className="infoList">
                <li>
                  <div style={{ display: "flex", marginBottom: "0px" }}>
                    <p style={{ marginBottom: "0px" }}>
                      <b>Name: </b>Ben Warner
                    </p>
                    <p className="pronoun">he/him</p>
                  </div>
                </li>

                <li>
                  <b>Age:</b> 20
                </li>
                <li>
                  <b>Location: </b>Toronto, ON
                </li>
                <li>
                  <b>School:</b> Ontario Tech U
                </li>
                <li>
                  <b>Status:</b> Co-Op at OPG
                </li>
                <li>
                  <b>Contact:</b>{" "}
                  <a href="mailto:benrwarner1@gmail.com">
                    benrwarner1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="qListen">
          <h3>What I'm Listening To</h3>
        </div>
        <div className="music">
          <DisplaySpotify></DisplaySpotify>
        </div>
      </div>
      <div data-aos="fade-up">
        <a
          className="downloadRes"
          href="http://localhost:5000/BenjaminWarnerResume2025"
          target="_blank"
        >
          <p>View Resume</p>
        </a>
      </div>

      <div className="quickResume" data-aos="fade-up">
        <p>I have experience</p>
      </div>
    </div>
  );
}

export default Home;
