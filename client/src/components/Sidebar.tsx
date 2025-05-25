import React from "react";

export default function Sidebar(){

    return (
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
              <a href="mailto:benrwarner1@gmail.com">benrwarner1@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    );
}