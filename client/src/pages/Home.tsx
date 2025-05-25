import React from "react";
import { data, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./music.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { color } from "framer-motion";

function Home() {
  const [track, setTrack] = useState<any>(null); // Holds Spotify track
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/spotify")
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.track);
        console.log("Now Playing:", data.track.name);
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
                    <p style={{ marginBottom: "0px" }}>Name: Ben Warner</p>
                    <p className="pronoun">he/him</p>
                  </div>
                </li>

                <li>Age: 20</li>
                <li>Location: Toronto, ON</li>
                <li>School: Ontario Tech U</li>
                <li>Currently At: OPG</li>
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
          <div>
            {track ? (
              <div className="formatMusic">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="sound"
                />
                <img
                  src={track.album.images[0].url}
                  alt="Album Cover"
                  className="albumCover"
                />
                <div className="musicInfo">
                  <p>
                    <strong>{track.name}</strong>
                  </p>
                  <p>by {track.artists.map((a: any) => a.name).join(", ")}</p>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
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
