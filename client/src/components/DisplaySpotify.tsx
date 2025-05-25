import Lottie from "lottie-react";
import animationData from "../pages/music.json";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function DisplaySpotify() {
  const [track, setTrack] = useState<any>(null); 

  useEffect(() => {
    fetch("http://localhost:5000/api/spotify")
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.track);
        console.log("Now Playing:", data.track.name);
      });
  }, []);

  return (
    <div>
      {track ? (
        <div className="formatMusic">
          <Lottie animationData={animationData} loop={true} className="sound" />
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
  );
}
