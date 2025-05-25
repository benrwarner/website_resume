import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let accessToken = "";
let lastRefreshedAt = 0;

const refreshAccessToken = async () => {
  try {
    const response: any = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;
    lastRefreshedAt = Date.now();
    console.log("✔️ Refreshed access token.");
  } catch (err: any) {
    console.error(
      "❌ Failed to refresh token:",
      err.response?.data || err.message
    );
    throw new Error("Token refresh failed");
  }
};

export const getRecentTrack = async () => {
  try {
    if (!accessToken || Date.now() - lastRefreshedAt > 30000) {
      console.log("🔄 Access token expired or missing. Refreshing...");
      await refreshAccessToken();
    }

    const response: any = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.items[0];
  } catch (err: any) {
    console.error(
      "❌ Failed to fetch track:",
      err.response?.data || err.message
    );
    throw new Error("Failed to fetch track");
  }
};
