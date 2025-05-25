import React from "react";
import { data, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./music.json";

function Home() {
  const [track, setTrack] = useState<any>(null); // Holds Spotify track

  useEffect(() => {
    fetch("http://localhost:5000/api/spotify")
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.track);
        console.log("Now Playing:", data.track.name);
      });
  }, []);

  return (
    <>
      <div className="headerInfo">
        <h1>Ben Warner</h1>
      </div>
      <div className="music">
        {track ? (
          <div className="formatMusic">
            <Lottie animationData={animationData} loop={true} />
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
      <div className="conatinUnderHead">
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
          </div>

          <div className="sideBar">
            <img
              className="me"
              alt="ben_warner.png"
              src="/src/assets/ben_warne.png"
            />
            <div className="links">
              <a href="https://www.linkedin.com/feed/">
                <img alt="linkedin.png" src="/src/assets/linkedin.png" />
              </a>
              <a href="https://github.com/benrwarner">
                <img alt="github.png" src="/src/assets/github.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
