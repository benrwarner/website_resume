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
            <li style={{ display: "flex", margin:'0px'}}>
                <img src="/src/assets/person.png" />
                <p style={{ margin: "0"}}>
                  Ben Warner
                <span className="pronoun" style={{alignSelf: "flex-end"}}>he/him</span>
                </p>
            </li>

            <li>
              <img src="/src/assets/calendar.png" /> 20
            </li>
            <li>
              <img src="/src/assets/location.png" />
              Toronto, ON
            </li>
            <li>
              <img src="/src/assets/school.png" /> Ontario Tech U
            </li>
            <li>
              <img src="/src/assets/work.png" /> Co-Op at OPG
            </li>
            <li>
              <img src="/src/assets/mail.png" />{" "}
              <a href="mailto:benrwarner1@gmail.com">benrwarner1@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    );
}