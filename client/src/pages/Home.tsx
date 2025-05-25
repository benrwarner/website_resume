import "./Styles/Home.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DisplaySpotify from "../components/DisplaySpotify";
import Sidebar from "../components/Sidebar";
import InfoBox from "../components/InfoBox";

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
        <h1 data-aos="slide-down">Ben Warner</h1>
      </div>
      <div data-aos="slide-down" className="overview">
        <h2 style={{ color: "white" }}>Overview</h2>
      </div>
      <div className="conatinUnderHead" data-aos="fade-up">
        <div className="underHead">
          <div></div>
          <InfoBox></InfoBox>
          <Sidebar></Sidebar>
          
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
