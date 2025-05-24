import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="headerInfo">
        <h1>Ben Warner</h1>
      </div>
      <div className="conatinUnderHead">
        <div className="underHead">
          <div className="infoBox">
            <p className="greet">Hello,</p>
            <p className="info">
              My name is Ben Warner, I am a 3rd year Computer Science student at
              Ontario Tech University. Currently working as a Co-Op student at
              Ontario Power Generation, I have had a strong passion for anything
              computers since elementary school. Strong in data analytics, Microsoft Power 
              services, and 
            </p>
          </div>
          <div className="sideBar">
            <img
              className="me"
              alt="ben_warner.png"
              src="/src/assets/ben_warne.png"
            ></img>
            <div className="links">
              <a href="https://www.linkedin.com/feed/">
                <img alt="linkedin.png" src="/src/assets/linkedin.png"></img>
              </a>
              <a href="https://github.com/benrwarner">
                <img alt="github.png" src="/src/assets/github.png"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
